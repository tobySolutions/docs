import { z } from 'astro:content';

/** Enforce logo types while preserving exact key type. */
const LogoCheck = <T extends Record<string, { file: string; padding: string }>>(logos: T) => logos;

export const logos = LogoCheck({
	alpinejs: { file: 'alpine-js.svg', padding: '.1875em' },
	aws: { file: 'aws.svg', padding: '.1875em' },
	buddy: { file: 'buddy.svg', padding: '.1625em' },
	cleavr: { file: 'cleavr.svg', padding: '0.125em 0.125em 0.1375em' },
	cloudflare: { file: 'cloudflare-pages.svg', padding: '.1875em' },
	cloudinary: { file: 'cloudinary.svg', padding: '.1875em' },
	'craft-cms': { file: 'craft-cms.svg', padding: '.225em' },
	crystallize: { file: 'crystallize.svg', padding: '.1875em' },
	'create-react-app': { file: 'create-react-app.svg', padding: '.1875em' },
	datocms: { file: 'datocms.svg', padding: '0.25em 0.25em 0.25em 0.3em' },
	deno: { file: 'deno.svg', padding: '0' },
	edgio: { file: 'edgio.svg', padding: '.1625em' },
	fleek: { file: 'fleek.svg', padding: '0.1000em' },
	flyio: { file: 'flyio.svg', padding: '.1625em' },
	github: { file: 'github.svg', padding: '0.125em 0.125em 0.1375em' },
	gitlab: { file: 'gitlab.svg', padding: '0' },
	'google-cloud': { file: 'google-cloud.svg', padding: '.1875em' },
	'google-firebase': { file: 'firebase.svg', padding: '.1875em' },
	hashnode: { file: 'hashnode.png', padding: '.1875em' },
	heroku: { file: 'heroku.svg', padding: '.25em' },
	'microsoft-azure': { file: 'microsoft-azure.svg', padding: '.1625em .1625em .2125em' },
	netlify: { file: 'netlify.svg', padding: '.1625em' },
	render: { file: 'render.svg', padding: '.1875em' },
	stormkit: { file: 'stormkit.svg', padding: '0' },
	surge: { file: 'surge.svg', padding: '.125em' },
	vercel: { file: 'vercel.svg', padding: '.3em .3em .35em' },
	image: { file: 'astro-image.svg', padding: '.1875em' },
	lit: { file: 'lit.svg', padding: '.1875em' },
	mdx: { file: 'mdx.svg', padding: '.1em' },
	node: { file: 'node.svg', padding: '.1875em' },
	partytown: { file: 'partytown.svg', padding: '.2em .2em .25em .25em' },
	preact: { file: 'preact.svg', padding: '.1875em' },
	prefetch: { file: 'prefetch.svg', padding: '.25em' },
	react: { file: 'react.svg', padding: '.2em' },
	sitemap: { file: 'sitemap.svg', padding: '.1875em .25em .25em' },
	'solid-js': { file: 'solid.svg', padding: '.1875em' },
	svelte: { file: 'svelte.svg', padding: '.1875em' },
	tailwind: { file: 'tailwind.svg', padding: '.1875em' },
	vue: { file: 'vue.svg', padding: '.3em .2em .2em' },
	flightcontrol: { file: 'flightcontrol.svg', padding: '.225em' },
	sst: { file: 'sst.svg', padding: '0em 0.15em 0em' },
	azion: { file: 'azion.svg', padding: '.1875em' },
	buttercms: { file: 'buttercms.svg', padding: '.1875em' },
	builderio: { file: 'builderio.svg', padding: '.25em' },
	contentful: { file: 'contentful.svg', padding: '.05em' },
	cosmic: { file: 'cosmic.svg', padding: '.24em' },
	hygraph: { file: 'hygraph.svg', padding: '.1em .125em .1em .1em' },
	directus: { file: 'directus.svg', padding: '0 .1em' },
	ghost: { file: 'ghost.png', padding: '.125em' },
	'decap-cms': { file: 'decap-cms.svg', padding: '0 .225em 0 .26em' },
	'tina-cms': { file: 'tina-cms.svg', padding: '.15em' },
	payload: { file: 'payload.svg', padding: '.3em .25em .3em .3em' },
	prismic: { file: 'prismic.svg', padding: '.25em' },
	caisy: { file: 'caisy.svg', padding: '.05em' },
	sanity: { file: 'sanity.svg', padding: '.15em' },
	sitecore: { file: 'sitecore.svg', padding: '.15em' },
	storyblok: { file: 'storyblok.svg', padding: '.3em .25em .25em' },
	spinal: { file: 'spinal.svg', padding: '.15em .15em' },
	wordpress: { file: 'wordpress.svg', padding: '.2em' },
	kinsta: { file: 'kinsta.svg', padding: '0' },
	gatsby: { file: 'gatsby.svg', padding: '0' },
	nextjs: { file: 'nextjs.svg', padding: '.125em' },
	jekyll: { file: 'jekyll.png', padding: '.1em .05em 0' },
	hugo: { file: 'hugo.svg', padding: '.125em' },
	eleventy: { file: 'eleventy.svg', padding: '.075em .05em .05em' },
	gridsome: { file: 'gridsome.svg', padding: '.15em' },
	pelican: { file: 'pelican.svg', padding: '.25em .225em .25em .25em' },
	sveltekit: { file: 'sveltekit.svg', padding: '.1875em' },
	vuepress: { file: 'vuepress.png', padding: '.2em .175em .175em' },
	docusaurus: { file: 'docusaurus.svg', padding: '.225em' },
	nuxtjs: { file: 'nuxtjs.svg', padding: '.25em' },
	keystonejs: { file: 'keystonejs.svg', padding: '.25em' },
	appwriteio: { file: 'appwriteio.svg', padding: '.2em' },
	supabase: { file: 'supabase.svg', padding: '.2em' },
	turso: { file: 'turso.svg', padding: '.2em' },
	cloudcannon: { file: 'cloudcannon.svg', padding: '.25em' },
	markdoc: { file: 'markdoc.svg', padding: '.35em 0 .35em .1em' },
	gitbook: { file: 'gitbook.svg', padding: '.25em' },
	'frontmatter-cms': { file: 'frontmatter-cms.svg', padding: '.25em' },
	statamic: { file: 'statamic.svg', padding: '.2em' },
	xata: { file: 'xata.svg', padding: '0.234em 0.234em 0.1875em' },
	strapi: { file: 'strapi.svg', padding: '.25em' },
	microcms: { file: 'microcms.svg', padding: '.2em' },
	preprcms: { file: 'preprcms.svg', padding: '0' },
	'kontent-ai': { file: 'kontent-ai.svg', padding: '.15em' },
	keystatic: { file: 'keystatic.svg', padding: '0' },
	zeabur: { file: 'zeabur.svg', padding: '.2em' },
	zerops: { file: 'zerops.svg', padding: '.2em' },
	apostrophecms: { file: 'apostrophecms.svg', padding: '.15em .15em' },
	db: { file: 'db.svg', padding: '.1em' },
	sentry: { file: 'sentry.svg', padding: '.1em' },
	umbraco: { file: 'umbraco.svg', padding: '.05em' },
});

export type LogoKey = keyof typeof logos;
const logoKeys = Object.keys(logos) as [LogoKey, ...LogoKey[]];
export const isLogoKey = (val: string | undefined) => z.enum(logoKeys).parse(val);
