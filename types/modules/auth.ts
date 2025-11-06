import type { CommonUser, User } from './user.js';

export type LoginResponseLoggedInSchema = {
	message: 'LOGGED_IN';
	userInfo: User;
	commonUserInfo: CommonUser;
	acceptedConditions: boolean;
	sessionExpiresAt: string;
};

export type LoginResponseLoggedOutSchema = {
	message: 'LOGGED_OUT';
};

export type LoginResponseSchema = LoginResponseLoggedInSchema | LoginResponseLoggedOutSchema;

export type IdpLinkedSuccessQueryParamSchema = 'linked';

export type LoginMessageSchema = 'LOGGED_IN' | 'LOGGED_OUT';

export type ErrorActionButtonSchema = 'home' | 'helpdesk';

export enum IdpTypeEnum {
	HETARCHIEF = 'HETARCHIEF',
	SMARTSCHOOL = 'SMARTSCHOOL',
	KLASCEMENT = 'KLASCEMENT',
	VLAAMSEOVERHEID__SUB_ID = 'VLAAMSEOVERHEID__SUB_ID',
	VLAAMSEOVERHEID__ACCOUNT_ID = 'VLAAMSEOVERHEID__ACCOUNT_ID',

	// LTI flows for embedding videos in external platforms
	LTI_BOOKWIDGETS = 'LTI_BOOKWIDGETS',
	LTI_SMARTSCHOOL = 'LTI_SMARTSCHOOL',
	LTI_ANONYMOUS = 'LTI_ANONYMOUS',

	// Deprecated, use VLAAMSEOVERHEID__SUB_ID instead
	VLAAMSEOVERHEID = 'VLAAMSEOVERHEID',
}
