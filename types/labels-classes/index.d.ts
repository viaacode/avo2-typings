import type { UserProfile } from '../user';

export type LabelOrClassType = 'LABEL' | 'CLASS';

/** Typings for Assignment Collection Bookmark Labels V2 table */

export interface LabelOrClassColorSchema {
	label: string; // #FF0000
	value: string; // BRIGHT_RED
}

export interface LabelOrClassSchema {
	id: string;
	label: string | null; // Wiskunde
	color_enum_value: string; // BRIGHT_RED
	color_override: string | null; // #FFFF00
	owner_profile_id: string;
	enum_color?: LabelOrClassColorSchema;
	profile?: UserProfile;
	type: LabelOrClassType;
}
