/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/
"use strict";
const {ConcatSource} = require("webpack-sources");
const comp = require("../../test/component.json");
const overwriteExternalModule = require("../overwrite/ExternalModule");//重写扩展模块
class SeaJsModulePlugin {

    constructor(options) {

    }


    apply(compiler) {

        compiler.hooks.thisCompilation.tap("SeaJsModulePlugin", compilation => {
            const {mainTemplate, chunkTemplate} = compilation;
            mainTemplate.hooks.renderWithEntry.tap("SeaJsModulePlugin", (source, chunk, hash) => {
                const externals = chunk.getModules().filter(m => m.external);
                const externalsArgs = externals.map(m => `"${m.request}"`);
                let id = `${comp.group}/${comp.name}@${comp.version}`;
                const externalRequire = externals.map((m) => {
                    return `var ${m.request.replace(/[-|.|@\/]/g, '_')} = require("${m.request}");\n`
                })
                return new ConcatSource(`define("${id}",[${
                    externalsArgs.length > 0
                        ? externalsArgs.join(",") : ""
                    }],function(require, exports, module) {
                \n${externalRequire.join("")}
                module.exports = `, source, "});");
            })
        })

        overwriteExternalModule.apply();
    }
}

module.exports = SeaJsModulePlugin;
