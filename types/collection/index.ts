import { UserProfile } from '../user';
import { ContentTypeSchema } from '../core/content';
import { ItemSchema } from '../item';
import { OrganizationSchema } from '../organization';

export interface CollectionSchema {
	id: number;
	collection_fragments: CollectionFragment[];
	collection_permissions: CollectionPermission[];
	created_at: string;
	updated_at: string;
	is_public: boolean;
	publish_at: string | null;
	depublish_at: string | null;
	external_id: string | null;
	description: string | null;
	collection_fragment_ids: number[] | null;
	item_meta?: ItemSchema;
	label_redactie_id: number | null;
	label_redactie: CollectionEditorsLabel | null;
	lom_classification: string[] | null;
	lom_context: string[] | null;
	lom_typicalagerange: string[] | null;
	lom_intendedenduserrole: string[] | null;
	lom_keywords: string[] | null;
	lom_languages: string[] | null;
	organisation_id: string;
	organisation: OrganizationSchema | null;
	owner_profile_id: string;
	profile: UserProfile;
	note: string | null;
	thumbnail_path: string | null;
	title: string;
	type_id: number;
	type: {
		id: number;
		label: string;
	};
}

export interface CollectionPermission {
	id: number;
	collection_id: number;
	created_at: string;
	user_id: string;
	permission_type: number;
	updated_at: string;
}

export interface CollectionPermissionType {
	id: number;
	label: string;
}

export interface CollectionEditorsLabel {
	id: number;
	alt_label: string;
	created_at: string;
	label: string;
	updated_at: string;
}

export interface CollectionFragment {
	id: number;
	collection_id: number;
	created_at: string;
	custom_description: string | null;
	custom_title: string | null;
	end_oc: number | null;
	external_id: string;
	position: number;
	start_oc: number | null;
	updated_at: string;
	use_custom_fields: boolean;
	item_meta?: ItemSchema | CollectionSchema;
}

export interface CollectionFragmentExternalId {
	external_id: string;
	mediamosa_id: string;
	type_label: ContentTypeSchema;
}
