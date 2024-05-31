import { WebView } from 'react-native-webview';

function AmMapChart({ data }) {
	const chartData = JSON.stringify(data);
	const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <script src="https://cdn.amcharts.com/lib/4/core.js"></script>
        <script src="https://cdn.amcharts.com/lib/4/maps.js"></script>
        <script src="https://cdn.amcharts.com/lib/4/geodata/usaLow.js"></script>
        <script src="https://cdn.amcharts.com/lib/4/themes/animated.js"></script>
      </head>
      <body>
        <div id="chartdiv" style="width: 100%; height: 100vh;"></div>
        <script>
          am4core.useTheme(am4themes_animated);

          let chart = am4core.create('chartdiv', am4maps.MapChart);
          chart.geodata = am4geodata_usaLow;
          chart.projection = new am4maps.projections.Miller();

          let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
          polygonSeries.useGeodata = true;

          let polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = '{name}: {value}';
          polygonTemplate.nonScalingStroke = true;
          polygonTemplate.strokeWidth = 0.5;

          polygonTemplate.adapter.add('fill', (fill, target) => {
            if (target.dataItem && target.dataItem.value) {
              return chart.colors.getIndex(target.dataItem.value / 1000);
            }
            return fill;
          });

          polygonSeries.data = ${chartData}.map(item => ({
            id: 'US-' + item.region_id,
            name: item.name,
            value: parseInt(item.ImpressionCount, 10),
          }));

          let heatLegend = chart.createChild(am4maps.HeatLegend);
          heatLegend.series = polygonSeries;
          heatLegend.minColor = am4core.color('#ffffff');
          heatLegend.maxColor = am4core.color('#000000');
          heatLegend.valueAxis.renderer.labels.template.adapter.add('text', (label, target) => {
            return Math.round(target.dataItem.value) + '';
          });
        </script>
      </body>
    </html>
  `;

	return <WebView originWhitelist={['*']} source={{ html: htmlContent }} />;
}

export default AmMapChart;
