import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
    },
    build: {
        outDir: 'build',
    },
    resolve: {
        extensions: ['tsx', 'ts', 'js'],
        alias: {
            components: 'src/components',
        },
    },
})
