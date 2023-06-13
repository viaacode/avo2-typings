// Minimum TypeScript Version: 3.4
import type {
	AssignmentBlock,
	AssignmentBlockType,
	AssignmentContent,
	AssignmentContentLabel,
	AssignmentLabelType,
	AssignmentLabel_v2Schema,
	AssignmentLayout,
	AssignmentResponse_v2Schema,
	AssignmentRetrieveError,
	AssignmentType,
	AssignmentView,
	ShareRightType,
	Assignment_v2Schema,
	AssignmentContributorSchema,
	AssignmentContributorInfoSchema,
} from './assignment';
import type {
	LoginMessageSchema,
	IdpTypeSchema,
	LoginResponseSchema,
	ErrorActionButtonSchema,
	IdpLinkedSuccessQueryParamSchema,
	LoginResponseLoggedInSchema,
	LoginResponseLoggedOutSchema,
} from './auth';
import type {
	CollectionContributorSchema,
	CollectionFragment,
	CollectionFragmentExternalId,
	CollectionLabelSchema,
	CollectionManagementQualityCheckSchema,
	CollectionManagementSchema,
	CollectionSchema,
	RelationEntrySchema,
	RelationTypeSchema,
} from './collection';
import type {
	ContentPageLabelLinkSchema,
	ContentPageLabelSchema,
	ContentPageTypeSchema,
	ContentPageSchema,
	ContentWidthSchema,
} from './content-page';
import type { ContentBlockSchema } from './content-blocks';
import type {
	ContentTypeSchema,
	ContentPickerTypeSchema,
	MediaTypeSchema,
	LinkTargetSchema,
	PickerItemSchema,
	BlockItemBaseSchema,
	BlockItemTypeSchema,
} from './core';
import type { EducationOrganizationSchema } from './education-organizations';
import type { ClientEvent, EventAction, EventObjectType, EventSubjectType } from './event-logging';
import type { ItemSchema, SubtitleSchema } from './item';
import type { MenuSchema } from './menu';
import type { NewsletterPreferences, NewsletterPreferenceKey } from './newsletter';
import type { OrganizationContactInfo, OrganizationData, OrganizationSchema } from './organization';
import type {
	EsIndexSchema,
	EsIndexTypeSchema,
	SearchDateRange,
	SearchFilterOption,
	SearchFilterOptions,
	SearchFilters,
	SearchOptionProp,
	SearchOrderDirection,
	SearchOrderDirectionGraphql,
	SearchOrderProperty,
	SearchRequest,
	SearchResultItem,
	SearchSchema,
} from './search';
import type { StamboekValidationStatuses, ValidateStamboekResponse } from './stamboek';
import type { StatusSchema } from './status';
import type {
	BulkBlockUsersBodySchema,
	BulkDeleteUsersBodySchema,
	BulkTempAccessBodySchema,
	CommonUserSchema,
	HetArchiefUserSchema,
	UpdateProfileValuesSchema,
	UserDeleteOptionSchema,
	UserProfile,
	UserRole,
	UserSchema,
	UserTempAccess,
} from './user';
import type { VideoStillInfo, VideoStillRequest } from './video-stills';
import type { SiteVariableSchema } from './site-variable';
import type {
	AssetInfoSchema,
	AssetTypeSchema,
	UploadAssetInfoSchema,
	ZendeskFileInfoSchema,
} from './file-upload';
import type { InteractiveTourSchema, StepSchema } from './interactive-tour';
import type { DutchContentType, EnglishContentType, ContentType as ContentTypeDict } from 'content-type';
import type { LomFieldSchema, LomSchema } from './lom';

export * from './enums';

export namespace Avo {
	namespace Assignment {
		type Layout = AssignmentLayout;
		type Assignment = Assignment_v2Schema;
		type Content = AssignmentContent;
		type ContentLabel = AssignmentContentLabel;
		type Response = AssignmentResponse_v2Schema;
		type RetrieveError = AssignmentRetrieveError;
		type Label = AssignmentLabel_v2Schema;
		type Type = AssignmentType;
		type View = AssignmentView;
		type BlockType = AssignmentBlockType;
		type LabelType = AssignmentLabelType;
		type Block = AssignmentBlock;
		type Contributor = AssignmentContributorSchema;
		type ContributorInfo = AssignmentContributorInfoSchema;
	}

