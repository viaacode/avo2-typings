import { UserProfile } from '../user';
import { ContentBlockSchema } from '../content-blocks';
import { PickerItemSchema } from '../core';

export type ContentWidthSchema = 'REGULAR' | 'LARGE' | 'MEDIUM';

export interface ContentPageLabelSchema {
	id: number;
	label: string;
	content_type: ContentPageTypeSchema;
	link_to: PickerItemSchema | null;
	created_at: string;
	updated_at: string;
	content_content_labels: ContentPageLabelLinkSchema[];
}

export interface ContentPageLabelLinkSchema {
	id: number;
	content_id: number;
	label_id: number;
	created_at: string;
	updated_at: string;
	content_label: ContentPageLabelSchema;
	content: ContentPageSchema[];
}

export interface ContentPageSchema {
	id: number;
	thumbnail_path: string | null;
	title: string;
	description: string | null;
	seo_description: string | null;
	meta_description: string | null;
	path: string | null;
	is_public: boolean;
	published_at: string;
	publish_at: string | null;
	depublish_at: string | null;
	created_at: string;
	updated_at: string | null;
	is_protected: boolean;
	content_type: string;
	content_width: ContentWidthSchema;
	profile: UserProfile;
	user_profile_id: string | null;
	user_group_ids: number[] | null;
	contentBlockssBycontentId: ContentBlockSchema[];
	content_content_labels: ContentPageLabelLinkSchema[];
}

export type ContentPageTypeSchema =
	| 'NIEUWS_ITEM'
	| 'FAQ_ITEM'
	| 'SCREENCAST'
	| 'PAGINA'
	| 'PROJECT'
	| 'OVERZICHT';
