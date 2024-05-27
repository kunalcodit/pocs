import React from 'react';
import { ScrollView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InputElement from '../Dashboard/components/InputElement';
import ClicksCategory from './components/ClicksCategory';
import CTRCategory from './components/CTRCategory';
import Header from './components/Header';
import ImpressionsCategory from './components/ImpressionsCategory';
import Section from './components/Section';
import SpendCategory from './components/SpendCategory';
import ImpressionsByState from './components/ImpressionsByState';
import ImpressionsByDevice from './components/ImpressionsByDevice';

export default function Analysis() {
	return (
		<View style={styles.container}>
			<Header />
			<View>
				<Section />
			</View>
			<ScrollView style={styles.container}>
				<InputElement
					leftIconLib={Ionicons}
					leftIconName="calendar-outline"
					rightIconLib={MaterialIcons}
					rightIconName="keyboard-double-arrow-down"
				/>
				<ClicksCategory />
				<CTRCategory />
				<SpendCategory />
				<ImpressionsCategory />
				<ImpressionsByDevice />
				<ImpressionsByState />
			</ScrollView>
		</View>
	);
}

const styles = ScaledSheet.create({
	container: {
		backgroundColor: 'gray',
		flex: 1,
		paddingBottom: '20@vs',
	},
});
