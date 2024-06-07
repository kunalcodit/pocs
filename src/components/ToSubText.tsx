import { colors } from '@/theme/Colors';
import { constants } from '@/utils/constants';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';

interface TOTextProps extends TextProps {
	style?: TextStyle;
}

const styles = StyleSheet.create({
	text: {
		fontFamily: constants.font.REGULAR,
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: 14,
		letterSpacing: -0.5,
	},
});

function TOSubText({ style, ...props }: TOTextProps) {
	return (
		<Text style={{ ...styles.text, color: colors.textSecondaryDark, ...style }}>
			{props.children}
		</Text>
	);
}

export default TOSubText;

TOSubText.defaultProps = {
	style: undefined,
};
