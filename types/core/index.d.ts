import type { CollectionFragmentType, CollectionSchema } from '../collection';
import type { Assignment_v2Schema, AssignmentBlockType } from '../assignment';
import type { ItemSchema } from '../item';

export type ContentTypeSchema = 'collectie' | 'video' | 'audio' | 'bundel' | 'opdracht';

export type ContentPickerTypeSchema =
	// BOTH
	| 'CONTENT_PAGE'
	| 'NL_CONTENT_PAGE_PARENT_ID'
	| 'INTERNAL_LINK'
	| 'EXTERNAL_LINK'
	| 'ANCHOR_LINK'
	| 'PROFILE'
	| 'FILE'
	| 'CUSTOM_NAVIGATION_ELEMENTS'

	| 'CONTENT_PAGE_NEWS_ITEM'
	| 'CONTENT_PAGE_PAGE'
	| 'CONTENT_PAGE_PROJECT'
	| 'CONTENT_PAGE_OVERVIEW'
	| 'CONTENT_PAGE_DOMAIN_DETAIL'
	| 'CONTENT_PAGE_EVENT_DETAIL'
	| 'CONTENT_PAGE_SCREENCAST'
	/**
	 * @deprecated use CUSTOM_NAVIGATION_ELEMENTS instead
	 */
	| 'DROPDOWN'

	// AVO
	| 'ITEM'
	| 'ITEM_WITH_CUE_POINTS'
	| 'COLLECTION'
	| 'BUNDLE'
	| 'ASSIGNMENT'
	| 'SEARCH_QUERY'
	| 'PROJECTS'

	// HET_ARCHIEF
	| 'IE_OBJECT';

export type MediaTypeSchema = {
	id: number;
	label: ContentTypeSchema;
};

export type LinkTargetSchema = '_self' | '_blank';

export interface PickerItemSchema {
	label?: string;
	type: ContentPickerTypeSchema;
	value: string;
	target?: LinkTargetSchema;
}

// Blocks for collection and assignments:

export type BlockItemTypeSchema = CollectionFragmentType | AssignmentBlockType;

export interface BlockItemBaseSchema {
	id: string | number; // Prefer string: uuid
	type: BlockItemTypeSchema;
	position: number;
	use_custom_fields: boolean;
	custom_description: string | null;
	custom_title: string | null;
	start_oc: number | null;
	end_oc: number | null;
	thumbnail_path: string | null;
	created_at: string; // ISO date string
	updated_at: string; // ISO date string

	// This property won't be selectable from the database but has to be manually filled using the CollectionService.getCollectionWithItems or Assignment.getAssignmentWithContent
	item_meta?: ItemSchema | CollectionSchema | (Assignment_v2Schema & { type_id: number });

	// Pupil collection / assignment response
	fragment_id?: string | null;
	assignment_response_id?: any;

	// Assignment block
	assignment_id?: string;
	original_title?: string | null;
	original_description?: string | null;
	is_deleted?: boolean;
}
