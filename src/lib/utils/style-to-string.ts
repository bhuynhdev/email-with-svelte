import type { StandardProperties } from 'csstype';

// Credit: https://stackoverflow.com/a/61410824
// Modified to ignore `undefined/null` keys and use Array.join for better memory efficiency
export const styleToString = (style: StandardProperties) => {
	return Object.entries(style)
		.filter(([_, value]) => value != null) // Use `!=` (instead of !==) to filter out both null and undefined
		.map(([key, value]) => {
			const camelCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
			const cssRuleString = `${camelCaseKey}:${value};`;
			return cssRuleString;
		})
		.join('');
};
