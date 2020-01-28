import { UserProfile } from '../user';
import { ContentBlockSchema } from '../content-blocks';

export type ContentWidthSchema = 'regular' | 'large' | 'medium';

export interface ContentSchema {
	id: number;
	title: string;
	description: string | null;
	path: string;
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
	contentBlockssBycontentId: ContentBlockSchema[]
}
