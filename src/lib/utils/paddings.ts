import type { StandardProperties } from 'csstype';
type PaddingType = StandardProperties['paddingTop'];

interface PaddingProperties {
	padding?: PaddingType;
	paddingTop?: PaddingType;
	paddingRight?: PaddingType;
	paddingBottom?: PaddingType;
	paddingLeft?: PaddingType;
}

interface PaddingResult {
	paddingTop: PaddingType;
	paddingRight: PaddingType;
	paddingBottom: PaddingType;
	paddingLeft: PaddingType;
}

/**
 * converts padding value to `px` equivalent.
 * @example "1em" =\> 16
 */
export function convertToPx(value: PaddingType) {
	let px = 0;

	if (!value) {
		return px;
	}

	if (typeof value === 'number') {
		return value;
	}

	const matches = /^([\d.]+)(px|em|rem|%)$/.exec(value);

	if (matches && matches.length === 3) {
		const numValue = Number.parseFloat(matches[1]);
		const unit = matches[2];

		switch (unit) {
			case 'px':
				return numValue;
			case 'em':
			case 'rem':
				px = numValue * 16;
				return px;
			case '%':
				const elementWidth = 500; // We can't really know element width, so we default estimate 500px
				px = (numValue / 100) * elementWidth;
				return px;
			default:
				return numValue;
		}
	}
	return 0;
}

function parsePaddingValue(value: PaddingType) {
	if (typeof value === 'number')
		return {
			paddingTop: value,
			paddingBottom: value,
			paddingLeft: value,
			paddingRight: value
		};

	if (typeof value === 'string') {
		const values = value.toString().trim().split(/\s+/);

		if (values.length === 1) {
			return {
				paddingTop: values[0],
				paddingBottom: values[0],
				paddingLeft: values[0],
				paddingRight: values[0]
			};
		}

		if (values.length === 2) {
			return {
				paddingTop: values[0],
				paddingRight: values[1],
				paddingBottom: values[0],
				paddingLeft: values[1]
			};
		}

		if (values.length === 3) {
			return {
				paddingTop: values[0],
				paddingRight: values[1],
				paddingBottom: values[2],
				paddingLeft: values[1]
			};
		}

		if (values.length === 4) {
			return {
				paddingTop: values[0],
				paddingRight: values[1],
				paddingBottom: values[2],
				paddingLeft: values[3]
			};
		}
	}

	return {
		paddingTop: undefined,
		paddingBottom: undefined,
		paddingLeft: undefined,
		paddingRight: undefined
	};
}

/**
 * Parses all the values out of a padding string to get the value for all padding props in `px`
 * @example e.g. "10px" =\> pt: 10, pr: 10, pb: 10, pl: 10
 */
export function parsePadding(properties: PaddingProperties) {
	let paddingsResult: PaddingResult = {
		paddingTop: undefined,
		paddingRight: undefined,
		paddingBottom: undefined,
		paddingLeft: undefined
	};

	for (const [key, value] of Object.entries(properties)) {
		if (key === 'padding') {
			paddingsResult = parsePaddingValue(value);
		} else if (key === 'paddingTop') {
			paddingsResult.paddingTop = value;
		} else if (key === 'paddingRight') {
			paddingsResult.paddingRight = value;
		} else if (key === 'paddingBottom') {
			paddingsResult.paddingBottom = value;
		} else if (key === 'paddingLeft') {
			paddingsResult.paddingLeft = value;
		}
	}

	const { paddingTop, paddingRight, paddingBottom, paddingLeft } = paddingsResult;

	const paddingsInPx = {
		paddingTop: paddingTop ? convertToPx(paddingTop) : undefined,
		paddingRight: paddingRight ? convertToPx(paddingRight) : undefined,
		paddingBottom: paddingBottom ? convertToPx(paddingBottom) : undefined,
		paddingLeft: paddingLeft ? convertToPx(paddingLeft) : undefined
	};

	return { paddingsInPx, paddingsInString: paddingsResult };
}
