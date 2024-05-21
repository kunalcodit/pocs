import React from 'react';
import {
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
	ActivityIndicator,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface TOButtonProps {
	title: string;
	onPress: () => void;
	buttonType?: 'rounded' | 'square';
	buttonStyle?: ViewStyle;
	textStyle?: TextStyle;
	loading?: boolean;
	indicatorColor?: string;
}

function TOButton({
	title,
	onPress,
	buttonType = 'square',
	buttonStyle,
	textStyle,
	loading = false,
	indicatorColor = '#ffffff',
}: TOButtonProps) {
	const getButtonStyle = () => {
		switch (buttonType) {
			case 'rounded':
				return styles.roundedButton;
			case 'square':
			default:
				return styles.squareButton;
		}
	};

	return (
		<TouchableOpacity
			onPress={!loading ? onPress : undefined}
			style={[getButtonStyle(), buttonStyle]}
			activeOpacity={loading ? 1 : 0.7}
		>
			{loading ? (
				<ActivityIndicator size="small" color={indicatorColor} />
			) : (
				<Text style={[styles.buttonText, textStyle]}>{title}</Text>
			)}
		</TouchableOpacity>
	);
}

const styles = ScaledSheet.create({
	roundedButton: {
		borderRadius: '25@s',
		paddingVertical: '10@s',
		paddingHorizontal: '20@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	squareButton: {
		borderRadius: '5@s',
		paddingVertical: '10@s',
		paddingHorizontal: '20@s',
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: '14@s',
		textAlign: 'center',
	},
});

export default TOButton;
