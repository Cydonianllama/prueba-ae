import { defineConfig } from 'vite';
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';

export default defineConfig({
    plugins: [
        vituum({
            pages: {
                normalizeBasePath: true
            }
        }),
        pug({
            options: {
                pretty: true
            }
        })
    ]
});
