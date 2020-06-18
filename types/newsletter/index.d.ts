export interface NewsletterPreferences {
	newsletter: boolean;
	workshop: boolean;
	ambassador: boolean;
	allActiveUsers: boolean,
}

export type NewsletterPreferenceKey = keyof NewsletterPreferences;
