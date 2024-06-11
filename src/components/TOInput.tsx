import { colors } from '@/theme/Colors';
import React from 'react';
import {
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

interface IconProps {
	icon: React.ReactNode;
	onPress: () => void;
}

interface CustomTextInputProps extends TextInputProps {
	leftIcon?: IconProps;
	rightIcon?: IconProps;
}

const styles = ScaledSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.borderDark,
		borderRadius: '12@s',
		paddingHorizontal: '10@s',
		height: '48@s',
		marginVertical: '2%',
	},
	iconContainer: {
		padding: '5@s',
	},
	input: {
		flex: 1,
		fontSize: '14@s',
		paddingHorizontal: '5@s',
		color: colors.text,
		fontFamily: 'Mulish-Regular',
	},
});

function TOInput({
	leftIcon,
	rightIcon,
	style,
	...props
}: CustomTextInputProps) {
	return (
		<View style={[styles.container, style]}>
			{leftIcon && (
				<TouchableOpacity
					onPress={leftIcon.onPress}
					style={styles.iconContainer}
				>
					{leftIcon.icon}
				</TouchableOpacity>
			)}
			<TextInput
				style={styles.input}
				placeholderTextColor={colors.placeholder}
				{...props}
			/>
			{rightIcon && (
				<TouchableOpacity
					onPress={rightIcon.onPress}
					style={styles.iconContainer}
				>
					{rightIcon.icon}
				</TouchableOpacity>
			)}
		</View>
	);
}

export default TOInput;
