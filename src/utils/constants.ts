const strings = {
	ASTERISK: ' *',
	MULTIPLE_ASTERISKS: ' ******',
	DOLLAR: '$',
	AT_SIGN: '@',
	PERCENTAGE_SYMBOL: '%',
	HYPHEN: '---',
	OPEN_PARENTHESIS: '(',
	EMPTY_STRING: '',
	SINGLE_SPACE: ' ',
	PERIOD: '.',
	COMMA: ',',
	COMMA_SPACE: ', ',
	TICK_MARK: '✓',
	ERROR_MARK: '✕',
	QUESTION_MARK: '?',
	NUMERIC_ONE: '1',
	NUMERIC_TWO: '2',
	NUMERIC_ZERO: '0',
	NUMERIC_TEN: '10',
	NA: ' N.A.',
	FILE_EXT: '/file_',
	FILE_EXT_2: 'file://',

	OG: 'og_',
	IOS: 'ios',
	ANDROID: 'android',
	FF: 'ff',
	YES: 'Yes',
	NO: 'No',
	YES_LOWERCASE: 'yes',
	NO_LOWERCASE: 'no',
	ALL: 'all',
	CPM: 'cpm',
	FEE: 'fee',
	CGN: 'cgn',
	ERROR: 'Error!',
	UNDERSCORE_ERROR: '_error',
	SUCCESS: 'Success!',
	STATUS_SUCCESS: 'success',
	STATUS_DANGER: 'danger',
	STATUS_WARNING: 'warning',
	NONE: 'none',
	DARK: 'dark',
	DATA: 'data',
	STRING: 'string',
	PRODUCT: 'Product',
	BUDGET: 'Budget',
	CITY: 'City',
	STATE: 'State',
	NOTES: 'Notes',
	OVERDUE: 'Overdue',
	STATUS: 'Status',
	PRIORITY: 'Priority',
	QUEUE: 'Queue',
	ADVERTISER: 'Advertiser',
	ADD: 'Add',
	UPLOAD: 'Upload',
	IMAGE: 'Image',
	DOCUMENT: 'Document',
	ASSIGN: 'Assign',
	UPDATE: 'Update',
	PROCEED: 'Proceed',
	ORDERS: 'Orders',
	CREATIVES: 'Creatives',
	NOTIFICATIONS: 'Notifications',
	INFO: 'Info',
	DATE: 'Date',
	CREATIVE: 'creative',
	SCHEDULE: 'Schedule',
	PERCENTAGE: 'percentage',
	CALCULATED: 'calculated',
	SERVICE: 'Service',
	OBJECT: 'object',
	COUNT: 'Count',
	CAMPAIGNS: 'Campaigns',
	LINE_ITEMS_TYPE: 'lineitems',
	THRESHOLD: 'threshold',
	REQUIRED: 'Required',
	CLIENT_ID: 'client_id',
	ORDER_TYPE_ID: 'order_type_id',
	SALESPERSON_ID: 'salesperson_id',
	ID_LINE_ITEM: 'line_item_id',
	TO_DO_TASK: 'toDoTask',
	PENDING_CREATIVE: 'pendingCreative',
	TASK: 'Task#',
	TASK_HASH: 'Task: #',
	TASK_TITLE: 'Task #',
	CREATIVE_HASH: 'Creative: #',
	TASK_OVERDUE: 'Task is Overdue',
	TASKS_OVERDUE: 'Tasks Overdue',
	PLEASE_ENTER: 'Please enter',
	TAPCLICKS_VERSION: 'TapClicks v',
	CREATIVE_NAME: 'Creative Name',
	LINE_ITEM_NAME: 'Line Item Name',
	NEW_ACCOUNT: 'New Account',
	DAY_PARTING_TYPE: 'day-parting',
	GEO_TARGETING_GOOGLE: 'geo-targeting-google',
	METRIC_SELECT: 'metric-select',
	CALCULATED_OVERRIDE: 'calculated-override',
	GOOGLE_ADS_AUD_TARGETING: 'google-ads-aud-targeting',
	AD_GROUP: 'ad-group',
	TIME_SELECT: 'timeselect',
	GOAL_DATA_SOURCE: 'Goal Data Source',
	LINE_ITEMS: 'Line Items',
	BUDGET_TYPE: 'budget',
	ORDER_NAME: 'Order Name',
	ORDER_TYPE: 'Order Type',
	ROLE_TYPE: 'Role Type',
	ORDER_STATUS: 'Order Status',
	ADVERTISER_NAME: 'Advertiser Name',
	TASK_DESCRIPTION: 'Task Description',
	CREATIVE_DESCRIPTION: 'Creative Description',
	ORDER_ID: 'Order ID',
	LINE_ITEM_ID: 'Line Item ID',
	FLIGHT_ID: 'Flight ID',
	START_DATE: 'Start Date',
	DUE_DATE: 'Due Date',
	END_DATE: 'End Date',
	VIEW_FORM_DETAILS: 'View Form Details',
	ITEM_NUMBER: 'Item Number',
	CAMPAIGN_NAME: 'Campaign Name',
	CAMPAIGN_MANAGER: 'Campaign Manager',
	BILLING_AMOUNT: 'Billing Amount',
	CLIENT_NAME: 'Client Name',
	SALES_REGION: 'Sales Region',
	COMPANY_ADDRESS: 'Company Address',
	STREET_ADDRESS: 'Street Address Line 1',
	STREET_ADDRESS_LINE_2: 'Street Address Line 2 (Optional)',
	ZIP_CODE: 'Zip Code',
	ATTACHMENTS: 'Attachments',
	ADD_ATTACHMENT: 'Add attachment',
	NEARING_DUE_DATE: 'Nearing due date',
	HIGH_PRIORITY: 'High Priority',
	COMPLETED_DATE: 'Completed Date',
	BUSINESS_UNIT: 'Business Unit',
	TASK_QUEUE: 'Task Queue',
	SALESPERSON: 'Salesperson',
	PROPERTY_NAME: 'Property Name:',
	ADVERTISER_ACCOUNT_ID: 'Advertiser Account ID',
	CRM_CLIENT_ID: 'CRM Client ID',
	DAY_PARTING: 'Day Parting:',
	DAY_NAME: 'Day Name',
	TIME_ZONE_TYPE: 'Time Zone Type',
	START_TIME: 'Start time',
	END_TIME: 'End time',
	LIST_OF_DOCUMENTS: 'List of documents',
	CREATED_DATE: ' Created Date',
	CONNECTION_LOST: 'Connection Lost!',
	TASKS_ESCALATION: 'Tasks in Escalation',
	TASK_NEARING_DUE_DATE: 'Task is nearing due date',
	TRY_AGAIN: ' Try Again',
	NOT_FOUND: 'Not found',
	ADD_CREATIVE: 'Add Creative',
	CLICK_TO_ADD_CREATIVES: 'Click on the button below to add creatives.',
	NO_CREATIVES_AVAILABLE: 'No creatives available',
	UPLOAD_FILE: 'Upload file',
	UPLOAD_AND_ATTACH_FILE_CREATIVE: 'Upload & Attach file to the creatives.',
	TAP_TO_UPLOAD: 'Tap to upload:',
	ATTACHED_FILES: 'Attached Files:',
	ACCOUNT_LOGIN: 'Account Login',
	ALMOST_DONE: 'Almost Done!',
	COMPANY_NAME: 'Company Name',
	CRM_ID: 'CRM ID',
	CREATE_ADVERTISER: ' Create Advertiser',
	TASK_INFORMATION: 'Task Information',
	CLIENT_INFORMATION: 'Client Information',
	LOGGED_IN_AS: 'You are logged in as:',
	SELECT_VALID_DATE: 'Please select valid date',
	CHANGE_QUEUE: 'Change Queue',
	ASSIGN_TASK_TO_QUEUE: 'Assign Task to Queue',
	UPDATE_DUE_DATE: 'Update Due Date',
	CURRENT_DUE_DATE: 'Current Due Date',
	UPDATE_DUE_DATE_TO: 'Update Due Date to',
	REASSIGN_CREATIVE: 'Reassign Creative',
	REASSIGN_TASK: 'Reassign Task',
	CURRENTLY_ASSIGNED_TO: 'Currently Assigned to',
	REASSIGN_CREATIVE_TO: 'Reassign Creative to',
	REASSIGN_TASK_TO: 'Reassign Task to',
	USER_NAME: 'User Name',
	AVAILABILITY: 'Availability',
	ACTIONED_BY: 'Actioned by:',
	ASSIGNED_TO: 'Assigned to:',
	CREATIVE_ASSIGNMENT_HISTORY: 'Creative Assignment History',
	TASK_ASSIGNMENT_HISTORY: 'Task Assignment History',
	CREATIVE_HISTORY: 'Creative History',
	TASK_HISTORY: 'Task History',
	CREATIVE_INFO: 'Creative Info',
	TASK_INFO: 'Task Info',
	ADD_DETAILS: 'Add Details',
	ATTACHED_DOCUMENTS: 'Attached Documents',
	LINE_ITEM_DETAILS: 'Line Item Details',
	SAVE_DETAILS: 'Save Details',
	MY_TASKS: 'My Tasks',
	DOWNLOADING_FILE: 'downloading file...',
	ADVERTISER_SAVED_SUCCESSFULLY: 'Advertiser saved successfully',
	NO_CLUSTER_ID_FOR_USER: 'There is No clusterId for user',
	OPEN_DOWNLOADED_FILE: 'Open Downloaded File',
	OPEN_DOWNLOADED_FILE_DESC: 'Do you want to open the downloaded file?',
	INVALID_DATA_FORMAT: 'Invalid data format in response:',
	ERROR_FETCHING_DATA: 'Error fetching data:',
	LOG_IN_BACK_AS_YOURSELF: 'Log Back In As Yourself',
	DEFAULT_DATA_PROFILE: 'using their default data profile of',
	LOGIN_AS_ANOTHER_USER: 'Log in as another user',
	SELECT_USER_TO_LOGIN: 'Select user to login as...',
	LOG_IN: 'Log In',
	RECENT_SEARCHES: 'Recent Searches',
	CLEAR_ALL: 'Clear All',
	REDUCE_PRIORITY: 'Reduce Priority',
	INCREASE_PRIORITY: 'Increase Priority',
	COMPLETE_CREATIVE: 'Complete Creative',
	COMPLETE_TASK: 'Complete Task',
	NO_DATA_FOUND: 'No Data Found',
	NO_COMMENTS_FOUND: 'No Comments Found',
	NO_SEARCH_FOUND: 'No search result found',
	NO_DATA_TO_DISPLAY: `Looks like there's no data to display here..`,
	NOTHING_TO_SHOW: 'Nothing to show at the moment.',
	LIST_IS_EMPTY: 'Oops! It seems the list is empty',
	SIGN_OUT_FROM_APP: 'Signing out from the app?',
	SIGN_OUT_FROM_APP_DESC: 'You can log in again using your credentials.',
	SAVE_PROGRESS: `Don't forget to save your progress`,
	SAVE_PROGRESS_DESC: `Are you sure you want to leave without saving? You have made changes that haven't been saved yet.`,
	TASK_UNAVAILABLE: `It seems like that the task you're looking may have been reassigned or is currently unavailable.`,
	LOGIN_AS_ANOTHER_USER_DESCRIPTION:
		'This will give you the ability to view and take action as the selected user.',
	COMPLETE_CREATIVE_USING_WEB:
		'Please proceed to complete this creative using the Web app.',
	COMPLETE_TASK_USING_WEB:
		'Please proceed to complete this task using the Web app.',
	CREATIVE_COMPLETED:
		'The creative has been completed, Please proceed to view details of the creative using the web app.',
	TASK_COMPLETED:
		'The task has been completed, Please proceed to view details of the task using the web app.',
	WELCOME_TO_TAPORDERS:
		'Welcome to TapOrders! Sign in here to manage your tasks, review & comment on orders, and approve creatives.',
	HOLD_ON_LOG_AS_SELECTED_USER:
		' Kindly hold on for a moment as we log you in as the selected user:',
	NO_INTERNET: `We're sorry, but it seems that you are currently not connected to
  the internet.`,
	CONNECTION_TRY_AGAIN: 'Please check your connection and try again.',
	TWO_FA_SCREEN_REMEMBER_DEVICE_MESSAGE:
		'We’ll remember this device so that you won’t be asked for authentication every time, but it won’t last forever.',
	TWO_FA_SCREEN_REQUEST_ANOTHER_CODE_BUTTON_NAME: 'Request Another Code',
	TWO_FA_SCREEN_MESSAGE:
		'You have received an email which contains two factor login code.',

	CREATIVE_ID_DESCRIPTION: (id: string) => `Creative Description (ID: #${id})`,
	TASK_ID_DESCRIPTION: (id: string) => `Task Description (ID: #${id})`,

	//alert messages
	SELECT_ONE: 'Select at least one Business Unit option',
	CREATE_ORDER_FOR_BU: (name: string) =>
		`You want to create order for business unit ${name}`,
	CREATE_ORDER_FOR_MULTISELECT_BU: (name: string) =>
		`We are auto-selecting one of the business units from multiple selected and we are going ahead with ${name}`,

	//alert title
	NO_BU_SELECTED: 'No Business Unit Selected',
	SINGLE_BU_SELECTED: 'Single Selected BU',
	MULTISELECTED_BU: 'Multi Selected BUs',

	// button
	OK: 'OK',
	CANCEL: 'Cancel',
	BACK: 'Back',
	NEXT: 'Next',
	ATTACH_FILES: 'Attach files',
	LOGIN: 'Login',
	CREATE: 'Create',
	SEND_ORDER: 'Send Order',
	SAVE: 'Save',
	SIGN_OUT: 'Sign Out',
	PROCEED_ANYWAY: 'Proceed Anyway',
	SAVE_CHANGES: 'Save changes',
};

