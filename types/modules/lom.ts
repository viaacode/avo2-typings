export interface LomField {
	id: string;
	label: string;
	scheme?: string;
	broader?: string | null;
}

export type Lom =
	| {
			id?: string | null;
			collection_id?: string | null;
			lom_id: string | null;
			lom?: LomField;
	  }
	| {
			id?: string | null;
			assignment_id?: string | null;
			lom_id: string | null;
			lom?: LomField;
	  }
	| {
			id?: string | null;
			profile_id?: string | null;
			lom_id: string | null;
			lom?: LomField;
	  };

export enum LomSchemeType {
	subject = 'https://w3id.org/onderwijs-vlaanderen/id/vak',
	structure = 'https://w3id.org/onderwijs-vlaanderen/id/structuur',
	theme = 'https://data.hetarchief.be/id/onderwijs/thema',
}

export enum LomType {
	educationLevel = 'educationLevel',
	educationDegree = 'educationDegree',

	/**
	 * @deprecated use educationDegree instead
	 */
	context = 'context',

	subject = 'subject',
	theme = 'theme',
}
