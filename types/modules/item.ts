import type { RelationEntry } from './collection.js';
import type { MediaType } from './core.js';
import type { Organization } from './organisation.js';

export interface ItemCountSchema {
	bookmarks: number;
	in_assignment: number;
	in_collection: number;
	plays: number;
	views: number;
	quick_lane_links: number;
}

export interface Subtitle {
	item_external_id: string;
	external_id: string;
	format: string;
	path: string;
	description: string;
	created_at: string;
	updated_at: string;
}

export interface Item {
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
	lom_thema: string[];
	lom_intendedenduserrole: string[];
	lom_keywords: string[];
	lom_languages: string[];
	lom_typical_age_range: string[];
	org_id: string;
	organisation: Organization;
	publish_at: string | null;
	published_at: string | null;
	depublish_reason: string | null;
	series: string;
	thumbnail_path: string;
	seo_title: string | null;
	seo_description: string | null;
	seo_image_path: string | null;
	title: string;
	type: MediaType;
	type_id: number;
	updated_at: string;
	note: string | null;
	views: null;
	relations?: RelationEntry<any>[] | null; // any => ItemSchema, but causes: TS2615: Type of property 'object_meta' circularly references itself in mapped type
	item_counts: ItemCountSchema | null;
	item_collaterals: Subtitle[] | null;
}
