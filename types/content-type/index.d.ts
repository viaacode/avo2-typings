export type EnglishContentType =
	| 'collection'
	| 'item'
	| 'bundle'
	| 'video'
	| 'audio'
	| 'search'
	| 'searchquery';

export type DutchContentType =
	| 'collectie'
	| 'item'
	| 'bundel'
	| 'video'
	| 'audio'
	| 'zoek'
	| 'zoekopdracht';

export interface ContentType {
	en: EnglishContentType;
	nl: DutchContentType;
}