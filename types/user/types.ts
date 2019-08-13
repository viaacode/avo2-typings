export interface UserResponse {
	id: number;
	created_at: string;
	email: string;
	first_name: string;
	last_name: string;
	role_id: number | null;
	role: UserRole | null;
	pofile: UserProfile | null;
	uid: string;
	updated_at: string;
}

export interface UserRole {
	id: number;
	label: string;
	name: string;
}

export interface UserProfile {
	id: number;
	alias: string | null;
	alternative_email: string;
	avatar: string | null;
	created_at: string;
	fn: string;
	group_id: number[];
	org_id: string;
	sn: string;
	updated_at: string;
	user_id: string;
}
