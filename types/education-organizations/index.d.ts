export interface EducationOrganizationSchema {
	organizationId: string;
	unitId: string | null;
	label: string; // org.name + ' - ' + unit.address
}
