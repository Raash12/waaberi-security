import { motion } from 'framer-motion'

const nodes = [
  { cx: 60, cy: 70, r: 5 },
  { cx: 340, cy: 50, r: 4 },
  { cx: 380, cy: 200, r: 5 },
  { cx: 40, cy: 260, r: 4 },
  { cx: 210, cy: 30, r: 3.5 },
  { cx: 300, cy: 300, r: 4 },
  { cx: 80, cy: 180, r: 3.5 },
]

export function SocIllustration() {
  return (
    <div className="relative flex items-center justify-center rounded-2xl border border-border bg-card/50 p-8 shadow-card sm:p-12">
      <svg
        viewBox="0 0 420 330"
        className="h-auto w-full max-w-md"
        role="img"
        aria-label="Abstract illustration of a security network protecting a central shield"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(217 91% 60%)" />
            <stop offset="100%" stopColor="hsl(189 94% 56%)" />
          </linearGradient>
        </defs>

        {nodes.map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1={node.cx}
            y1={node.cy}
            x2="210"
            y2="165"
            stroke="hsl(217 33% 30%)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.08 }}
          />
        ))}

        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="hsl(189 94% 56%)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.06 }}
          />
        ))}

        <circle cx="210" cy="165" r="70" fill="hsl(217 91% 60% / 0.08)" />
        <circle cx="210" cy="165" r="52" fill="hsl(217 91% 60% / 0.12)" />

        <path
          d="M210 122 L246 138 V172 C246 198 230 214 210 224 C190 214 174 198 174 172 V138 Z"
          fill="url(#shieldGrad)"
          opacity="0.95"
        />
        <path
          d="M197 168 L206 178 L225 156"
          fill="none"
          stroke="hsl(222 47% 6%)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
