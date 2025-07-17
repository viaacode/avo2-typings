import type { SearchDateRange } from '../search';

export type EventAction =
	| 'create'
	| 'view'
	| 'edit'
	| 'delete'
	| 'copy'
	| 'play'
	| 'bookmark'
	| 'report'
	| 'information_request'
	| 'publish'
	| 'unpublish'
	| 'share'
	| 'login'
	| 'password_reset'
	| 'block'
	| 'unblock'
	| 'register'
	| 'search'
	| 'add'
	| 'remove'
	| 'request'
	| 'reset'
	| 'authenticate'
	| 'add_to'
	| 'assign'
	| 'mail'
	| 'deactivate'
	| 'activate'
	| 'embed_failed';

export interface ClientEvent {
	action: EventAction;
	subject: string; // entity doing the modification
	subject_type: EventSubjectType;
	object: string; // entity being modified
	object_type: EventObjectType;
	message?: any; // user played item xxx on avo
	occurred_at: string | null;
	source_url: string; // eg: url when the event was triggered
	source_querystring?: string;
	resource?: Record<string, string | string[] | boolean | number | SearchDateRange>;
}

export type EventSubjectType = 'user' | 'system';

export type EventObjectType =
	| 'bundels'
	| 'collections'
	| 'avo_item_pid'
	| 'archief_item_pid'
	| 'user_uuid'
	| 'anonymous_user'
	| 'system'
	| 'avo_search_query'
	| 'avo_assignment'
	| 'item'
	| 'collection'
	| 'bundle'
	| 'user'
	| 'group'
	| 'query'
	| 'assignment'
	| 'message'
	| 'account'
	| 'profile'
	| 'quick_lane'
	| 'embed_code';
