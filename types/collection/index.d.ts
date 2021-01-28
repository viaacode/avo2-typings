import { UserProfile } from '../user';
import { ContentTypeSchema, MediaTypeSchema } from '../core';
import { ItemSchema } from '../item';
import { OrganizationSchema } from '../organization';

interface Aggregate {
	aggregate: {
		count: number;
	};
}

export interface CollectionSchema {
	id: string;
	avo1_id: string | null;
	collection_fragments: CollectionFragment[];
	collection_fragments_aggregate: Aggregate;
	created_at: string;
	updated_at: string;
	is_public: boolean;
	is_deleted: boolean;
	publish_at: string | null;
	published_at: string | null;
	depublish_at: string | null;
	external_id: string | null;
	description: string | null;
	description_long: string | null;
	lom_classification: string[] | null;
	lom_context: string[] | null;
	lom_typicalagerange: string[] | null;
	lom_intendedenduserrole: string[] | null;
	lom_keywords: string[] | null;
	lom_languages: string[] | null;
	organisation_id: string;
	organisation: OrganizationSchema | null;
	owner_profile_id: string;
	profile: UserProfile | null;
	updated_by_profile_id: string | null;
	updated_by: UserProfile | null;
	note: string | null;
	redaction: boolean | null;
	redaction_at: string | null;
	thumbnail_path: string | null;
	title: string;
	type_id: number;
	type: MediaTypeSchema | null;
	briefing_id: string | null;
	collection_labels: CollectionLabelSchema[] | null;
	relations: Array<RelationEntry<CollectionSchema>> | null;
	is_managed: boolean;
	management: CollectionManagementSchema | null;
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

export interface CollectionFragment {
	id: number;
	collection_uuid: string;
	created_at: string;
	custom_description: string | null;
	custom_title: string | null;
	end_oc: number | null;
	external_id: string;
	position: number;
	start_oc: number | null;
	updated_at: string;
	use_custom_fields: boolean;
	thumbnail_path: string | null;

	// This property won't be selectable from the database but has to be manually filled using the CollectionService.getCollectionWithItems
	item_meta?: ItemSchema | CollectionSchema;
	is_media_fragment: boolean; // Deprecated, use type instead

	// A collection can contain ITEM or TEXT fragments, a bundle can contain COLLECTION fragments
	type: 'ITEM' | 'TEXT' | 'COLLECTION';
}

export interface CollectionFragmentExternalId {
	external_id: string;
	mediamosa_id: string;
	type_label: ContentTypeSchema;
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
