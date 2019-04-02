/**
 * Created by yuanx on 2019/3/29.
 */
const commander = require("commander");
const webpack = require("webpack");
const config = require("./config/webpack.config");
commander.command('qk release' || argv[2])
    .usage('[options]')
    .description('build and deploy your component').action(() => {
    var compiler = webpack(config);

    // 执行
    compiler.run(() => {
        console.log('compile success!!');
    });
});
commander.parse(process.argv)
