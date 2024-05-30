import WebView from 'react-native-webview';

function AmPieChart({ data }) {
	const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>AmCharts Pie Chart</title>
      <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
      <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
      <style>
        #chartdiv {
          width: 100%;
          height: 500px;
        }
      </style>
    </head>
    <body>
      <div id="chartdiv"></div>
      <script>
        am5.ready(function() {
          // Create root element
          var root = am5.Root.new("chartdiv");

          // Set themes
          root.setThemes([
            am5themes_Animated.new(root)
          ]);

          // Create chart
          var chart = root.container.children.push(am5percent.PieChart.new(root, {
            layout: root.verticalLayout
          }));

          // Create series
          var series = chart.series.push(am5percent.PieSeries.new(root, {
            valueField: "ImpressionCount",
            categoryField: "device_platform"
          }));

          // Set data
          series.data.setAll(${JSON.stringify(data)});

          // Add legend
          chart.children.push(am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50,
            layout: root.horizontalLayout
          }));
        });
      </script>
    </body>
    </html>
  `;

	return (
		<WebView
			originWhitelist={['*']}
			source={{ html: htmlContent }}
			style={{ flex: 1 }}
		/>
	);
}

export default AmPieChart;
