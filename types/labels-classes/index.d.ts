import type { UserProfile } from '../user';
import { Colors } from './enums';

export type LabelClassType = 'LABEL' | 'CLASS';

/** Typings for Assignment Collection Bookmark Labels V2 table */

export interface LabelClassColorSchema {
	label: string; // #FF0000
	value: string; // BRIGHT_RED
}

export interface LabelClassSchema {
	id: string;
	label: string | null; // Wiskunde
	color_enum_value: string; // BRIGHT_RED
	color_override: string | null; // #FFFF00
	owner_profile_id: string;
	enum_color?: LabelClassColorSchema;
	profile?: UserProfile;
	type: LabelClassType;
}
