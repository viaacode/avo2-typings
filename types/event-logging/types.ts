export type SearchEventName = 'search';

export type ItemEventName =
	| 'publish'
	| 'unpublish'
	| 'view'
	| 'play'
	| 'edit'
	| 'copy'
	| 'add_to_collection'
	| 'bookmark'
	| 'information_request'
	| 'report'
	| 'share'
	| 'create';

export type AccountEventName =
	| 'block'
	| 'unblock'
	| 'login'
	| 'edit'
	| 'password_reset'
	| 'delete';

export interface ClientEvent {
	name: EventName;
	category: EventCategory;
	event_subject: {
		type: 'user' | 'system';
		identifier: string;
	}; // entity doing the modification
	event_object: {
		type: 'item' | 'collection' | 'bundle' | 'user';
		identifier: string;
	}; // entity being modified
	event_message: any; // user played item xxx on avo
	event_timestamp: string;
	event_source: string; // eg: url when the event was triggered
}

export type EventName =
	| SearchEventName
	| ItemEventName
	| AccountEventName;

export type EventCategory = 'item' | 'user' | 'search';
