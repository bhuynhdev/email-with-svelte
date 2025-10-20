<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type LinkProps = Omit<HTMLAnchorAttributes, 'style' | 'class'> & {
		style?: StandardProperties;
	};

	let { children, target = '_blank', style = {}, ...props }: LinkProps = $props();
</script>

<a
	{...props}
	style={styleToString({
		color: '#067df7',
		textDecorationLine: 'none',
		...style
	})}
	{target}
>
	{@render children?.()}
</a>
