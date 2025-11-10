import type { IdpType } from './auth.js';
import type { EducationOrganization } from './education-organisation.js';
import type { Lom } from './lom.js';
import type { Organization } from './organisation.js';
import type { PermissionName } from './permissions.js';

export interface User {
	first_name: string | null;
	last_name: string | null;
	full_name: string | null;
	profile: UserProfile | null;
	// external_uid: number | null; // Deprecated, use users.idp_map.idp_user_id instead
	// role: UserRole | null; // Deprecated, use users.profile.group instead
	// role_id: number | null; // Deprecated, use users.profile.group.id instead
	uid: string;
	created_at: string;
	updated_at: string;
	last_access_at: string | null; // Migrated users from avo1 do not have a last login date yet
	expires_at: string | null;
	mail: string;
	is_blocked: boolean | null;
	idpmaps: IdpType[];
	idpmapObjects: {
		idp: IdpType;
		idp_user_id: string;
	}[];
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
	user: User;
	userGroupIds: number[];
	permissions: string[] | undefined;
	loms?: Lom[] | null;
	organizations: EducationOrganization[];
	company_id: string | null;
	organisation: Organization | null;
	is_exception: boolean;
	title: string | null;
	business_category: string | null;
	language: string;
	temp_access: UserTempAccess | null;
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
	has_currently_access?: {
		status?: boolean | null;
	} | null;
}

export type UserDeleteOption =
	| 'DELETE_PRIVATE_KEEP_NAME'
	| 'TRANSFER_PUBLIC'
	| 'TRANSFER_ALL'
	| 'ANONYMIZE_PUBLIC'
	| 'DELETE_ALL';

export interface BulkDeleteUsersBody {
	profileIds: string[];
	deleteOption: UserDeleteOption;
	transferToProfileId?: string;
	sendEmail: boolean;
}

export interface BulkBlockUsersBody {
	profileIds: string[];
	isBlocked: boolean;
	sendEmail: boolean;
}

export interface BulkTempAccessBody extends BulkBlockUsersBody {
	tempAccessUntil: string;
}

export interface UpdateProfileValues {
	userId: string; // User id of the user that you want to update
	loms: Lom[];
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

export interface UserGroupInfo {
	label: string;
	name: string;
	id: string | number; // Numeric ids in avo, uuid's in hetarchief. We would like to switch to uuids for avo as well at some point
}

export interface HetArchiefUser {
	id: string;
	fullName: string;
	firstName: string;
	lastName: string;
	email: string;
	language: 'nl' | 'en';
	acceptedTosAt: string;
	groupId: string;
	groupName: string;
	permissions: PermissionName[];
	idp: IdpType;
	maintainerId?: string;
	visitorSpaceSlug?: string;
	isKeyUser: boolean;
	lastAccessAt: string;
	createdAt: string;
	organisationName: string | null;
	organisationId: string | null;
	sector: string | null;
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
	idp?: IdpType;
	permissions?: PermissionName[];
	stamboek?: string;
	organisation?: Organization;
	educationalOrganisations?: EducationOrganization[];
	loms: Lom[];
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
	idps?: Partial<Record<IdpType, string | null>>;
	alias?: string;
	title?: string;
	bio?: string;
	alternativeEmail?: string;
	updatedAt?: string;
	companyId?: string;
	language: string;
};
