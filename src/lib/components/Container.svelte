<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';

	type ContainerProps = HTMLTableAttributes;

	let { children, style, ...props }: ContainerProps = $props();
</script>

<table
	align="center"
	width="100%"
	{...props}
	border={0}
	cellpadding="0"
	cellspacing="0"
	role="presentation"
	style={`max-width: 37.5em; ${style}`}
>
	<tbody>
		<tr style="width: 100%">
			<td>{@render children?.()}</td>
		</tr>
	</tbody>
</table>
