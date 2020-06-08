import { UserSchema } from '../user';

export type LoginResponseSchema = {
	message: 'LOGGED_IN';
	userInfo: UserSchema;
	acceptedConditions: boolean;
	sessionExpiresAt: string;
} | {
	message: 'LOGGED_OUT';
}

export type IdpTypeSchema = 'HETARCHIEF' | 'VIAA' | 'SMARTSCHOOL' | 'KLASCEMENT';

export type LoginMessageSchema  = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';
