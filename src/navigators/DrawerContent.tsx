import { colors } from '@/theme/Colors';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { DrawerActions } from '@react-navigation/native';

const styles = ScaledSheet.create({
	container: {
		backgroundColor: colors.drawerBackground,
		padding: '2%',
	},
	mainBox: {},
	heading: {
		color: colors.drawerPrimary,
		fontSize: '16@s',
		fontWeight: 'bold',
		textTransform: 'uppercase',
		marginTop: '10@vs',
	},
	divider: {
		height: 1,
		backgroundColor: colors.drawerPrimary,
		marginVertical: 10,
	},
	textBox: {
		padding: '4%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		marginLeft: '10@s',
		color: colors.drawerText,
		fontWeight: '500',
		fontSize: '16@s',
	},
});

export default function DrawerContent(props) {
	const list = [
		{
			name: 'Dashboard',
			icon: 'view-dashboard-outline',
			lib: MaterialCommunityIcons,
			onPress: () => props.navigation.navigate('Dashboard'),
		},
		{
			name: 'Report Studio',
			icon: 'chart-bar',
			lib: MaterialCommunityIcons,
			onPress: () => props.navigation.navigate('Dashboard'),
		},
		{
			name: 'Report Scheduler',
			icon: 'clock-rotate-left',
			lib: FontAwesome6,
			onPress: () => props.navigation.navigate('Dashboard'),
		},
	];
	const list2 = [
		{
			name: 'ChatGPT AI Assistance',
			icon: 'robot-outline',
			lib: MaterialCommunityIcons,
			onPress: () => props.navigation.navigate('Dashboard'),
		},
		{
			name: 'Executive Summary',
			icon: 'presentation',
			lib: MaterialCommunityIcons,
			onPress: () => props.navigation.navigate('Dashboard'),
		},
	];

	return (
		<DrawerContentScrollView {...props} style={styles.container}>
			{/* <DrawerItemList {...props} /> */}
			<View style={styles.mainBox}>
				<Fontisto
					name="close-a"
					size={24}
					color={colors.white}
					onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
				/>
				<Text style={styles.heading}>Reporting</Text>
				<View style={styles.divider} />
				{list.map((item, indx) => (
					<Pressable key={indx} style={styles.textBox} onPress={item.onPress}>
						{/* <MaterialCommunityIcons
							name="view-dashboard-outline"
							size={24}
							color={colors.drawerText}
						/> */}
						{React.createElement(item.lib, {
							name: item.icon,
							size: 22,
							color: colors.drawerText,
						})}
						<Text style={styles.text}>{item.name}</Text>
					</Pressable>
				))}
				<Text style={styles.heading}>Reporting Enhancements</Text>
				<View style={styles.divider} />
				{list2.map((item, indx) => (
					<Pressable key={indx} style={styles.textBox} onPress={item.onPress}>
						{/* <MaterialCommunityIcons
							name="view-dashboard-outline"
							size={24}
							color={colors.drawerText}
						/> */}
						{React.createElement(item.lib, {
							name: item.icon,
							size: 22,
							color: colors.drawerText,
						})}
						<Text style={styles.text}>{item.name}</Text>
					</Pressable>
				))}
			</View>
		</DrawerContentScrollView>
	);
}
