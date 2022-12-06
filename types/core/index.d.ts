import { CollectionFragmentType, CollectionSchema } from '../collection';
import { AssignmentBlockType } from '../assignment';
import { ItemSchema } from '../item';

export type ContentTypeSchema = 'collectie' | 'video' | 'audio' | 'bundel';

export type ContentPickerTypeSchema =
	| 'CONTENT_PAGE'
	| 'COLLECTION'
	| 'ITEM'
	| 'BUNDLE'
	| 'DROPDOWN'
	| 'INTERNAL_LINK'
	| 'EXTERNAL_LINK'
	| 'SEARCH_QUERY'
	| 'PROJECTS'
	| 'ANCHOR_LINK'
	| 'PROFILE';

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
	item_meta?: ItemSchema | CollectionSchema;
}

