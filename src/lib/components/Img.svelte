<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLImgAttributes } from 'svelte/elements';

	type ImgProps = Omit<HTMLImgAttributes, 'style' | 'class'> & {
		style?: StandardProperties;
	};

	// Capture any other attributes (like loading, decoding, etc.)
	const { alt, height, width, src, style = {}, ...props }: ImgProps = $props();
</script>

<img
	{...props}
	{alt}
	{src}
	{width}
	{height}
	style={styleToString({
		display: 'block',
		outline: 'none',
		border: 'none',
		textDecoration: 'none',
		...style
	})}
/>
