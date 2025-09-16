export type EnglishContentType =
	| 'collection'
	| 'item'
	| 'bundle'
	| 'video'
	| 'audio'
	| 'search'
	| 'searchquery'
	| 'contentPage';

export type DutchContentType =
	| 'collectie'
	| 'item'
	| 'bundel'
	| 'video'
	| 'audio'
	| 'zoek'
	| 'zoekopdracht'
	| 'contentPagina';

export interface ContentType {
	en: EnglishContentType;
	nl: DutchContentType;
}
