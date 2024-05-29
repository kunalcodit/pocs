export type BarChartData = {
	valueXField: string;
	color: string;
	category: string;
}[];

export const barChartHtml = (barChartData: BarChartData) => {
	const data = JSON.stringify(barChartData);
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
				#bar-chart-div {
					width: 100%;
					height: 100vh;
				}
			</style>
		</head>
	
		<body>
			
			<div id="bar-chart-div"></div>
			<script>
            // Create root and chart
            var barChartRoot = am5.Root.new("bar-chart-div");

            var barChart = barChartRoot.container.children.push(
                am5xy.XYChart.new(barChartRoot, {
                        panX: false,
                        panY: false,
                        wheelY: "none",
                        wheelX: "none",
                        layout: barChartRoot.verticalLayout,
                })
            );

            // Define data
            var barChartData = ${data};

            // Craete Y-axis
            var barChartYAxis = barChart.yAxes.push(
            am5xy.ValueAxis.new(barChartRoot, {
                renderer: am5xy.AxisRendererY.new(barChartRoot, {}),
            })
            );

            const xRenderer = am5xy.AxisRendererX.new(barChartRoot, {
            minGridDistance: 30,
            });

            // Create X-Axis
            var barChartXAxis = barChart.xAxes.push(
            am5xy.CategoryAxis.new(barChartRoot, {
                categoryField: "category",
                renderer: xRenderer,
                tooltip: am5.Tooltip.new(barChartRoot, {}),
            })
            );

            // Enable label wrapping
            xRenderer.labels.template.setAll({
            oversizedBehavior: "wrap",
            textAlign: "center",
            });

            // Set up automatic width calculation using an adapter
            xRenderer.labels.template.adapters.add("width", function (width, target) {
            var x0 = barChartXAxis.getDataItemCoordinateY(
                barChartXAxis.dataItems[0],
                "category",
                0
            );
            var x1 = barChartXAxis.getDataItemCoordinateY(
                barChartXAxis.dataItems[0],
                "category",
                1
            );
            target.set("maxWidth", x1 - x0);
            return x1 - x0;
            });

            barChartXAxis.data.setAll(barChartData);

            const barChartSeries = barChart.series.push(
            am5xy.ColumnSeries.new(barChartRoot, {
                name: name,
                xAxis: barChartXAxis,
                yAxis: barChartYAxis,
                valueYField: "ImpressionCount",
                categoryXField: "category",
            })
            );

            barChartSeries.data.setAll(
            barChartData.map((e) => ({
                ...e,

                ImpressionCount: +e.ImpressionCount,
            }))
            );

            const columnColor = (fill, target) => {
            if (target.dataItem) {
                console.log(target.dataItem.dataContext.color);
                return target.dataItem.dataContext.color;
            }
            return fill;
            };
            barChartSeries.columns.template.adapters.add("fill", columnColor);

            barChartSeries.columns.template.adapters.add("stroke", columnColor);

			</script>
		</body>
	</html>
  `;
};
