import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function ImpressionsByState() {
	const chartHtml = (country: string) => `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Amchart 5 POC</title>
			<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
			<script src="https://cdn.amcharts.com/lib/5/map.js"></script>
			<script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>

			<style>
				#chartdiv {
					width: 100%;
					height: 100vh;
				}
			</style>
		</head>
	
		<body>
			
			<div id="chartdiv"></div>
			<script>
				const root = am5.Root.new('chartdiv');
				const chart = root.container.children.push(
					am5map.MapChart.new(root, {
						geoJSON: am5geodata_worldLow,
					}),
				);
	
				const polygonSeries = chart.series.push(
					am5map.MapPolygonSeries.new(root, {}),
				);
	
				polygonSeries.mapPolygons.template.setAll({
					tooltipText: '{name}: {value}',
				});
	
				const tooltip = am5.Tooltip.new(root, {
					getFillFromSprite: false,
					tooltipText: '{name}: {value}',
					labelText: '[bold]{name}[/]\\n\\nImpressions: {value}',
				});
	
				tooltip.get('background').setAll({
					fill: am5.color(0xffffff),
					stroke: am5.color(0x000000),
				});
	
				polygonSeries.set('tooltip', tooltip);
	
				const load = () => {
					am5.net
						.load(
							"https://cdn.amcharts.com/lib/5/geodata/json/${country}Low.json",
							chart,
						)
						.then(result => {
							const geoData = am5.JSONParser.parse(result.response);
							console.log(geoData);
							polygonSeries.setAll({
								geoJSON: geoData,
							});
							polygonSeries.data.setAll([
								...geoData.features.map((e, index) => ({
									id: e.id,
									value: index,
								})),
							]);
						});
				};
	
				load();
			</script>
		</body>
	</html>
  `;

	const html = chartHtml('usa');

	return (
		<View style={styles.container}>
			<Text>Mapss</Text>
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
		height: 400,
	},
});

export default ImpressionsByState;
