import { colors } from '@/theme/Colors';
import { useNavigation } from '@react-navigation/native';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = ScaledSheet.create({
	container: {
		backgroundColor: 'white',
		// padding: '4%',
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// padding: '4%',
		paddingVertical: '4%',
		// paddingVertical: Platform.OS === 'ios' ? '2%' : 0,
	},
	rowCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 10,
		color: 'black',
	},
	rightIcon: {
		backgroundColor: colors.iconBackground,
		padding: 8,
		borderRadius: 50,
		marginRight: 10,
	},
});

export default function Header() {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Pressable onPress={() => navigation.goBack()}>
					<View style={styles.rowCenter}>
						<Ionicons name="chevron-back" size={30} color="black" />
						<Text style={styles.headerText}>Records</Text>
					</View>
				</Pressable>
				<View style={styles.rowCenter}>
					<View style={styles.rightIcon}>
						<MaterialCommunityIcons
							name="robot-outline"
							size={24}
							color="orange"
						/>
					</View>
					<View style={styles.rightIcon}>
						<Ionicons name="download" size={24} color={colors.blue} />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
