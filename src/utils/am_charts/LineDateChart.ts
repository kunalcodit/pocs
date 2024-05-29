export type LineDateChartData = {
	valueX: Date;
	valueY: number;
}[];

export const lineDateChartHtml = (
	lineChartDateData: LineDateChartData,
	valueXField: string,
	valueYField: string,
	fillColor: string,
) => {
	const data = JSON.stringify(
		lineChartDateData.map(e => ({ ...e, valueX: e.valueX.getTime() })),
	);
	return `
<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Amchart 5 POC</title>
			<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>

			<style>
				#line-chart-div {
					width: 100%;
					height: 100vh;
				}
			</style>
		</head>
	
		<body>
			
			<div id="line-chart-div"></div>
			<script>
            const lineChartRoot = am5.Root.new("line-chart-div");

            const lineChart = lineChartRoot.container.children.push(
                am5xy.XYChart.new(lineChartRoot, {
                    panY: false,
                    panX: false,
                    // wheelY: "zoomX",
                    layout: lineChartRoot.verticalLayout,
                    maxTooltipDistance: 0,
                })
            );

            var yAxis = lineChart.yAxes.push(
            am5xy.ValueAxis.new(lineChartRoot, {
                extraTooltipPrecision: 1,
                renderer: am5xy.AxisRendererY.new(lineChartRoot, {}),
            })
            );

            // Create X-Axis
            var xAxis = lineChart.xAxes.push(
            am5xy.DateAxis.new(lineChartRoot, {
                baseInterval: { timeUnit: "day", count: 1 },
                renderer: am5xy.AxisRendererX.new(lineChartRoot, {
                minGridDistance: 40,
                }),
                tooltip: am5.Tooltip.new(lineChartRoot, {}),
            })
            );

            const lineSeries = lineChart.series.push(
            am5xy.LineSeries.new(lineChartRoot, {
                name: "Series",
                xAxis: xAxis,
                yAxis: yAxis,
                valueYField: "${valueYField}",
                valueXField: "${valueXField}",
                curveFactory: d3.curveBasis,
                fill: am5.color(${fillColor}),
                stroke: am5.color(${fillColor}),
            })
            );

            lineSeries.fills.template.setAll({
            fillOpacity: 0.5,
            visible: true,
            });
            lineSeries.strokes.template.setAll({
            strokeWidth: 0.5,
            });

            var tooltip = lineSeries.set("tooltip", am5.Tooltip.new(lineChartRoot, {}));

            tooltip.label.set("text", "{valueY}");

            lineSeries.data.setAll(
            ${data}
            );

            lineSeries.appear(1000);
            lineChart.appear(1000);

			</script>
		</body>
	</html>`;
};
