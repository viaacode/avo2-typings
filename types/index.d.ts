// TypeScript Version: 2.1

import { CoreContentType } from "./core/content";
import { ItemResponse } from './item/types';
import { CollectionFragment, CollectionResponse } from './collection/types';
import {
	SearchFilters,
	SearchDateRange,
	SearchFilterOption,
	SearchRequest,
	SearchResponse,
	SearchResultItem,
	SearchOptionProp,
	SearchFilterOptions,
	SearchOrderProperty,
	SearchOrderDirection, SearchFilterProperty
} from './search/types';
import { StatusResponse } from './status/types';
import { UserResponse } from './user/types';

export namespace Avo {
	namespace Core {
		type ContentType = CoreContentType;
	}
	namespace Item {
		type Response = ItemResponse;
	}
	namespace User {
		type Response = UserResponse;
	}
	namespace Collection {
		type Response = CollectionResponse;
		type Fragment = CollectionFragment;
	}
	namespace Search {
		type DateRange = SearchDateRange;
		type FilterOption = SearchFilterOption;
		type FilterOptions = SearchFilterOptions;
		type Filters = SearchFilters;
		type FilterProp = SearchFilterProperty;
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
