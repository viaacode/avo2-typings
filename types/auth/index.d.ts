import type { CommonUserSchema, UserSchema } from '../user';

export type LoginResponseLoggedInSchema = {
	message: 'LOGGED_IN';
	userInfo: UserSchema;
	commonUserInfo: CommonUserSchema;
	acceptedConditions: boolean;
	sessionExpiresAt: string;
};

export type LoginResponseLoggedOutSchema = {
	message: 'LOGGED_OUT';
};

export type LoginResponseSchema = LoginResponseLoggedInSchema | LoginResponseLoggedOutSchema;

export type IdpTypeSchema =
	| 'HETARCHIEF'
	| 'SMARTSCHOOL'
	| 'KLASCEMENT'
	| 'VLAAMSEOVERHEID__SUB_ID'
	| 'VLAAMSEOVERHEID__ACCOUNT_ID'

	// LTI flows for embedding videos in external platforms
	| 'LTI_BOOKWIDGETS'
	| 'LTI_SMARTSCHOOL'
	| 'LTI_ANONYMOUS'

	// Deprecated, use VLAAMSEOVERHEID__SUB_ID instead
	| 'VLAAMSEOVERHEID';

export type IdpLinkedSuccessQueryParamSchema = 'linked';

export type LoginMessageSchema = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';
