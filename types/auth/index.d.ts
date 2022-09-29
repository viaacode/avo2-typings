import { UserSchema } from '../user';

export type LoginResponseSchema =
	| {
		message: 'LOGGED_IN';
		userInfo: UserSchema;
		acceptedConditions: boolean;
		sessionExpiresAt: string;
	} | {
		message: 'LOGGED_OUT';
	};

export type IdpTypeSchema = 'HETARCHIEF' | 'SMARTSCHOOL' | 'KLASCEMENT' | 'VLAAMSEOVERHEID';
export const IdpLinkedSuccessQueryParam = 'linked';

export type LoginMessageSchema = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';
