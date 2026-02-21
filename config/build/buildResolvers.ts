import {Configuration} from "webpack";

import type { BuildOptions } from "./types";


export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
    return {
        alias: {
            '@': options.paths.src,
            '@mui/styled-engine': '@mui/styled-engine-sc'
        },
        extensions: ['.tsx', '.ts', '.js'],
    }
}