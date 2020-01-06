export interface PlayerTicket {
	total: number;
	name: string;
	results: PlayerTicketResult[];
}

interface PlayerTicketResult {
	jwt: string;
	app: string;
	verb: string;
	name: string;
	useragent: string;
	client: string;
	expiration: string;
}
