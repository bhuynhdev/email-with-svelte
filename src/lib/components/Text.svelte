<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import { parseMargins } from '$lib/utils/margins.js';
	import type { StandardProperties } from 'csstype';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type TextProps = Omit<SvelteHTMLElements['p'], 'style' | 'class'> & {
		style?: StandardProperties;
	};

	let { children, style = {}, ...props }: TextProps = $props();
	const marginStyle = parseMargins(style, { marginTop: '16px', marginBottom: '16px' });
</script>

<p
	style={styleToString({
		fontSize: '14px',
		lineHeight: '24px',
		...style,
		...marginStyle
	})}
	{...props}
>
	{@render children?.()}
</p>
