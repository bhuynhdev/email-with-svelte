<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type SectionProps = Omit<HTMLTableAttributes, 'style' | 'class'> & {
		style?: StandardProperties;
	};

	let { children, style = {}, ...props }: SectionProps = $props();
</script>

<table
	align="center"
	width="100%"
	border={0}
	cellPadding="0"
	cellSpacing="0"
	role="presentation"
	{...props}
	style={styleToString(style)}
>
	<tbody>
		<tr>
			<td>{@render children?.()}</td>
		</tr>
	</tbody>
</table>
