<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';

	type RowProps = HTMLTableAttributes;

	let { children, style, ...props }: RowProps = $props();
</script>

<table
	align="center"
	width="100%"
	border={0}
	cellpadding="0"
	cellspacing="0"
	role="presentation"
	{...props}
	{style}
>
	<tbody style="width: 100%">
		<tr style="width: 100%">
			{@render children?.()}
		</tr>
	</tbody>
</table>
