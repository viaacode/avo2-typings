import type { ContentBlock } from './content-blocks.js';
import type { PickerItem } from './core.js';
import type { UserProfile } from './user.js';

export type ContentWidth = 'REGULAR' | 'LARGE' | 'MEDIUM';

export interface ContentPageLabel {
	id: number;
	label: string;
	content_type: ContentPageType;
	link_to: PickerItem | null;
	created_at: string;
	updated_at: string;
	content_content_labels: ContentPageLabelLink[];
}

export interface ContentPageLabelLink {
	id: number;
	content_id?: number;
	label_id: number;
	created_at: string;
	updated_at: string;
	content_label: ContentPageLabel;
	content?: ContentPage[];
}

export interface ContentPage {
	content_content_labels: ContentPageLabelLink[];
	content_type: string;
	content_width: ContentWidth;
	content_blocks: ContentBlock[];
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
	seo_title: string | null;
	seo_description: string | null;
	seo_image_path: string | null;
	thumbnail_path: string | null;
	title: string;
	updated_at: string | null;
	user_group_ids: number[] | null;
	user_profile_id: string | null;
	language: string;
	nlParentPageId: number | string;
	translatedPages: Pick<ContentPage, 'id' | 'title' | 'path' | 'language'>;
}

export enum ContentPageType {
	NIEUWS_ITEM = 'NIEUWS_ITEM',
	FAQ_ITEM = 'FAQ_ITEM',
	SCREENCAST = 'SCREENCAST',
	PAGINA = 'PAGINA',
	PROJECT = 'PROJECT',
	OVERZICHT = 'OVERZICHT',
}
