export interface SearchFilters {
	query: string;
	type: string[];
	educationLevel: string[];
	domain: string[];
	broadcastDate: {
		gte: string;
		lte: string;
	};
	language: string[];
	keyword: string[];
	subject: string[];
	serie: string[];
	provider: string[];
}

export interface SearchFilterOptionSearch {
	type: string;
	educationLevel: string;
	domain: string;
	language: string;
	keyword: string;
	subject: string;
	serie: string;
	provider: string;
}

export interface SearchRequest {
	filters?: Partial<SearchFilters>;
	filterOptionSearch?: Partial<SearchFilterOptionSearch>;
	orderProperty?: SearchOrderProperty;
	orderDirection?: SearchOrderDirection;
	from: number;
	size: number;
}

export interface SearchResponse {
	results: SearchResultItem[];
	count: number;
	aggregations: FilterOptions;
}

export interface SearchResultItem {
	pid: string;
	table_name: string;
	dc_title: string;
	dc_titles_serie: string;
	thumbnail_path: string;
	original_cp: string;
	original_cp_id: string;
	lom_context: string[];
	lom_keywords: string[];
	lom_languages: string[];
	dcterms_issued: string;
	dcterms_abstract: string;
	lom_classification: string[];
	lom_typical_age_range: string[];
	lom_intended_enduser_role: string[];
	algemeen_briefing_id: string[];
	fragment_duration_time: null;
	fragment_duration_seconds: number;
	administrative_type: string;
	administrative_external_id: string;
}

export interface SearchOptionProp {
	option_name: string;
	option_count: number;
}

export interface FilterOptions {
	[prop: string]: SearchOptionProp[];
}

export type SearchOrderProperty =
	| 'relevance'
	| 'views'
	| 'broadcastDate'
	| 'addedDate'
	| 'editDate';

export type SearchOrderDirection = 'asc' | 'desc';
