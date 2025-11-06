export type AssetType =
	| 'BUNDLE_COVER'
	| 'COLLECTION_COVER'
	| 'CONTENT_PAGE_COVER'
	| 'CONTENT_BLOCK_FILE'
	| 'CONTENT_BLOCK_IMAGE'
	| 'CONTENT_PAGE_DESCRIPTION_IMAGE'
	| 'ASSIGNMENT_DESCRIPTION_IMAGE'
	| 'PROFILE_AVATAR'
	| 'ITEM_SUBTITLE'
	| 'ITEM_NOTE_IMAGE'
	| 'INTERACTIVE_TOUR_IMAGE'
	| 'ZENDESK_ATTACHMENT'
	| 'KLASCEMENT_VIDEO_IMAGE';

export interface UploadAssetInfo {
	filename: string;
	content: string;
	mimeType: string;
	type: AssetType; // Used to put the asset inside a folder structure inside the bucket
	ownerId: string;
}

export interface AssetInfo {
	url: string;
	id: string;
	type: AssetType; // enum in the database
	objectId: string | number;
}

export interface ZendeskFileInfo {
	base64: string;
	filename: string;
	mimeType: string;
}
