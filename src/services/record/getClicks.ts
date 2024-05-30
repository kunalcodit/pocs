import { Widget } from '@/types/record/Widgets';
import { instance } from '../instance';

type Params = {
	aggregate: boolean;
	daterange: string;
	fields?: string;
	widget_page_id: string;
	widget_request: string;
	widget_type: string;
	groupby?: string;
};

export default async (w: Widget, widgetPageID: string) => {
	const groupby = w.metadata.data_columns.grouped.map(d => d.field).join(',');
	const fields = w.metadata.data_columns.selected.map(d => d.field).join(',');
	const searchParams: Params = {
		aggregate: false,
		daterange: '2023-05-20|2024-01-26',
		widget_page_id: widgetPageID,
		widget_request: w.id,
		widget_type: w.type,
	};
	if (groupby) {
		searchParams.groupby = groupby;
	}
	if (fields) {
		searchParams.fields = fields;
	}
	const response = await instance
		.get(`server/api/services/${w.data_source_id}/data/${w.data_view_id}`, {
			searchParams,
		})
		.json();
	return response;
};
