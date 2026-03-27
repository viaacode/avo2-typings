export enum ShareWithColleagueType {
	GEDEELD_MET_MIJ = 'GEDEELD_MET_MIJ',
	GEDEELD_MET_ANDERE = 'GEDEELD_MET_ANDERE',
	NIET_GEDEELD = 'NIET_GEDEELD',
}

export interface ContributorProfile {
	profile_id: string;
	avatar: string;
	user_id: string;
	first_name: string;
	last_name: string;
	mail: string;
	full_name: string;
	organisation: any;
	loms: {
		lom_id: string;
	}[];
	// Legacy for queries that happen on the client:
	user: {
		first_name: string;
		full_name: string;
		last_name: string;
		mail: string;
	};
}
