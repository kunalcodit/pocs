import { colors } from '@/theme/Colors';
import { RecordPageSchema } from '@/types/schemas/record';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { z } from 'zod';

const tabs = [
	{ name: 'Executive Summary' },
	{ name: 'Campaign Breakdown' },
	{ name: 'Ads Group' },
	{ name: 'Ads' },
	{ name: 'Demographics' },
	{ name: 'Devices' },
	{ name: 'Leads' },
];

const styles = ScaledSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: colors.gray,
		textAlign: 'center',
		height: '40@vs',
		width: '150@s',
		// width: '100%',
		// flex: 1,
	},
	text: {
		textAlign: 'center',
		color: 'black',
	},
});

type Props = {
	data: z.infer<typeof RecordPageSchema>;
};

export default function Section(props: Props) {
	const { data } = props;

	return (
		<FlatList
			data={Object.values(data.layouts)}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => (
				<View style={styles.container}>
					<Text style={styles.text}>{item?.title}</Text>
				</View>
			)}
		/>
	);
}
