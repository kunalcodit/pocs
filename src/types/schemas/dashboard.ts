import { z } from 'zod';

const GranularAccessLevelsSchema = z.object({
	can_be_edited: z.boolean().nullable(),
});

const ThumbnailSchema = z.object({
	asset_id: z.string().nullable(),
	public_id: z.string().nullable(),
	version: z.number().nullable(),
	version_id: z.string().nullable(),
	signature: z.string().nullable(),
	width: z.number().nullable(),
	height: z.number().nullable(),
	format: z.string().nullable(),
	resource_type: z.string().nullable(),
	created_at: z.string().nullable(),
	tags: z.array(z.any()).nullable(),
	bytes: z.number().nullable(),
	type: z.string().nullable(),
	etag: z.string().nullable(),
	placeholder: z.boolean().nullable(),
	url: z.string().nullable(),
	secure_url: z.string().nullable(),
	folder: z.string().optional().nullable(),
	access_mode: z.string().nullable(),
	original_filename: z.string().nullable(),
	original_extension: z.string().nullable(),
	api_key: z.string().optional().nullable(),
});

const DataSourceSchema = z.object({
	data_source_id: z.string().optional().nullable(),
	data_type: z.string().nullable(),
	data_view_id: z.string().optional().nullable(),
});

const ClusterSchema = z.object({
	id: z.string().nullable(),
	name: z.string().nullable(),
});

const ReportingProfileSchema = z.object({
	id: z.string().nullable(),
	name: z.string().nullable(),
});

const SelectedEntitySchema = z.object({
	type: z.string().nullable(),
	id: z.string().nullable(),
	name: z.string().nullable(),
	data_view_id: z.any().nullable(),
	type_name: z.string().nullable(),
});

const MetadataSchema = z.object({
	selected_entity: SelectedEntitySchema.optional().nullable(),
	chart_palette: z.array(z.string()).nullable(),
	font_size: z.string().nullable(),
	append_exported_datagrids: z.boolean().nullable(),
	append_exported_datagrids_to_layout: z.boolean().nullable(),
	hide_empty_exported_widgets: z.boolean().nullable(),
	tags: z.array(z.any()).nullable(),
	description: z.any().nullable(),
	dashboard_filters: z.any().nullable(),
	disable_dash_filters: z.boolean().nullable(),
	disable_comparison: z.boolean().nullable(),
	include_summary_page: z.boolean().nullable(),
	created_from: z.string().nullable(),
	datagrid_with_fixed_header_size: z.boolean().optional().nullable(),
	enable_demo_mode: z.boolean().optional().nullable(),
});

const AaDaumSchema = z.object({
	id: z.string(),
	unique_id: z.any().nullable(),
	display_order: z.number().nullable(),
	title: z.string().nullable(),
	is_predefined: z.boolean().nullable(),
	is_template: z.boolean().nullable(),
	is_in_library: z.boolean().nullable(),
	type: z.string().nullable(),
	entity: z.any().nullable(),
	icon: z.string().nullable(),
	icon_bg_color: z.string().nullable(),
	metadata: MetadataSchema.nullable(),
	created_at: z.number().nullable(),
	updated_at: z.number().nullable(),
	executive_summary_enabled: z.boolean().nullable(),
	is_favorite: z.boolean().nullable(),
	reporting_profile_id: z.string().optional().nullable(),
	reporting_profiles: z.array(ReportingProfileSchema).optional().nullable(),
	cluster_id: z.string().optional().nullable(),
	cluster: ClusterSchema.optional().nullable(),
	widget_ids: z.array(z.string()).optional().nullable(),
	data_sources: z.array(DataSourceSchema).optional().nullable(),
	is_locked: z.boolean().nullable(),
	timegroup: z.string().nullable(),
	formatted_created_at: z.string().nullable(),
	formatted_updated_at: z.string().nullable(),
	thumbnail: ThumbnailSchema.optional().nullable(),
	type_display: z.string().nullable(),
	can_favorite: z.boolean().nullable(),
	is_dynamic: z.boolean().nullable(),
	has_granular_permissions: z.boolean().nullable(),
	granular_access_levels: GranularAccessLevelsSchema.nullable(),
	can_be_accessed: z.boolean().nullable(),
	can_be_edited: z.boolean().nullable(),
	can_be_deleted: z.boolean().nullable(),
	can_be_copied: z.boolean().nullable(),
	can_be_deleted_tooltip: z.string().optional().nullable(),
	can_be_listed: z.boolean().nullable(),
});

const DataSchema = z.object({
	sEcho: z.string().nullable(),
	iTotalRecords: z.number().nullable(),
	iTotalDisplayRecords: z.number().nullable(),
	aaData: z.array(AaDaumSchema),
});

const DashSchema = z.object({
	data: DataSchema,
	error: z.boolean().nullable(),
	warnings: z.array(z.any()).nullable(),
	status: z.number().nullable(),
});

export {
	DashSchema,
	DataSchema,
	AaDaumSchema,
	MetadataSchema,
	SelectedEntitySchema,
	ReportingProfileSchema,
	ClusterSchema,
	DataSourceSchema,
	ThumbnailSchema,
	GranularAccessLevelsSchema,
};
