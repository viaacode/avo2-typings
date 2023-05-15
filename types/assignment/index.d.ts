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

export interface AssignmentSchema {
	uuid: string;
	id: number; // Deprecated, use id instead
	title: string;
	description: string;
	assignment_type: AssignmentType;
	content_id?: string | null;
	content_label?: AssignmentContentLabel | null;
	content_layout: AssignmentLayout;
	answer_url?: string | null;
	available_at?: string | null; // ISO date string
	deadline_at?: string | null; // ISO date string
	owner_profile_id: string;
	profile?: UserProfile;
	is_archived: boolean;
	is_deleted: boolean;
	class_room?: string | null;
	is_collaborative: boolean;
	created_at: string; // ISO date string
	updated_at: string; // ISO date string
	tags: Array<{
		assignment_tag: AssignmentLabel;
	}>;
	responses: AssignmentResponse[];
}

/** Typings for Assignments V2 tables */
export interface AssignmentSchema_v2 {
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
	labels: Array<{ assignment_label: AssignmentLabel_v2 }>;
	responses: AssignmentResponse_v2[];
	view_count: {
		count: number;
	};
	blocks: AssignmentBlock[];
	is_public?: boolean;
	published_at?: string;
}

export interface AssignmentBlock extends BlockItemBaseSchema {
	assignment_id: string;
	fragment_id: string;
	original_title: string | null;
	original_description: string | null;
	is_deleted: boolean;
}

export interface AssignmentResponse {
	id: number;
	assignment_uuid: string;
	assignment_id: number;
	collection_uuid?: string | null;
	submitted_at?: string | null; // ISO date string
	owner_profile_ids: string[];
	started_at?: Date | null;
	collection?: CollectionSchema | null;
	assignment?: Partial<AssignmentSchema>;
}

export interface AssignmentResponse_v2 {
	id: string;
	assignment_id: string;
	collection_title?: string | null;
	assignment?: Partial<AssignmentSchema_v2>;
	owner_profile_id: string;
	owner?: Partial<UserSchema>;
	created_at: string
	updated_at: string
	pupil_collection_blocks?: BlockItemBaseSchema[];
}

export interface AssignmentLabel {
	id: number;
	label: string | null; // Wiskunde
	color_enum_value: string; // BRIGHT_RED
	color_override: string | null; // #FFFF00
	owner_profile_id: string;
	enum_color?: {
		label: string; // #FF0000
		value: string; // BRIGHT_RED
	};
	profile?: UserProfile;
}

export interface AssignmentLabel_v2 {
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

export type AssignmentsRightTypes = 'VIEWER' | 'CONTRIBUTOR';

export interface AssignmentContributor {
	id: string;
	profileId: string | null;
	assignmentId: string;
	rights: AssignmentsRightTypes,
	createdAt: string;
	updatedAt: string;
	inviteToken: string | null;
	inviteEmail: string | null;
}

export interface GqlAssignmentContributor {
	id: string;
	profile_id: string | null;
	assignment_id: string;
	rights: AssignmentsRightTypes,
	created_at: string;
	updated_at: string;
	invite_token: string | null;
	invite_email: string | null;
}

export interface AssignmentContributorInfo {
	email: string | null;
	rights: AssignmentsRightTypes;
	profileId: string | null;
}
