import { UserSchema } from '../user';

export type LoginResponseSchema =
	| {
	message: 'LOGGED_IN';
	userInfo: UserSchema;
	acceptedConditions: boolean;
	sessionExpiresAt: string;
}
	| {
	message: 'LOGGED_OUT';
};

export type IdpTypeSchema =
	| 'HETARCHIEF'
	| 'SMARTSCHOOL'
	| 'KLASCEMENT'
	| 'VLAAMSEOVERHEID__SUB_ID'
	| 'VLAAMSEOVERHEID__ACCOUNT_ID'

	// Deprecated, use VLAAMSEOVERHEID__SUB_ID instead
	| 'VLAAMSEOVERHEID';

export type LoginMessageSchema = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';
