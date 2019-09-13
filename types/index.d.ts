// TypeScript Version: 2.1

import { CoreContentType } from './core/content';
import { ItemResponse } from './item/types';
import {
	CollectionFragment,
	CollectionFragmentExternalId,
	CollectionResponse,
	CollectionEditorsLabel,
	CollectionPermission,
	CollectionPermissionType
} from './collection/types';
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
	SearchOrderDirection,
} from './search/types';
import { StatusResponse } from './status/types';
import { UserResponse, UserProfile, UserRole } from './user/types';
import { VideoStillItem } from './video-stills/types';

export namespace Avo {
	namespace Core {
		type ContentType = CoreContentType;
	}
	namespace Item {
		type Response = ItemResponse;
	}
	namespace User {
		type Response = UserResponse;
		type Role = UserRole;
		type Profile = UserProfile;
	}
	namespace Collection {
		type Response = CollectionResponse;
		type Fragment = CollectionFragment;
		type ExternalId = CollectionFragmentExternalId;
		type EditorsLabel = CollectionEditorsLabel;
		type Permission = CollectionPermission;
		type PermissionType = CollectionPermissionType;
	}
	namespace Search {
		type DateRange = SearchDateRange;
		type FilterOption = SearchFilterOption;
		type FilterOptions = SearchFilterOptions;
		type Filters = SearchFilters;
		type FilterProp = keyof Filters;
		type OptionProp = SearchOptionProp;
		type OrderDirection = SearchOrderDirection;
		type OrderProperty = SearchOrderProperty;
		type Request = SearchRequest;
		type Response = SearchResponse;
		type ResultItem = SearchResultItem;
	}
	namespace VideoStills {
		type VideoStill = VideoStillItem;
	}
	namespace Status {
		type Response = StatusResponse;
	}
}
