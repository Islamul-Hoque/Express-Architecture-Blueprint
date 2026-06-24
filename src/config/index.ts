import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.join(process.cwd(), ".env"),
});

const config = {
    // Database connection string
    connection_string: process.env.DB_CONNECTION_STRING as string,

    // Application port
    port: Number(process.env.PORT),

    // JWT secrets
    secret : process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,

    // Token expiry values
    access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
    refresh_token_expires_in: process.env.REFRESH_TOKEN_EXPIRES_IN,

    // Environment mode 
    node_env: process.env.NODE_ENV,
};

export default config;