// TypeScript Version: 2.1

import { ContentTypeSchema } from './core/content';
import { ItemSchema } from './item/types';
import {
	CollectionFragment,
	CollectionFragmentExternalId,
	CollectionSchema,
	CollectionEditorsLabel,
	CollectionPermission,
	CollectionPermissionType
} from './collection/types';
import {
	SearchFilters,
	SearchDateRange,
	SearchFilterOption,
	SearchRequest,
	SearchSchema,
	SearchResultItem,
	SearchOptionProp,
	SearchFilterOptions,
	SearchOrderProperty,
	SearchOrderDirection,
} from './search/types';
import { StatusSchema } from './status/types';
import { UserSchema, UserProfile, UserRole } from './user/types';
import { VideoStillInfo, VideoStillRequest } from './video-stills/types';
import {
	AssignmentSchema,
	AssignmentLayout,
	AssignmentContentLabel,
	AssignmentContent,
	AssignmentResponse,
	AssignmentTag,
	AssignmentType,
	AssignmentView,
	AssignmentRetrieveError,
} from './assignment/types';
import {
	ClientEvent,
	EventCategory,
	EventName,
} from './event-logging/types';
import { ValidateStamboekResponse } from './stamboek/types';
import { MenuSchema } from 'menu/types';
import { ContentSchema } from 'content/types';

export namespace Avo {
	namespace Assignment {
		type Assignment = AssignmentSchema;
		type Type = AssignmentType;
		type Content = AssignmentContent;
		type ContentLabel = AssignmentContentLabel;
		type View = AssignmentView;
		type Tag = AssignmentTag;
		type Layout = AssignmentLayout;
		type Response = AssignmentResponse;
		type RetrieveError = AssignmentRetrieveError;
	}

	namespace Core {
		type ContentType = ContentTypeSchema;
	}

	namespace Item {
		type Item = ItemSchema;
	}

	namespace User {
		type User = UserSchema;
		type Role = UserRole;
		type Profile = UserProfile;
	}

	namespace Collection {
		type Collection = CollectionSchema;
		type Fragment = CollectionFragment;
		type ExternalId = CollectionFragmentExternalId;
		type EditorsLabel = CollectionEditorsLabel;
		type Permission = CollectionPermission;
		type PermissionType = CollectionPermissionType;
	}

	namespace Search {
		type Search = SearchSchema;
		type DateRange = SearchDateRange;
		type FilterOption = SearchFilterOption;
		type FilterOptions = SearchFilterOptions;
		type Filters = SearchFilters;
		type FilterProp = keyof Filters;
		type OptionProp = SearchOptionProp;
		type OrderDirection = SearchOrderDirection;
		type OrderProperty = SearchOrderProperty;
		type Request = SearchRequest;
		type ResultItem = SearchResultItem;
	}

	namespace Stills {
		type StillRequest = VideoStillRequest;
		type StillInfo = VideoStillInfo;
	}

	namespace Stamboek {
		type ValidateResponse = ValidateStamboekResponse;
	}

	namespace EventLogging {
		type Name = EventName;
		type Category = EventCategory;
		type Event = ClientEvent;
	}

	namespace Status {
		type Status = StatusSchema;
	}

	namespace Menu {
		type Menu = MenuSchema;
	}

	namespace Content {
		type Content = ContentSchema;
	}
}
