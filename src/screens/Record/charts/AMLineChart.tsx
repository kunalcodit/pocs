import { vs } from 'react-native-size-matters';
import WebView from 'react-native-webview';

function AmLineChart({ data }) {
	// const chartData = data.map(item => ({
	// 	date: new Date(item.log_date * 1000).toISOString(),
	// 	ClickCount: parseInt(item.ClickCount, 10),
	// }));

	// console.log(data);

	const htmlContent = `
   <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>AmCharts Line Chart with Filled Areas</title>
      <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/charts.js"></script>
      <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
      <style>
        #chartdiv {
          width: 100%;
          height: 250px;
        }
      </style>
    </head>
    <body>
      <div id="chartdiv"></div>
      <script>
        am4core.ready(function() {
          // Themes begin
          am4core.useTheme(am4themes_animated);
          // Themes end
          
          // Create chart instance
          var chart = am4core.create("chartdiv", am4charts.XYChart);
          
          // Add data
          chart.data = ${JSON.stringify(data)};
          
          // Create axes
          var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
          dateAxis.renderer.minGridDistance = 60;
          
          var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
          
          // Create series
          var series = chart.series.push(new am4charts.LineSeries());
          series.dataFields.valueY = "ClickCount";
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY}";
          series.fillOpacity = 0.5;
          // Add cursor
          chart.cursor = new am4charts.XYCursor();
          chart.cursor.xAxis = dateAxis;
          
        }); // end am4core.ready()
      </script>
    </body>
    </html>  `;

	// console.log(htmlContent);

	return (
		<WebView
			originWhitelist={['*']}
			source={{ html: htmlContent }}
			style={{ flex: 1 }}
		/>
	);
}

export default AmLineChart;
