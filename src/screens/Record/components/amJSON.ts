import * as am5plugins_json from '@amcharts/amcharts5/plugins/json';

export const json = {
	type: 'XYChart',
	settings: {
		panX: false,
		panY: false,
		wheelX: 'panX',
		wheelY: 'zoomX',
		scrollbarX: {
			type: 'Scrollbar',
			settings: {
				orientation: 'horizontal',
			},
		},
	},
};
