// Project & innovation case-study cards.

export type Project = {
  tag: 'Concept / POC' | 'Concept' | 'Design' | undefined;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    tag: 'Concept / POC',
    title: 'Hybrid Shopping at Sam’s Club',
    description:
      'A unified in-store + digital shopping experience for members, with a projected revenue-impact model.',
    stack: ['Product strategy', 'Omnichannel', 'Retail'],
  },
  {
    tag: 'Concept',
    title: 'AI-Powered Autonomous Returns',
    description: 'A fully autonomous, associate-free item-return system for Sam’s Club clubs.',
    stack: ['Computer vision', 'Agentic AI', 'Operations'],
  },
  {
    tag: undefined,
    title: 'AI Incident Control Tower',
    description:
      'Log monitoring with automated incident creation and escalation across WMS/WCS/WES, integrated with ServiceNow and GreyOrange ticketing.',
    stack: ['Observability', 'Zendesk/ServiceNow', 'Kafka'],
  },
  {
    tag: undefined,
    title: 'Robotics (MHE) Integration Platform',
    description:
      'Event-driven integration layer (Kafka, IBM MQ, Spring Boot microservices) connecting ATLAS/HAWKEYE with seven automation vendors across the network.',
    stack: ['Event-driven architecture', 'Java', 'Multi-cloud'],
  },
  {
    tag: 'Design',
    title: 'AI-Powered SSL/TLS Certificate Renewal Automation',
    description:
      'Principal-level system design: microservices, event-driven renewal flow, ML-assisted risk scoring, secure API/integration design.',
    stack: ['System design', 'Security', 'Spring Boot'],
  },
  {
    tag: undefined,
    title: 'Medallion Data Foundation for ML/AI Analytics',
    description:
      'Bronze/Silver/Gold lakehouse layers feeding operational ML and analytics for fulfillment operations.',
    stack: ['Data platform', 'Analytics', 'Cloud'],
  },
];
