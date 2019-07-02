interface Collection {
	id: number;
	owner_id: string;
	organisation_id: string;
	type_id: number;
	title: string;
	lom_context_id: number;
	lom_classification_id: number;
	created_at: Date;
	updated_at: Date;
	is_public: boolean;
	publish_at: Date | null;
	depublish_at: Date | null;
	lom_keyword_id: number | null;
	lom_intendedenduserrole_id: number | null;
	external_id: string | null;
	description: string | null;
	collection_fragments: CollectionFragment[] | null;
}

interface CollectionFragment {
	id: number;
	collection_id: number;
	external_id: string;
	custom_title: string;
	custom_description: string | null;
	use_custom_fields: boolean;
	created_at: Date;
	updated_at: Date;
	start_oc: number | null;
	end_oc: number | null;
}
