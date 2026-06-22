import bcrypt from "bcryptjs";
import config from "../../config";
import { pool } from "./../../db/index";
import jwt from "jsonwebtoken";

const loginUserIntoDB = async (payload: {
    email: string;
    password: string;
}) => {
    const { email, password } = payload;

    // 1. Check if the user exists
    const userData = await pool.query(`
        SELECT * FROM users WHERE email=$1
    `, [email],
    );

    // Email not found
    if (userData.rows.length === 0) {
        throw new Error("Invalid email or password!");
    }

    // // 2. Compare the password -> Done
    // const user = userData.rows[0];
    // const matchPassword = await bcrypt.compare(password, user.password);

    // if (!matchPassword) {
    //     throw new Error("Invalid Credentials!");
    // }

    // //3. Generate Token
    // const jwtPayload = {
    //     id: user.id,
    //     name: user.name,
    //     is_active: user.is_active,
    //     email: user.email,
    // };

    // const accessToken = jwt.sign(jwtPayload, config.secret as string, {
    //     expiresIn: "1d",
    // });

    return { accessToken };
};

export const authService = {
    loginUserIntoDB,
};