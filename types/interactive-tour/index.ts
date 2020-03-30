import { Step } from 'react-joyride';

export interface InteractiveTourSchema {
	id?: number;
	name: string;
	page_id: string;
	created_at?: string;
	updated_at?: string;
	steps: StepSchema[];
}

export interface StepSchema extends Step {
	id: string;
}
