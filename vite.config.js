const path = require("path");
// import { createMockServe } from "vite-plugin-mock";

module.exports = {
  alias: {
    // 路径映射必须以/开头和结尾
    "/@/": path.resolve(__dirname, "src"),
    "/@comps/": path.resolve(__dirname, "src/components"),
  },
  proxy: {
    "/api": {
      target: "http://jsonplaceholder.typicode.com",
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, ""),
    },
  },
  // plugins: [
  //   createMockServe({
  //     // close support .ts file
  //     supportTs: false,
  //   }),
  // ],
};
