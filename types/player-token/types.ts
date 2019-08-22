export interface PlayerTokenResponse {
	total: number;
	name: string;
	results: PlayerTokenResult[];
}

interface PlayerTokenResult {
	jwt: string;
	app: string;
	verb: string;
	name: string;
	useragent: string;
	client: string;
	expiration: string;
}
