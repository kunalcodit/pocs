export interface Widget {
	id: string;
	unique_id: any;
	layout_id: string;
	report_id: any;
	type: string;
	width: number;
	height: number;
	display_order: number;
	title: string;
	is_predefined: boolean;
	is_in_library: boolean;
	created_from_library: boolean;
	metadata: Metadata;
	created_at: number;
	updated_at: number;
	library_download_count: number;
	data_type: string;
	data_source_id: string;
	data_view_id: string;
	has_live_integration: boolean;
	assignments: any;
	type_display: string;
	timegroup: string;
	formatted_updated_at: string;
	formatted_created_at: string;
	can_be_accessed: boolean;
	can_be_edited: boolean;
	can_be_deleted: boolean;
	can_be_copied: boolean;
	can_be_deleted_tooltip: any;
}

export interface Metadata {
	id: any;
	description: any;
	tags: any[];
	data_columns: DataColumns;
	draw_options: DrawOptions;
	chart_palette: any;
	time_grouping: any;
	weekly_start_day: string;
	is_multi_grouped: boolean;
	export_options: any;
	move_y_axes: any[];
	sort_by: any;
	sort_order: boolean;
	load_all_data: boolean;
	line_columns: any[];
	thumbnail_metadata: any;
	is_predefined: boolean;
	filter_set_id: any;
	map_id: any;
	geo_code: any;
	map_zoom: any;
	rounded_metrics: any[];
	relative_date_range: string;
	is_overriding_date_range: boolean;
	start_date_override: any;
	end_date_override: any;
	compare_to_prior_period: boolean;
	comparison_start_date_override: any;
	comparison_end_date_override: any;
	comparison_relative_date_range: string;
	ignore_date_range: boolean;
	comparison_option: string;
	sparkline_option: string;
	comparison_overwrite: any[];
	type: string;
	min_font_size: number;
	max_font_size: number;
	widget_products: any[];
	product_widget_can_be_accessed: boolean;
	weekly_start_day_display: string;
	currency_discrepancy: boolean;
	show_currency: boolean;
	data_source: DataSource;
	dynamic: Dynamic;
}

export interface DataColumns {
	selected: Selected[];
	grouped: any[];
}

export interface Selected {
	field: string;
	label: string;
	format: string;
	values: any[];
	has_set_values: boolean;
	value_data_source_type: any;
	details_order: number;
	summary_order: number;
	is_sortable: boolean;
	custom_sort: any;
	default_sort: any;
	tooltip: string;
	possible_discrepancy_warning: any;
	placeholder: any;
	postprocess_type: string;
	edit_control_type: string;
	is_custom_edit_control: boolean;
	ignore_set_data: boolean;
	is_unique: boolean;
	is_required: boolean;
	is_read_only: boolean;
	is_selectable: boolean;
	allows_null_value: boolean;
	is_hidden: boolean;
	is_hidden_in_details: boolean;
	is_primary_key: boolean;
	is_primary_name_field: boolean;
	is_primary_descriptive_name_field: boolean;
	is_primary_date_field: boolean;
	date_format: any;
	original_date_format: any;
	use_local_timezone: boolean;
	is_foreign_key: boolean;
	is_foreign_field: boolean;
	foreign_mapping: any;
	foreign_mapping_dependencies: any[];
	concat_columns_split: string;
	alternate_field: any;
	field_alias: string;
	is_pseudo: boolean;
	is_extra: boolean;
	is_custom_cell_render: boolean;
	is_groupable: boolean;
	is_filterable: boolean;
	sticky: boolean;
	filter_input_type: any;
	groupby_id_field: string;
	groupby_name_field: string;
	groupby_field_format: string;
	is_groupby_name_field: boolean;
	show_on_group_by: boolean;
	aggregate_query: any;
	is_metric: boolean;
	precision: number;
	extra_parameters: any[];
	force_in_select: boolean;
	is_private: boolean;
	enable_history: boolean;
	is_taggable: boolean;
	tag_default_value: any;
	custom_distinct_values: any;
	error: boolean;
	dependencies: any[];
	user_translation_field: boolean;
	edit_detail_group_id: any;
	is_exportable: boolean;
	is_required_in_datatable: boolean;
	is_foreign_audit_enabled: boolean;
	audit_name_column: any;
	is_audit_metadata_column: boolean;
	is_href: boolean;
	is_average: boolean;
	geocode: any;
	raw_field: string;
	defined_by_formula: boolean;
	is_cumulative: boolean;
	is_hidden_in_drilldown: boolean;
	compare_inverted: boolean;
	compare_as_value: boolean;
	geo_config: any;
	is_finite: boolean;
	is_deprecated: boolean;
	owa_duplicate: boolean;
	calculation_format: any;
	is_lookup: boolean;
	support_category_outer_mode: boolean;
}

