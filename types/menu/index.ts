export interface MenuSchema {
	id: number;
	label: string;
	icon_name: string;
	description: string | null;
	content_id: number | null;
	group_access: Array<number | string> | { [key: string]: string } | null;
	external_link: string | null;
	link_target: '_blank' | '_self' | null;
	position: number;
	placement: string;
	created_at: string;
	updated_at: string;
}