const fieldType = {
	CHECKBOX: 'checkbox',
	SELECT: 'select',
	TEXT: 'text',
	TEXTAREA: 'textarea',
	CURRENCY: 'currency',
	READONLY: 'readonly',
	DATE: 'date',
	FILE: 'file',
	MULTISELECT: 'multiselect',
	TEXTPLAIN_AREA: 'textplain-area',
};

const toastMessage = {
	ATTENTION: 'Attention!',
	ATTENTION_NO_FILE_CHOSEN: 'Attention! No files chosen',
	ATTENTION_NO_FILE_SELECTED: 'Attention! No files selected',
	ATTENTION_NO_ADVERTISER_SELECTED: 'Attention! No advertiser selected',
	CHOOSE_FILE: 'Please choose a file before proceeding.',
	SELECT_ADVERTISER: 'Please select the advertiser before proceeding.',
	CREATIVE_UPDATE_SUCCESS: 'Creative Updated Successfully!',
	SAVE_SUCCESS: 'Save Successfully!',
	UPDATE_SUCCESS: 'Updated Successfully!',
	MARK_COMPLETE_SUCCESS: 'Marked as Completed successfully!',
	CHANGE_SUCCESS: 'Your changes have been saved successfully.',
	ERROR_OCCURRED: 'Error Occurred!',
	TRY_AGAIN: 'Something went wrong, please try again later.',
	FORGOT_FIELD_TO_ENTER: 'Oops! It seems you forgot to enter the ',
	FORGOT_TO_SELECT_QUEUE: 'Oops! It looks like you forgot to select a queue.',
	FORGOT_TO_SELECT_USER: 'Oops! It looks like you forgot to select a user.',
	FILL_REQUIRED_FIELD: 'Please fill out the required field',
	MINIMUM_PRIORITY_REACHED:
		'Minimum priority level reached, please review and update the priority accordingly.',
	MAXIMUM_PRIORITY_REACHED:
		'Maximum priority level reached, please review and update the priority accordingly.',
	PRIORITY_ESCALATED: 'Priority Escalated!',
	PRIORITY_LOWERED: 'Priority Lowered!',
	DUE_DATE_UPDATED_SUCCESS: 'Due Date Updated successfully!',
	CREATIVE_ASSIGNED_TO_QUEUE: 'Creative Assigned to Queue ID!',
	TASK_ASSIGNED_TO_QUEUE: 'Task Assigned to Queue ID!',
	CREATIVE_ASSIGNED_TO_QUEUE_SUCCESS:
		'The creative was successfully assigned to queue.',
	TASK_ASSIGNED_TO_QUEUE_SUCCESS:
		'The task was successfully assigned to queue.',
	CREATIVE_REASSIGNED: 'Creative Re-assigned!',
	TASK_REASSIGNED: 'Task Re-assigned!',
	SELECT_BUSINESS_UNIT: 'Please select a business unit',
	SELECT_BUSINESS_UNIT_TO_CREATE_ORDER:
		'To create an order please select a business unit first.',

	CREATIVE_REASSIGNED_SUCCESS: (id: string, userName: string) =>
		`The creative#${id} have been reassigned to ${userName} successfully.`,
	TASK_REASSIGNED_SUCCESS: (id: string, userName: string) =>
		`The task#${id} have been reassigned to ${userName} successfully.`,
	DATA_TYPE_MARK_COMPLETE_SUCCESS: (dataType: string) =>
		`The ${dataType} has been successfully marked as completed.`,
	PRIORITY_ESCALATED_MESSAGE: (isCreative: boolean, id: string) =>
		isCreative
			? `Priority of creative#${id} has been escalated.`
			: `Priority of task#${id} has been escalated.`,
	PRIORITY_LOWERED_MESSAGE: (isCreative: boolean, id: string) =>
		isCreative
			? `Priority of creative#${id} has been lowered.`
			: `Priority of task#${id} has been lowered.`,
	DUE_DATE_UPDATED_SUCCESS_MESSAGE: (
		isCreative: boolean,
		taskAssignmentId: string,
	) =>
		isCreative
			? `The due date for the creative#${taskAssignmentId} have been updated successfully.`
			: `The due date for the task#${taskAssignmentId} have been updated successfully.`,
};

