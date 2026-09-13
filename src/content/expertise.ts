// Grouped expertise chips.

export type ExpertiseGroup = {
  label: string;
  items: string[];
};

export const expertise: ExpertiseGroup[] = [
  {
    label: 'Supply Chain Platforms',
    items: [
      'WMS (ATLAS)',
      'WCS (HAWKEYE)',
      'WES',
      'OMS',
      'TMS',
      'Warehouse automation',
      'Robotics integration (AMR, AS/RS, goods-to-person, sortation)',
    ],
  },
  {
    label: 'Engineering',
    items: [
      'Java / J2EE',
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'Kafka',
      'IBM MQ',
      'Event-driven architecture',
      'Distributed systems',
      'CI/CD',
    ],
  },
  {
    label: 'Cloud & Data',
    items: ['Azure', 'AWS', 'GCP', 'Postgres / Azure SQL / BigQuery', 'Spark', 'Airflow', 'Splunk / ELK'],
  },
  {
    label: 'AI & Automation',
    items: [
      'RAG',
      'MCP servers',
      'Claude Code',
      'GitHub Copilot',
      'Agentic workflows',
      'AI-assisted operations',
    ],
  },
  {
    label: 'Leadership',
    items: [
      'Program governance (PgMP®)',
      'Cross-functional delivery',
      'Vendor / SI management',
      'SOX compliance',
      'OKR/KPI design',
      'Mentorship',
    ],
  },
];