	namespace Auth {
		type IdpType = IdpTypeSchema;
		type LoginMessage = LoginMessageSchema;
		type LoginResponse = LoginResponseSchema;
		type LoginResponseLoggedIn = LoginResponseLoggedInSchema;
		type LoginResponseLoggedOut = LoginResponseLoggedOutSchema;
		type ErrorActionButton = ErrorActionButtonSchema;
		type IdpLinkedSuccessQueryParam = IdpLinkedSuccessQueryParamSchema;
	}

	namespace Collection {
		type Collection = CollectionSchema;
		type ExternalId = CollectionFragmentExternalId;
		type Fragment = CollectionFragment;
		type Label = CollectionLabelSchema;
		type Management = CollectionManagementSchema;
		type ManagementQualityCheck = CollectionManagementQualityCheckSchema;
		type RelationEntry<T> = RelationEntrySchema<T>;
		type RelationType = RelationTypeSchema;
		type Contributor = CollectionContributorSchema;
	}

	namespace Share {
		type Rights = ShareRightType;
	}

	namespace ContentPage {
		type Width = ContentWidthSchema;
		type Page = ContentPageSchema;
		type LabelLink = ContentPageLabelLinkSchema;
		type Label = ContentPageLabelSchema;
		type Type = ContentPageTypeSchema;
		type Block = ContentBlockSchema;
	}

	namespace Core {
		type ContentType = ContentTypeSchema;
		type ContentPickerType = ContentPickerTypeSchema;
		type MediaType = MediaTypeSchema;
		type PickerItem = PickerItemSchema;
		type LinkTarget = LinkTargetSchema;
		type BlockItemType = BlockItemTypeSchema;
		type BlockItemBase = BlockItemBaseSchema;
	}

	namespace EducationOrganization {
		type Organization = EducationOrganizationSchema;
	}

	namespace EventLogging {
		type Action = EventAction;
		type Event = ClientEvent;
		type ObjectType = EventObjectType;
		type SubjectType = EventSubjectType;
	}

	namespace Item {
		type Item = ItemSchema;
		type Subtitle = SubtitleSchema;
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

	namespace Newsletter {
		type Preferences = NewsletterPreferences;
		type PreferencesKey = NewsletterPreferenceKey;
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
		type OrderDirectionGraphql = SearchOrderDirectionGraphql;
		type OrderProperty = SearchOrderProperty;
		type Request = SearchRequest;
		type ResultItem = SearchResultItem;
		type Search = SearchSchema;
		type EsIndex = EsIndexSchema;
		type EsIndexType = EsIndexTypeSchema;
	}

	namespace SiteVariable {
		type SiteVariable = SiteVariableSchema;
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
		/**
		 * @deprecated Use CommonUser instead. There is a conversion function in the admin-core-api: convertUserInfoToCommonUser
		 */
		type Profile = UserProfile;

		/**
		 * @deprecated Use CommonUser instead. There is a conversion function in the admin-core-api: convertUserInfoToCommonUser
		 */
		type User = UserSchema;

		/**
		 * @deprecated Use CommonUser instead. There is a conversion function in the admin-core-api: convertUserInfoToCommonUser
		 */
		type HetArchiefUser = HetArchiefUserSchema;

		type Role = UserRole;
		type CommonUser = CommonUserSchema;
		type TempAccess = UserTempAccess;
		type BulkBlockUsersBody = BulkBlockUsersBodySchema;
		type BulkTempAccessBody = BulkTempAccessBodySchema;
		type BulkDeleteUsersBody = BulkDeleteUsersBodySchema;
		type UserDeleteOption = UserDeleteOptionSchema;
		type UpdateProfileValues = UpdateProfileValuesSchema;
	}

	namespace ContentType {
		type Dict = ContentTypeDict;

		type Dutch = DutchContentType;
		type English = EnglishContentType;
	}

	namespace Lom {
		type Lom = LomSchema;
		type LomField = LomFieldSchema;
	}
}
