import fetchAllpage from '@/services/dashboard/fetchAllpage';
import { DashProps } from '@/types/navigation';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Card from './components/Card';
import Header from './components/Header';
import InputElement from './components/InputElement';
import List from './components/List';
import RightSidebar from './components/RightSidebar';
import Tabs from './components/Tabs';
// import CookieManager from '@react-native-cookies/cookies';
// import { BASE_URL } from '@/services/users/fetchAllpage';

const styles = ScaledSheet.create({
	container: {
		backgroundColor: 'gray',
		flex: 1,
		position: 'relative',
	},
});

export default function Dashboard({ navigation }: DashProps) {
	const [showRightBox, setshowRightBox] = useState(false);
	const [showList, setshowList] = useState(false);
	const [currentPage, setcurrentPage] = useState('All');
	const [searchval, setsearchval] = useState('');

	const { data, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ['dashboard', currentPage, searchval],
		queryFn: () => fetchAllpage(currentPage, searchval),
	});

	// useEffect(() => {
	// 	init();
	// }, []);

	const init = async () => {
		// const cookieString = await CookieManager.set(BASE_URL, {
		// 	name: 'adminhtml',
		// 	value: 'h9ku45fdrldfjhjrqn7r8v6j1m',
		// 	domain: 'demo2019.tapclicks.com',
		// 	path: '/',
		// 	expires: 'Wed, 24 Apr 2024 10:06:57 GMT',
		// 	httpOnly: true,
		// 	secure: true,
		// });
		// const response = await CookieManager.get(BASE_URL);
		// const cookiesString = Object.entries(response).map(
		//   ([, value]) => `${value.name}=${value.value}`
		// );
	};
	return (
		<View style={styles.container}>
			<Header handleRightSidebar={setshowRightBox} />
			<InputElement
				onLeftIconPress={() => setshowList(!showList)}
				leftIconName={!showList ? 'list' : 'grid-outline'}
				onChangeText={text => {
					setsearchval(text);
					refetch().catch(() => '');
				}}
			/>
			<Tabs
				handleSwitchTabs={() => {
					refetch().catch(() => '');
				}}
				handleCurrentPage={setcurrentPage}
			/>
			{showRightBox && <RightSidebar onPress={() => setshowRightBox(false)} />}
			{isLoading || isRefetching ? (
				<ActivityIndicator color="black" />
			) : (
				<FlatList
					data={data?.data?.aaData}
					renderItem={({ index, item }) =>
						!showList ? (
							<Card
								key={index}
								data={item}
								onPress={() => navigation.navigate('Record')}
							/>
						) : (
							<List
								key={index}
								data={item}
								onPress={() => navigation.navigate('Record')}
							/>
						)
					}
				/>
			)}
		</View>
	);
}
