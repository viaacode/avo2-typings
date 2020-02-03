import { UserProfile } from '../user';
import { ContentBlockSchema } from '../content-blocks';

export type ContentWidthSchema = 'REGULAR' | 'LARGE' | 'MEDIUM';

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
	contentBlockssBycontentId: ContentBlockSchema[]
}
