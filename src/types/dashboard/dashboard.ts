export interface DashboardData {
  id: string;
  unique_id?: any;
  display_order: number;
  title: string;
  is_predefined: boolean;
  is_template: boolean;
  is_in_library: boolean;
  type: string;
  entity?: any;
  icon: string;
  icon_bg_color: string;
  metadata: Metadata;
  created_at: number;
  updated_at: number;
  executive_summary_enabled: boolean;
  is_favorite: boolean;
  reporting_profile_id?: string;
  reporting_profiles?: Reportingprofile[];
  cluster_id?: string;
  cluster?: Reportingprofile;
  widget_ids?: string[];
  data_sources?: Datasource[];
  is_locked: boolean;
  timegroup: string;
  formatted_created_at: string;
  formatted_updated_at: string;
  thumbnail?: Thumbnail;
  type_display: string;
  can_favorite: boolean;
  is_dynamic: boolean;
  has_granular_permissions: boolean;
  granular_access_levels: Granularaccesslevels;
  can_be_accessed: boolean;
  can_be_edited: boolean;
  can_be_deleted: boolean;
  can_be_copied: boolean;
  can_be_deleted_tooltip?: string;
  can_be_listed: boolean;
}
interface Granularaccesslevels {
  can_be_edited: boolean;
}
interface Thumbnail {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder?: string;
  access_mode: string;
  original_filename: string;
  original_extension: string;
  api_key?: string;
}
interface Datasource {
  data_source_id?: string | string;
  data_type: string;
  data_view_id?: string | string;
}
interface Reportingprofile {
  id: string;
  name: string;
}
interface Metadata {
  selected_entity?: Selectedentity;
  chart_palette: string[];
  font_size: string;
  append_exported_datagrids: boolean;
  append_exported_datagrids_to_layout: boolean;
  hide_empty_exported_widgets: boolean;
  tags: any[];
  description?: any;
  dashboard_filters?: any;
  disable_dash_filters: boolean;
  disable_comparison: boolean;
  include_summary_page: boolean;
  created_from: string;
  datagrid_with_fixed_header_size?: boolean;
  enable_demo_mode?: boolean;
}
interface Selectedentity {
  type: string;
  id: string;
  name: string;
  data_view_id?: any;
  type_name: string;
}
