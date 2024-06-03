import getClicks from '@/services/record/getClicks';
import { colors } from '@/theme/Colors';
import { RecordPageSchema } from '@/types/schemas/record';
import findWidgets from '@/utils/findWidgets';
import { formatNumber } from '@/utils/formatter';
import { useQuery } from '@tanstack/react-query';
import {
	Collapse,
	CollapseBody,
	CollapseHeader,
} from 'accordion-collapse-react-native';
import { useState } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import { ScaledSheet, vs } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { z } from 'zod';
import AmLineChart from '../charts/AMLineChart';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import RecordSkeleton from '@/components/RecordSkeleton';

export const screenWidth = Dimensions.get('window').width;
// export const chartConfig: AbstractChartConfig = {
// 	backgroundGradientFrom: 'transparent', // Set the initial gradient background to transparent
// 	backgroundGradientFromOpacity: 0, // Use zero opacity for a full transparent effect
// 	backgroundGradientTo: 'transparent', // Set the end gradient background to transparent
// 	backgroundGradientToOpacity: 0, // Maintain transparency throughout
// 	color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Orange color, opacity adjustable
// 	labelColor: (opacity = 1) => `rgba(23, 23, 23, ${opacity})`, // This should contrast with the background
// 	strokeWidth: 2, // Optional, set your desired stroke width
// 	barPercentage: 0.5, // Relevant for bar charts, adjust as necessary
// };

export const chartConfig = {
	backgroundGradientFrom: 'transparent',
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: 'transparent',
	backgroundGradientToOpacity: 0,
	color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // Orange color, opacity adjustable
	labelColor: (opacity = 1) => `rgba(23, 23, 23, ${opacity})`, // Dark color for labels
	strokeWidth: 2, // Set the stroke width for the line
	barPercentage: 0.5, // Relevant for bar charts
};

type Props = {
	data: z.infer<typeof RecordPageSchema>;
	widgetPageID: string;
};

export default function Category(props: Props) {
	const { data, widgetPageID } = props;
	const [isExpanded, setisExpanded] = useState(true);
	const titleIconName = !isExpanded ? 'chevron-up' : 'chevron-down';
	const totalwidget = findWidgets(data.layouts, 'Total Clicks');
	const trendwidget = findWidgets(data.layouts, 'Clicks Monthly Trend');

	const clicksRes = useQuery({
		queryKey: ['record-click', widgetPageID],
		queryFn: () => getClicks(totalwidget[0], widgetPageID),
	});
	const trendRes = useQuery({
		queryKey: ['record-trend', widgetPageID],
		queryFn: () => getClicks(trendwidget[0], widgetPageID),
	});

	if (
		clicksRes.isLoading ||
		clicksRes.isFetching ||
		trendRes.isLoading ||
		trendRes.isFetching
	) {
		return <RecordSkeleton />;
	}

	if (clicksRes.isError || trendRes.isError) {
		return null;
	}

	const chartData = trendRes?.data?.data.map(
		(item: { log_date: number; ClickCount: string }) => ({
			date: new Date(item.log_date * 1000).toISOString(),
			ClickCount: parseInt(item.ClickCount, 10),
		}),
	);

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
							<Text style={styles.text}> Clicks</Text>
							<Ionicons name={titleIconName} size={20} color="black" />
						</View>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.cardContainer}>
						<View style={[styles.card]}>
							<Text style={styles.headertext}>Total Clicks</Text>
							<Text style={styles.subtitle}>(Jan 26,2024 - Feb 01,2024)</Text>
							<Text style={styles.number}>
								{formatNumber(clicksRes.data.data[0]?.ClickCount)}
							</Text>

							<Text style={styles.numberInfo}>Clicks</Text>
						</View>
						<View style={[styles.card]}>
							<View style={{ height: vs(70) }}>
								<AmLineChart data={chartData} />
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
