## <img src="assets/activities.svg"  width="25"> <b>Express.js & TypeScript Server Setup Steps  </b>


## <img src="assets/tech_stack.svg" width="30"> Tech Stack
<div align="center">

![Express](https://img.shields.io/badge/Express-v5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-v4.22.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v8.22.0-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-v17.4.2-00C853?style=for-the-badge&logo=dotenv&logoColor=white)
![TSX](https://img.shields.io/badge/TSX-v4.22.4-FF6F00?style=for-the-badge&logo=typescript&logoColor=white)
![Types/Express](https://img.shields.io/badge/@types/express-v5.0.6-4285F4?style=for-the-badge&logo=typescript&logoColor=white)
![Types/PG](https://img.shields.io/badge/@types/pg-v8.20.0-4285F4?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## <img src="https://img.icons8.com/color/48/about.png" height="32" align="center" /> <b>Project Overview & Goals</b>

This project is a **scalable Express.js API architecture** built with **TypeScript** and integrated with **PostgreSQL** for persistent data storage.  
It serves as a blueprint for building production‑ready backend applications with clean structure, modular code, and proper error handling.

### 🎯 Goals
- **[Express.js API](ca://s?q=Express.js_API_goal)** → Provide a structured RESTful API with CRUD operations.  
- **[TypeScript integration](ca://s?q=TypeScript_integration_goal)** → Ensure type safety, maintainability, and developer productivity.  
- **[PostgreSQL database](ca://s?q=PostgreSQL_database_goal)** → Use relational schema for secure and efficient data management.  
- **[Error handling](ca://s?q=Error_handling_goal)** → Implement proper `try/catch` blocks with meaningful responses (200, 404, 500).  
- **[Scalable architecture](ca://s?q=Scalable_architecture_goal)** → Follow clean project structure for future extensions.  
- **[Environment configuration](ca://s?q=Environment_configuration_goal)** → Manage secrets and configs via `.env` and `dotenv`.  

### 1. Project Initialization  
- `npm init -y` → auto‑generate `package.json`  
- `package.json` এ 
  - Add: `"type": "module"`
  - `"scripts"` update:  
    ```json
    "scripts": {
      "dev": "tsx watch ./src/server.ts"
    }

### 2. TypeScript Setup  
- `npm i -D typescript`→ auto‑generate `package-lock.json`

### 3. Initialize config 
- `npx tsc --init` → auto‑generate `tsconfig.json`
  - Comment out: 
    - `"rootDir": "./src", `, 
    - `outDir": "./dist"`  
  - Remove: 
    - `"jsx": "react-jsx"`  
  - Edit: 
    - `"module": "esnext"`, 
    - `"types": ["node"]`  

### 4. Express.js Installation  
`npm install express`

### 5. Express.js TypeScript Definitions  
`npm i --save-dev @types/express`

### 6. Project Structure  
- Create folder → `src`  
- Create file → `server.ts`  

```ts
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

### 7. Development Tools  
- Install `tsc` → `npx tsc`  
- Run dev server → `npm run dev`  
- Server will run at: `http://localhost:${port}` 

### 8. PostgreSQL Client Setup  

```bash
npm install pg
```

### 9. PostgreSQL Type Definitions  
```bash
npm i --save-dev @types/pg
```

### 10. Environment Variables  
- Install `dotenv` → `npm i dotenv`  
- Create `.env` file in root → store secrets/config  


### 11. Database Setup (Neon PostgreSQL)

This project uses **Neon cloud-hosted PostgreSQL** as the database.Connection is managed via `pg` client and environment variables stored in `.env`.

```ts
// Initialize Pool with Neon cloud-hosted PostgreSQL connection
const pool = new Pool({
    connectionString: config.connection_string,
});
```

### 12. Bcrypt.js Installation for Password Hashing

```bash
npm i bcryptjs
```


--- 


## <img src="assets/about_me.svg"  width="25"> Author 

- **Islamul Hoque**  
- MERN Stack Developer | Backend Enthusiast | Problem Solver
- <p align="left">
  <a href="https://www.linkedin.com/in/Islamul-Hoque">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
  <a href="mailto:islamulhoque2006@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://islamul-hoque-portfolio.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <a href="https://codeforces.com/profile/Islamul-Hoque">
    <img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white"/>
  </a>
  <a href="https://www.hackerrank.com/profile/islamulhoque2006">
    <img src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=hackerrank&logoColor=white"/>
  </a>
</p>
