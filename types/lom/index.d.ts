export interface LomFieldSchema {
	id: string;
	label: string;
	scheme?: string;
	parent?: string;
}

export interface LomEntrySchema {
	broader: string | null;
	definition: string | null;
	id: string;
	label: string;
	member: string[] | null;
	narrower: string[] | null;
	related: string[] | null;
	scheme: string | null;
	topconceptof: string | null;
}

export interface LomSchema {
	id: string | null;
	collection_id: string | null;
	lom_id: string | null;
	lom: LomEntrySchema;
}
