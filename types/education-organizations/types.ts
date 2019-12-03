export interface ClientEducationOrganization {
	organizationId: string;
	unitId: string | null;
	label: string; // org.name + ' - ' + unit.address
}
