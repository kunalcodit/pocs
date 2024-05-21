import { ColorsPalette } from '@/theme/helpers';
import { Alert, Platform, StyleProp, ViewStyle } from 'react-native';
import { showMessage, MessageOptions } from 'react-native-flash-message';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';
import FileViewer from 'react-native-file-viewer';
import { constants } from './constants';

export const differenceOfDates = (createdAtDate: string) => {
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	const firstDate = new Date().getTime();
	const secondDate = new Date(createdAtDate).getTime();

	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
	return diffDays;
};

export const lightenDarkenColor = (col: string, amt: number) => {
	var usePound = false;
	if (col[0] === '#') {
		col = col.slice(1);
		usePound = true;
	}
	var num = parseInt(col, 16);
	// eslint-disable-next-line no-bitwise
	var r = (num >> 16) + amt;
	if (r > 255) {
		r = 255;
	} else if (r < 0) {
		r = 0;
	}
	// eslint-disable-next-line no-bitwise
	var b = ((num >> 8) & 0x00ff) + amt;
	if (b > 255) {
		b = 255;
	} else if (b < 0) {
		b = 0;
	}
	// eslint-disable-next-line no-bitwise
	var g = (num & 0x0000ff) + amt;
	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}
	// eslint-disable-next-line no-bitwise
	return (
		(usePound ? '#' : constants.strings.EMPTY_STRING) +
		(g | (b << 8) | (r << 16)).toString(16)
	);
};

export const hexToRGB = (hex: string, alpha?: number) => {
	var r = parseInt(hex.slice(1, 3), 16),
		g = parseInt(hex.slice(3, 5), 16),
		b = parseInt(hex.slice(5, 7), 16);

	if (alpha) {
		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
	} else {
		return 'rgb(' + r + ', ' + g + ', ' + b + ')';
	}
};

export const replaceTaskAndOrderIdInUrl = (
	url: string,
	taskId: string,
	orderId: string,
): string => {
	return url.replace('<task_id>', taskId).replace('<order_id>', orderId);
};

export const replaceLineItemIdInUrl = (
	url: string,
	lineItemId: string,
): string => {
	return url.replace('<line_item_id>', lineItemId);
};

export const replaceRequestOrderIdInUrl = (
	url: string,
	orderId: string,
): string => {
	return url.replace('<order_id>', orderId);
};

export const replaceTaskAndLineItemIDAndFlightIdInUrl = (
	url: string,
	taskId: string,
	lineItemId: string,
	flightId: string,
): string => {
	return url
		.replace('<task_id>', taskId)
		.replace('<line_item_id>', lineItemId)
		.replace('<flight_id>', flightId);
};

export const formatTODate = (date?: Date | string | null): string => {
	if (!date) {
		return constants.strings.EMPTY_STRING;
	}

	const dateObj = date instanceof Date ? date : new Date(date);
	const month = dateObj.getUTCMonth() + 1;
	const day = dateObj.getUTCDate();
	const year = dateObj.getUTCFullYear().toString().slice(-2);

	return `${month}/${day}/${year}`;
};

export const getDateFormatYYYYMMDD = (dateValue: string | number | Date) => {
	const dateObj = new Date(dateValue);
	const month = (dateObj.getUTCMonth() + 1)
		.toString()
		.padStart(2, constants.strings.NUMERIC_ZERO);
	const day = dateObj
		.getUTCDate()
		.toString()
		.padStart(2, constants.strings.NUMERIC_ZERO);
	const year = dateObj.getUTCFullYear().toString();
	return `${year}-${month}-${day}`;
};

export const formatTODayTime = (date?: string | null): string => {
	if (!date) {
		return constants.strings.EMPTY_STRING;
	}
	const dateObj = new Date(date);
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	};
	const formattedDate = dateObj.toLocaleString('en-US', options);
	const dateYear = date.split(constants.strings.SINGLE_SPACE)[0];
	return dateYear + constants.strings.SINGLE_SPACE + formattedDate;
};

export const getInitial = (value: string, limit = 2): string => {
	if (!value) {
		return 'NA';
	}
	const words = value.split(constants.strings.SINGLE_SPACE);
	let initials = constants.strings.EMPTY_STRING;

	if (words.length > limit) {
		for (let i = 0; i < limit; i++) {
			initials += words[i].charAt(0);
		}
	} else {
		initials = words
			.map(word => word.charAt(0))
			.join(constants.strings.EMPTY_STRING);
	}
	return initials.toUpperCase();
};

type FlashMessageParams = {
	message: string;
	type?: 'success' | 'info' | 'warning' | 'danger' | 'none' | 'default';
	style?: StyleProp<ViewStyle>;
};

export const showFlashMessage = ({
	message,
	type = 'default',
	style = {
		borderRadius: 10,
		margin: 10,
	},
}: FlashMessageParams) => {
	style = { ...(style as object) };
	const messageOptions: MessageOptions = {
		message,
		type: type ?? 'default',
		style: { ...style },
		// textStyle: { color: 'blue' },
	};
	showMessage(messageOptions);
};

