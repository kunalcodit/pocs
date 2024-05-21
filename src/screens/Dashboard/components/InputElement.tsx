import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconType } from 'react-native-vector-icons/Icon'; // Assuming IconType is exported from the icons package

interface InputElementProps {
	leftIconName?: string;
	leftIconLib?: React.ComponentClass<IconType>;
	onLeftIconPress?: () => void;
	rightIconName?: string;
	rightIconLib?: React.ComponentClass<IconType>;
	onRightIconPress?: () => void;
	onChangeText?: (text: string) => void;
}

const InputElement: React.FC<InputElementProps> = ({
	leftIconName = 'list',
	leftIconLib = Ionicons,
	onLeftIconPress = () => {},
	rightIconName = 'up-down-left-right',
	rightIconLib = FontAwesome6,
	onRightIconPress = () => {},
	onChangeText,
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder="Search records ..."
				placeholderTextColor="gray"
				style={styles.input}
				onChangeText={onChangeText}
			/>
			<TouchableOpacity style={styles.icon} onPress={onLeftIconPress}>
				{React.createElement(leftIconLib, {
					name: leftIconName,
					size: 20,
					color: 'blue',
				})}
			</TouchableOpacity>
			<TouchableOpacity style={styles.icon} onPress={onRightIconPress}>
				{React.createElement(rightIconLib, {
					name: rightIconName,
					size: 20,
					color: 'blue',
				})}
			</TouchableOpacity>
		</View>
	);
};

const styles = ScaledSheet.create({
	container: {
		padding: '4%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		backgroundColor: 'white',
		padding: '4%',
		fontSize: '16@s',
		borderRadius: '8@s',
		flex: 1,
	},
	icon: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginLeft: 10,
	},
});

export default InputElement;
