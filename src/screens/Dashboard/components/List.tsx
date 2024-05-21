import { DashboardData } from '@/types/dashboard/dashboard';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type ListProps = {
	onPress: () => void;
	data: DashboardData;
};

const styles = ScaledSheet.create({
	container: {
		paddingHorizontal: '4%',
		marginBottom: '4%',
	},
	tabContainer: {
		backgroundColor: '#e7e5e4',
		padding: '4%',
		borderRadius: '8@ms',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingBottom: '3%',
	},
	headertext: {
		color: '#FF8C00',
		fontWeight: '500',
		fontSize: '12@ms',
		flex: 1,
	},
	icon: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginLeft: 10,
	},
	flexBox: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: '2%',
	},
	captions: {
		color: 'blue',
		fontWeight: '500',
	},
	image: {
		resizeMode: 'cover',
		width: '100%',
		flex: 1,
		height: '100@ms',
		borderRadius: '8@ms',
	},
	tagBox: { flex: 1, padding: '2%' },
	tags: {
		backgroundColor: 'lightgray',
		color: 'black',
		padding: '2%',
		alignSelf: 'center',
		marginRight: '1%',
	},
});

export default function List({ data, onPress }: ListProps) {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<View style={styles.tabContainer}>
				<View style={styles.flexBox}>
					<Text> Updated: </Text>
					<Text style={styles.captions}>{data.formatted_updated_at}</Text>
				</View>
				<View style={styles.header}>
					<Text style={styles.headertext}>{data.title}</Text>
					<View style={styles.icon}>
						<FontAwesome name="share" size={14} color="blue" />
					</View>
				</View>
				<View style={styles.flexBox}>
					<Image
						source={{
							uri: data.thumbnail?.secure_url,
						}}
						style={styles.image}
						alt="image1"
					/>
					<View style={styles.tagBox}>
						<Text>Data Profiles:</Text>
						{data.reporting_profiles?.map(item => (
							<View
								style={{ flexDirection: 'row', flexWrap: 'wrap' }}
								key={item.id}
							>
								<Text style={styles.tags}>{item?.name}</Text>
							</View>
						))}
					</View>
				</View>
			</View>
		</Pressable>
	);
}
