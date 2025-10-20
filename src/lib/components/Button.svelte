<script lang="ts">
	import { parsePadding } from '$lib/utils/paddings.js';
	import { styleToString } from '$lib/utils/style-to-string.js';
	import type { StandardProperties } from 'csstype';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type ButtonProps = Omit<HTMLAnchorAttributes, 'style' | 'class'> & {
		style?: StandardProperties & { msoPaddingAlt?: string };
	};

	let { children, target = '_blank', href = '#', style, ...props }: ButtonProps = $props();

	// To display a CTA button with paddings, we follow this technique: https://www.goodemailcode.com/email-code/link-button
	// Which uses `mso-font-width` and `mso-text-raise` with `&emsp;` character(s) to simulate padding for MSO clients
	// We also employ some slight modifications:
	//  - Use direct `px` value for `mso-font-width` and `mso-text-raise` instead of percentage
	//  - Wrap a <span> element around the children text directly instead of putting it inside the `[if mso]` comment (so that we can style this <span> easier for all clients)

	/**
	 * The `mso-font-width` value is maximum 500% only, so if the padding width is greater than 500% * 16px, we need to insert additional emp space chars
	 * Therefore, this function calculates how many emp spaces are needed
	 */
	function calculateFontWidthAndEmpSpaces(expectedWidthInPx: number) {
		if (expectedWidthInPx === 0) return [0, 0] as const;
		const MAX_FONT_WIDTH = 5 * 16;
		const empSpacesNeeded = Math.ceil(expectedWidthInPx / MAX_FONT_WIDTH);
		const fontWidth = expectedWidthInPx / empSpacesNeeded;
		return [fontWidth, empSpacesNeeded] as const;
	}

	const {
		paddingsInString,
		paddingsInPx: { paddingTop, paddingRight, paddingBottom, paddingLeft }
	} = parsePadding(style ?? {});

	const [plFontWidth, plSpaceCount] = calculateFontWidthAndEmpSpaces(paddingLeft ?? 0);
	const [prFontWidth, prSpaceCount] = calculateFontWidthAndEmpSpaces(paddingRight ?? 0);

	const plEmpSpaces = '&emsp;'.repeat(plSpaceCount);
	const prEmpSpaces = '&emsp;'.repeat(prSpaceCount);

	const pbTextRaise = paddingBottom ?? 0;
	const ptTextRaise = (paddingTop ?? 0) + (paddingBottom ?? 0);

	const paddingLeftAndTopMsoComment = `<!--[if mso]><i style="mso-font-width:${plFontWidth}px;mso-text-raise:${ptTextRaise}px" hidden>&#8203;${plEmpSpaces}</i><![endif]-->`;
	const paddingRightMsoComment = `<!--[if mso]><i style="mso-font-width:${prFontWidth}px;" hidden>${prEmpSpaces}&#8203;</i><![endif]-->`;
</script>

<a
	{...props}
	{href}
	style={styleToString({
		lineHeight: '100%',
		textDecoration: 'none',
		display: 'inline-block',
		maxWidth: '100%',
		msoPaddingAlt: '0px',
		...style,
		...paddingsInString
	})}
	{target}
>
	{@html paddingLeftAndTopMsoComment}
	<span
		style={styleToString({
			maxWidth: '100%',
			display: 'inline-block',
			lineHeight: '120%',
			msoPaddingAlt: '0px',
			msoTextRaise: `${pbTextRaise}px`
		})}
	>
		{@render children?.()}
	</span>
	{@html paddingRightMsoComment}
</a>
