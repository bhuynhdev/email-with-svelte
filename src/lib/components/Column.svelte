<script lang="ts">
	import type { HTMLTdAttributes } from 'svelte/elements';

	type ColumnProps = HTMLTdAttributes;

	let { children, style, ...props }: ColumnProps = $props();
</script>

<td {...props} data-id="__ems-column" {style}>
	{@render children?.()}
</td>
