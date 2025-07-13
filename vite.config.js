import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


const exercisePath = "C:\\Users\\user3\\OneDrive\\Pulpit\\prawdziwy-kalkulator";


export default defineConfig({
    root: exercisePath,
    server: {
        port: 3000,
    },
    plugins: [react()],
});
