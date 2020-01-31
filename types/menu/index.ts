import { ContentPickerTypeSchema } from "../core/content";

export interface MenuSchema {
	id: number;
	label: string;
	icon_name: string;
	description: string | null;
	user_group_ids: Array<number | string> | { [key: string]: string } | null;
	content_type: ContentPickerTypeSchema | null;
	content_path: string | number | null;
	link_target: "_blank" | "_self" | null;
	position: number;
	placement: string;
	created_at: string;
	updated_at: string;
}
