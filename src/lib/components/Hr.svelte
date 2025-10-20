<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type HrProps = Omit<SvelteHTMLElements['hr'], 'style' | 'class'> & {
		style?: StandardProperties;
	};

	let { children, style = {}, ...props }: HrProps = $props();
</script>

<hr
	{...props}
	style={styleToString({ width: '100%', border: 'none', borderTop: '1px solid #eaeaea', ...style })}
/>
