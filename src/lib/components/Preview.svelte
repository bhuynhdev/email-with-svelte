<script lang="ts">
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type PreviewProps = Omit<SvelteHTMLElements['div'], 'style' | 'class'> & {
		previewText: string;
	};

	const { previewText, ...props }: PreviewProps = $props();

	const renderWhiteSpace = (text: string) => {
		const maxLength = 150;
		if (text.length > maxLength) {
			throw new RangeError(
				`Input exceeds maximum length of ${maxLength} characters. A good practice is to keep this text under 90 characters.`
			);
		}
		const whiteSpaceCodes = '\xa0\u200C\u200B\u200D\u200E\u200F\uFEFF';
		return whiteSpaceCodes.repeat(maxLength - text.length);
	};
</script>

<div
	style={styleToString({
		display: 'none',
		overflow: 'hidden',
		lineHeight: '1px',
		opacity: 0,
		maxHeight: 0,
		maxWidth: 0
	})}
	data-skip-in-text={true}
	{...props}
>
	{previewText}
	{renderWhiteSpace(previewText)}
</div>
