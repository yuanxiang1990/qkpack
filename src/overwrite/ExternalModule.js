/**
 * Created by yuanx on 2019/3/30.
 * 重写扩展组件模块
 */
const ExternalModule = require("webpack/lib/ExternalModule");
module.exports.apply = function () {
    ExternalModule.prototype.getSourceString = function (runtime) {
        const request =
            typeof this.request === "object" && !Array.isArray(this.request)
                ? this.request[this.externalType]
                : this.request;
        switch (this.externalType) {
            case "this":
            case "window":
            case "self":
                return this.getSourceForGlobalVariableExternal(
                    request,
                    this.externalType
                );
            case "global":
                return this.getSourceForGlobalVariableExternal(
                    request,
                    runtime.outputOptions.globalObject
                );
            case "commonjs":
            case "commonjs2":
                return this.getSourceForCommonJsExternal(request);
            case "amd":
            case "amd-require":
            case "umd":
            case "umd2":
                return this.getSourceForAmdOrUmdExternal(
                    this.id,
                    this.optional,
                    request
                );
            case "cmd":
                return `module.exports = ${this.request.replace(/[-|.|@\/]/g, '_')}`;
            default:
                return this.getSourceForDefaultCase(this.optional, request);
        }
    }
}