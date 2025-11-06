export interface EditStatusInfoSchema {
	subjectId: string;
	subjectTitle: string;
	editingUserId: string | null;
	editingUserName: string | null;
	editingUserLastActivity: string | null;
}

export type EditStatusResponseSchema = Record<string, EditStatusInfoSchema | null>;
