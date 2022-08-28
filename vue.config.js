const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
<<<<<<< HEAD
<<<<<<< HEAD
  publicPath: "/",
=======
  publicPath: "/project name/",
>>>>>>> parent of a3e983a (vue config change number 201)
=======
  publicPath: process.env.NODE_ENV === "production" ? "/vue-inlamning/" : "/",
>>>>>>> parent of 8177a5a (vue config change number 200)
});
