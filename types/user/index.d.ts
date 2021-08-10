import { IdpTypeSchema } from '../auth';
import { OrganizationSchema } from '../organization';

export interface UserSchema {
	first_name: string | null;
	last_name: string | null;
	full_name: string | null;
	profile: UserProfile | null;
	external_uid: number | null;
	role: UserRole | null;
	role_id: number | null;
	uid: string;
	created_at: string;
	updated_at: string;
	last_access_at: string | null; // Migrated users from avo1 do not have a last login date yet
	expires_at: string | null;
	mail: string;
	is_blocked: boolean | null;
	idpmaps: IdpTypeSchema[];
	idpmapObjects: Array<{
		idp: IdpTypeSchema;
		idp_user_id: string;
	}>;
	temp_access: UserTempAccess | null;
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
	organizations: Array<{
		organizationName: string;
		unitAddress?: string;
	}>;
	company_id: string | null;
	organisation: OrganizationSchema | null;
	is_exception: boolean;
	title: string | null;
	business_category: string | null;
}

export interface UserRole {
	id: number;
	label: string;
	name: string;
}

export interface UserTempAccess {
	created_at?: string | null;
	updated_at?: string | null;
	from?: string | null;
	until?: string | null;
}

export type UserDeleteOptionSchema =
	| 'DELETE_PRIVATE_KEEP_NAME'
	| 'TRANSFER_PUBLIC'
	| 'TRANSFER_ALL'
	| 'ANONYMIZE_PUBLIC'
	| 'DELETE_ALL';

export interface BulkDeleteUsersBodySchema {
	profileIds: string[];
	deleteOption: UserDeleteOptionSchema;
	transferToProfileId?: string;
}

export interface BulkBlockUsersBodySchema {
	profileIds: string[];
	isBlocked: boolean;
}
