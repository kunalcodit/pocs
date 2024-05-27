import usaLow from '@amcharts/amcharts5-geodata/usaLow';
import indiaLow from '@amcharts/amcharts5-geodata/indiaLow';
import akLow from '@amcharts/amcharts5-geodata/region/usa/akLow';
import alLow from '@amcharts/amcharts5-geodata/region/usa/alLow';
import akAlbersLow from '@amcharts/amcharts5-geodata/region/usa/akAlbersLow';

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Geojson } from 'react-native-maps';

const statesData: GeoJSON.FeatureCollection[] = [
	alLow,
	akAlbersLow,
	akLow,
	// ... other states
];

const getColor = value => {
	// Implement your color scheme logic based on value
	return 'red'; // Example color for now
};

function App() {
	const initialRegion = {
		latitude: 30.5883, // Center of US
		longitude: -94.9893,
		latitudeDelta: 20,
		longitudeDelta: 20,
	};

	return (
		<View style={styles.container}>
			<Text>Mapss</Text>
			<MapView
				mapType="none"
				initialRegion={initialRegion}
				style={styles.map}

				// initialRegion={initialRegion}
			>
				<Geojson
					geojson={usaLow}
					fillColor="#DF8A00"
					strokeColor="white"
					color="#DF8A00"
					strokeWidth={0.1}
				/>
				{statesData.map((e, index) => (
					<Geojson
						key={index}
						geojson={e}
						fillColor="#DF8A00"
						strokeColor="white"
						color="#DF8A00"
						strokeWidth={0.1}
					/>
				))}
			</MapView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
	},
	map: {
		// flex: 1,
		height: 400,
	},
});

export default App;
