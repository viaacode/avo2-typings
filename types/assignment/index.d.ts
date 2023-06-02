import { ItemSchema } from '../item';
import { CollectionSchema } from '../collection';
import { UserProfile, UserSchema } from '../user';
import { BlockItemBaseSchema } from '../core';

export type AssignmentType = 'ZOEK' | 'KIJK' | 'BOUW';
export type AssignmentContentLabel = 'ITEM' | 'COLLECTIE' | 'ZOEKOPDRACHT';
export type AssignmentContent = ItemSchema | CollectionSchema;
export type AssignmentView = 'assignments' | 'finished_assignments';
export type AssignmentBlockType = 'TEXT' | 'ITEM' | 'ZOEK' | 'BOUW';
export type AssignmentLabelType = 'LABEL' | 'CLASS';

export type AssignmentRetrieveError = 'DELETED' | 'NOT_YET_AVAILABLE' | 'PAST_DEADLINE';

/** Typings for Assignments V2 tables */
export interface Assignment_v2Schema {
	id: string;
	title: string;
	description: string;
	assignment_type: AssignmentType;
	answer_url?: string | null;
	available_at?: string | null; // ISO date string
	deadline_at?: string | null; // ISO date string
	owner_profile_id: string;
	owner?: Partial<UserSchema>;
	profile?: UserProfile;
	is_deleted: boolean;
	is_collaborative: boolean;
	created_at: string; // ISO date string
	updated_at: string; // ISO date string
	labels: { assignment_label: AssignmentLabel_v2Schema }[];
	responses: AssignmentResponse_v2Schema[];
	view_count: {
		count: number;
	};
	blocks: AssignmentBlock[];
	is_public?: boolean;
	published_at?: string;
	updated_by_profile_id?: string | null;
	last_user_edit_at?: string | null;
	contributors?: AssignmentContributorSchema[];
}

export interface AssignmentBlock extends BlockItemBaseSchema {
	assignment_id: string;
	fragment_id: string;
	original_title: string | null;
	original_description: string | null;
	is_deleted: boolean;
}

export interface AssignmentResponse_v2Schema {
	id: string;
	assignment_id: string;
	collection_title?: string | null;
	assignment?: Partial<Assignment_v2Schema>;
	owner_profile_id: string;
	owner?: Partial<UserSchema>;
	created_at: string
	updated_at: string
	pupil_collection_blocks?: BlockItemBaseSchema[];
}

export interface AssignmentLabel_v2Schema {
	id: string;
	label: string | null; // Wiskunde
	color_enum_value: string; // BRIGHT_RED
	color_override: string | null; // #FFFF00
	owner_profile_id: string;
	enum_color?: {
		label: string; // #FF0000
		value: string; // BRIGHT_RED
	};
	profile?: UserProfile;
	type: AssignmentLabelType;
}

export enum AssignmentLayout {
	OnlyPlayer = 0,
	PlayerAndText = 1,
}

export type ShareRightType = 'VIEWER' | 'CONTRIBUTOR';

export interface AssignmentContributorSchema {
	id: string;
	profileId: string | null;
	assignmentId: string;
	rights: ShareRightType,
	createdAt: string;
	updatedAt: string;
	inviteToken: string | null;
	inviteEmail: string | null;
}

export interface AssignmentContributorInfoSchema {
	email: string | null;
	rights: ShareRightType;
	profileId: string | null;
	inviteToken: string | null;
}
