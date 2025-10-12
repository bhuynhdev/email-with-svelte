<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type TextProps = SvelteHTMLElements['p'];

	let { children, style, ...props }: TextProps = $props();
</script>

<p {...props} style={`font-size: 14px; line-height: 24px; ${style}`}>
	{@render children?.()}
</p>
