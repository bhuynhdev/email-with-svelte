import type { StandardProperties } from "csstype";

// Credit: https://stackoverflow.com/a/61410824
export const styleToString = (style: StandardProperties) => {
	return Object.keys(style).reduce(
		(acc, key) =>
			acc +
			key
				.split(/(?=[A-Z])/)
				.join('-')
				.toLowerCase() +
			':' +
			style[key as keyof typeof style] +
			';',
		''
	);
};
