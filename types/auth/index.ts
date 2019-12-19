import { UserSchema } from '../user';

export interface LoginResponseSchema {
	message: LoginMessageSchema;
	userInfo?: UserSchema;
}

export type IdpTypeSchema = 'HETARCHIEF' | 'VIAA' | 'SMARTSCHOOL' | 'KLASCEMENT';

export enum LoginMessageSchema {
	LOGGED_IN = 'LOGGED_IN',
	LOGGED_OUT = 'LOGGED_OUT',
}
