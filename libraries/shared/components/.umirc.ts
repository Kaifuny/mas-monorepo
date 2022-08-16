import { defineConfig } from "dumi";
import path from "path";

export default defineConfig({
    title: "shared-components",
    favicon:
        "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
    logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
    outputPath: "docs-dist",
    // more config: https://d.umijs.org/config
    description: "@Chongyi Xu, 2022",
    base: process.env.NODE_ENV === "production" ? "/mas/shared/components/" : "/",
    publicPath: process.env.NODE_ENV === "production" ? "/mas/shared/components/" : "/",
    alias: {
        "@mas/shared-components": path.resolve(__dirname, "src")
    }
});
