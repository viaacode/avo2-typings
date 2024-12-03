export interface ContentBlockSchema {
	id: number | string; // Contains a number or "__temp__{random-id}" for temporary ids
	content_id: number;
	variables: { [key: string]: any } | any[] | null;
	position: number;
	created_at: string;
	updated_at: string;
	content_block_type: string;
}
