// import { DashSchema } from '@/types/schemas/dashboard';
import { instance } from '../instance';

export default async () => {
	const response = await instance.get('server/api/session/initUser').json();
	return response;
};