const icon = {
	LOADING: 'loading',
	CLOSE: 'close',
	PLUS: 'plus',
	EYE_OFF_OUTLINE: 'eye-off-outline',
	EYE_OUTLINE: 'eye-outline',
	CALENDAR_BLANK_OUTLINE: 'calendar-blank-outline',
	ARROW_RIGHT: 'arrow-right',
	PAGE_NEXT_OUTLINE: 'page-next-outline',
	CLOSE_CIRCLE_OUTLINE: 'close-circle-outline',
	CHEVRON_UP: 'chevron-up',
	CHEVRON_DOWN: 'chevron-down',
	HISTORY: 'ClockCounterCircleIcon',
	DUE_DATE: 'CalenderCircleIcon',
	QUEUE: 'QueueIcon',
	REDUCE_PRIORITY: 'ReducePriorityIcon',
	INCREASE_PRIORITY: 'IncreasePriorityIcon',
	REASSIGN: 'RepeatCircleIcon',
	COMPLETE: 'CheckedCircleIcon',
};

const placeholder = {
	SEARCH: 'Search...',
	SEARCH_USER: 'Search User...',
	SELECT_CLIENT: 'Select Client',
	SEARCH_CREATIVE_LIBRARY: 'Search in creative library...',
	SEARCH_CREATIVE: 'Search Creative...',
	SEARCH_NOTIFICATION: 'Search Notification...',
	SEARCH_ORDER: 'Search Order...',
	SEARCH_LINE_ITEM: 'Search Line Items...',
	SEARCH_TASK: 'Search Task...',
	ENTER_COMMENT: 'Enter comment...',
	TAPCLICKS_URL: 'TapClicks URL - businessname.com',
	BUSINESS_EMAIL: 'Business Email',
	PASSWORD: 'Password',
	SELECT: 'Select...',
	SELECT_USER: 'Select User...',
	SELECT_REGION: 'Select region...',
};

