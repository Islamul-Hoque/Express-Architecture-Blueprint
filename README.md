## <img src="assets/activities.svg"  width="25"> <b>Express.js & TypeScript Server Setup Steps  </b>

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
- Install `tsx` → `npm i -D tsx`  
- Run dev server → `npm run dev`  
- Server will run at: `http://localhost:${port}` 

### 8. Neon Database Initialization  

```bash
npx neonctl@latest init
```

### 9. Environment Variables  
- Install `dotenv` → `npm i dotenv`  
- Create `.env` file in root → store secrets/config  

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


git add .
git commit -m "docs(readme): add Author section with tagline and social badges"
git push


📂 Repo Structure Suggestion
src/
 ├── config/
 ├── controller/
 ├── database/
 ├── routes/
 ├── service/
 ├── types/
 └── utility/
