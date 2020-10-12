import { IdpTypeSchema } from '../auth';
import { OrganizationSchema } from '../organization';

export interface UserSchema {
	first_name: string | null;
	last_name: string | null;
	full_name: string | null;
	profile: UserProfile | null;
	created_at: string;
	expires_at: string | null;
	external_uid: number | null;
	role: UserRole | null;
	role_id: number | null;
	uid: string;
	updated_at: string;
	mail: string;
	is_blocked: boolean | null;
	idpmaps: IdpTypeSchema[];
}

export interface UserProfile {
	id: string;
	alias: string | null;
	alternative_email: string;
	avatar: string | null;
	created_at: string;
	stamboek: string | null;
	bio: string | null;
	updated_at: string;
	user_id: string | null;
	user: UserSchema;
	userGroupIds: number[];
	permissions: string[] | undefined;
	educationLevels: string[];
	subjects: string[];
	organizations: Array<{ organizationName: string, unitAddress?: string }>;
	company_id: string | null;
	organisation: OrganizationSchema | null;
	is_exception: boolean;
	title: string | null; // oormerk
}

export interface UserRole {
	id: number;
	label: string;
	name: string;
}
