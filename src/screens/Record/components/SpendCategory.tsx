import getClicks from '@/services/record/getClicks';
import { colors } from '@/theme/Colors';
import { RecordPageSchema } from '@/types/schemas/record';
import findWidgets from '@/utils/findWidgets';
import { useQuery } from '@tanstack/react-query';
import {
	Collapse,
	CollapseBody,
	CollapseHeader,
} from 'accordion-collapse-react-native';
import { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { ScaledSheet, vs } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { z } from 'zod';
import AmLineChart from '../charts/AMLineChart';

type Props = {
	data: z.infer<typeof RecordPageSchema>;
	widgetPageID: string;
};

export default function Category(props: Props) {
	const { data, widgetPageID } = props;
	const [isExpanded, setisExpanded] = useState(true);
	const titleIconName = !isExpanded ? 'chevron-up' : 'chevron-down';

	const totalwidget = findWidgets(data.layouts, 'Total Spend');
	const trendwidget = findWidgets(data.layouts, 'Spend Monthly Trend');

	const clicksRes = useQuery({
		queryKey: ['record-spend', widgetPageID],
		queryFn: () => getClicks(totalwidget[0], widgetPageID),
	});
	const trendRes = useQuery({
		queryKey: ['record-spend-trend', widgetPageID],
		queryFn: () => getClicks(trendwidget[0], widgetPageID),
	});

	if (
		clicksRes.isLoading ||
		clicksRes.isFetching ||
		trendRes.isLoading ||
		trendRes.isFetching
	) {
		return <ActivityIndicator color="black" />;
	}

	if (clicksRes.isError || trendRes.isError) {
		return null;
	}

	const chartData = trendRes?.data?.data.map(
		(item: { log_date: number; ClickCount: string }) => ({
			date: new Date(item.log_date * 1000).toISOString(),
			ClickCount: parseInt(item.SpendCount, 10),
		}),
	);

	// const data: LineChartData = {
	// 	labels: ['January', 'February', 'March'],
	// 	datasets: [
	// 		{
	// 			data: [20, 15, 10],
	// 			// color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
	// 			// strokeWidth: 2, // optional
	// 		},
	// 	],
	// 	// legend: ["Clicks Monthly Trends"], // optional
	// };
	return (
		<View>
			<Collapse
				style={styles.container}
				isExpanded={isExpanded}
				onToggle={isExpanded => setisExpanded(isExpanded)}
			>
				<CollapseHeader>
					<View style={styles.textBox}>
						<Text style={styles.captionText}>Category:</Text>
						<View style={styles.textBox}>
							<Text style={styles.text}> Spend</Text>
							<Ionicons name={titleIconName} size={20} color="black" />
						</View>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.cardContainer}>
						{/* <View style={styles.card}>
              <Text style={styles.headertext}>dsf</Text>
              <Text style={styles.subtitle}>(Jan 26,2024 - Feb 01,2024)</Text>
              <Text style={styles.number}>9.76%</Text>
              <Text style={styles.numberInfo}>CTR</Text>
            </View> */}
						<View style={styles.card}>
							<Text style={styles.headertext}>Spend Monthly Trend</Text>
							{/* <Image
                source={{
                  uri: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
                }}
                style={styles.image}
              /> */}
							{/* <LineChart
								data={data}
								width={screenWidth}
								height={vs(80)}
								chartConfig={chartConfig}
								bezier
								withInnerLines={false}
							/> */}
							<View style={{ height: vs(100) }}>
								<AmLineChart data={chartData} />
							</View>
							<View style={styles.cardContainer}>
								<View>
									<Text style={styles.headertext}>Total Spend</Text>
									<Text style={styles.subtitle}>
										(Jan 26,2024 - Feb 01,2024)
									</Text>
								</View>
								<View>
									<Text style={styles.number}>
										{clicksRes.data.data[0]?.SpendCount}%
									</Text>
									<Text style={styles.numberInfo}>SPEND</Text>
								</View>
							</View>
						</View>
					</View>
				</CollapseBody>
			</Collapse>
		</View>
	);
}

const styles = ScaledSheet.create({
	container: {
		backgroundColor: '#eff6ff',
		padding: '2%',
		marginTop: '2%',
	},
	textBox: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	text: {
		color: colors.blue,
	},
	card: {
		backgroundColor: 'white',
		paddingHorizontal: '4%',
		paddingVertical: '2%',
		flex: 1,
		margin: '1%',
		borderRadius: 10,
	},
	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headertext: {
		color: '#FF8C00',
		fontWeight: '500',
		fontSize: '14@ms',
	},
	subtitle: {
		color: colors.gray,
		fontSize: '8@ms',
	},
	number: {
		fontSize: '20@ms',
		fontWeight: '500',
		color: colors.blue,
	},
	numberInfo: {
		color: colors.blue,
		fontSize: '14@ms',
	},
	image: {
		width: '100%',
		height: '45@vs',
		borderRadius: 10,
		resizeMode: 'cover',
	},
	captionText: {
		color: 'black',
	},
});
