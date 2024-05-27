import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function ImpressionsByDevice() {
	const chartHtml = (data: string) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Amchart 5 POC</title>
			<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
			<script src="https://cdn.amcharts.com/lib/5/percent.js"></script>

			<style>
				#pie-chart-div {
					width: 100%;
					height: 100vh;
				}
			</style>
		</head>
	
		<body>
			
			<div id="pie-chart-div"></div>
			<script>
            const pieChartRoot = am5.Root.new("pie-chart-div");

            const pieChart = pieChartRoot.container.children.push(
              am5percent.PieChart.new(pieChartRoot, {
                layout: pieChartRoot.horizontalLayout,
              })
            );
            
            const series = pieChart.series.push(
              am5percent.PieSeries.new(pieChartRoot, {
                name: "Impressions share by device",
                categoryField: "name",
                valueField: "population",
              })
            );
            
            series.slices.template.setAll({
              templateField: "sliceSettings",
            });
            
            const data = ${data};
            
            series.data.setAll(data);
            series.labels.template.set("forceHidden", true);
            series.ticks.template.set("forceHidden", true);
            
            var legend = pieChart.children.push(
              am5.Legend.new(pieChartRoot, {
                centerY: am5.percent(50),
                y: am5.percent(50),
                layout: pieChartRoot.verticalLayout,
              })
            );
            
            legend.data.setAll(series.dataItems);
            
			</script>
		</body>
	</html>
  `;

	const html = chartHtml(
		JSON.stringify([
			{
				name: 'Seoul',
				population: 21500000,
				sliceSettings: {
					fill: '#83a7ea',
				},
				legendFontColor: '#7F7F7F',
				legendFontSize: 15,
			},
			{
				name: 'Toronto',
				population: 2800000,
				sliceSettings: {
					fill: '#F00',
				},
				legendFontColor: '#7F7F7F',
				legendFontSize: 15,
			},
			{
				name: 'Beijing',
				population: 527612,
				sliceSettings: {
					fill: 'red',
				},
				legendFontColor: '#7F7F7F',
				legendFontSize: 15,
			},
			{
				name: 'Moscow',
				population: 11920000,
				sliceSettings: {
					fill: '#0000ff',
				},
				legendFontColor: '#7F7F7F',
				legendFontSize: 15,
			},
		]),
	);

	return (
		<View style={styles.container}>
			<Text>Pie Chart</Text>
			<WebView
				originWhitelist={['*']}
				source={{ html }}
				style={{ height: 100 }}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		height: 200,
	},
});

export default ImpressionsByDevice;
