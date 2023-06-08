export interface LomFieldSchema {
	id: string;
	label: string;
	scheme?: string;
	broader?: string;
}

export interface LomSchema {
	id: string | null;
	collection_id?: string | null;
	assignment_id?: string | null;
	lom_id: string | null;
	lom: LomFieldSchema;
}
