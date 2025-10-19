<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import type { StandardProperties } from 'csstype';
	import { styleToString } from '$lib/utils/style-to-string.js';

	type BodyProps = Omit<SvelteHTMLElements['body'], 'style' | 'class'> & {
		style: StandardProperties;
	};

	let { children, style, ...props }: BodyProps = $props();
</script>

<body {...props}>
	<table border={0} width="100%" cellpadding="0" cellspacing="0" role="presentation" align="center">
		<tbody>
			<tr>
				<!-- Yahoo and AOL remove all styles of the body element while converting it to a div, -->
				<!-- so we need to apply them to to an inner cell. https://github.com/resend/react-email/issues/662 -->
				<td style={styleToString(style)}>
					{@render children?.()}
				</td>
			</tr>
		</tbody>
	</table>
</body>
