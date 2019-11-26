import { UserSchema } from '../user/types';

export interface LoginResponseSchema {
	message: 'LOGGED_IN' | 'LOGGED_OUT';
	userInfo?: UserSchema;
}
