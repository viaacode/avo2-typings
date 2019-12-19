import { ContentTypeSchema } from '../core/content';
import { OrganizationSchema } from '../organization';

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
	series: string;
	thumbnail_path: string;
	title: string;
	type: {
		id: number;
		label: ContentTypeSchema;
		__typename: string;
	};
	type_id: number;
	updated_at: string;
	views: null;
}