const analytics = {
	USER_LOGIN: 'user_login',
	LOGIN_ERROR: 'login_error',
	LOGIN_CATCH_ERROR: 'login_catch_error',
	ADVERTISER_SAVE_SUCCESS: 'advertiser_save_success',
	ADVERTISER_SAVE_ERROR: 'advertiser_save_error',
	SAVE_SUCCESS: '_save_success',
	SAVE_ERROR: '_save_error',
	MARK_COMPLETE_SUCCESS: '_mark_complete_success',
	MARK_COMPLETE_ERROR: '_mark_complete_error',
	TASK_PRIORITY_INCREASED: 'task_priority_increased',
	TASK_PRIORITY_DECREASED: 'task_priority_decreased',
	TASK_DUE_DATE_UPDATED: 'task_due_date_updated',
	TASK_QUEUE_UPDATED: 'task_queue_updated',
	TASK_REASSIGNED: 'task_reassigned',
};

const font = {
	FONT_NAME: 'Mulish',
	REGULAR: 'Mulish-Regular',
	BOLD: 'Mulish-Bold',
};

const colors = {
	RED: '#FF0000',
	MAXIMUM_RED: '#D51A1A',
	BLUE_BUTTON: '#3199F0',
	TRUE_BLUE: '#0071E3',
	SEA_BLUE: '#3C98D3',
	DARK_BLUE: '#1A4A57',
	DARK_BLUE2: '#343555',
	MEDIUM_ELECTRIC_BLUE: '#005491',
	YELLOW_GREEN: '#8CC544',
	NEW_YORK_PINK: '#E38080',
	BLACK: '#000000',
	SHADOW: '#00000099',
	SHADOW_CREATIVES: '#00000080',
	SHADOW_SILVER: '#7676801F',
	SHADOW_TAB: '#d7d7da1f',
	SHADOW_BOTTOM_SHEET: '#94949459',
	OUTER_SPACE: '#444444',
	DARK_GRAY: '#484848',
	MEDIUM_LIGHT_GRAY: '#AFAFAF',
	GRANITE_GRAY: '#666666',
	ARGENT: '#BFBFBF',
	CRAYOLA: '#AEB0BC',
	LIGHT_VIOLET: '#52536E',
	COLUMBIA_BLUE: '#C9E2E4',
	LIGHT_GAINSBORO: '#D9E1E8',
	GAINSBORO: '#DDDDDD',
	GRAY: '#D3D3D3',
	CHINESE_WHITE: '#E0E0E0',
	PLATINUM: '#E8E8E8',
	LIGHT_GRAY: '#F0F0F0',
	CULTURED: '#F5F5F5',
	BRIGHT_GRAY: '#EDEDED',
	ANTI_FLASH_WHITE: '#F2F2F2',
	OFF_WHITE: '#EFEFEF',
	WHITE: '#FFFFFF',
	TRANSPARENT: 'transparent',
	QUARTZ: '#4B4B4B',
};

export const constants = {
	strings,
	fieldType,
	toastMessage,
	placeholder,
	icon,
	analytics,
	font,
	colors,
};
