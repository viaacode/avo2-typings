import type { ContentTypeSchema } from '../core';
import { AssignmentType } from '../assignment';
import { LomSchema } from '../lom';

export interface SearchDateRange {
	gte: string | '' | undefined;
	lte: string | '' | undefined;
}

export interface SearchFilterOption {
	type: ContentTypeSchema;
	educationLevel: string;
	educationDegree: string;
	thema: string;
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
	type: ContentTypeSchema[];
	educationLevel: string[];
	educationDegree: string[];
	thema: string[];
	broadcastDate: SearchDateRange;
	language: string[];
	keyword: string[];
	subject: string[];
	serie: string[];
	provider: string[];
	collectionLabel: string[];
}

export interface SearchOptionProp {
	option_name: string;
	option_count: number;
}

export type SearchOrderDirection = 'asc' | 'desc';
export type SearchOrderDirectionGraphql =
	| 'asc'
	| 'asc_nulls_first'
	| 'asc_nulls_last'
	| 'desc'
	| 'desc_nulls_first'
	| 'desc_nulls_last';

export type SearchOrderProperty =
	| 'relevance'
	| 'views'
	| 'broadcastDate'
	| 'addedDate'
	| 'editDate';

export type EsIndexTypeSchema = 'items' | 'collections' | 'bundles' | 'assignments';
export type EsIndexSchema = 'all' | EsIndexTypeSchema;

export interface SearchRequest {
	filters?: Partial<SearchFilters>;
	filterOptionSearch?: Partial<SearchFilterOption>;
	orderProperty?: SearchOrderProperty;
	orderDirection?: SearchOrderDirection;
	from: number;
	size: number; // If you only want to receive aggs, you can set the size to 0
	index: EsIndexSchema;
	requestedAggs?: (keyof SearchFilters)[];
	aggsSize?: number;
}

export interface SearchSchema {
	results?: SearchResultItem[];
	count?: number;
	aggregations: SearchFilterOptions;
}

export interface SearchResultItem {
	id: string;
	uid: string;
	external_id: string;
	administrative_external_id?: string;
	lom_learning_resource_type?: AssignmentType[];
	pid?: string;
	table_name: string;
	dc_title: string;
	dc_titles_serie: string;
	thumbnail_path: string;
	original_cp: string | null;
	original_cp_id: string | null;

	// Only used for items
	lom_context: string[];
	lom_thema: string[];

	// Used for collection, bundels and assignments
	loms?: LomSchema[] | null;

	lom_keywords: string[];
	lom_languages: string[];
	dcterms_issued: string;
	dcterms_abstract: string | null;
	lom_classification: string[];
	lom_typical_age_range: string[];
	lom_intended_enduser_role: string[];
	briefing_id: string[];
	duration_time: string;
	duration_seconds: number;
	administrative_type: ContentTypeSchema;
	views_count: number;
	plays_count: number;
	bookmarks_count: number;
	collection_labels?: string[];
	created_at: string;
	updated_at: string;
	owner: SearchResultOwner | null;
}

export interface SearchResultOwner {
	avatar_path: string | null;
	company: string | null;
	company_avatar_path: string | null;
	firstname: string | null;
	lastname: string | null;
}
