// Career timeline, most recent first.
//
// IMPORTANT: only verified facts are included here. Entries with missing
// dates, titles, or bullets are marked TODO below — fill them in and the
// Timeline component will render them automatically. Nothing is fabricated.

export type JourneyEntry = {
  employer: string;
  location?: string;
  title?: string;
  period?: string;
  bullets?: string[];
  /** Shown to visitors only when title/period/bullets are incomplete. */
  comingSoon?: boolean;
};

export const journey: JourneyEntry[] = [
  {
    employer: 'Walmart Inc. / Sam’s Club',
    location: 'Bentonville, AR',
    title: 'Senior Software Engineer (operating at Staff / Principal / Senior Manager scope)',
    // TODO(MP): add the exact start date for this most recent role (e.g. "2019 — Present").
    period: undefined,
    bullets: [
      'Led WMS (ATLAS) and WCS (HAWKEYE) execution platforms plus OMS/TMS integration across 80+ fulfillment and distribution centers.',
      'Onboarded seven automation/robotics partners (Locus Robotics, Symbotic, GreyOrange, Dematic, Packsize, Sparck CVP, IPG).',
      'Delivered $20M+ annual cost savings, 90% reduction in manual processing, 98%+ operational accuracy; owned SOX-compliant inventory controls.',
      'Lead SME for enterprise incident management: AI-enabled ServiceNow ↔ Zendesk ↔ GreyOrange robotics ticketing integration and an AI-powered incident control tower (incidents auto-created and escalated in minutes instead of hours); owned SLA/SLO and MTTD/MTTR metrics.',
    ],
  },
  {
    employer: 'Mphasis',
    // TODO(MP): add title, dates, and 2 bullets for this role.
    comingSoon: true,
  },
  {
    employer: 'SoftClouds',
    // TODO(MP): add title, dates, and 2 bullets for this role.
    comingSoon: true,
  },
  {
    employer: 'TCS (Tata Consultancy Services)',
    // TODO(MP): add title, dates, and 2 bullets for this role.
    comingSoon: true,
  },
  {
    employer: 'Walmart',
    // TODO(MP): add title, dates (from 2004), and 2 bullets for this earlier tenure.
    comingSoon: true,
  },
];
