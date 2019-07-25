module.exports = {
    devServer: {
        proxy: {
            "/ajax": {                            /**此处是要代理跨域的域名后面的 */
                target: "http://m.maoyan.com",    /**需要代理的域名 */
                changeOrigin: true                 /**是否允许跨域 */
            }
        }
    }
}
//此文件要写在项目根目录下