import { UserProfile } from "user/types";

export interface ContentSchema {
	id: number;
	title: string;
	description: string | null;
	is_published: boolean;
	is_public: boolean;
	publish_at: string | null;
	depublish_at: string | null;
	created_at: string;
	updated_at: string | null;
	is_protected: boolean;
	content_type: string;
	user: UserProfile;
}
