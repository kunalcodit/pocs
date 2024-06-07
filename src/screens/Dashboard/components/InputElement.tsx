import React from 'react';
import {
	Keyboard,
	Platform,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconType } from 'react-native-vector-icons/Icon';

interface InputElementProps {
	leftIconName?: string;
	leftIconLib?: React.ComponentClass<IconType>;
	onLeftIconPress?: () => void;
	rightIconName?: string;
	rightIconLib?: React.ComponentClass<IconType>;
	onRightIconPress?: () => void;
	onChangeText?: (text: string) => void;
}

// eslint-disable-next-line react/function-component-definition
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
			<View style={styles.searchIcon}>
				<Ionicons name="search" size={20} style={styles.searchIconElement} />
				<TextInput
					placeholder="Search records ..."
					placeholderTextColor="gray"
					style={styles.input}
					onChangeText={onChangeText}
				/>
			</View>
			{leftIconName !== '' && (
				<TouchableOpacity style={styles.icon} onPress={onLeftIconPress}>
					{React.createElement(leftIconLib, {
						name: leftIconName,
						size: 20,
						color: 'blue',
					})}
				</TouchableOpacity>
			)}
			{rightIconName !== '' && (
				<TouchableOpacity style={styles.icon} onPress={onRightIconPress}>
					{React.createElement(rightIconLib, {
						name: rightIconName,
						size: 20,
						color: 'blue',
					})}
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = ScaledSheet.create({
	container: {
		padding: '4%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// borderWidth: 1,
		paddingBottom: 0,
	},

	icon: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginLeft: 10,
	},
	searchIcon: {
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center',
		padding: Platform.OS === 'android' ? 0 : 10,
		fontSize: '16@s',
		borderRadius: '8@s',
		flex: 1,
		// marginRight: 10,
	},
	searchIconElement: {
		marginHorizontal: '4@s',
	},
	input: {
		fontSize: '16@s',
		flex: 1,
		// padding: 6,
		padding: Platform.OS === 'ios' ? 0 : 6,
	},
});

export default InputElement;
