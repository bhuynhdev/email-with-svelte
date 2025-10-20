<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLTdAttributes } from 'svelte/elements';

	type ColumnProps = Omit<HTMLTdAttributes, 'style' | 'class'> & {
		style?: StandardProperties;
	};

	let { children, style = {}, ...props }: ColumnProps = $props();
</script>

<td {...props} data-id="__ems-column" style={styleToString(style)}>
	{@render children?.()}
</td>
