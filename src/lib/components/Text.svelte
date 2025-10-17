<script lang="ts">
	import { styleToString } from '$lib/utils.js';
	import type { StandardProperties } from 'csstype';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type TextProps = Omit<SvelteHTMLElements['p'], 'style' | 'class'> & {
		style: StandardProperties;
	};

	let { children, style, ...props }: TextProps = $props();
</script>

<p {...props} style={styleToString({ fontSize: '14px', lineHeight: '24px', ...style })}>
	{@render children?.()}
</p>
