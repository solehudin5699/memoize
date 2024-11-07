import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import terser from '@rollup/plugin-terser';

export default {
    input: './src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            babelHelpers: 'bundled',
            extensions: [...DEFAULT_EXTENSIONS, '.ts'],
        }),
        terser(),
    ],
};
