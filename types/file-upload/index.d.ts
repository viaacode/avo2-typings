export type AssetTypeSchema =
	| 'BUNDLE_COVER'
	| 'COLLECTION_COVER'
	| 'CONTENT_PAGE_COVER'
	| 'CONTENT_BLOCK_IMAGE'
	| 'CONTENT_PAGE_DESCRIPTION_IMAGE'
	| 'ASSIGNMENT_DESCRIPTION_IMAGE'
	| 'PROFILE_AVATAR'
	| 'ITEM_SUBTITLE'
	| 'ITEM_NOTE_IMAGE'
	| 'INTERACTIVE_TOUR_IMAGE'
	| 'ZENDESK_ATTACHMENT';

export interface UploadAssetInfoSchema {
	filename: string;
	content: string;
	mimeType: string;
	type: AssetTypeSchema; // Used to put the asset inside a folder structure inside the bucket
	ownerId: string;
}

export interface AssetInfoSchema {
	url: string;
	id: string;
	type: AssetTypeSchema; // enum in the database
	objectId: string | number;
}

export interface ZendeskFileInfoSchema {
	base64: string;
	filename: string;
	mimeType: string;
}
