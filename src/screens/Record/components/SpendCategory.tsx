import { colors } from '@/theme/Colors';
import {
	Collapse,
	CollapseBody,
	CollapseHeader,
} from 'accordion-collapse-react-native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import LineChart, {
	LineChartData,
} from 'react-native-chart-kit/dist/line-chart/LineChart';
import { ScaledSheet, vs } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { chartConfig, screenWidth } from './ClicksCategory';

export default function Category() {
	const [isExpanded, setisExpanded] = useState(true);
	const titleIconName = !isExpanded ? 'chevron-up' : 'chevron-down';

	const data: LineChartData = {
		labels: ['January', 'February', 'March'],
		datasets: [
			{
				data: [20, 15, 10],
				// color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				// strokeWidth: 2, // optional
			},
		],
		// legend: ["Clicks Monthly Trends"], // optional
	};
	return (
		<View>
			<Collapse
				style={styles.container}
				isExpanded={isExpanded}
				onToggle={isExpanded => setisExpanded(isExpanded)}
			>
				<CollapseHeader>
					<View style={styles.textBox}>
						<Text>Category:</Text>
						<View style={styles.textBox}>
							<Text style={styles.text}> Spend</Text>
							<Ionicons name={titleIconName} size={20} />
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
							<LineChart
								data={data}
								width={screenWidth}
								height={vs(80)}
								chartConfig={chartConfig}
								bezier
								withInnerLines={false}
							/>
							<View style={styles.cardContainer}>
								<View>
									<Text style={styles.headertext}>dsf</Text>
									<Text style={styles.subtitle}>
										(Jan 26,2024 - Feb 01,2024)
									</Text>
								</View>
								<View>
									<Text style={styles.number}>9.76%</Text>
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
});
