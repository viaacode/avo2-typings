import { type Assignment, AssignmentBlockType } from './assignment.js';
import { type Collection, CollectionFragmentType } from './collection.js';
import type { Item } from './item.js';

export enum ContentType {
	COLLECTIE = 'collectie',
	VIDEO = 'video',
	AUDIO = 'audio',
	BUNDEL = 'bundel',
	OPDRACHT = 'opdracht',
}

export type MediaType = {
	id: number;
	label: ContentType;
};

export enum LinkTarget {
	SELF = '_self',
	BLANK = '_blank',
}

export interface PickerItem {
	label?: string;
	type: ContentPickerType;
	value: string;
	target?: LinkTarget;
}

// Blocks for collection and assignments:

export enum BlockItemType {
	TEXT = 'TEXT',
	ITEM = 'ITEM',
	ZOEK = 'ZOEK',
	BOUW = 'BOUW',
	COLLECTION = 'COLLECTION',
	ASSIGNMENT = 'ASSIGNMENT',
}

export interface BlockItemBase {
	id: string | number; // Prefer string: uuid
	type: BlockItemType;
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
	item_meta?: Item | Collection | (Assignment & { type_id: number });

	// Pupil collection / assignment response
	fragment_id?: string | null;
	assignment_response_id?: any;

	// Assignment block
	assignment_id?: string;
	original_title?: string | null;
	original_description?: string | null;
	is_deleted?: boolean;
}

export enum DatabaseType {
	avo = 'avo',
	hetArchief = 'hetarchief',
}

export enum ContentPickerType {
	// BOTH
	CONTENT_PAGE = 'CONTENT_PAGE',
	NL_CONTENT_PAGE_PARENT_ID = 'NL_CONTENT_PAGE_PARENT_ID',
	INTERNAL_LINK = 'INTERNAL_LINK',
	EXTERNAL_LINK = 'EXTERNAL_LINK',
	ANCHOR_LINK = 'ANCHOR_LINK',
	PROFILE = 'PROFILE',
	FILE = 'FILE',
	CUSTOM_NAVIGATION_ELEMENTS = 'CUSTOM_NAVIGATION_ELEMENTS',

	CONTENT_PAGE_NEWS_ITEM = 'CONTENT_PAGE_NEWS_ITEM',
	CONTENT_PAGE_PAGE = 'CONTENT_PAGE_PAGE',
	CONTENT_PAGE_PROJECT = 'CONTENT_PAGE_PROJECT',
	CONTENT_PAGE_OVERVIEW = 'CONTENT_PAGE_OVERVIEW',
	CONTENT_PAGE_DOMAIN_DETAIL = 'CONTENT_PAGE_DOMAIN_DETAIL',
	CONTENT_PAGE_EVENT_DETAIL = 'CONTENT_PAGE_EVENT_DETAIL',
	CONTENT_PAGE_SCREENCAST = 'CONTENT_PAGE_SCREENCAST',

	/**
	 * @deprecated use CUSTOM_NAVIGATION_ELEMENTS instead
	 */
	DROPDOWN = 'DROPDOWN',

	// AVO
	ITEM = 'ITEM',
	ITEM_WITH_CUE_POINTS = 'ITEM_WITH_CUE_POINTS',
	COLLECTION = 'COLLECTION',
	BUNDLE = 'BUNDLE',
	ASSIGNMENT = 'ASSIGNMENT',
	SEARCH_QUERY = 'SEARCH_QUERY',
	PROJECTS = 'PROJECTS',

	// HET_ARCHIEF
	IE_OBJECT = 'IE_OBJECT',
}
