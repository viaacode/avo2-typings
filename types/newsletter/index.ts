export interface NewsletterPreferences {
	newsletter: boolean;
	workshop: boolean;
	ambassador: boolean;
}

export type NewsletterPreferenceKey = keyof NewsletterPreferences;
