import { UserSchema } from '../user';

export interface LoginResponseSchema {
	message: LoginMessageSchema;
	userInfo?: UserSchema;
	acceptedConditions?: boolean;
}

export type IdpTypeSchema = 'HETARCHIEF' | 'VIAA' | 'SMARTSCHOOL' | 'KLASCEMENT';

export type LoginMessageSchema  = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';
