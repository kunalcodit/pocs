import { useState } from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

type Props = {
	handleSwitchTabs: () => void;
	handleCurrentPage: (page: string) => void;
};

const styles = ScaledSheet.create({
	container: {
		padding: '4%',
		// backgroundColor: "white",
	},
	tabContainer: {
		backgroundColor: 'white',
		padding: '1%',
		borderRadius: '8@ms',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	activeTab: {
		borderWidth: 0.5,
		borderColor: 'gray',
		padding: '2%',
		borderRadius: 5,
		fontSize: '18@ms',
		flex: 1,
		textAlign: 'center',
		margin: '2%',
		color: 'black',
	},
	inactiveTab: {
		flex: 1,
		textAlign: 'center',
		fontSize: '18@ms',
		backgroundColor: 'lightgray',
		padding: '2%',
		margin: '1%',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'lightgray',
		color: 'black',
	},
});

export default function Tabs({ handleSwitchTabs, handleCurrentPage }: Props) {
	const [active, setactive] = useState<'All' | 'Shared' | 'Client'>('All');

	return (
		<View style={styles.container}>
			<View style={styles.tabContainer}>
				<Text
					style={active === 'All' ? styles.activeTab : styles.inactiveTab}
					onPress={() => {
						setactive('All');
						handleCurrentPage('All');
						handleSwitchTabs();
					}}
				>
					All
				</Text>
				<Text
					style={active === 'Shared' ? styles.activeTab : styles.inactiveTab}
					onPress={() => {
						setactive('Shared');
						handleCurrentPage('is_shared');
						handleSwitchTabs();
					}}
				>
					Shared
				</Text>
				<Text
					style={active === 'Client' ? styles.activeTab : styles.inactiveTab}
					onPress={() => {
						setactive('Client');
						handleCurrentPage('is_client_page');
						handleSwitchTabs();
					}}
				>
					Client
				</Text>
			</View>
		</View>
	);
}
