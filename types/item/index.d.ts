import { MediaTypeSchema } from '../core';
import { OrganizationSchema } from '../organization';
import { RelationEntry } from '../collection';

export interface ItemCountSchema {
	bookmarks: number;
	in_assignment: number;
	in_collection: number;
	plays: number;
	views: number;
}

export interface SubtitleSchema {
	item_external_id: string;
	external_id: string;
	format: string;
	path: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface ItemSchema {
	bookmarks: null;
	browse_path: string;
	created_at: string;
	depublish_at: null;
	description: string;
	duration: string;
	expiry_date: null;
	external_id: string;
	id: number;
	uid: string;
	is_deleted: boolean;
	is_orphaned: boolean;
	is_published: boolean;
	issued: string;
	issued_edtf: string;
	lom_classification: string[];
	lom_context: string[];
	lom_intendedenduserrole: string[];
	lom_keywords: string[];
	lom_languages: string[];
	lom_typicalagerange: string[];
	org_id: string;
	organisation: OrganizationSchema;
	publish_at: string | null;
	published_at: string | null;
	depublish_reason: string | null;
	series: string;
	thumbnail_path: string;
	seo_image_path: string;
	title: string;
	type: MediaTypeSchema;
	type_id: number;
	updated_at: string;
	note: string | null;
	views: null;
	relations: Array<RelationEntry<ItemSchema>> | null;
	item_counts: ItemCountSchema | null;
	item_collaterals: SubtitleSchema[] | null;
}
