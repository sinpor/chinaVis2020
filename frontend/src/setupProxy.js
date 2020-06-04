const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app) {
  // app.use(
    // createProxyMiddleware("/d/", {
    //   target: "http://112.74.89.57:8000/",
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/d/': ''
    //   },
    // })
  // );
};