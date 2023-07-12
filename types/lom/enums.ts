export enum LomSchemeType {
	subject = 'https://w3id.org/onderwijs-vlaanderen/id/vak',
	structure = 'https://w3id.org/onderwijs-vlaanderen/id/structuur',
	theme = 'https://data.hetarchief.be/id/onderwijs/thema',
}

export enum LomType {
	educationLevel = "educationLevel",
	educationDegree = "educationDegree",

	/**
	 * @deprecated use educationDegree instead
	 */
	context = "context",

	subject = 'subject',
	theme = 'theme',
}
