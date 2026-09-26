import { Rocket, Globe2, Zap, GraduationCap, type LucideIcon } from 'lucide-react'

export interface WhyPoint {
  id: number
  title: string
  description: string
  icon: LucideIcon
}

export const whyPoints: WhyPoint[] = [
  {
    id: 1,
    title: 'First-Mover SOC',
    description:
      'The first dedicated Security Operations Center headquartered in Somalia, with no direct local competitor today.',
    icon: Rocket,
  },
  {
    id: 2,
    title: 'Regional Threat Expertise',
    description:
      'Deep, first-hand understanding of mobile money fraud, SIM-swap schemes, and threats targeting government systems.',
    icon: Globe2,
  },
  {
    id: 3,
    title: 'Faster, Local Response',
    description:
      'On-the-ground analysts mean faster incident response at lower cost than flying in foreign consultants.',
    icon: Zap,
  },
  {
    id: 4,
    title: 'Talent Development Model',
    description:
      'A structured training pipeline that builds Somalia’s own cybersecurity workforce and a defensible staffing advantage as we scale.',
    icon: GraduationCap,
  },
]
