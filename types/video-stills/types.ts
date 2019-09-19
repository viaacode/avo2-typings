export interface VideoStillRequest {
	externalId: string;
	startTime: number; // milliseconds
}

export interface VideoStillInfo {
	previewImagePath: string;
	thumbnailImagePath: string;
}
