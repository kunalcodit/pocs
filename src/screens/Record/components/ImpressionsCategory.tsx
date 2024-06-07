import { colors } from '@/theme/Colors';
import {
	Collapse,
	CollapseBody,
	CollapseHeader,
} from 'accordion-collapse-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { ScaledSheet, vs } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { z } from 'zod';
import { RecordPageSchema } from '@/types/schemas/record';
import findWidgets from '@/utils/findWidgets';
import { useQuery } from '@tanstack/react-query';
import getClicks from '@/services/record/getClicks';
import AmLineChart from '../charts/AMLineChart';
import AmPieChart from '../charts/AmPieChart';
import AmMapChart from '../charts/AmMapChart';
import RecordSkeleton from '@/components/RecordSkeleton';

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
	stateImage: {
		height: '100@vs',
	},
	deviceGraph: {
		// height: "300@vs",
	},
	captionText: {
		color: 'black',
	},
	error: {
		color: 'black',
		textAlign: 'center',
	},
});

type Props = {
	data: z.infer<typeof RecordPageSchema>;
	widgetPageID: string;
};

export default function Category(props: Props) {
	const { data, widgetPageID } = props;
	const [isExpanded, setisExpanded] = useState(true);
	const titleIconName = !isExpanded ? 'chevron-up' : 'chevron-down';

	const totalwidget = findWidgets(data.layouts, 'Total Impressions');
	const trendwidget = findWidgets(data.layouts, 'Impressions Monthly Trend');
	const sharedevicewidget = findWidgets(
		data.layouts,
		'Impression Share by Device',
	);
	const statewidget = findWidgets(data.layouts, 'Impressions by State');

	const clicksRes = useQuery({
		queryKey: ['record-impression', widgetPageID],
		queryFn: () => getClicks(totalwidget[0], widgetPageID),
	});
	const trendRes = useQuery({
		queryKey: ['record-impression-trend', widgetPageID],
		queryFn: () => getClicks(trendwidget[0], widgetPageID),
	});
	const shareRes = useQuery({
		queryKey: ['record-impression-device', widgetPageID],
		queryFn: () => getClicks(sharedevicewidget[0], widgetPageID),
	});
	const stateRes = useQuery({
		queryKey: ['record-impression-state', widgetPageID],
		queryFn: () => getClicks(statewidget[0], widgetPageID),
	});

	if (
		clicksRes.isLoading ||
		clicksRes.isFetching ||
		trendRes.isLoading ||
		trendRes.isFetching ||
		shareRes.isLoading ||
		shareRes.isFetching
	) {
		return <RecordSkeleton />;
	}

	if (
		clicksRes.isError ||
		trendRes.isError ||
		shareRes.isError ||
		stateRes.isError
	) {
		return <Text style={styles.error}>Nothing to Show</Text>;
	}

	const chartData = trendRes?.data?.data.map(
		(item: { log_date: number; ClickCount: string }) => ({
			date: new Date(item.log_date * 1000).toISOString(),
			ClickCount: parseInt(item.ImpressionCount, 10),
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
							<Text style={styles.text}> Impressions</Text>
							<Ionicons name={titleIconName} size={20} color="black" />
						</View>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.cardContainer}>
						<View style={styles.card}>
							<Text style={styles.headertext}>Total Impressions</Text>
							<Text style={styles.subtitle}>(Jan 26,2024 - Feb 01,2024)</Text>
							<Text style={styles.number}>
								{clicksRes.data.data[0]?.ImpressionCount}
							</Text>
							<Text style={styles.numberInfo}>Impressions</Text>
						</View>
						<View style={styles.card}>
							<Text style={styles.headertext}>Impressions Monthly Trend</Text>
							{/* <Image
                source={{
                  uri: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
                }}
                style={styles.image}
              /> */}
							{/* <LineChart
								data={data}
								width={screenWidth / 2}
								height={vs(80)}
								chartConfig={chartConfig}
								bezier
								withInnerLines={false}
							/> */}
							<View style={{ height: vs(70) }}>
								<AmLineChart data={chartData} />
							</View>
						</View>
					</View>
					<View style={styles.cardContainer}>
						{/* <View style={styles.card}>
              <Text style={styles.headertext}>dsf</Text>
              <Text style={styles.subtitle}>(Jan 26,2024 - Feb 01,2024)</Text>
              <Text style={styles.number}>9.76%</Text>
              <Text style={styles.numberInfo}>CTR</Text>
            </View> */}
						<View style={styles.card}>
							<Text style={styles.headertext}>Impressions by State</Text>
							{/* <Image
								source={{
									uri: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
								}}
								style={[styles.image, styles.stateImage]}
							/> */}
							<View style={{ height: vs(100) }}>
								<AmMapChart data={stateRes.data?.data} />
							</View>
						</View>
					</View>
					<View style={styles.cardContainer}>
						<View style={[styles.card, styles.deviceGraph]}>
							<Text style={styles.headertext}>Impressions share by Device</Text>
							{/* <PieChart
								data={deviceData}
								width={screenWidth}
								height={vs(150)}
								chartConfig={chartConfig}
								accessor="population"
								backgroundColor="transparent"
							/> */}
							<View style={{ height: vs(170) }}>
								<AmPieChart data={shareRes.data.data} />
							</View>
						</View>
					</View>
				</CollapseBody>
			</Collapse>
		</View>
	);
}
