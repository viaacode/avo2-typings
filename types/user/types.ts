export interface UserResponse {
	id: number;
	user_id: string;
	group_id: number;
	org_id: string;
	fn: string;
	sn: string;
	alias: string | null;
	alternative_email: string;
	created_at: string;
	updated_at: string;
	avatar: string | null;
}
