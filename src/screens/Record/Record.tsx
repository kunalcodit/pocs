import getAllRecord from '@/services/record/getAllRecord';
import { RecordProps } from '@/types/navigation';
import { RecordPageSchema } from '@/types/schemas/record';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { z } from 'zod';
import InputElement from '../Dashboard/components/InputElement';
import ClicksCategory from './components/ClicksCategory';
import CTRCategory from './components/CTRCategory';
import Header from './components/Header';
import ImpressionsCategory from './components/ImpressionsCategory';
import PlatformPerformance from './components/PlatformPerformance';
import Section from './components/Section';
import SpendCategory from './components/SpendCategory';

const styles = ScaledSheet.create({
	container: {
		backgroundColor: 'gray',
		flex: 1,
		paddingBottom: '20@vs',
	},
	loader: {
		marginTop: '12@vs',
	},
});

type RecordPage = z.infer<typeof RecordPageSchema>;

export default function Record({ route }: RecordProps) {
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ['record', route.params.data.id],
		queryFn: () => getAllRecord(route.params.data.id),
	});

	return (
		<View style={styles.container}>
			<Header />
			{isLoading || isFetching ? (
				<ActivityIndicator style={styles.loader} color="black" size="large" />
			) : (
				<>
					<View>
						<Section data={data.data.page as RecordPage} />
					</View>
					<ScrollView style={styles.container}>
						<InputElement
							leftIconLib={Ionicons}
							leftIconName="calendar-outline"
							rightIconLib={MaterialIcons}
							rightIconName="keyboard-double-arrow-down"
						/>
						<ClicksCategory
							data={data.data.page as RecordPage}
							widgetPageID={route.params.data.id}
						/>
						<CTRCategory
							data={data.data.page as RecordPage}
							widgetPageID={route.params.data.id}
						/>
						<SpendCategory
							data={data.data.page as RecordPage}
							widgetPageID={route.params.data.id}
						/>
						<ImpressionsCategory
							data={data.data.page as RecordPage}
							widgetPageID={route.params.data.id}
						/>
						<PlatformPerformance
							data={data.data.page as RecordPage}
							widgetPageID={route.params.data.id}
						/>
					</ScrollView>
				</>
			)}
		</View>
	);
}
