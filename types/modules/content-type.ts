export type EnglishContentType =
	| 'item'
	| 'collection'
	| 'assignment'
	| 'bundle'
	| 'video'
	| 'audio'
	| 'search'
	| 'searchquery'
	| 'contentPage';

export type DutchContentType =
	| 'item'
	| 'collectie'
	| 'opdracht'
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
