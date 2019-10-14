import { ItemSchema } from '../item/types';
import { CollectionSchema } from '../collection/types';
import { UserProfile, UserSchema } from '../user/types';

export type AssignmentType = 'ZOEK' | 'KIJK' | 'BOUW';
export type AssignmentContentLabel = 'ITEM' | 'COLLECTIE' | 'ZOEKOPDRACHT';
export type AssignmentContent = ItemSchema | CollectionSchema;
export type AssignmentView = 'assignments' | 'archived_assignments';

export enum AssignmentRetrieveError {
	DELETED = 'DELETED',
	NOT_YET_AVAILABLE = 'NOT_YET_AVAILABLE',
	PAST_DEADLINE = 'PAST_DEADLINE',
}

export interface AssignmentSchema {
	id: number;
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
	assignment_assignment_tags: {
		assignment_tag: AssignmentTag[];
	};
	assignment_responses: AssignmentResponse[];
}

export interface AssignmentResponse {
	id: number;
	assignment_id: number;
	collection_id?: string | null;
	submitted_at?: string | null; // ISO date string
	owner_profile_ids: string[];
	started_at?: Date | null;
	collection?: CollectionSchema | null;
}

export interface AssignmentTag {
	id: number;
	label: string;
	enum_color: {
		label: string; // #FF0000
		value: string; // BRIGHT_RED
	};
	color_override?: string | null; // #FF0000
	user: UserSchema;
}

export enum AssignmentLayout {
	OnlyPlayer = 0,
	PlayerAndText = 1,
}
