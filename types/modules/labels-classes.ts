import type { UserProfile } from './user.js';

export type LabelOrClassType = 'LABEL' | 'CLASS';

/** Typings for Assignment Collection Bookmark Labels V2 table */

export interface LabelOrClassColor {
	label: string; // #FF0000
	value: string; // BRIGHT_RED
}

export interface LabelOrClass {
	id: string;
	label: string | null; // Wiskunde
	color_enum_value: string; // BRIGHT_RED
	color_override: string | null; // #FFFF00
	owner_profile_id: string;
	enum_color?: LabelOrClassColor;
	profile?: UserProfile;
	type: LabelOrClassType;
}

export enum Colors {
	/** #D03F06 */
	DarkOrange = 'DARK_ORANGE',
	/** #F33F67 */
	FrenchRose = 'FRENCH_ROSE',
	/** #9DB410 */
	Green = 'GREEN',
	/** #678588 */
	Juniper = 'JUNIPER',
	/** #57C2A0 */
	OceanGreen = 'OCEAN_GREEN',
	/** #DBDBDB */
	Silver = 'SILVER',
	/** #8AC1CE */
	SoftBlue = 'SOFT_BLUE',
	/** #B75B99 */
	Tapestry = 'TAPESTRY',
	/** #98485C */
	WineRed = 'WINE_RED',
	/** #F3AA2E */
	Yellow = 'YELLOW',
}
