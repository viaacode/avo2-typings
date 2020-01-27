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
	| 'add_to_collection'
	| 'publish'
	| 'unpublish'
	| 'share'
	| 'login'
	| 'password_reset'
	| 'account'
	| 'block'
	| 'unblock'
	| 'register'
	| 'search';

export interface ClientEvent {
	action: EventAction;
	subject: string; // entity doing the modification
	subject_type: EventSubjectType;
	object: string; // entity being modified
	object_type: EventObjectType;
	message: any; // user played item xxx on avo
	occurred_at: string | null;
	source_url: string; // eg: url when the event was triggered
}

export type EventSubjectType = 'user_uuid' | 'anonymous_user' | 'system';

export type EventObjectType =
	| 'bundles'
	| 'collections'
	| 'avo_item_pid'
	| 'archief_item_pid'
	| 'user_uuid'
	| 'anonymous_user'
	| 'system';
