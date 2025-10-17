<script lang="ts">
	import { styleToString } from '$lib/utils.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type ContainerProps = Omit<HTMLTableAttributes, 'style' | 'class'> & {
		style: StandardProperties;
	};

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
	style={styleToString({ maxWidth: '37.5em', ...style })}
>
	<tbody>
		<tr style="width: 100%">
			<td>{@render children?.()}</td>
		</tr>
	</tbody>
</table>
