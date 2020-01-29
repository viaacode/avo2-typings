// TypeScript Version: 2.4

import {
	AssignmentContent,
	AssignmentContentLabel,
	AssignmentLayout,
	AssignmentResponse,
	AssignmentRetrieveError,
	AssignmentSchema,
	AssignmentTag,
	AssignmentType,
	AssignmentView,
} from './assignment';
import { LoginMessageSchema, IdpTypeSchema, LoginResponseSchema } from './auth';
import {
	CollectionEditorsLabel,
	CollectionFragment,
	CollectionFragmentExternalId,
	CollectionPermission,
	CollectionPermissionType,
	CollectionSchema,
} from './collection';
import { ContentSchema } from './content';
import { ContentBlockSchema } from './content-blocks';
import { ContentTypeSchema, ContentPickerTypeSchema } from './core/content';
import { ClientEducationOrganization } from './education-organizations';
import {
	ClientEvent,
	EventAction,
	EventObjectType,
	EventSubjectType,
} from './event-logging';
import { ItemSchema } from './item';
import { MenuSchema } from './menu';
import {
	OrganizationContactInfo,
	OrganizationData,
	OrganizationSchema,
} from './organization';
import {
	SearchDateRange,
	SearchFilterOption,
	SearchFilterOptions,
	SearchFilters,
	SearchOptionProp,
	SearchOrderDirection,
	SearchOrderProperty,
	SearchRequest,
	SearchResultItem,
	SearchSchema,
} from './search';
import { StamboekValidationStatuses, ValidateStamboekResponse } from './stamboek';
import { StatusSchema } from './status';
import { UserProfile, UserRole, UserSchema } from './user';
import { VideoStillInfo, VideoStillRequest } from './video-stills';

export namespace Avo {
	namespace Assignment {
		type Layout = AssignmentLayout;
		type Assignment = AssignmentSchema;
		type Content = AssignmentContent;
		type ContentLabel = AssignmentContentLabel;
		type Response = AssignmentResponse;
		type RetrieveError = AssignmentRetrieveError;
		type Tag = AssignmentTag;
		type Type = AssignmentType;
		type View = AssignmentView;
	}

	namespace Auth {
		type IdpType = IdpTypeSchema;
		type LoginMessage = LoginMessageSchema;
		type LoginResponse = LoginResponseSchema;
	}

	namespace Collection {
		type Collection = CollectionSchema;
		type EditorsLabel = CollectionEditorsLabel;
		type ExternalId = CollectionFragmentExternalId;
		type Fragment = CollectionFragment;
		type Permission = CollectionPermission;
		type PermissionType = CollectionPermissionType;
	}

	namespace Content {
		type Content = ContentSchema;
	}

	namespace ContentBlocks {
		type ContentBlocks = ContentBlockSchema;
	}

	namespace Core {
		type ContentType = ContentTypeSchema;
		type ContentPickerType = ContentPickerTypeSchema;
	}

	namespace EducationOrganization {
		type Organization = ClientEducationOrganization;
	}

	namespace EventLogging {
		type Action = EventAction;
		type Event = ClientEvent;
		type ObjectType = EventObjectType;
		type SubjectType = EventSubjectType;
	}

	namespace Item {
		type Item = ItemSchema;
	}

	namespace Menu {
		type Menu = MenuSchema;
	}

	namespace Organization {
		type ContactInfo = OrganizationContactInfo;
		type Data = OrganizationData;
		type Organization = OrganizationSchema;
	}

	namespace Search {
		type DateRange = SearchDateRange;
		type FilterOption = SearchFilterOption;
		type FilterOptions = SearchFilterOptions;
		type FilterProp = keyof Filters;
		type Filters = SearchFilters;
		type OptionProp = SearchOptionProp;
		type OrderDirection = SearchOrderDirection;
		type OrderProperty = SearchOrderProperty;
		type Request = SearchRequest;
		type ResultItem = SearchResultItem;
		type Search = SearchSchema;
	}

	namespace Stamboek {
		type ValidateResponse = ValidateStamboekResponse;
		type ValidationStatuses = StamboekValidationStatuses;
	}

	namespace Status {
		type Status = StatusSchema;
	}

	namespace Stills {
		type StillInfo = VideoStillInfo;
		type StillRequest = VideoStillRequest;
	}

	namespace User {
		type Profile = UserProfile;
		type Role = UserRole;
		type User = UserSchema;
	}
}
