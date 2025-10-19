<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type HeadProps = SvelteHTMLElements['head'];

	const { children, ...props }: HeadProps = $props();
</script>

<head {...props}>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta name="x-apple-disable-message-reformatting" />
	{@render children?.()}
</head>
