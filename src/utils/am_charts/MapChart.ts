export type MapChartData = {
	regionName: string;
	value: string | number;
}[];

export const lineChartHtml = (
	country: string,
	mapChartData: MapChartData,
	tooltipLabelText: string, // e.g. "Impressions"
) => {
	const data = JSON.stringify(mapChartData);
	return `
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
				#map-chart-div {
					width: 100%;
					height: 100vh;
				}
			</style>
		</head>
	
		<body>
			
			<div id="map-chart-div"></div>
			<script>
				const root = am5.Root.new('map-chart-div');
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
					labelText: '[bold]{name}[/]\\n\\n${tooltipLabelText}: {value}',
				});
	
				tooltip.get('background').setAll({
					fill: am5.color(0xffffff),
					stroke: am5.color(0x000000),
				});
	
				polygonSeries.set('tooltip', tooltip);

                const data = ${data}
	
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
								...data.map((e) => ({
                                    id: geoData.features.find((f) => f.properties.name == e.regionName)?.id,
                                    value: e.value,
                                  })),
							]);
						});
				};
	
				load();
			</script>
		</body>
	</html>`;
};
