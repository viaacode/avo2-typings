export enum EnglishContentType {
	TEXT = 'text',
	ITEM = 'item',
	COLLECTION = 'collection',
	ASSIGNMENT = 'assignment',
	BUNDLE = 'bundle',
	VIDEO = 'video',
	AUDIO = 'audio',
	SEARCH = 'search',
	SEARCHQUERY = 'searchquery',
	CONTENTPAGE = 'contentPage',
}

export enum DutchContentType {
	ITEM = 'item',
	COLLECTIE = 'collectie',
	OPDRACHT = 'opdracht',
	BUNDEL = 'bundel',
	VIDEO = 'video',
	AUDIO = 'audio',
	ZOEK = 'zoek',
	ZOEKOPDRACHT = 'zoekopdracht',
	CONTENTPAGINA = 'contentPagina',
}

export interface ContentType {
	en: EnglishContentType;
	nl: DutchContentType;
}
