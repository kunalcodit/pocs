// import { openDrawer } from '@/navigators/Sidebar';
import { colors } from '@/theme/Colors';
import { navigationRef } from '@/types/navigation';
import { DrawerActions } from '@react-navigation/native';

import {
	Image,
	Platform,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BellIcon from '@/assets/images/BellRinging.png';

type HeaderProps = {
	handleRightSidebar: (value: boolean) => void;
};

const styles = ScaledSheet.create({
	container: {
		backgroundColor: 'white',
		padding: '4%',
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		// padding: '4%',
		paddingVertical: Platform.OS === 'ios' ? '2%' : 0,
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

/**
 * This is for opening the Drawer by Navigation Ref
 */
function openDrawer() {
	navigationRef.dispatch(DrawerActions.openDrawer());
}

export default function Header({ handleRightSidebar }: HeaderProps) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.rowCenter}>
					<Ionicons name="menu" size={30} onPress={openDrawer} color="black" />
					<Text style={styles.headerText}>Dashboards</Text>
				</View>
				<View style={styles.rowCenter}>
					<View style={styles.rightIcon}>
						{/* <Ionicons
							name="notifications-outline"
							size={24}
							color={colors.orange}
						/> */}
						<Image source={BellIcon} alt="BellRinging" />
					</View>
					<TouchableOpacity
						style={styles.rightIcon}
						onPress={() => handleRightSidebar(true)}
					>
						<Ionicons name="person" size={24} color={colors.gray} />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
