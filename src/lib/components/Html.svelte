<script lang="ts">
	import type { HTMLHtmlAttributes } from 'svelte/elements';

	type HtmlProps = HTMLHtmlAttributes

	let { children, lang = 'en', dir = 'ltr', ...props }: HtmlProps = $props();
</script>

<html {...props} dir={dir} lang={lang}>
	{@render children?.()}
</html>
