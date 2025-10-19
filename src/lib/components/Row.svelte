<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLTableAttributes } from 'svelte/elements';

	type RowProps = Omit<HTMLTableAttributes, 'style' | 'class'> & {
		style: StandardProperties;
	};

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
	style={styleToString(style)}
>
	<tbody style="width: 100%">
		<tr style="width: 100%">
			{@render children?.()}
		</tr>
	</tbody>
</table>
