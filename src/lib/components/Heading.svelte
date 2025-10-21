<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

	type HeadingProps = Omit<SvelteHTMLElements[HeadingTag], 'style' | 'class'> & {
		style?: StandardProperties;
		as?: HeadingTag;
	};

	const { children, style = {}, as = 'h1', ...props }: HeadingProps = $props();
</script>

<svelte:element this={as} style={styleToString(style)} {...props}>
	{@render children?.()}
</svelte:element>
