// http://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

// TypeScript Version: 2.1

import { IStatusResponse } from './status/types';
import { IFilterItem, IFilterRequest, IFilterResponse, IFilters } from './search/types';

export namespace Avo {
	namespace Core {
		type StatusResponse = IStatusResponse;
	}
	namespace Search {
		type FilterRequest = IFilterRequest;
		type Filters = IFilters;
		type FilterResponse = IFilterResponse;
		type FilterItem = IFilterItem;
	}
}
