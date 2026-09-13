// Education & credentials, rendered as a two-column list.

export type EducationEntry = {
  label: string;
  inProgress?: boolean;
};

export const education: EducationEntry[] = [
  { label: 'Master of Computer Applications (MCA)' },
  { label: 'PgMP® — Program Management Professional' },
  { label: 'IIM Ahmedabad — Executive Education, Supply Chain Digitization' },
  { label: 'UC Irvine — Executive Education, Supply Chain Planning' },
  { label: 'IIM Kozhikode — Product Management Program', inProgress: true },
  { label: 'Google Project Management Foundations' },
  { label: 'Building RAG and MCP Servers with Claude (certification)' },
];
