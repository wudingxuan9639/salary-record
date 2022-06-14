import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig({
	plugins: [
		uni()
	],
	server: {
		port: 8084,
		proxy: {
			'/api': {
				target: 'http://203.56.169.102:8084', // 目标服务  
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			}
		}
	}
})