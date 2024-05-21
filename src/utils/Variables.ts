/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
// import produce from 'immer';

import { lightenDarkenColor } from '@/utils';

export interface ColorsPalette {
	primary?: string;
	secondary?: string;
	background?: string;
	backgroundDark?: string;
	transparent?: string;
	border?: string;
	text?: string;
	textSecondary?: string;
	textSecondaryDark?: string;
	textLight?: string;
	textLightSecondary?: string;
	inputBackground: string;
	success?: string;
	successLight?: string;
	warning?: string;
	warningLight?: string;
	warningSecondary?: string;
	warningSecondaryLight?: string;
	danger?: string;
	dangerLight?: string;
	whiteSmoke: string;
	darkGray: string;
	quartz: string;
	cultured: string;
}

export const regularFont: Font = {
	fontFamily: 'Mulish-Regular',
};

const defaultLocalThemeData: ApiThemeModel = {
	currentLogoUrl: '',
	darkLogoUrl: '',
	lightLogoUrl: '',
	currentThemeColor: '#1D6CF0',
	primaryThemeColor: '#0071E3',
	secondaryThemeColor: '#FBC400',
	themeType: 'light',
};

export const colors1Light: ColorsPalette = {
	primary: defaultLocalThemeData.primaryThemeColor ?? '#0071E3',
	secondary: defaultLocalThemeData.secondaryThemeColor ?? '#FBC400',
	background: '#ffffff',
	backgroundDark: '#f6f6f6',
	transparent: 'rgba(0,0,0,0)',
	border: '#E8E8E8',
	text: '#000000',
	textSecondary: '#CACACA',
	textSecondaryDark: '#AEB0BC',
	textLight: '#ffffff',
	textLightSecondary: '#DEDEF4',
	inputBackground: '#FFFFFF',
	success: '#34814B',
	successLight: '#EBF9F4',
	warning: '#FFA700',
	warningLight: '#FFF2D9',
	warningSecondary: '#FF7A00',
	warningSecondaryLight: '#fcd8b8',
	danger: '#FE3D3C',
	dangerLight: '#fe3d3c26',
	whiteSmoke: '#f5f5f5',
	darkGray: '#A8A8A8',
	quartz: '#4B4B4B',
	cultured: '#F7F7F7',
};

export const colors1Dark: ColorsPalette = {
	primary: defaultLocalThemeData.primaryThemeColor ?? '#0071E3',
	secondary: defaultLocalThemeData.secondaryThemeColor ?? '#FBC400',
	background: lightenDarkenColor('#000000', 50),
	backgroundDark: lightenDarkenColor('#000000', 20),
	transparent: 'rgba(0,0,0,0)',
	text: '#F5F5F5',
	textSecondary: lightenDarkenColor('#000000', 100),
	textSecondaryDark: lightenDarkenColor('#000000', 150),
	border: lightenDarkenColor('#000000', 90),
	textLight: '#000000',
	textLightSecondary: lightenDarkenColor('#000000', 20),
	inputBackground: lightenDarkenColor('#000000', 50),
	success: '#34814B',
	successLight: '#EBF9F4',
	warning: '#fcfacc',
	warningLight: '#FFA700',
	warningSecondary: '#ffcb9e',
	warningSecondaryLight: '#FF7A00',
	danger: lightenDarkenColor('#FE3D3C', 50),
	dangerLight: '#fe3d3c26',
	whiteSmoke: '#f5f5f5',
	darkGray: '#A8A8A8',
	quartz: '#4B4B4B',
	cultured: '#F7F7F7',
};

export const Colors = colors1Light;
export const DarkColors = colors1Dark;

export const NavigationColors = {
	primary: Colors.primary,
};

/**
 * FontSize
 */
export const FontSize = {
	extraSmall: 14,
	small: 16,
	regular: 20,
	large: 40,
};

/**
 * Metrics Sizes
 */
const tiny = 5;
const small = tiny * 2; // 10
const regular = tiny * 2; // 20
const large = regular * 2; // 40
export const MetricsSizes = {
	tiny,
	small,
	regular,
	large,
};

export const lightTheme = { Colors, NavigationColors, FontSize, MetricsSizes };
export const darkTheme = {
	DarkColors,
	NavigationColors,
	FontSize,
	MetricsSizes,
};

// export const DefaultLightThemeColorClone = produce(
// 	defaultLocalThemeData,
// 	() => {},
// );
