import type { ItemSchema } from '../item';
import type { CollectionSchema } from '../collection';
import type { UserProfile, UserSchema } from '../user';
import type { BlockItemBaseSchema } from '../core';
import type { LomSchema } from '../lom';
import type { ShareWithColleagueType } from '../shared/shared-with-colluegue-type';

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
	title?: string | null;
	description: string;
	/**
	 * @deprecated use lom_learning_resource_type instead
	 */
	assignment_type?: AssignmentType;
	lom_learning_resource_type: AssignmentType[] | null;
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
	view_count?: {
		count: number;
	};
	is_public?: boolean;
	published_at?: string;
	updated_by_profile_id?: string | null;
	last_user_edit_at?: string | null;
	last_user_edit_profile_id?: string | null;
	last_user_edit_profile?: UserProfile | null;
	blocks?: AssignmentBlock[];
	labels?: { assignment_label: AssignmentLabel_v2Schema }[];
	responses?: AssignmentResponse_v2Schema[];
	contributors?: AssignmentContributorSchema[];
	loms?: LomSchema[];
	briefing_id: string | null;
	updated_by: UserProfile | null;
	quality_labels: AssignmentQualityLabelSchema[] | null;
	thumbnail_path: string | null;
	note: string | null;
	share_type?: ShareWithColleagueType; // Only available when fetching assignments from the assignments_v2_overview table
	share_type_order?: number; // Only available when fetching assignments from the assignments_v2_overview table
	relations?: AssignmentRelationEntrySchema<Assignment_v2Schema>[] | null;
	counts?: {
		views: number;
		bookmarks: number;
		copies: number;
		contributors: number;
	};
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
	created_at: string;
	updated_at: string;
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

export type ShareRightType = 'VIEWER' | 'CONTRIBUTOR';

export interface AssignmentContributorSchema {
	id: string;
	profile_id?: string | null;
	assignment_id: string;
	rights: ShareRightType;
	created_at: string;
	updated_at: string;
	invite_token?: string | null;
	invite_email?: string | null;
	profile?: UserProfile;
}

export interface AssignmentContributorInfoSchema {
	email: string | null;
	rights: ShareRightType;
	profileId: string | null;
	inviteToken: string | null;
}

export interface AssignmentQualityLabelSchema {
	id: number | null;
	label: string;
	assignment_id: string;
	created_at: string | null;
	updated_at: string | null;
}

export type AssignmentRelationTypeSchema =
	| 'IS_COPY_OF'
	| 'IS_REPLACED_BY'
	| 'REPLACES'
	| 'HAS_COPY';

export interface AssignmentRelationEntrySchema<T> {
	id: number;
	object: string;
	subject: string;
	created_at: string;
	updated_at: string;
	predicate: AssignmentRelationTypeSchema;
	object_meta?: T;
}
