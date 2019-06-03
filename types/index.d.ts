// http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

// TypeScript Version: 2.1

import * as statusTypes from './status/types';
import * as searchTypes from './search/types';

export namespace Avo {
	namespace Core {
		type StatusResponse = statusTypes.StatusResponse;
	}
	namespace Search {
		type SearchRequest = searchTypes.SearchRequest;
		type Filters = searchTypes.Filters;
		type SearchResponse = searchTypes.SearchResponse;
		type SearchResultItem = searchTypes.SearchResultItem;
	}
}
