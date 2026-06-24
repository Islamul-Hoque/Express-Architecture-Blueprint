import bcrypt from "bcryptjs";
import config from "../../config";
import { pool } from "./../../db/index";
import jwt, { type JwtPayload } from "jsonwebtoken";

// Login user into DB
const loginUserIntoDB = async (payload: {
    email: string;
    password: string;
}) => {
    const { email, password } = payload;

    // 1. Check if user exists in database
    const userData = await pool.query(`
        SELECT * FROM users WHERE email=$1
    `, [email],
    );

    // Handle case: when no user is found for the provided email
    if (userData.rows.length === 0) {
        throw new Error("Invalid email or password.");
    }

    // 2. Compare provided password with hashed password
    const user = userData.rows[0];
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
        throw new Error("Invalid email or password.");
    }

    // 3. Prepare JWT payload with user info
    const jwtPayload = {
        id: user.id,
        name: user.name,
        role: user.role,
        is_active: user.is_active,
        email: user.email,
    };

    // 4. Generate access token (short‑lived)
    const accessToken = jwt.sign(jwtPayload, config.secret as string, {
        expiresIn: "1d",
    });

    // 5. Generate refresh token (longer‑lived)
    const refreshToken = jwt.sign(jwtPayload, config.refresh_secret as string, {
        // expiresIn: "90d",
        expiresIn: config.access_token_expires_in as string,
    });

    // 6. Return both tokens
    return { accessToken, refreshToken };
};

// Generate new access token using refresh token
const generateFreshToken = async (token: string) => {

    // 1. Check if refresh token exists
    if (!token) {
        throw new Error("Unauthorized. Refresh token is missing.");
    }

    // 2. Verify and decode refresh token
    const decoded = jwt.verify(
        token as string,
        config.refresh_secret as string,
    ) as JwtPayload;

    // 3. Find user in database using decoded email
    const userData = await pool.query( `
        SELECT * FROM users 
            WHERE email=$1   
        `,
        [decoded.email],
    );

    const user = userData.rows[0];

    if (userData.rows.length === 0) {
        throw new Error("User not found.");
    }

    // 4. Check if user account is active
    if (!user?.is_active) {
        throw new Error("Access denied. User account is inactive.");
    }

    // 5. Generate JWT payload for new access token
    const jwtPayload = {
        id: user.id,
        name: user.name,
        role: user.role,
        is_active: user.is_active,
        email: user.email,
    };

    // 6. Generate new access token
    const accessToken = jwt.sign(jwtPayload, config.secret as string, {
        expiresIn: "1d",
    });

    // 7. Return only new access token
    return { accessToken };
};

export const authService = {
    loginUserIntoDB,
    generateFreshToken
};