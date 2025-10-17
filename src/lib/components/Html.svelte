<script lang="ts">
	import { styleToString } from '$lib/utils.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLHtmlAttributes } from 'svelte/elements';

	type HtmlProps = Omit<HTMLHtmlAttributes, 'style' | 'class'> & {
		style: StandardProperties;
	};

	let { children, lang = 'en', dir = 'ltr', style, ...props }: HtmlProps = $props();
</script>

<html {...props} {dir} {lang} style={styleToString(style)}>
	{@render children?.()}
</html>
