import { UserResponse } from '../user/types';

export interface CollectionFragment {
	id: number;
	collection_id: number;
	external_id: string;
	custom_title: string;
	custom_description: string | null;
	use_custom_fields: boolean;
	created_at: string;
	updated_at: string;
	start_oc: number | null;
	end_oc: number | null;
}

export interface CollectionResponse {
	id: number;
	owner_id: string;
	owner: UserResponse;
	organisation_id: string | null;
	type_id: number;
	title: string;
	lom_context_id: number | null;
	lom_classification_id: number | null;
	created_at: string;
	updated_at: string;
	is_public: boolean;
	publish_at: string | null;
	depublish_at: string | null;
	lom_keyword_id: number | null;
	lom_intendedenduserrole_id: number | null;
	external_id: string | null;
	description: string | null;
	collection_fragments: CollectionFragment[];
}
