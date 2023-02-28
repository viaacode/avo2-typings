import { IdpTypeSchema } from '../auth';
import { OrganizationSchema } from '../organization';
import { Avo, PermissionName } from 'avo2-types';
import EducationOrganization = Avo.EducationOrganization;

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
	idpmapObjects: {
		idp: IdpTypeSchema;
		idp_user_id: string;
	}[];
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
	organizations: {
		organizationName: string;
		unitAddress?: string;
	}[];
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
	current?: {
		status?: number | null;
	} | null;
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
	sendEmail: boolean;
}

export interface BulkBlockUsersBodySchema {
	profileIds: string[];
	isBlocked: boolean;
	sendEmail: boolean;
}

export interface BulkTempAccessBodySchema extends BulkBlockUsersBodySchema {
	tempAccessUntil: string;
}

export interface UpdateProfileValuesSchema {
	userId: string; // User id of the user that you want to update
	educationLevels: {
		profile_id: string;
		key: string;
	}[];
	subjects: {
		profile_id: string;
		key: string;
	}[];
	organizations: {
		profile_id: string;
		organization_id: string;
		unit_id: string | null;
	}[];
	firstName: string;
	lastName: string;
	company_id: string | null;
	alias: string;
	title: string | null;
	alternativeEmail: string;
	avatar: string | null;
	bio: string | null;
	stamboek: string | null;
	is_exception: boolean;
	business_category: string | null;
}

export enum Idp {
	HETARCHIEF = 'HETARCHIEF',
	MEEMOO = 'MEEMOO',
	SMARTSCHOOL = 'SMARTSCHOOL',
	KLASCEMENT = 'KLASCEMENT',
	VLAAMSEOVERHEID = 'VLAAMSEOVERHEID',
}

export interface UserGroupInfo {
	label: string;
	name: string;
	id: string | number; // Numeric ids in avo, uuid's in hetarchief. We would like to switch to uuids for avo as well at some point
}

/**
 * User model for both hetarchief and avo
 */
export type CommonUser = {
	profileId: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	fullName?: string;
	avatar?: string;
	acceptedTosAt?: string | null;
	idp?: Idp;
	permissions?: PermissionName[];
	stamboek?: string;
	organisation?: OrganizationSchema;
	educationalOrganisations?: EducationOrganization.Organization[];
	subjects?: string[];
	educationLevels?: string[];
	isException?: boolean;
	businessCategory?: string;
	createdAt?: string;
	userGroup?: Partial<UserGroupInfo>;
	userId?: string;
	uid?: string;
	isBlocked?: boolean;
	blockedAt?: string;
	unblockedAt?: string;
	lastAccessAt?: string;
	tempAccess?: UserTempAccess;
	idps?: Partial<Record<Idp, string | null>>;
	alias?: string;
	title?: string;
	bio?: string;
	alternativeEmail?: string;
	updatedAt?: string;
	companyId?: string;
};
