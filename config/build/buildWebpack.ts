import type webpack from "webpack";

import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import type { BuildOptions } from "./types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options
    const isDev = mode === 'development';

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
        entry: paths.entry,
        mode: mode ?? 'development',
        module: {
            rules: buildLoaders(options),
        },
        output: {
            clean: true,
            filename: '[name].[contenthash].js',
            path: paths.output,
            publicPath: mode === 'production' ? '/CR/' : '/',
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
    }
}