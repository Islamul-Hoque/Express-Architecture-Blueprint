import bcrypt from "bcryptjs";
import { pool } from "../../db";
import type { IUser } from "./user.interface";

// New user Create ==> "POST" 
const createUserIntoDB = async (payload: IUser) => {
    const { name, email, password, age } = payload;

    // Password Hashing
    const hashPassword = await bcrypt.hash(password, 10);

    // Query
    const result = await pool.query(`
        INSERT INTO users(name,email,password,age) VALUES($1,$2,$3,$4) 
        RETURNING *
        `,
        [name, email, hashPassword, age],
    );

    // Delete password from array
    delete result.rows[0].password;
    return result;
};

// // "GET" All User
// const getAllUsersFromDB = async () => {
//     const result = await pool.query(`
//         SELECT * FROM users  
//     `);

//     // Delete password from array
//     delete result.rows[0].password;
//     return result;
// };

// // "GET" Single user
// const getSingleUserFromDB = async (id: string) => {
//         const result = await pool.query(`
//             SELECT * FROM users 
//             WHERE id=$1  
//         `, [id],
//         );

//     // Delete password from array
//     delete result.rows[0].password;
//     return result;
// };

// // Update user info using "PUT" method
// const updateUserFromDB = async (payload: IUser, id: string) => {
//     const { name, password, age, is_active } = payload;

//     // Password Hashing
//     const hashPassword = await bcrypt.hash(password, 10);

//     const result = await pool.query(`
//         UPDATE users SET 
//             name=COALESCE($1,name), 
//             password=COALESCE($2,password), 
//             age=COALESCE($3,age), 
//             is_active=COALESCE($4,is_active) 
//         WHERE id=$5 RETURNING *
//         `,
//         [name, hashPassword, age, is_active, id],
//     );

//     // Delete password from array
//     delete result.rows[0].password;
//     return result;
// };

// // "DELETE" a user
// const deleteUserFromDB = async (id: string) => {
//     const result = await pool.query( `
//         DELETE FROM users 
//         WHERE id=$1 
//     `,
//     [id],
//     );
//     return result;
// };

export const userService = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserFromDB,
    deleteUserFromDB,
};