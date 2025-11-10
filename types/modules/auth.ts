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

export enum IdpType {
	// De B2C idp van VIAA: Hetarchief-account
	HETARCHIEF = 'HETARCHIEF',
	// OAuth service van Smartschool op oauth.smartschool.be.
	SMARTSCHOOL = 'SMARTSCHOOL',
	// OAuth service van Klascement op oauth.klascement.be
	KLASCEMENT = 'KLASCEMENT',
	// OAuth service van de Vlaamse Overheid: ACM-IDM using the sub id of the user
	VLAAMSEOVERHEID__SUB_ID = 'VLAAMSEOVERHEID__SUB_ID',
	// OAuth service van de Vlaamse Overheid: ACM-IDM using the ov_account_uuid id of the user
	VLAAMSEOVERHEID__ACCOUNT_ID = 'VLAAMSEOVERHEID__ACCOUNT_ID',

	// LTI flows for embedding videos in external platforms
	LTI_BOOKWIDGETS = 'LTI_BOOKWIDGETS',
	LTI_SMARTSCHOOL = 'LTI_SMARTSCHOOL',
	LTI_ANONYMOUS = 'LTI_ANONYMOUS',

	// Deprecated, use VLAAMSEOVERHEID__SUB_ID instead
	VLAAMSEOVERHEID = 'VLAAMSEOVERHEID',
}
