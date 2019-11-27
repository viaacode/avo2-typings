export type SearchEventName = 'search_search';

export type ItemEventName =
	| 'play_item'
	| 'bookmark_item'
	| 'report_item'
	| 'information_request_item'
	| 'add_to_collection_item'
	| 'view_item'
	| 'publish_item'
	| 'unpublish_item'
	| 'edit_item'
	| 'copy_item'
	| 'share_item'
	| 'create_item';

export type AccountEventName =
	| 'login_account'
	| 'password_reset_account'
	| 'modify_account'
	| 'delete_account'
	| 'block_account'
	| 'unblock_account'
	| 'register_account';

export interface ClientEvent {
	name: EventName;
	category: EventCategory;
	event_subject: string; // entity doing the modification
	event_subject_type: EventSubjectType;
	event_object: string; // entity being modified
	event_object_type: 'item' | 'collection' | 'bundle' | 'user';
	event_message: any | null; // user played item xxx on avo
	event_timestamp: string;
	event_source: string; // eg: url when the event was triggered
}

export type EventName =
	| SearchEventName
	| ItemEventName
	| AccountEventName;

export type EventCategory = 'item' | 'user' | 'search';

export type EventSubjectType = 'user_uuid' | 'system';

export type EventObjectType = 'bundles' | 'collections' | 'avo_item_pid' | 'archief_item_pid' | 'user_uuid';
