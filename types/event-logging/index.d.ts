export type EventAction =
	| 'register'
	| 'activate'
	| 'create'
	| 'edit'
	| 'delete'
	| 'request'
	| 'reset'
	| 'authenticate'
	| 'logout'
	| 'send'
	| 'view'
	| 'play'
	| 'bookmark'
	| 'share'
	| 'report'
	| 'publish'
	| 'unpublish'
	| 'copy'
	| 'add_to'
	| 'remove_from';

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
