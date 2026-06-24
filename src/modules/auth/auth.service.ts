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
        throw new Error("Invalid Credentials!");
    }

    // 2. Compare the password -> Done
    const user = userData.rows[0];
    const matchPassword = await bcrypt.compare(password, user.password);

    if (!matchPassword) {
        throw new Error("Invalid Credentials!");
    }

    //3. Generate Token
    const jwtPayload = {
        id: user.id,
        name: user.name,
        role: user.role,
        is_active: user.is_active,
        email: user.email,
    };

    const accessToken = jwt.sign(jwtPayload, config.secret as string, {
        expiresIn: "1d",
    });


    const refreshToken = jwt.sign(jwtPayload, config.refresh_secret as string, {
        expiresIn: "1d",
    });

    return { accessToken, refreshToken };
};


// const generateFreshToken = async (token: string) => {
//   if (!token) {
//     throw new Error("Unauthorized");
//   }

//   const decoded = jwt.verify(
//     token as string,
//     config.refresh_secret as string,
//   ) as JwtPayload;

//   const userData = await pool.query(
//     `
//      SELECT * FROM users WHERE email=$1   
//         `,
//     [decoded.email],
//   );

//   const user = userData.rows[0];

//   if (userData.rows.length === 0) {
//     throw new Error("User not found!!");
//   }

//   if (!user?.is_active) {
//     throw new Error("Forbidden!!");
//   }

//   const jwtpayload = {
//     id: user.id,
//     name: user.name,
//     role: user.role,
//     is_active: user.is_active,
//     email: user.email,
//   };

//   const accessToken = jwt.sign(jwtpayload, config.secret as string, {
//     expiresIn: "1d",
//   });

//   return { accessToken };
// };


export const authService = {
    loginUserIntoDB,
    // generateFreshToken
};