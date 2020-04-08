export interface InteractiveTourSchema {
	id?: number;
	name: string;
	page_id: string;
	created_at?: string;
	updated_at?: string;
	steps: StepSchema[];
}

export interface GenericObject {
	[key: string]: any;
}
export type Placement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end'
	| 'right'
	| 'right-start'
	| 'right-end'
	| 'auto'
	| 'center';

export type PlacementBeacon = 'top' | 'bottom' | 'left' | 'right';

export interface FloaterProps {
	disableAnimation?: boolean;
	options?: GenericObject;
	styles?: GenericObject;
	wrapperOptions?: GenericObject;
}

export interface StepSchema {
	content: any; // React.ReactNode
	disableBeacon?: boolean;
	event?: string;
	floaterProps?: FloaterProps;
	hideCloseButton?: boolean;
	hideFooter?: boolean;
	isFixed?: boolean;
	offset?: number;
	placement?: Placement;
	placementBeacon?: PlacementBeacon;
	target: any; // string || React.ReactNode
	title?: any;
	id: string;
}
