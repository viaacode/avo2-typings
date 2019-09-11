export interface UserResponse {
	id: number;
	uid: string,
	mail: string;
	first_name: string;
	last_name: string;
	role_id: number | null;
	role: UserRole | null;
	profile: UserProfile | null;
	organisation_id: string | null;
	type: 'student' | 'docent',
	updated_at: string;
	created_at: string;
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
