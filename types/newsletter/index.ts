export interface NewsletterPreferences {
	newsletter: boolean;
	workshop: boolean;
	ambassador: boolean;
}

export type NewsletterPreferencesKey = keyof NewsletterPreferences;
