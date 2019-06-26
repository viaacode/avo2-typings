// TypeScript Version: 2.1

import { DetailResponse } from './detail/detail';
import {
	SearchFilters,
	SearchContentType,
	SearchDateRange,
	SearchFilterOption,
	SearchRequest,
	SearchResponse,
	SearchResultItem,
	SearchOptionProp,
	SearchFilterOptions,
	SearchOrderProperty,
	SearchOrderDirection
} from './search/types';
import { StatusResponse } from './status/types';

export namespace Avo {
	namespace Detail {
		type Response = DetailResponse
	}
	namespace Search {
		type ContentType = SearchContentType;
		type DateRange = SearchDateRange;
		type FilterOption = SearchFilterOption;
		type FilterOptions = SearchFilterOptions;
		type Filters = SearchFilters;
		type OptionProp = SearchOptionProp;
		type OrderDirection = SearchOrderDirection;
		type OrderProperty = SearchOrderProperty;
		type Request = SearchRequest;
		type Response = SearchResponse;
		type ResultItem = SearchResultItem;
	}
	namespace Status {
		type Response = StatusResponse;
	}
}
