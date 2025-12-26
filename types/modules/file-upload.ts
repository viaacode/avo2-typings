import type { AssetType } from './assets.js';

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
