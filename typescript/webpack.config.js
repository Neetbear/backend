const path = require("path");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
    name: "ingoo",
    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "eval" : "hidden-source-map",
    entry: {
        app: "./src/index", // resovle에 따라 확장자 생략
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // 정규표현식 ts or tsx 확장자를 찾음.
                use: "ts-loader", // ts-loader 라이브러리 사용
                exclude: "/node_modules/", // ts-loader 경로 설정같음.
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
        },
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
};