import { RecordSchema } from '@/types/schemas/record';
import { instance } from '../instance';

export default async (id: string) => {
	const response = await instance.get(`server/api/dash/${id}`).json();
	// const result = RecordSchema.parse(response);
	return response;
};
