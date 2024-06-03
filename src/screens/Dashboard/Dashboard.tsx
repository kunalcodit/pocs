import fetchAllpage from '@/services/dashboard/fetchAllpage';
import { DashProps } from '@/types/navigation';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Card from './components/Card';
import Header from './components/Header';
import InputElement from './components/InputElement';
import List from './components/List';
import RightSidebar from './components/RightSidebar';
import Tabs from './components/Tabs';
import { colors } from '@/theme/Colors';
import fetchUser from '@/services/auth/fetchUser';

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

	const { data, isLoading, refetch, isRefetching } = useQuery({
		queryKey: ['dashboard', currentPage, searchval, page],
		queryFn: () => fetchAllpage(currentPage, searchval, page.toString()),
		keepPreviousData: true,
	});

	const loadMoreData = () => {
		if (page < (data?.data.iTotalDisplayRecords ?? 0)) {
			setPage(prevPage => prevPage + 10);
			refetch().catch(() => '');
		}
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
			{isLoading || isRefetching ? <ActivityIndicator color="black" /> : null}
			<FlatList
				data={data?.data?.aaData ?? []}
				ListEmptyComponent={ListEmptyComponent}
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
	);
}
