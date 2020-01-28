type ContentType = 'CONTENT_PAGE' | 'COLLECTION' | 'ITEM' | 'DROPDOWN' | 'INTERNAL_LINK' | 'EXTERNAL_LINK';

export interface MenuSchema {
	id: number;
	label: string;
	icon_name: string;
	description: string | null;
	user_group_ids: Array<number | string> | { [key: string]: string } | null;
	content_type: ContentType | null;
	content_path: string | null;
	link_target: '_blank' | '_self' | null;
	position: number;
	placement: string;
	created_at: string;
	updated_at: string;
}
