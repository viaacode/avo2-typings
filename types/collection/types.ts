import { UserResponse } from '../user/types';
import { CoreContentType } from '../core/content';

export interface CollectionFragment {
	id: number;
	external_id: CollectionFragmentExternalId;
	custom_title: string;
	custom_description: string | null;
	created_at: string;
	updated_at: string;
	start_oc: number | null;
	end_oc: number | null;
}

export interface CollectionResponse {
	fragments: CollectionFragment[];
	description: string | null;
	title: string;
	is_public: boolean;
	id: number;
	lom_references: any[] | null;
	type_id: number;
	d_ownerid: number;
	owner?: UserResponse;
	created_at: string;
	updated_at: string;
	organisation_id: string | null;
	mediamosa_id: string;
}

export interface CollectionFragmentExternalId {
	external_id: string,
	mediamosa_id: string,
	type_label: CoreContentType
}
