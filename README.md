## <img src="assets/activities.svg"  width="25"> <b>Express Architecture Blueprint using Modular Pattern, PostgreSQL, JWT Authentication & Role‑Based Authorization</b>

> A scalable, production-ready Express.js API blueprint using Modular Pattern, PostgreSQL database persistence, JWT authentication, and Role-Based Authorization.

> [!TIP]
> **Live API Demo**: Access and test the live running API directly at [https://express-blueprint-api.vercel.app](https://express-blueprint-api.vercel.app)

---

## 🗺️ Workflow Diagram

Below is the workflow visualization representing the setup path:

```mermaid
flowchart TD
    %% Node Definitions & Shapes
    Init(["📦 1. Project Initialization"])
    TS["🛠️ 2. TypeScript Setup"]
    Express["🌐 3. Express Setup"]
    DB["🗄️ 4. Database Setup"]
    Auth["🔐 5. Authentication & Middlewares"]
    Deploy{{"🚀 6. Production Deployment"}}

    %% Flow Connections
    Init --> TS
    TS --> Express
    Express --> DB
    DB --> Auth
    Auth --> Deploy

    %% Custom Styling
    style Init fill:#eef2ff,stroke:#6366f1,stroke-width:2px,color:#312e81
    style TS fill:#ecfeff,stroke:#06b6d4,stroke-width:2px,color:#083344
    style Express fill:#fff7ed,stroke:#f97316,stroke-width:2px,color:#431407
    style DB fill:#f0fdf4,stroke:#22c55e,stroke-width:2px,color:#052e16
    style Auth fill:#faf5ff,stroke:#a855f7,stroke-width:2px,color:#3b0764
    style Deploy fill:#fff1f2,stroke:#f43f5e,stroke-width:3px,color:#4c0519

    %% Link Styling
    linkStyle default stroke:#94a3b8,stroke-width:2px;
```

## 🚀 Getting Started

To get a local copy of this project up and running, follow these simple steps:

### 1. Clone & Install Dependencies
Clone the repository and install the npm packages:
```bash
git clone https://github.com/Islamul-Hoque/Express-Architecture-Blueprint.git  
cd Express-Architecture-Blueprint  
npm install  
```

### 2. Environment Configuration
Create a `.env` file in the root directory and add the following configuration variables:
```env
DB_CONNECTION_STRING=Your_postgresql_connection_string_here
PORT=3000
JWT_SECRET=Your_jwt_secret_here
JWT_REFRESH_SECRET=Your_jwt_refresh_secret_here
ACCESS_TOKEN_EXPIRES_IN=1d
REFRESH_TOKEN_EXPIRES_IN=90d
NODE_ENV=production
```

---

## 📁 Folder Structure

Here is the directory structure layout showing the project configuration, source modules, and utilities:

```
Express-Architecture-Blueprint/
├── assets/                     # SVG icons & static assets
├── dist/                       # Compiled production-ready JavaScript
├── src/                        # Main source directory
│   ├── config/                 # App configurations (dotenv setup, etc.)
│   ├── db/                     # Database connection pool setup
│   ├── middleware/             # Express middlewares (auth guards, error handlers)
│   ├── modules/                # Feature modules (controllers, routes, services)
│   ├── types/                  # TypeScript interface and type definitions
│   └── utility/                # Utility helpers (response generators, validators)
├── .env                        # Local configuration environment variables
├── tsconfig.json               # TypeScript configuration
├── tsup.config.ts              # Bundle configuration (tsup)
├── vercel.json                 # Vercel deployment configuration
└── package.json                # Project dependencies and scripts
```

---

## 📋 Project Overview & Goals

This project provides a **scalable Express.js API architecture** built with **TypeScript** and integrated with **PostgreSQL** for persistent data storage. It serves as a blueprint for building production‑ready backend applications with clean structure, modular code, and proper error handling.

### 🎯 Core Goals
- **[Express.js API](ca://s?q=Express.js_API_goal)** — Provide a structured RESTful API with CRUD operations.
- **[TypeScript integration](ca://s?q=TypeScript_integration_goal)** — Ensure type safety, maintainability, and developer productivity.
- **[PostgreSQL database](ca://s?q=PostgreSQL_database_goal)** — Use relational schema for secure and efficient data management.
- **[Error handling](ca://s?q=Error_handling_goal)** — Implement proper `try/catch` blocks with meaningful responses (200, 404, 500).
- **[Scalable architecture](ca://s?q=Scalable_architecture_goal)** — Follow clean project structure for future extensions.
- **[Environment configuration](ca://s?q=Environment_configuration_goal)** — Manage secrets and configs via `.env` and `dotenv`.

---

## <img src="assets/tech_stack.svg" width="30"> Tech Stack

Here is a breakdown of the core technologies and dependencies used in this blueprint:

### ⚡ Core Stack
<p align="left">
  <img src="https://img.shields.io/badge/Express-v5.2.1-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Node.js-v20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/TypeScript-v4.22.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/PostgreSQL-v8.22.0-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
</p>

### 🔐 Authentication & Middlewares
<p align="left">
  <img src="https://img.shields.io/badge/jsonwebtoken-v9.0.3-512DA8?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="jsonwebtoken" />
  <img src="https://img.shields.io/badge/bcryptjs-v3.0.3-00599C?style=for-the-badge&logo=javascript&logoColor=white" alt="bcryptjs" />
  <img src="https://img.shields.io/badge/cookie--parser-v1.4.7-FF9800?style=for-the-badge&logo=express&logoColor=white" alt="cookie-parser" />
  <img src="https://img.shields.io/badge/CORS-v2.8.6-795548?style=for-the-badge&logo=express&logoColor=white" alt="CORS" />
</p>

### ⚙️ Utilities & Dev Tools
<p align="left">
  <img src="https://img.shields.io/badge/Dotenv-v17.4.2-00C853?style=for-the-badge&logo=dotenv&logoColor=white" alt="Dotenv" />
  <img src="https://img.shields.io/badge/TSX-v4.22.4-FF6F00?style=for-the-badge&logo=typescript&logoColor=white" alt="TSX" />
</p>

---

## <img src="assets/activities.svg"  width="25"> <b>Express.js & TypeScript Server Setup Steps  </b>

Follow this guided setup timeline to initialize, configure, and run the server architecture:

### 📦 1. Project Initialization
Initialize a new Node.js package environment:
```bash
npm init -y
```
In your `package.json`, enable ES Modules and define the development start script:
- Add: `"type": "module"`
- Update `"scripts"`:
  ```json
  "scripts": {
    "dev": "tsx watch ./src/server.ts"
  }
  ```

---

### 🛠️ 2. TypeScript Setup
Install TypeScript as a development dependency (which generates the `package-lock.json` file):
```bash
npm i -D typescript
```

---

### ⚙️ 3. Initialize TypeScript Configuration
Generate the default `tsconfig.json` configuration file:
```bash
npx tsc --init
```
Update the generated `tsconfig.json` properties:
- **Comment out**:
  - `"rootDir": "./src"`
  - `"outDir": "./dist"`
- **Remove**:
  - `"jsx": "react-jsx"`
- **Edit**:
  - `"module": "esnext"`
  - `"types": ["node"]`

---

### 🌐 4. Express.js Installation
Install the Express web application framework:
```bash
npm install express
```

---

### 🏷️ 5. Express.js TypeScript Definitions
Install type declarations for Express to support static typing:
```bash
npm i --save-dev @types/express
```

---

### 📂 6. Project Structure Creation
1. Create a `src` directory in the root workspace.
2. Create a `server.ts` file inside the `src` folder.

Add the following initial server setup code in `src/server.ts`:
```typescript
import express, { type Application, type Request, type Response } from "express";

const app: Application = express();
const port = process.env.PORT || 3000;

// Parse JSON payloads from incoming requests
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Express Architecture Blueprint API is live and ready to handle requests",
        version: "1.0.0",
        author: "Islamul Hoque"
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

---

### 🖥️ 7. Development Tools Compilation
Compile your TypeScript code and run the development server:
- Run compile check:
  ```bash
  npx tsc
  ```
- Run the server in development mode:
  ```bash
  npm run dev
  ```
- The server will run at: `http://localhost:3000` (or your custom `PORT` from environment variables).

---

### 🔌 8. PostgreSQL Client Setup
Install the PostgreSQL client library:
```bash
npm install pg
```

---

### 🏷️ 9. PostgreSQL Type Definitions
Install type definitions for PostgreSQL client:
```bash
npm i --save-dev @types/pg
```

---

### 🔑 10. Environment Variables Configuration
Install the dotenv module and create the local environment file:
- Install module:
  ```bash
  npm i dotenv
  ```
- Create a `.env` file in the root layout to store secrets and database connection configurations.

---

### 🗄️ 11. Database Setup (Neon PostgreSQL)
This project uses **Neon cloud-hosted PostgreSQL** as the database. The database connection is managed via `pg` connection pool and environment variables stored in `.env`.

Initialize the pool using your configurations:
```typescript
// Initialize Pool with Neon cloud-hosted PostgreSQL connection
const pool = new Pool({
    connectionString: config.connection_string,
});
```

---

### 🔒 12. Bcrypt.js Hashing
Install `bcryptjs` for secure password hashing:
```bash
npm i bcryptjs
```

---

### 🎟️ 13. JWT for Authentication
Install `jsonwebtoken` for generating and verifying tokens:
```bash
npm i jsonwebtoken
```

---

### 🏷️ 14. JWT Type Definitions
Install type declarations for `jsonwebtoken`:
```bash
npm i --save-dev @types/jsonwebtoken
```

---

### 🎲 15. Generate JWT Secret Key
Generate a secure random secret key to sign your JWTs:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

### 🍪 16. Cookie Parser Setup
Install `cookie-parser` middleware to read cookies from request headers:
```bash
npm i cookie-parser
```

---

### 🏷️ 17. Cookie Parser Type Definitions
Install type definitions for `cookie-parser`:
```bash
npm i --save-dev @types/cookie-parser
```

---

### 🌐 18. CORS Middleware Setup
Install CORS (Cross-Origin Resource Sharing) middleware to handle cross-origin requests:
```bash
npm i cors
```

---

### 🏷️ 19. CORS Type Definitions
Install type definitions for `cors`:
```bash
npm i --save-dev @types/cors
```

---

<!-- > [!NOTE]
> ### ⚡ Quick Installation (All-in-One)
> If you prefer to install all packages and type definitions in one go instead of step-by-step, run the following commands:
> ```bash
> npm i express pg bcryptjs jsonwebtoken cookie-parser cors dotenv tsup  
> npm i -D typescript tsx @types/express @types/pg @types/jsonwebtoken @types/cookie-parser @types/cors  
> ``` -->

---

## 🚀 Production Build & Deployment

Follow the steps below to build the project and deploy it to Vercel.

### 📦 1. Building the Application (tsup)

`tsup` is used to bundle our TypeScript application into clean JavaScript output in the `dist` directory.

#### Step 1.1: Install `tsup`
```bash
npm i tsup
```

#### Step 1.2: Create configuration
Create a file named `tsup.config.ts` in the root layout directory and add the following configuration:
```typescript
import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/server.ts"],
    format: ["esm", "cjs"], // Keep this as ESM
    target: "esnext",
    outDir: "dist",
    clean: true,
    bundle: true,
    splitting: false,
    sourcemap: true,
    // Add this banner to shim require() for CJS dependencies
    banner: {
        js: `
            import { createRequire } from 'module';
            const require = createRequire(import.meta.url);
        `,
    },
});
```

#### Step 1.3: Update Scripts & Configuration Files

In **`package.json`**, add/update the start, dev, and build scripts:
```json
"scripts": {
  "start": "node dist/server.js",
  "dev": "tsx watch ./src/server.ts",
  "build": "tsup"
}
```

In **`tsconfig.json`**, include and exclude compiler directories at the bottom of the config:
```json
{
  "include": ["src/**/*"],
  "exclude": []
}
```

#### Step 1.4: Build & Test Locally
Run the following commands to build and run the compiled code:
```bash
npm run build
npm start
```

---

### ☁️ 2. Deploying to Vercel

Deploy the compiled distribution output directly onto Vercel hosting.

#### Step 2.1: Install Vercel CLI & Log In
```bash
npm i -g vercel 
vercel login
```

#### Step 2.2: Configure Vercel Routes
Create a file named `vercel.json` in the root directory:
```json
{
    "version": 2,
    "builds": [
        {
            "src": "dist/server.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "dist/server.js"
        }
    ]
}
```

#### Step 2.3: Trigger Production Deployment
Deploy your application build to Vercel:
```bash
vercel --prod
```

---

## <img src="assets/about_me.svg"  width="25"> Author 

### 👤 Islamul Hoque
*MERN Stack Developer | Backend Enthusiast | Problem Solver*

Get in touch or check out my profiles:

<p align="left">
  <a href="https://www.linkedin.com/in/Islamul-Hoque" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:islamulhoque2006@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://islamul-hoque-portfolio.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://codeforces.com/profile/Islamul-Hoque" target="_blank">
    <img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white" alt="Codeforces" />
  </a>
  <a href="https://www.hackerrank.com/profile/Islamul_Hoque" target="_blank">
    <img src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white" alt="HackerRank" />
  </a>
</p>
