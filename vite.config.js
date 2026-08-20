import {defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vite.dev/config/
export default defineConfig({
    Plugin : [react()],
    base :"/React",
}
)
