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
import {
	LoginMessageSchema,
	IdpTypeSchema,
	LoginResponseSchema,
	ErrorActionButtonSchema,
} from './auth';
import { CollectionFragment, CollectionFragmentExternalId, CollectionSchema } from './collection';
import {
	ContentLabelLinkSchema,
	ContentLabelSchema,
	ContentSchema,
	ContentWidthSchema,
} from './content';
import { ContentBlockSchema } from './content-blocks';
import { ContentTypeSchema, ContentPickerTypeSchema, MediaTypeSchema } from './core/content';
import { ClientEducationOrganization } from './education-organizations';
import { ClientEvent, EventAction, EventObjectType, EventSubjectType } from './event-logging';
import { ItemSchema } from './item';
import { MenuSchema } from './menu';
import { OrganizationContactInfo, OrganizationData, OrganizationSchema } from './organization';
import {
	EsIndexSchema,
	EsIndexTypeSchema,
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
import {
	AssetInfoSchema,
	AssetTypeSchema,
	UploadAssetInfoSchema,
	ZendeskFileInfoSchema,
} from './file-upload';
import { InteractiveTourSchema, StepSchema } from './interactive-tour';

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
		type ErrorActionButton = ErrorActionButtonSchema;
	}

	namespace Collection {
		type Collection = CollectionSchema;
		type ExternalId = CollectionFragmentExternalId;
		type Fragment = CollectionFragment;
	}

	namespace Content {
		type ContentWidth = ContentWidthSchema;
		type Content = ContentSchema;
		type ContentLabelLink = ContentLabelLinkSchema;
		type ContentLabel = ContentLabelSchema;
	}

	namespace ContentBlocks {
		type ContentBlocks = ContentBlockSchema;
	}

	namespace Core {
		type ContentType = ContentTypeSchema;
		type ContentPickerType = ContentPickerTypeSchema;
		type MediaType = MediaTypeSchema;
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

	namespace InteractiveTour {
		type InteractiveTour = InteractiveTourSchema;
		type Step = StepSchema;
	}

	namespace FileUpload {
		type AssetType = AssetTypeSchema;
		type AssetInfo = AssetInfoSchema;
		type UploadAssetInfo = UploadAssetInfoSchema;
		type ZendeskFileInfo = ZendeskFileInfoSchema;
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
		type EsIndex = EsIndexSchema;
		type EsIndexType = EsIndexTypeSchema;
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
