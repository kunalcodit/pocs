import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
	const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AmCharts Line Chart</title>
        <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
        <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
        <style>
            html, body, #chartdiv {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
            }
        </style>
        <script>
            am5.ready(function() {
                var root = am5.Root.new("chartdiv");

                root.setThemes([
                    am5themes_Animated.new(root)
                ]);

                var chart = root.container.children.push(am5xy.XYChart.new(root, {
                    panX: true,
                    panY: true,
                    wheelX: "panX",
                    wheelY: "zoomX",
                    pinchZoomX: true
                }));

                var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
                cursor.lineY.set("visible", false);

                var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
                    maxDeviation: 0.2,
                    baseInterval: {
                        timeUnit: "day",
                        count: 1
                    },
                    renderer: am5xy.AxisRendererX.new(root, {}),
                    tooltip: am5.Tooltip.new(root, {})
                }));

                var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {})
                }));

                var series = chart.series.push(am5xy.LineSeries.new(root, {
                    name: "Series",
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: "value",
                    valueXField: "date",
                    fill: am5.color(0x095256),
                    stroke: am5.color(0x095256),
                    tooltip: am5.Tooltip.new(root, {
                        labelText: "{valueY}"
                    })
                }));

                var data = [];
                var value = 50;
                for (var i = 1; i < 50; i++) {
                    value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
                    data.push({ date: new Date(2022, 0, i).getTime(), value: value });
                }

                series.data.setAll(data);

                series.appear(1000);
                chart.appear(1000, 100);
            });
        </script>
    </head>
    <body>
        <div id="chartdiv"></div>
    </body>
    </html>
  `;

	return (
		<View style={styles.container}>
			<View style={styles.box}>
				<WebView
					originWhitelist={['*']}
					source={{ html: htmlContent }}
					style={styles.webview}
					scalesPageToFit
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	webview: {
		flex: 1,
		height: 500,
		borderWidth: 1,
	},
	box: {
		height: 300,
		width: 300,
	},
});

export default App;
