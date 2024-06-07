import { storage } from '@/App';
import fetchUser from '@/services/auth/fetchUser';
import CookieManager from '@react-native-cookies/cookies';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
	ActivityIndicator,
	Alert,
	Image,
	Linking,
	Pressable,
	Text,
	View,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import TOSubText from '@/components/ToSubText';
import { constants } from '@/utils/constants';
import { colors } from '@/theme/Colors';

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
	versionContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		width: '100%',
		textAlign: 'center',
	},
	subBox: {
		alignItems: 'center',
		marginBottom: 16,
		flexDirection: 'row',
		justifyContent: 'center',
	},
});

const externalLinks = {
	about: 'https://www.tapclicks.com/about-us/',
	support: 'https://support.tapclicks.com/hc/en-us',
	privacy: 'https://www.tapclicks.com/privacy-policy/',
};

export default function RightSidebar(props: SidebarProps) {
	const navigation = useNavigation();
	const { onPress } = props;

	const { isLoading, isFetching, data } = useQuery({
		queryKey: ['user'],
		queryFn: fetchUser,
	});

	const openLink = async (url: string) => {
		await Linking.openURL(url);
	};

	const logoutHandler = async () => {
		storage.clearAll();
		await CookieManager.clearAll().catch(() => {});
		navigation.navigate('Login');
	};

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
						<Text
							style={styles.text}
							onPress={() => openLink(externalLinks.about)}
						>
							About
						</Text>
						<Text
							style={styles.text}
							onPress={() => openLink(externalLinks.support)}
						>
							Support
						</Text>
						<Text
							style={styles.text}
							onPress={() => openLink(externalLinks.privacy)}
						>
							Privacy
						</Text>
						<Text style={styles.text} onPress={logoutHandler}>
							Sign Out
						</Text>
						<View style={styles.versionContainer}>
							<View style={styles.subBox}>
								<TOSubText style={{ color: colors.text }}>
									{`${
										constants.strings.TAPCLICKS_VERSION
									}${DeviceInfo.getVersion()} - ${DeviceInfo.getBuildNumber()}`}
								</TOSubText>
							</View>
						</View>
					</>
				)}
			</Pressable>
		</Pressable>
	);
}
