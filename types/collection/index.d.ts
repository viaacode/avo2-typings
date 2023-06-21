import type { UserProfile } from '../user';
import type { BlockItemBaseSchema, ContentTypeSchema, MediaTypeSchema } from '../core';
import type { OrganizationSchema } from '../organization';
import type { ShareRightType } from '../assignment';
import type { LomSchema } from '../lom';
import type { ShareWithColleagueType } from '../shared/shared-with-colluegue-type';

interface Aggregate {
	aggregate: {
		count: number;
	};
}

export interface CollectionSchema {
	id: string;
	avo1_id?: string | null;
	collection_fragments: CollectionFragment[];
	collection_fragments_aggregate?: Aggregate;
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
	lom_classification: string[] | null;
	lom_context: string[] | null;
	lom_thema: string[] | null;
	lom_typical_age_range: string[] | null;
	lom_intendedenduserrole: string[] | null;
	lom_keywords: string[] | null;
	lom_languages: string[] | null;
	organisation_id: string;
	organisation: OrganizationSchema | null;
	owner_profile_id: string;
	profile?: UserProfile | null;
	updated_by_profile_id: string | null;
	updated_by: UserProfile | null;
	note: string | null;
	redaction: boolean | null;
	redaction_at: string | null;
	thumbnail_path: string | null;
	seo_image_path: string | null;
	title: string;
	type_id: number;
	type: MediaTypeSchema | null;
	briefing_id: string | null;
	is_managed: boolean;
	management?: CollectionManagementSchema | null;
	management_language_check?: CollectionManagementLanguageCheck[] | null;
	last_user_edit_at?: string | null;
	collection_labels?: CollectionLabelSchema[] | null;
	relations?: RelationEntrySchema<CollectionSchema>[] | null;
	contributors?: CollectionContributorSchema[] | null;
	loms?: LomSchema[] | null;
	share_type?: ShareWithColleagueType; // Only available when fetching assignments from the collections_overview table
}

export interface CollectionContributorSchema {
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

export interface CollectionLabelSchema {
	id: number;
	label: string;
	collection_uuid: string;
	created_at: string;
	updated_at: string;
}

export interface CollectionManagementSchema {
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
	QC: CollectionManagementQualityCheckSchema[] | null;
}

export interface CollectionManagementQualityCheckSchema {
	id: number;
	collection_id: string;
	qc_label: string;
	assignee_profile_id: string;
	comment: string | null;
	qc_status: boolean | null;
	created_at: string;
	updated_at: string;
}

export interface CollectionManagementLanguageCheck {
	assignee_profile_id: string | null;
	assignee?: {
		profile_id: string;
		full_name: string;
		mail: string;
	};
}

type CollectionFragmentType = 'ITEM' | 'TEXT' | 'COLLECTION';

export interface CollectionFragment extends BlockItemBaseSchema {
	collection_uuid: string;
	external_id: string;

	is_media_fragment: boolean; // Deprecated, use type instead
}

export interface CollectionFragmentExternalId {
	external_id: string;
	mediamosa_id: string;
	type_label: ContentTypeSchema;
}

export type RelationTypeSchema = 'IS_COPY_OF' | 'IS_REPLACED_BY' | 'REPLACES' | 'HAS_COPY';

export interface RelationEntrySchema<T> {
	id: number;
	object: string;
	subject: string;
	created_at: string;
	updated_at: string;
	predicate: RelationTypeSchema;
	object_meta?: T;
}

export type ManagementStatus =
	| 'Actueel'
	| 'Te actualiseren'
	| 'Volledig te herzien'
	| 'Gearchiveerd';
