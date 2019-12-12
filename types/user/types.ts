import { IdpTypeSchema } from '../auth/types';

export interface UserSchema {
	id: number;
	first_name: string | null;
	last_name: string | null;
	profile: UserProfile | null;
	created_at: string;
	expires_at: string | null;
	external_uid: number | null;
	role: UserRole | null;
	role_id: number | null;
	type: string | null;
	uid: string;
	updated_at: string;
	mail: string;
	organisation_id: string | null;
	idpmaps: IdpTypeSchema[];
}

export interface UserProfile {
	id: string;
	alias: string | null;
	alternative_email: string;
	avatar: string | null;
	created_at: string;
	location: string;
	stamboek: string | null;
	updated_at: string;
	user_id: string | null;
	user: UserSchema;
	permissions: string[] | undefined;
}

export interface UserRole {
	id: number;
	label: string;
	name: string;
}
