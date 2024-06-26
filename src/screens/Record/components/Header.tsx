import { colors } from '@/theme/Colors';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<Pressable onPress={() => navigation.navigate('Dashboard')}>
					<View style={styles.rowCenter}>
						<Ionicons name="chevron-back" size={30} />
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

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: '4%',
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '4%',
	},
	rowCenter: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'medium',
		marginLeft: 10,
	},
	rightIcon: {
		backgroundColor: colors.iconBackground,
		padding: 8,
		borderRadius: 50,
		marginRight: 10,
	},
});
