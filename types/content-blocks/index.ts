export interface ContentBlockSchema {
	id: number;
	content_id: number;
	variables: { [key: string]: any } | any[] | null;
	position: number | null;
	created_at: string;
	updated_at: string;
	content_block_type: string;
}
