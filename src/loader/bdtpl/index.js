/**
 * Created by yuanx on 2019/4/2.
 */
const baiduTplEngine = require('baidutemplate-x').template;
module.exports = function (source) {
    return 'module.exports='+baiduTplEngine

        ._compile(source)

        .toString();
}