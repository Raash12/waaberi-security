import { Eye, Users, MapPinned, GraduationCap, ClipboardCheck, type LucideIcon } from 'lucide-react'

export interface ApproachStep {
  id: number
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const approachSteps: ApproachStep[] = [
  {
    id: 1,
    number: '01',
    title: 'Always-On Vigilance',
    description:
      'Real-time detection across client networks, endpoints and cloud environments, twenty-four hours a day, seven days a week — not incident response after the fact.',
    icon: Eye,
  },
  {
    id: 2,
    number: '02',
    title: 'Locally Staffed, Globally Benchmarked',
    description:
      'Our analysts are Somali, trained against international standards and frameworks, combining deep local context with world-class SOC practice.',
    icon: Users,
  },
  {
    id: 3,
    number: '03',
    title: 'Built for the Regional Threat Landscape',
    description:
      'We track threat actors and fraud patterns specific to East African financial and telecom systems — mobile money fraud, SIM-swap schemes and attacks on government systems.',
    icon: MapPinned,
  },
  {
    id: 4,
    number: '04',
    title: 'Talent Pipeline, Not Just a Contract',
    description:
      'Every engagement feeds a structured analyst training pipeline, building Somalia’s own cybersecurity workforce rather than exporting the opportunity abroad.',
    icon: GraduationCap,
  },
  {
    id: 5,
    number: '05',
    title: 'Compliance-Ready',
    description:
      'We help banks, telecoms and government partners meet regulatory and international security standards, including PCI-DSS and ISO 27001.',
    icon: ClipboardCheck,
  },
]
