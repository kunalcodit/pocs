import { colors } from '@/theme/Colors';
import { AaDaumSchema } from '@/types/schemas/dashboard';
import { Image, Pressable, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
	captionTxt: {
		color: 'black',
	},
	imageContainer: {
		position: 'relative',
	},
	starBox: {
		position: 'absolute',
		top: '15@ms',
		right: '15@ms',
		backgroundColor: 'white',
		padding: '6@ms',
		borderRadius: '80@ms',
		borderColor: 'lightgray',
		borderWidth: 1,
	},
	star: {
		// position: 'absolute',
		// top: '15@ms',
		// right: '15@ms',
		// backgroundColor: 'black',
		// padding: '10@ms',
		// borderRadius: '80@ms',
		color: colors.darkGray,
		// borderWidth: 1,
	},
	pipeSign: {
		color: colors.darkGray,
	},
});

export default function Card({ onPress, data }: CardProps) {
	const parts = data.formatted_updated_at
		? data.formatted_updated_at.split(' ')
		: [];
	const date = `${parts[0]} ${parts[1]} ${parts[2]}`;
	const time = `${parts[3]} ${parts[4]}`;

	return (
		<Pressable onPress={onPress} style={styles.container}>
			<View style={styles.tabContainer}>
				<View style={styles.header}>
					<Text style={styles.headertext}>{data.title}</Text>
					<View style={styles.icon}>
						{/* <Ionicons name="list" size={20} color="blue" /> */}
						<FontAwesome name="share" size={14} color="blue" />
					</View>
				</View>
				<View style={styles.imageContainer}>
					<Image
						source={{
							uri:
								data.thumbnail?.secure_url || 'https://via.placeholder.com/150',
						}}
						style={styles.image}
						alt="image1"
					/>
					<View style={styles.starBox}>
						<FontAwesome
							name="star-o"
							size={18}
							// color="blue"
							style={styles.star}
						/>
					</View>
				</View>
				<View style={styles.flexBox}>
					<AntDesign name="clockcircle" size={14} color="blue" />
					<Text style={styles.captionTxt}> Updated: </Text>
					<Text style={styles.captions}>
						{date}
						<Text style={styles.pipeSign}> | </Text>
						{time}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}
