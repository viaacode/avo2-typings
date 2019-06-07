// TypeScript Version: 2.1

import { StatusResponse } from './status/types';
import { SearchRequest, SearchFilters, SearchResponse, SearchResultItem } from './search/types';

export namespace Avo {
	namespace Status {
		type Response = StatusResponse;
	}
	namespace Search {
		type Request = SearchRequest;
		type Filters = SearchFilters;
		type Response = SearchResponse;
		type ResultItem = SearchResultItem;
	}
}
