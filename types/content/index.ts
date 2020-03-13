import { UserProfile } from '../user';
import { ContentBlockSchema } from '../content-blocks';

export type ContentWidthSchema = 'REGULAR' | 'LARGE' | 'MEDIUM';

export interface ContentLabelSchema {
	id: number;
	label: string;
	content_type: string;
	created_at: string;
	updated_at: string;
	content_content_labels: ContentLabelLinkSchema[];
}

export interface ContentLabelLinkSchema {
	id: number;
	content_id: number;
	label_id: number;
	created_at: string;
	updated_at: string;
	content_label: ContentLabelSchema[];
	content: ContentSchema[];
}

export interface ContentSchema {
	id: number;
	title: string;
	description: string | null;
	path: string | null;
	is_published: boolean;
	is_public: boolean;
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
	labels: ContentLabelSchema[]
}
