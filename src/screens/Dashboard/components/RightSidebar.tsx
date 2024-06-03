import { View, Text, Pressable, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { useQuery } from '@tanstack/react-query';
import fetchUser from '@/services/auth/fetchUser';

type SidebarProps = {
	onPress: () => void;
};

const styles = ScaledSheet.create({
	rightContainer: {
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, 0.7)',
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
		zIndex: 10,
		alignItems: 'flex-end',
	},
	containerBox: {
		backgroundColor: 'white',
		width: '50%',
		height: '100%',
		paddingTop: '15@vs',
		zIndex: 11,
	},
	image: {
		width: '100@vs',
		height: '100@vs',
		borderRadius: '50@vs',
		resizeMode: 'cover',
		marginVertical: '10%',
	},
	profileContainer: {
		backgroundColor: 'lightgray',
		// height: '200@vs',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: '12@s',
	},
	text: {
		padding: '8%',
	},
});

export default function RightSidebar(props: SidebarProps) {
	const { onPress } = props;

	const { isLoading, isFetching, data } = useQuery({
		queryKey: ['user'],
		queryFn: fetchUser,
	});

	return (
		<Pressable style={styles.rightContainer} onPress={onPress}>
			<Pressable style={styles.containerBox}>
				{isLoading || isFetching ? (
					<ActivityIndicator color="black" />
				) : (
					<>
						<View style={styles.profileContainer}>
							<Image
								source={{
									uri:
										data.data?.settings.userImageMetadata.secure_url ||
										'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
								}}
								style={styles.image}
							/>
							<Text>
								{data.data.settings.firstName} {data.data.settings.lastName}
							</Text>
							<Text>{data.data.settings.userEmail}</Text>
						</View>
						<Text style={styles.text}>About</Text>
						<Text style={styles.text}>Support</Text>
						<Text style={styles.text}>Privacy</Text>
						<Text style={styles.text}>Sign Out</Text>
					</>
				)}
			</Pressable>
		</Pressable>
	);
}
