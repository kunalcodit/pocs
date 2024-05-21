import { constants } from '@/utils/constants';
import { Text, TextProps, TextStyle } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface TOTextProps extends TextProps {
	style?: TextStyle;
	noOfLines?: number;
}

const styles = ScaledSheet.create({
	text: {
		fontFamily: constants.font.REGULAR,
		fontStyle: 'normal',
		fontSize: 14,
		letterSpacing: -0.25,
	},
});

function TOText({ style, noOfLines, ...props }: TOTextProps) {
	return (
		<Text
			numberOfLines={noOfLines}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			style={{ ...styles.text, color: '#000000', ...style }}
		>
			{props.children}
		</Text>
	);
}

export default TOText;

TOText.defaultProps = {
	style: undefined,
	noOfLines: undefined,
};