export const getColorByType = (type: string, colors: ColorsPalette): any => {
	let textColor: string | undefined;
	let backgroundColor: string | undefined;
	if (type === constants.strings.STATUS_SUCCESS) {
		textColor = colors.success;
		backgroundColor = colors.successLight;
	} else if (type === constants.strings.STATUS_DANGER) {
		textColor = colors.danger;
		backgroundColor = colors.dangerLight;
	} else if (type === constants.strings.STATUS_WARNING) {
		textColor = colors.warning;
		backgroundColor = colors.warningLight;
	}
	if (!backgroundColor) {
		return null;
	}
	return {
		textColor,
		backgroundColor,
	};
};

export const previewFile = (fileUrl: string) => {
	const ext = fileUrl
		?.split(/[#?]/)[0]
		?.split(constants.strings.PERIOD)
		?.pop()
		?.trim();
	return new Promise((resolve, reject) => {
		RNFetchBlob.config({
			fileCache: true,
			appendExt: ext,
		})
			.fetch('GET', fileUrl)
			.then(res => {
				setTimeout(() => {
					FileViewer.open(
						Platform.OS === constants.strings.ANDROID
							? constants.strings.FILE_EXT_2 + res.path()
							: constants.strings.EMPTY_STRING + res.path(),
						{
							showOpenWithDialog: true,
							onDismiss: () => RNFetchBlob.fs.unlink(res.path()),
						},
					);
				}, 100);
				resolve(true);
			})
			.catch(err => {
				Alert.alert('No app associated with this doc type');
				reject(err);
			});
	});
};

export const shareFile = async (url: string) => {
	try {
		const options = {
			title: 'Share File',
			message: 'Check out this document!',
			url: url,
		};

		await Share.open(options);
	} catch (error) {
		console.error('error', error);
	}
};

export const formatDateToMMMDDYYYY = (date: string) => {
	let year, month, day;

	if (date === null || date === undefined) {
		return constants.strings.HYPHEN;
	} else if (date?.includes('-')) {
		// Input is in the "YYYY-MM-DD HH:mm:ss" format
		const parts = date?.split(/[- :]/);
		year = parseInt(parts[0], 10).toString().slice(-2);
		month = parseInt(parts[1], 10);
		day = parseInt(parts[2], 10);
	} else if (date?.includes('/')) {
		// Input is in the "MM/DD/YY" format
		const parts = date?.split('/');
		year = parseInt(parts[2], 10);
		month = parseInt(parts[0], 10);
		day = parseInt(parts[1], 10);
	} else {
		return constants.strings.HYPHEN;
	}

	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	return `${months[month - 1]} ${day}, 20${year}`;
};

// export const formatDateDifference = (createdAtDate: string) => {
//   const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
//   const oneMonth = 30.44 * oneDay // Average days in a month

//   const currentDate = new Date()
//   const createdDate = new Date(createdAtDate)

//   const timeDifference = currentDate.getTime() - createdDate.getTime()
//   const daysAgo = Math.floor(timeDifference / oneDay)
//   const monthsAgo = Math.floor(timeDifference / oneMonth)
//   const yearsAgo = Math.floor(monthsAgo / 12)

//   if (yearsAgo > 0) {
//     return `${yearsAgo} ${yearsAgo === 1 ? 'year' : 'years'} ago`
//   } else if (monthsAgo > 0) {
//     return `${monthsAgo} ${monthsAgo === 1 ? 'month' : 'months'} ago`
//   } else {
//     return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`
//   }
// }

export function formatInWeekAndTime(inputDate: string) {
	const date = new Date(inputDate);

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const dayOfWeek = daysOfWeek[date.getDay()];

	let hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'PM' : 'AM';
	hours = hours % 12;
	hours = hours ? hours : 12;

	const formattedTime = `${hours}:${
		minutes < 10 ? constants.strings.NUMERIC_ZERO + minutes : minutes
	} ${ampm}`;

	const formattedDate = `${dayOfWeek}, ${formattedTime}`;
	return formattedDate;
}

export function formatBytes(bytes: number | null | undefined) {
	if (bytes == null || bytes === undefined) {
		return 'N.A.';
	}

	const sizes = ['bytes', 'KB', 'MB'];
	if (bytes === 0) return '0 bytes';
	const i = Math.floor(Math.log(bytes) / Math.log(1024));

	if (i === 0) {
		return bytes + constants.strings.SINGLE_SPACE + sizes[i];
	} else {
		return (
			(bytes / Math.pow(1024, i)).toFixed(2) +
			constants.strings.SINGLE_SPACE +
			sizes[i]
		);
	}
}

export function isNumeric(value: string) {
	return /^-?\d+$/.test(value);
}

export function isObject(variable: string) {
	return (
		typeof variable === 'object' &&
		variable !== null &&
		!Array.isArray(variable)
	);
}

export function convertToAMPM(timeString: string): string {
	const [hours, minutes, seconds] = timeString.split(':');
	let formattedHours: number = parseInt(hours, 10);
	let ampm: string = constants.strings.EMPTY_STRING;

	const is12HourFormat: boolean = formattedHours > 12;

	// Format hours
	if (is12HourFormat) {
		ampm = 'PM';
		formattedHours = formattedHours % 12 || 12;
	} else {
		ampm = 'AM';
	}

	const formattedHoursString: string =
		formattedHours < 10
			? constants.strings.NUMERIC_ZERO + formattedHours
			: String(formattedHours);
	return `${formattedHoursString}:${minutes} ${ampm}`;
}
