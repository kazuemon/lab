// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoomPlugin from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
	site: "https://lab.k6n.jp",
	integrations: [
		starlight({
			title: 'かずえもんらぼ',
			favicon: "/favicon.png",
			logo: {
				src: "./src/assets/brand/icon_shadow.png",
				replacesTitle: true,
			},
			editLink: {
        baseUrl: 'https://github.com/kazuemon/lab/edit/main/',
      },
			lastUpdated: true,
			head: [
				{
					tag: "script",
					attrs: {
						src: "https://www.googletagmanager.com/gtag/js?id=G-1YYG3GS6TN",
						async: true,
					}
				},
				{
					tag: "script",
					content: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1YYG3GS6TN');		
`
				}
			],
			locales: {
				root: {
					label: "日本語",
					lang: "ja"
				}
			},
			social: {
				github: 'https://github.com/kazuemon/lab',
				twitter: "https://x.com/k6n_jp"
			},
			sidebar: [
				{
					label: "らぼについて",
					items: [
						{ label: 'はじめに', slug: 'about/introduction' },
						{ label: '活動実績', slug: 'about/activities' }
					],
				},
				{
					label: '配信',
					items: [
						{ label: 'オフラインでの配信運営', slug: 'note/streaming/offline-operation' },
					],
				},
			],
			customCss: [
				"./src/fonts/font-face.css",
				"./src/styles/custom.css",
			],
			plugins: [
				starlightImageZoomPlugin(),
			]
		}),
	],
});
