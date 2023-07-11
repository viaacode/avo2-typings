export interface LomFieldSchema {
	id: string;
	label: string;
	scheme?: string;
	broader?: string;
}

export type LomSchema = {
	id?: string | null;
	collection_id?: string | null;
	lom_id: string | null;
	lom?: LomFieldSchema;
} | {
	id?: string | null;
	assignment_id?: string | null;
	lom_id: string | null;
	lom?: LomFieldSchema;
} | {
	id?: string | null;
	profile_id?: string | null;
	lom_id: string | null;
	lom?: LomFieldSchema;
}
