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

export type EventSubjectType = 'user' | 'system';

export type EventObjectType =
	| 'account'
	| 'profile'
	| 'password'
	| 'user'
	| 'mail'
	| 'information'
	| 'item'
	| 'collection'
	| 'bundle'
	| 'assignment'
	| 'search';
