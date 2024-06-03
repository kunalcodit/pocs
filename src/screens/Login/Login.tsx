import Brand from '@/components/Brand';
import TOButton from '@/components/TOButton';
import TOInput from '@/components/TOInput';
import TOText from '@/components/TOText';
import login from '@/services/auth/login';
import { colors } from '@/theme/Colors';
import layout from '@/theme/layout';
import { LoginProps } from '@/types/navigation';
import { constants } from '@/utils/constants';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import {
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { ScaledSheet } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = ScaledSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffff',
	},
	heading: {
		paddingLeft: 4,
		fontSize: 20,
		color: 'black',
		bottom: Platform.OS === constants.strings.IOS ? 20 : undefined,
		fontFamily: constants.font.BOLD,
		letterSpacing: -0.25,
	},
	titleText: {
		fontFamily: constants.font.REGULAR,
		fontStyle: 'normal',
		fontWeight: '800',
		marginEnd: 10,
		letterSpacing: -0.25,
	},
	loginTextContainer: {
		marginBottom: 40,
	},
	userLogoContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		margin: 8,
		marginBottom: 1,
	},
	inputStyle: {
		height: 55,
	},
	loginButton: {
		// margin: 6,
		marginTop: 4,
	},
	loginButtonText: {
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: 18,
	},
	contentSpacing: {
		margin: 8,
	},
	title: {
		fontFamily: constants.font.BOLD,
		fontSize: 20,
		marginRight: 6,
		marginBottom: 4,
	},
	btnStyle: {
		backgroundColor: constants.colors.BLUE_BUTTON,
		marginBottom: 25,
	},
	txtStyle: {
		color: colors.textLight,
		fontFamily: constants.font.BOLD,
		letterSpacing: -0.25,
	},
});

export default function Login({ navigation }: LoginProps) {
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');

	const [showPassword, setshowPassword] = useState(false);
	const { mutate, isPending } = useMutation({
		mutationFn: login,
		onSuccess: data => {
			if (data.status === 'error') {
				showMessage({
					message: data.data[0] || 'Login Failed',
					type: 'danger',
				});
			} else {
				navigation.navigate('Main');
			}
		},
	});

	const handleLogin = () => {
		const requestBody = {
			email,
			password,
			recaptcha: '',
			hipaa_acknowledgement: 'no',
		};
		mutate(requestBody);
	};

	return (
		<SafeAreaView style={[styles.container]}>
			<ScrollView
				style={[layout.flex_1]}
				keyboardShouldPersistTaps="handled"
				contentContainerStyle={[
					// eslint-disable-next-line react-native/no-inline-styles
					{
						marginHorizontal: 10,
						flexGrow: Platform.OS === constants.strings.IOS ? 0.75 : 0.5,
						justifyContent: 'space-around',
					},
					layout.colCenter,
				]}
			>
				<KeyboardAvoidingView
					behavior={
						Platform.OS === constants.strings.IOS ? 'padding' : 'position'
					}
					style={[
						Platform.OS === constants.strings.IOS
							? // eslint-disable-next-line react-native/no-inline-styles
							  { flex: 1, flexDirection: 'column', justifyContent: 'center' }
							: {},
					]}
					enabled
					keyboardVerticalOffset={
						Platform.OS === constants.strings.IOS ? 140 : 0
					}
				>
					<Text style={styles.heading}>Welcome</Text>
					<View style={layout.rowCenter}>
						<Brand width={120} height={120} />
					</View>
					<View style={styles.loginTextContainer}>
						<View style={styles.userLogoContainer}>
							<TOText style={styles.title}>
								{constants.strings.ACCOUNT_LOGIN}
							</TOText>
							<Feather name="user" size={20} color="black" />
						</View>
						<View style={styles.contentSpacing}>
							<TOText>{constants.strings.WELCOME_TO_TAPORDERS}</TOText>
						</View>
					</View>
					<View>
						<TOInput
							placeholder={constants.placeholder.TAPCLICKS_URL}
							returnKeyType="next"
						/>
						<TOInput
							placeholder={constants.placeholder.BUSINESS_EMAIL}
							returnKeyType="next"
							onChangeText={setemail}
						/>
						<TOInput
							secureTextEntry={!showPassword}
							placeholder={constants.placeholder.PASSWORD}
							returnKeyType="done"
							onChangeText={setpassword}
							rightIcon={{
								icon: (
									<Ionicons
										name={!showPassword ? 'eye-off' : 'eye'}
										size={20}
										color="black"
									/>
								),
								onPress: () => setshowPassword(!showPassword),
							}}
						/>
						<TOButton
							title={constants.strings.LOGIN}
							buttonType="square"
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							buttonStyle={{ ...styles.loginButton, ...styles.btnStyle }}
							// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
							textStyle={{
								...styles.loginButtonText,
								...styles.txtStyle,
							}}
							onPress={handleLogin}
							loading={isPending}
						/>
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
		</SafeAreaView>
	);
}
