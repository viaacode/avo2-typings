export interface EditStatusInfoSchema {
	editingUserId: string | null;
	editingUserName: string | null;
	editingUserLastActivity: string | null;
}

export type EditStatusResponseSchema = Record<string, EditStatusInfoSchema | null>;
