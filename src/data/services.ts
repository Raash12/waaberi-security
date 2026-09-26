import {
  Radar,
  Siren,
  BrainCircuit,
  ScanSearch,
  ShieldCheck,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  id: number
  number: string
  slug: string
  title: string
  description: string
  details: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 1,
    number: '01',
    slug: '247-security-monitoring',
    title: '24/7 Security Monitoring',
    description:
      'Real-time detection across client networks, endpoints and cloud environments.',
    details: [
      'Continuous, always-on visibility across networks, endpoints and cloud environments',
      'Somalia’s most critical systems watched around the clock, every day of the year',
      'Alerts triaged and mapped against the NIST CSF functions as they are detected',
    ],
    icon: Radar,
  },
  {
    id: 2,
    number: '02',
    slug: 'incident-response',
    title: 'Incident Response',
    description:
      'Rapid containment and recovery when a breach or fraud event occurs.',
    details: [
      'Rapid containment and recovery when a breach or fraud event occurs',
      'Pre-paid emergency response retainers for when minutes matter',
      'Response procedures reference MITRE ATT&CK tactics and techniques',
    ],
    icon: Siren,
  },
  {
    id: 3,
    number: '03',
    slug: 'threat-intelligence',
    title: 'Threat Intelligence',
    description:
      'Track threat actors and fraud patterns relevant to East African financial and telecom environments.',
    details: [
      'Tracking threat actors and fraud patterns specific to East African financial and telecom systems',
      'Focus on mobile money fraud and SIM-swap schemes affecting the region',
      'Intelligence built for the local threat landscape, not repurposed from elsewhere',
    ],
    icon: BrainCircuit,
  },
  {
    id: 4,
    number: '04',
    slug: 'vulnerability-management',
    title: 'Vulnerability Management',
    description: 'Continuous scanning and prioritized remediation guidance.',
    details: [
      'Continuous scanning across client infrastructure',
      'Prioritized, actionable remediation guidance rather than raw scan output',
      'Keeps client infrastructure a step ahead of attackers',
    ],
    icon: ScanSearch,
  },
  {
    id: 5,
    number: '05',
    slug: 'compliance-advisory',
    title: 'Compliance & Advisory',
    description:
      'Support organizations working toward standards including PCI-DSS and ISO/IEC 27001.',
    details: [
      'Support for banks and telecoms working toward PCI-DSS and ISO/IEC 27001',
      'Evidence and documentation support for audits, not a blank-page start',
      'Baseline hardening recommendations aligned to CIS Controls',
    ],
    icon: ShieldCheck,
  },
  {
    id: 6,
    number: '06',
    slug: 'local-talent-development',
    title: 'Local Talent Development',
    description:
      'Build Somalia’s cybersecurity workforce through structured analyst training.',
    details: [
      'A structured analyst training pipeline for Somali cybersecurity talent',
      'Every engagement feeds the training pipeline rather than exporting the opportunity abroad',
      'Building a defensible, homegrown staffing advantage as the SOC scales',
    ],
    icon: GraduationCap,
  },
]
