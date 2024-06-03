import { DashSchema } from '@/types/schemas/dashboard';
import { instance } from '../instance';

type Params = {
	is_predefined: boolean;
	is_in_library: boolean;
	extra: boolean;
	datatable: boolean;
	summary: boolean;
	sort: string;
	page: string;
	is_client_page?: boolean;
	is_shared?: boolean;
	all?: boolean;
	q?: string;
};

export default async (currentPage?: string, q?: string, pge = '') => {
	const params: Params = {
		is_predefined: false,
		is_in_library: false,
		extra: true,
		datatable: true,
		summary: true,
		sort: 'title',
		page: `0,${pge}`,
		all: true,
	};
	if (currentPage === 'is_client_page') {
		params.is_client_page = true;
	} else if (currentPage === 'is_shared') {
		params.is_shared = true;
	}
	if (q) {
		params.q = `${q}|title`;
	}
	const response = await instance
		.get('server/api/dash/pages', {
			searchParams: {
				...params,
			},
		})
		.json();
	const result = DashSchema.parse(response);
	return result;
};
