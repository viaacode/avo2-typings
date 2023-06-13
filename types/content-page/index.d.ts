import type { UserProfile } from '../user';
import type { ContentBlockSchema } from '../content-blocks';
import type { PickerItemSchema } from '../core';

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
	content_id?: number;
	label_id: number;
	created_at: string;
	updated_at: string;
	content_label: ContentPageLabelSchema;
	content?: ContentPageSchema[];
}

export interface ContentPageSchema {
	content_content_labels: ContentPageLabelLinkSchema[];
	content_type: string;
	content_width: ContentWidthSchema;
	content_blocks: ContentBlockSchema[];
	created_at: string;
	depublish_at: string | null;
	description: string | null;
	id: number;
	is_protected: boolean;
	is_public: boolean;
	meta_description: string | null;
	path: string | null;
	profile: UserProfile;
	publish_at: string | null;
	published_at: string | null;
	seo_description: string | null;
	seo_image_path: string | null;
	thumbnail_path: string | null;
	title: string;
	updated_at: string | null;
	user_group_ids: number[] | null;
	user_profile_id: string | null;
}

export type ContentPageTypeSchema =
	| 'NIEUWS_ITEM'
	| 'FAQ_ITEM'
	| 'SCREENCAST'
	| 'PAGINA'
	| 'PROJECT'
	| 'OVERZICHT';
