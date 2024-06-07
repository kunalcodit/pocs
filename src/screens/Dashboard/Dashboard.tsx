import fetchAllpage from '@/services/dashboard/fetchAllpage';
import { colors } from '@/theme/Colors';
import { DashProps } from '@/types/navigation';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import {
	ActivityIndicator,
	BackHandler,
	FlatList,
	Keyboard,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Card from './components/Card';
import Header from './components/Header';
import InputElement from './components/InputElement';
import List from './components/List';
import RightSidebar from './components/RightSidebar';
import Tabs from './components/Tabs';

const styles = ScaledSheet.create({
	container: {
		backgroundColor: 'gray',
		flex: 1,
		position: 'relative',
	},
	empty: {
		textAlign: 'center',
		marginTop: '50%',
		fontSize: '20@ms',
		color: 'black',
	},
	pageNumber: {
		position: 'absolute',
		bottom: '14@vs',
		// width: '100%',
		backgroundColor: colors.darkGray,
		left: '105@s',
		// right: 0,
		borderRadius: 100,
		padding: '4@s',
	},
	pageNumberText: {
		textAlign: 'center',
		fontSize: '16@ms',
		padding: '4@s',
		color: 'white',
	},
});

function ListEmptyComponent() {
	return <Text style={styles.empty}>Nothing related found</Text>;
}

export default function Dashboard({ navigation }: DashProps) {
	const [showRightBox, setshowRightBox] = useState(false);
	const [showList, setshowList] = useState(false);
	const [currentPage, setcurrentPage] = useState('All');
	const [searchval, setsearchval] = useState('');
	const [page, setPage] = useState(10);
	const [currentData, setCurrentData] = useState([]);

	const { data, isLoading, refetch, isRefetching, isFetching } = useQuery({
		queryKey: ['dashboard', currentPage, searchval, page],
		queryFn: () => fetchAllpage(currentPage, searchval, page.toString()),
		keepPreviousData: true,
	});

	// const loadMoreData = () => {
	// 	console.log({ page, total: data?.data.iTotalDisplayRecords });
	// 	if (page < (data?.data.iTotalDisplayRecords ?? 0)) {
	// 		setPage(prevPage => prevPage + 10);
	// 		refetch().catch(() => '');
	// 	}
	// };
	const loadMoreData = () => {
		const totalRecords = data?.data?.iTotalDisplayRecords ?? 0;
		const newPage = page + 10;

		if (newPage <= totalRecords) {
			setPage(newPage);
			refetch().catch(() => '');
		} else if (page < totalRecords) {
			setPage(totalRecords);
			refetch().catch(() => '');
		}
	};

	useEffect(() => {
		if (!isFetching) {
			setCurrentData(data?.data?.aaData ?? []);
		}
	}, [data, isFetching]);

	const handleBackPress = useCallback(() => {
		BackHandler.exitApp();
		return true;
	}, []);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			handleBackPress,
		);

		return () => backHandler.remove();
	}, [handleBackPress]);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<Header handleRightSidebar={setshowRightBox} />
				<InputElement
					onLeftIconPress={() => setshowList(!showList)}
					leftIconName={!showList ? 'list' : 'grid-outline'}
					onChangeText={text => {
						setsearchval(text);
						refetch().catch(() => '');
					}}
					rightIconName=""
				/>
				<Tabs
					handleSwitchTabs={() => {
						setPage(10);
						refetch().catch(() => '');
					}}
					handleCurrentPage={setcurrentPage}
				/>
				{showRightBox && (
					<RightSidebar onPress={() => setshowRightBox(false)} />
				)}
				{isLoading || isFetching ? (
					<ActivityIndicator size="large" color="black" />
				) : null}
				<FlatList
					data={currentData}
					// ListEmptyComponent={ListEmptyComponent}
					onEndReached={loadMoreData}
					onEndReachedThreshold={4}
					renderItem={({ index, item }) =>
						!showList ? (
							<Card
								key={index}
								data={item}
								onPress={() => navigation.navigate('Record', { data: item })}
							/>
						) : (
							<List
								key={index}
								data={item}
								onPress={() => navigation.navigate('Record', { data: item })}
							/>
						)
					}
				/>
				{!isLoading && !isRefetching && (
					<View style={styles.pageNumber}>
						<Text style={styles.pageNumberText}>
							Results {page} / {data?.data.iTotalDisplayRecords}
						</Text>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}
