/**
 * The dcterms format of an ie-object. `image` and `newspaperpage` should not occur, but the
 * catalogue does return them.
 */
export enum IeObjectType {
	audio = 'audio',
	audiofragment = 'audiofragment',
	film = 'film',
	image = 'image',
	newspaper = 'newspaper',
	newspaperpage = 'newspaperpage',
	video = 'video',
	videofragment = 'videofragment',
}

/**
 * An ie-object as `GET /ie-objects?schemaIdentifiers=...` returns it.
 *
 * Everything playable or viewable hangs off `pages`, and the urls there are raw: a file has to be
 * ticketed before it can be used.
 */
export interface IeObject {
	schemaIdentifier: string;
	name?: string;
	dctermsFormat?: IeObjectType;
	thumbnailUrl?: string;
	maintainerId?: string;
	maintainerName?: string;
	maintainerSlug?: string;
	maintainerLogo?: string | null;
	maintainerOverlay?: boolean | null;
	pages?: IeObjectPage[];
}

export interface IeObjectPage {
	representations?: { files?: IeObjectFile[] }[];
}

export interface IeObjectFile {
	id?: string;
	mimeType?: string;
	storedAt?: string;
	thumbnailUrl?: string;
}
