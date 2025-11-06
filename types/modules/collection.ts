import type { ShareRightType } from './assignment.js';
import type { BlockItemBase, ContentType, MediaType } from './core.js';
import type { LabelOrClass } from './labels-classes.js';
import type { Lom } from './lom.js';
import type { Organization } from './organisation.js';
import type { ShareWithColleagueType } from './shared-with-colluegue-type.js';
import type { CommonUser, User, UserProfile } from './user.js';

export interface Collection {
	id: string;
	avo1_id?: string | null;
	collection_fragments: CollectionFragment[];
	created_at: string;
	updated_at: string;
	is_public: boolean;
	is_deleted?: boolean;
	publish_at: string | null;
	published_at: string | null;
	depublish_at: string | null;
	external_id: string | null;
	description: string | null;
	description_long: string | null;
	collection_labels_classes?: { collection_label_class: LabelOrClass }[];
	loms?: Lom[] | null;
	lom_intendedenduserrole: string[] | null;
	lom_keywords: string[] | null;
	lom_languages: string[] | null;
	organisation_id: string;
	organisation: Organization | null;
	owner_profile_id: string;
	profile?: UserProfile | null;
	updated_by_profile_id: string | null;
	updated_by: CommonUser | null;
	note: string | null;
	redaction: boolean | null;
	redaction_at: string | null;
	thumbnail_path: string | null;
	seo_image_path: string | null;
	title: string;
	type_id: number;
	type: MediaType | null;
	briefing_id: string | null;
	last_user_edit_at?: string | null;
	last_user_edit_profile_id?: string | null;
	last_user_edit_profile?: CommonUser | null;
	collection_labels?: CollectionLabel[] | null;
	relations?: RelationEntry<Collection>[] | null;
	contributors?: CollectionContributor[] | null;
	share_type?: ShareWithColleagueType; // Only available when fetching assignments from the collections_overview table
	share_type_order?: number; // Only available when fetching assignments from the collections_overview table
	is_managed: boolean;

	// Special overview views properties for avo admin dashboard
	management?: CollectionManagement | null;
	management_language_check?: CollectionManagementLanguageCheckSchema[] | null;
	management_quality_check?: CollectionManagementQualityCheck[] | null;
	management_final_check?: CollectionManagementFinalCheckSchema[] | null;
	manager?: CommonUser | null;
	channel_type?: string | null;
	channel_name?: string | null;
	last_marcom_date?: string | null;
	klascement?: boolean;
	owner?: User;
	item_count: number;
	view_count: number;
	counts?: {
		views: number;
		bookmarks: number;
		copies: number;
		in_collection: number;
		in_assignment: number;
		quick_lane_links: number;
		contributors: number;
	};
}

export interface CollectionContributor {
	id: string;
	profile_id?: string | null;
	collection_id: string;
	rights: ShareRightType;
	created_at: string;
	updated_at: string;
	invite_token?: string | null;
	invite_email?: string | null;
	profile?: UserProfile;
}

export interface CollectionLabel {
	id: number;
	label: string;
	collection_uuid: string;
	created_at: string;
	updated_at: string;
}

export interface CollectionManagement {
	id: number;
	collection_id: string;
	manager_profile_id: string | null;
	manager?: {
		profile_id: string;
		full_name: string;
		mail: string;
	};
	current_status: ManagementStatus | null;
	status_valid_until: string | null;
	note: string | null;
	created_at: string;
	updated_at: string;
	QC: CollectionManagementQualityCheck[] | null;
}

export interface CollectionManagementQualityCheck {
	id: number;
	collection_id: string;
	qc_label: string;
	assignee_profile_id: string;
	assignee?: {
		profile_id: string;
		full_name: string;
		mail: string;
	};
	comment: string | null;
	qc_status: boolean | null;
	created_at: string;
	updated_at: string;
}

export interface CollectionManagementFinalCheckSchema {
	id: number;
	collection_id: string;
	qc_label: string;
	assignee_profile_id: string;
	assignee?: {
		profile_id: string;
		full_name: string;
		mail: string;
	};
	comment: string | null;
	qc_status: boolean | null;
	created_at: string;
	updated_at: string;
}

export interface CollectionManagementLanguageCheckSchema {
	id: number;
	collection_id: string;
	qc_label: string;
	assignee_profile_id: string;
	assignee?: {
		profile_id: string;
		full_name: string;
		mail: string;
	};
	comment: string | null;
	qc_status: boolean | null;
	created_at: string;
	updated_at: string;
}

export enum CollectionFragmentType {
	ITEM = 'ITEM',
	TEXT = 'TEXT',
	COLLECTION = 'COLLECTION',
	ASSIGNMENT = 'ASSIGNMENT',
}

export interface CollectionFragment extends BlockItemBase {
	collection_uuid: string;
	external_id: string;

	is_media_fragment: boolean; // Deprecated, use type instead
}

export interface CollectionFragmentExternalId {
	external_id: string;
	mediamosa_id: string;
	type_label: ContentType;
}

export type RelationType = 'IS_COPY_OF' | 'IS_REPLACED_BY' | 'REPLACES' | 'HAS_COPY';

export interface RelationEntry<T> {
	id: number;
	object: string;
	subject: string;
	created_at: string;
	updated_at: string;
	predicate: RelationType;
	object_meta?: T;
}

export type ManagementStatus =
	| 'Actueel'
	| 'Te actualiseren'
	| 'Volledig te herzien'
	| 'Gearchiveerd';
