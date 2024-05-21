import { colors } from '@/theme/Colors';
import {
	Collapse,
	CollapseBody,
	CollapseHeader,
} from 'accordion-collapse-react-native';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import LineChart, {
	LineChartData,
} from 'react-native-chart-kit/dist/line-chart/LineChart';
import { ScaledSheet, vs } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { chartConfig, screenWidth } from './ClicksCategory';

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
});

export default function Category() {
	const [isExpanded, setisExpanded] = useState(true);
	const titleIconName = !isExpanded ? 'chevron-up' : 'chevron-down';
	const data: LineChartData = {
		labels: ['January', 'February', 'March'],
		datasets: [
			{
				data: [16, 15, 16],
				// color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
				// strokeWidth: 2, // optional
			},
		],
		// legend: ["Clicks Monthly Trends"], // optional
	};
	const deviceData = [
		{
			name: 'Seoul',
			population: 21500000,
			color: 'rgba(131, 167, 234, 1)',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Toronto',
			population: 2800000,
			color: '#F00',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Beijing',
			population: 527612,
			color: 'red',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Moscow',
			population: 11920000,
			color: 'rgb(0, 0, 255)',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
	];
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
							<Text style={styles.text}> Impressions</Text>
							<Ionicons name={titleIconName} size={20} />
						</View>
					</View>
				</CollapseHeader>
				<CollapseBody>
					<View style={styles.cardContainer}>
						<View style={styles.card}>
							<Text style={styles.headertext}>Total Impressions</Text>
							<Text style={styles.subtitle}>(Jan 26,2024 - Feb 01,2024)</Text>
							<Text style={styles.number}>904</Text>
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
							<LineChart
								data={data}
								width={screenWidth / 2}
								height={vs(80)}
								chartConfig={chartConfig}
								bezier
								withInnerLines={false}
							/>
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
							<Image
								source={{
									uri: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
								}}
								style={[styles.image, styles.stateImage]}
							/>
						</View>
					</View>
					<View style={styles.cardContainer}>
						<View style={[styles.card, styles.deviceGraph]}>
							<Text style={styles.headertext}>Impressions share by Device</Text>
							<PieChart
								data={deviceData}
								width={screenWidth}
								height={vs(150)}
								chartConfig={chartConfig}
								accessor="population"
								backgroundColor="transparent"
							/>
						</View>
					</View>
				</CollapseBody>
			</Collapse>
		</View>
	);
}
