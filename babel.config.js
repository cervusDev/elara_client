module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { "ssr": true }],
    "inline-react-svg",
    ["babel-plugin-module-resolver", {
      "root": ["./src"],
      "alias": {
        "@/": "./src/"
      }
    }]
  ],
};
