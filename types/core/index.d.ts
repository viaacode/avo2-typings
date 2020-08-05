export type ContentTypeSchema = 'collectie' | 'video' | 'audio' | 'bundel';

export type ContentPickerTypeSchema =
	| 'CONTENT_PAGE'
	| 'COLLECTION'
	| 'ITEM'
	| 'BUNDLE'
	| 'DROPDOWN'
	| 'INTERNAL_LINK'
	| 'EXTERNAL_LINK'
	| 'SEARCH_QUERY'
	| 'PROJECTS'
	| 'ANCHOR_LINK'
	| 'PROFILE';

export type MediaTypeSchema = {
	id: number;
	label: ContentTypeSchema;
};