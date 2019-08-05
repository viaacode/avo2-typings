import { UserResponse } from '../user/types';
import { CoreContentType } from '../core/content';

export interface CollectionResponse {
	fragments: CollectionFragment[];
	title: string;
	is_public: boolean;
	id: number;
	lom_references: any[] | null;
	type_id: number;
	d_ownerid: number;
	owner?: UserResponse;
	created_at: string;
	updated_at: string;
	organisation_id: string | null;
	mediamosa_id: string;
	is_migrated_collection: boolean;
}

export interface CollectionResponseMigration {
	fragments: CollectionFragmentMigration[];
	description: string | null;
	title: string;
	is_public: boolean;
	id: number;
	lom_references: any[] | null;
	type_id: number;
	d_ownerid: number;
	owner?: UserResponse;
	created_at: string;
	updated_at: string;
	organisation_id: string | null;
	mediamosa_id: string;
}

export interface CollectionFragmentMigration {
	id: number;
	external_id: CollectionFragmentExternalId;
	custom_title: string;
	custom_description: string | null;
	created_at: string;
	updated_at: string;
	start_oc: number | null;
	end_oc: number | null;
}

export type BlockType =
	| 'Image'
	| 'ImageTitleTextButton'
	| 'Intro'
	| 'Links'
	| 'Quote'
	| 'RichText'
	| 'Subtitle'
	| 'Title'
	| 'TitleImageText'
	| 'Video'
	| 'VideoTitleTextButton';

export interface CollectionFragment {
	id: number;
	created_at: string;
	updated_at: string;
	type: BlockType,
	fields: FieldInfo[] // Stored as jsonb in postgres
}

/**
 * Stores the values for each of the fields in a block
 *
 * Example of media fragment
 * fields: [
 * {
 *    name: 'external_id',
 *    label: 'Media id',
 *    editorType: 'none', // Do not show in editor screen
 *    value: '9p2w39hj6r',
 *    required: true,
 *  },
 * {
 *    name: 'custom_title',
 *    label: 'Eigen titel',
 *    editorType: 'string',
 *    value: 'KLAAR: artikel 13',
 *    required: false,
 *  },
 * {
 *    name: 'custom_description',
 *    label: 'Eigen beschrijving',
 *    editorType: 'textarea', // Do not show in editor screen
 *    value: 'Europa heeft onlangs de regels over het auteursrecht aangepast',
 *    required: false,
 *  },
 * {
 *    name: 'start_oc',
 *    label: 'Begin fragment',
 *    editorType: 'none',
 *    value: 15,
 *    required: false,
 *  },
 * {
 *    name: 'end_oc',
 *    label: 'Einde fragment',
 *    editorType: 'none',
 *    value: 25,
 *    required: false,
 *  },
 * ]
 *
 * Example of a BlockImageTitleTextButton block fragment
 * fields: [
 * {
 *    name: 'imageSource',
 *    label: 'Afbeelding',
 *    editorType: 'imageuploader',
 *    value: 'https://archief.viaa.be/ad87ac36b4f640dfb0fc57c26397b7.jpg',
 *    required: true,
 *  },
 * {
 *    name: 'imageDescription',
 *    label: 'Afbeelding beschrijving',
 *    editorType: 'string',
 *    value: '4 mensen die discusieren over auteursrecht in het europees parlement',
 *    required: false,
 *  },
 * {
 *    name: 'title',
 *    label: 'Titel',
 *    editorType: 'string',
 *    value: 'KLAAR: artikel 13',
 *    required: false,
 *  },
 * {
 *    name: 'text',
 *    label: 'Beschrijving',
 *    editorType: 'textarea',
 *    value: 'Europa heeft onlangs de regels over het auteursrecht aangepast',
 *    required: false,
 *  },
 * {
 *    name: 'buttonLabel',
 *    label: 'Knop label',
 *    editorType: 'string',
 *    value: 'Lees meer',
 *    required: false,
 *  },
 * {
 *    name: 'buttonLink',
 *    label: 'Knop link',
 *    editorType: 'string',
 *    value: '/item/141',
 *    required: false,
 *  },
 * {
 *    name: 'openInNewWindow',
 *    label: 'In nieuw vensten openen',
 *    editorType: 'toggle',
 *    value: true,
 *    required: true,
 *  },
 * ]
 */
export interface FieldInfo {
	name: string;
	label: string;
	editorType: 'string' | 'textarea' | 'imageuploader' | 'none'; // TODO add more
	value: any;
	required?: boolean;
}

export interface CollectionFragmentExternalId {
	external_id: string,
	mediamosa_id: string,
	type_label: CoreContentType
}
