import { UserSchema } from '../user';

export interface LoginResponseSchema {
	message: LoginMessageSchema;
	userInfo?: UserSchema;
	acceptedConditions?: boolean;
	sessionExpiresAt: string;
}

export type IdpTypeSchema = 'HETARCHIEF' | 'VIAA' | 'SMARTSCHOOL' | 'KLASCEMENT';

export type LoginMessageSchema  = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';
