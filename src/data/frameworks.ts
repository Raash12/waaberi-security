import { Target, ShieldCheck, Crosshair, CreditCard, ListChecks, Lock, type LucideIcon } from 'lucide-react'

export interface Framework {
  id: number
  name: string
  tag: string
  description: string
  application: string
  icon: LucideIcon
}

export const frameworks: Framework[] = [
  {
    id: 1,
    name: 'NIST CSF',
    tag: 'Identify / Protect / Detect / Respond / Recover',
    description:
      'The backbone of our SOC monitoring and detection playbooks, organized around the five core functions.',
    application:
      'Every alert our analysts triage is mapped to Identify, Protect, Detect, Respond, or Recover, giving clients a consistent, internationally recognized view of their security posture.',
    icon: Target,
  },
  {
    id: 2,
    name: 'ISO/IEC 27001',
    tag: 'ISMS · Risk Management',
    description:
      'An internationally recognized standard for information security management systems.',
    application:
      'Our compliance and advisory engagements help banks and telecoms document evidence for ISO/IEC 27001 audits, rather than starting from a blank page.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    name: 'MITRE ATT&CK',
    tag: 'Threat Mapping',
    description:
      'A globally used knowledge base of adversary tactics and techniques.',
    application:
      'Incident response procedures reference MITRE ATT&CK to classify and communicate threats in a common, internationally recognized language.',
    icon: Crosshair,
  },
  {
    id: 4,
    name: 'PCI-DSS',
    tag: 'Payment Security',
    description:
      'The global standard for organizations that handle branded payment card data.',
    application:
      'We support banks, telecoms and mobile money operators working toward PCI-DSS compliance across the region’s fast-growing digital payment systems.',
    icon: CreditCard,
  },
  {
    id: 5,
    name: 'CIS Controls',
    tag: 'Baseline Hardening',
    description:
      'A prioritized set of safeguards to mitigate the most common cyber attacks.',
    application:
      'Baseline hardening recommendations for client infrastructure follow CIS Controls, giving even first-time clients a concrete, prioritized starting point.',
    icon: ListChecks,
  },
  {
    id: 6,
    name: 'Data Protection',
    tag: 'Privacy · Governance',
    description:
      'Principles of privacy and governance applied to how client and citizen data is handled.',
    application:
      'Advisory work incorporates data protection and governance principles so client programs are built on sound privacy foundations from the start.',
    icon: Lock,
  },
]