export interface DrawOptions {
	show_background: ShowBackground;
	show_borders: ShowBorders;
	show_shadow: ShowShadow;
	show_header: ShowHeader;
	show_title: ShowTitle;
	show_data_source: ShowDataSource;
	show_metric_name: ShowMetricName;
	show_widgets_with_no_data: ShowWidgetsWithNoData;
	font_size: number;
	reduce_number: boolean;
	center_numbers: string;
	circle_number: string;
	circle_font_size: number;
	wrapped_font_size: number;
	circle_size: number;
	wrap_metric_name: boolean;
	wrap_number: boolean;
	font_properties: FontProperties;
	background_color_type: string;
	background_color: string;
	border_color: string;
	border_width: number;
	corner_radius: number;
	background_gradient: string;
	spacing: number;
	spacing_toggle: boolean;
	gradient_color: string;
	plot_type: string;
	show_sample_data: boolean;
	force_sample_data: boolean;
	depth: number;
	angle: number;
	is_hand_drawn: boolean;
	has_tooltip: boolean;
	has_bullets: boolean;
	has_legend: boolean;
	date_format_type: string;
	is_rotated: boolean;
	has_value_scroller: boolean;
	is_y_axis_moved: boolean;
	is_normalized: boolean;
	is_zero_scaled: boolean;
	is_solid_gauge: boolean;
	show_labels: boolean;
	show_label_values: boolean;
	show_label_percent: boolean;
	show_label_names: boolean;
	show_metric_labels: boolean;
	is_smoothed_line: boolean;
	show_empty_dates: boolean;
	start_angle: number;
	inner_radius: number;
	neck_height: boolean;
	neck_width: boolean;
	hide_grid_lines: boolean;
	other_percent: boolean;
	label_percent: boolean;
	display_length: number;
	report_display_length: any;
	grid_paginate: boolean;
	grid_is_responsive: boolean;
	grid_collapse_in_modal: boolean;
	show_total_row: boolean;
	grid_total_row_bottom: boolean;
	grid_full_image_size: boolean;
	grid_preview_as_iframe: boolean;
	pivot_grid: boolean;
	grid_iframe_capture_delay: boolean;
	split_in_multiple_pages: boolean;
	rows_per_page: number;
	number_of_page: number;
	repeat_full_layout: boolean;
	allEmptyData: boolean;
}

export interface ShowBackground {
	value: boolean;
	overridden: boolean;
}

export interface ShowBorders {
	value: boolean;
	overridden: boolean;
}

export interface ShowShadow {
	value: boolean;
	overridden: boolean;
	metadata: any[];
}

export interface ShowHeader {
	value: boolean;
	overridden: boolean;
}

export interface ShowTitle {
	value: boolean;
	overridden: boolean;
}

export interface ShowDataSource {
	value: boolean;
	overridden: boolean;
}

export interface ShowMetricName {
	value: boolean;
	overridden: boolean;
}

export interface ShowWidgetsWithNoData {
	value: boolean;
	overridden: boolean;
}

export interface FontProperties {
	bold: boolean;
	italic: boolean;
	underline: boolean;
	strikethrough: boolean;
	text_color: string;
}

export interface DataSource {
	type: string;
	id: string;
	data_view: string;
	name: string;
	id_name: string;
	data_view_name: string;
	icon: string;
	has_custom_icon: boolean;
	color: string;
	requires_group_by: boolean;
	requires_date_range: boolean;
	is_of_type_service: boolean;
	include_num_entities: any;
	include_data_freshness_date: any;
	is_custom_service: boolean;
	has_live_integration: boolean;
	primary_date_field: string;
	geo_columns: any;
	mapbox_config: MapboxConfig;
	active: boolean;
	live_assignments_threshold: number;
}

export interface MapboxConfig {
	layers: Layers;
}

export interface Layers {
	regioncgn: Regioncgn;
	dma: Dma;
}

export interface Regioncgn {
	country: string;
}

export interface Dma {
	country: string;
	dma: string;
}

export interface Dynamic {
	is_inactive: boolean;
	filters: any[];
	filter_set_name: any;
	annotations: any[];
	alerts: any[];
	predefined_data: any;
	raw_data: any;
	predefined_filters: any;
	warnings: any[];
	errors: any[];
	is_item_not_found: boolean;
	is_live_filter: boolean;
}
