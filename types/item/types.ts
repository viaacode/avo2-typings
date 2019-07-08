import { CoreContentType } from '../core/content';

export interface ItemResponse {
	bookmarks: null;
	browse_path: string;
	created_at: string;
	depublish_at: null;
	description: string;
	duration: string;
	expiry_date: null;
	external_id: string;
	id: number;
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
	publish_at: null;
	series: string;
	thumbnail_path: string;
	title: string;
	type: ItemType;
	type_id: number;
	updated_at: string;
	views: null;
}

export interface ItemType {
	label: CoreContentType;
	id: number;
}
