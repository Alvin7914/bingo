import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// const exercisePath = "C:\\Users\\user3\\OneDrive\\Pulpit\\bingo";


export default defineConfig({
    // root: exercisePath,
    // server: {
    //     port: 3000,
    // },
    plugins: [react()],
    base: '/bingo/',
});
