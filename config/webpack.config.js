const CmdModulePlugin = require("../src/plugins/CmdModulePlugin");
const path = require("path");
module.exports = {
    mode: "development",
    entry: {
        test: "./test/index"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                // 使用 'style-loader','css-loader'
                use: ['css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.tmpl$/,
                // 使用 'style-loader','css-loader'
                use: ["bdtpl-loader"]
            },
        ]
    },
    resolveLoader: {
        // 去哪些项目下寻找Loader，有先后顺序之分
        modules: ['./node_modules', './src/loader'],
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].bundle.js"
    },
    externals: [
        function (context, request, callback) {
            if (/^fe-\w+\/[\w-]+@(\d+\.)*\d$/.test(request)) {
                return callback(null, 'cmd ' + request);
            }
            callback();
        }],
    plugins: [
        new CmdModulePlugin({})
    ]
};
