// import { DashSchema } from '@/types/schemas/dashboard';
import { instance } from '../instance';

type Body = {
	email: string;
	password: string;
	recaptcha: string;
	hipaa_acknowledgement: string;
};
export default async (body: Body) => {
	const response = await instance
		.post('app/dash/session/login', { json: body })
		.json();
	return response;
};
