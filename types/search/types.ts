import { CoreContentType } from "../core/content";

export interface SearchDateRange {
	gte: string | '' | null | undefined;
	lte: string | '' | null | undefined;
}

export interface SearchFilterOption {
	type: CoreContentType;
	educationLevel: string;
	domain: string;
	language: string;
	keyword: string;
	subject: string;
	serie: string;
	provider: string;
}

export interface SearchFilterOptions {
	[prop: string]: SearchOptionProp[];
}

export interface SearchFilters {
	query: string;
	type: CoreContentType[];
	educationLevel: string[];
	domain: string[];
	broadcastDate: SearchDateRange;
	language: string[];
	keyword: string[];
	subject: string[];
	serie: string[];
	provider: string[];
}

export interface SearchOptionProp {
	option_name: string;
	option_count: number;
}

export type SearchOrderDirection = 'asc' | 'desc';

export type SearchOrderProperty =
	| 'relevance'
	| 'views'
	| 'broadcastDate'
	| 'addedDate'
	| 'editDate';

export interface SearchRequest {
	filters?: Partial<SearchFilters>;
	filterOptionSearch?: Partial<SearchFilterOption>;
	orderProperty?: SearchOrderProperty;
	orderDirection?: SearchOrderDirection;
	from: number;
	size: number;
}

export interface SearchResponse {
	results: SearchResultItem[];
	count: number;
	aggregations: SearchFilterOptions;
}

export interface SearchResultItem {
	id: string;
	external_id?: string;
	administrative_external_id?: string;
	pid?: string;
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
	briefing_id: string[];
	duration_time: string;
	duration_seconds: number;
	administrative_type: CoreContentType;
}
