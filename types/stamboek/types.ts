export type StamboekValidationStatuses = 'VALID' | 'ALREADY_IN_USE' | 'INVALID';

export interface ValidateStamboekResponse {
	status: StamboekValidationStatuses;
}
