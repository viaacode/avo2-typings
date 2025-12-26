import type { Collection } from './collection.js';
import type { BlockItemBase } from './core.js';
import type { Item } from './item.js';
import type { Lom, LomField } from './lom.js';
import type { ShareWithColleagueType } from './shared-with-colluegue-type.js';
import type { CommonUser, User, UserProfile } from './user.js';

export type AssignmentType = 'ZOEK' | 'KIJK' | 'BOUW';
export type AssignmentContentLabel = 'ITEM' | 'COLLECTIE' | 'ZOEKOPDRACHT';
export type AssignmentContent = Item | Collection;
export type AssignmentView = 'assignments' | 'finished_assignments';
export enum AssignmentBlockType {
	TEXT = 'TEXT',
	ITEM = 'ITEM',
	ZOEK = 'ZOEK',
	BOUW = 'BOUW',
}
export enum AssignmentLabelType {
	LABEL = 'LABEL',
	CLASS = 'CLASS',
}

export type AssignmentRetrieveError = 'DELETED' | 'NOT_YET_AVAILABLE' | 'PAST_DEADLINE';

/** Typings for Assignments V2 tables */
export interface Assignment {
	id: string;
	title?: string | null;
	description: string;
	seo_title: string | null;
	seo_description: string | null;
	seo_image_path: string | null;
	/**
	 * @deprecated use lom_learning_resource_type instead
	 */
	assignment_type?: AssignmentType;
	lom_learning_resource_type: AssignmentType[] | null;
	answer_url?: string | null;
	available_at?: string | null; // ISO date string
	deadline_at?: string | null; // ISO date string
	owner_profile_id: string;
	owner?: Partial<User>;
	profile?: UserProfile;
	is_deleted: boolean;
	is_collaborative: boolean;
	created_at: string; // ISO date string
	updated_at: string; // ISO date string
	is_public?: boolean;
	published_at?: string;
	updated_by_profile_id?: string | null;
	last_user_edit_at?: string | null;
	last_user_edit_profile_id?: string | null;
	last_user_edit_profile?: CommonUser | null;
	blocks?: AssignmentBlock[];
	labels?: { assignment_label: AssignmentLabel }[];
	responses?: AssignmentResponse[];
	contributors?: AssignmentContributor[];
	loms?: Lom[];
	briefing_id: string | null;
	updated_by: CommonUser | null;
	quality_labels: AssignmentQualityLabel[] | null;
	thumbnail_path: string | null;
	note: string | null;
	share_type?: ShareWithColleagueType; // Only available when fetching assignments from the assignments_v2_overview table
	share_type_order?: number; // Only available when fetching assignments from the assignments_v2_overview table
	relations?: AssignmentRelationEntry<Assignment>[] | null;
	channel_type?: string | null;
	channel_name?: string | null;
	last_marcom_date?: string | null;
	klascement?: boolean;
	item_count: number;
	view_count: number;
	counts?: {
		views: number;
		bookmarks: number;
		copies: number;
		in_collection: number;
		contributors: number;
	};
	education_level_id?: string | null;
	education_level?: LomField;
	marcom_note?: AssignmentMarcomNote;
	is_managed?: boolean; // Determines if the marcom communication tab should be visible
}

export interface AssignmentBlock extends BlockItemBase {
	assignment_id: string;
	fragment_id: string;
	original_title: string | null;
	original_description: string | null;
	is_deleted: boolean;
	color?: string;
}

export interface AssignmentResponse {
	id: string;
	assignment_id: string;
	collection_title?: string | null;
	assignment?: Partial<Assignment>;
	owner_profile_id: string;
	owner?: Partial<User>;
	created_at: string;
	updated_at: string;
	pupil_collection_blocks?: BlockItemBase[];
}

export interface AssignmentLabel {
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

export interface AssignmentContributor {
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

export interface AssignmentContributorInfo {
	email: string | null;
	rights: ShareRightType;
	profileId: string | null;
	inviteToken: string | null;
}

export interface AssignmentQualityLabel {
	id: number | null;
	label: string;
	assignment_id: string;
	created_at: string | null;
	updated_at: string | null;
}

export interface AssignmentMarcomNote {
	id: number | null;
	note: string;
	assignment_id: string;
	created_at: string | null;
	updated_at: string | null;
}

export type AssignmentRelationType = 'IS_COPY_OF' | 'IS_REPLACED_BY' | 'REPLACES' | 'HAS_COPY';

export interface AssignmentRelationEntry<T> {
	id: number;
	object: string;
	subject: string;
	created_at: string;
	updated_at: string;
	predicate: AssignmentRelationType;
	object_meta?: T;
}
