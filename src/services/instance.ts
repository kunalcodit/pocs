import ky from 'ky';
import CookieManager from '@react-native-cookies/cookies';
import { storage } from '@/App';

export const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ''}/`;

const response = storage.getString('HOST');

export const instance = ky.extend({
	prefixUrl: `https://${response}` ?? '',
	headers: {
		Accept: 'application/json',
	},
	hooks: {
		afterResponse: [
			async (request, options, response) => {
				const setCookieHeader = response.headers.get('set-cookie');

				if (setCookieHeader) {
					await CookieManager.clearAll();
					// await setCookie(setCookieHeader);
					await CookieManager.setFromResponse(prefixUrl, setCookieHeader);
				}
			},
		],
	},
});
