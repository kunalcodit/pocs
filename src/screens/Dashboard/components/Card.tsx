import { AaDaumSchema } from '@/types/schemas/dashboard';
import { Image, Pressable, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { z } from 'zod';

type CardProps = {
	onPress: () => void;
	data: z.infer<typeof AaDaumSchema>;
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
		fontSize: '14@ms',
		flex: 1,
	},
	icon: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 8,
		marginLeft: 10,
	},
	image: {
		resizeMode: 'cover',
		width: '100%',
		height: '200@ms',
		borderRadius: '8@ms',
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
});

export default function Card({ onPress, data }: CardProps) {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<View style={styles.tabContainer}>
				<View style={styles.header}>
					<Text style={styles.headertext}>{data.title}</Text>
					<View style={styles.icon}>
						<Ionicons name="list" size={20} color="blue" />
					</View>
				</View>
				<Image
					source={{
						uri:
							data.thumbnail?.secure_url || 'https://via.placeholder.com/150',
					}}
					style={styles.image}
					alt="image1"
				/>
				<View style={styles.flexBox}>
					<AntDesign name="clockcircle" size={20} color="blue" />
					<Text> Updated: </Text>
					<Text style={styles.captions}>{data.formatted_updated_at}</Text>
				</View>
			</View>
		</Pressable>
	);
}
