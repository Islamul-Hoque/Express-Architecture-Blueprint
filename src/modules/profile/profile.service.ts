import { pool } from "../../db";

const createProfileIntoDB = async (payload: any) => {
//     const { user_id, bio, address, phone, gender } = payload;

//     // First check if the user is exists
//     const user = await pool.query(`
//         SELECT * FROM users WHERE id=$1
//     `, [user_id],
//     );

//     // User not found
//     if (user.rows.length === 0) {
//         throw new Error("User not exists!");
//     }

//     const result = await pool.query( `
//         INSERT INTO 
//             profiles(user_id, bio, address, phone, gender) 
//             VALUES($1,$2,$3,$4,$5) 
//         RETURNING *
//     `,
//         [user_id, bio, address, phone, gender],
//     );
//     return result;
};

export const profileService = {
    createProfileIntoDB,
};