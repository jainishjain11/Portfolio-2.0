"use client"

import { Footer } from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Circle, Star } from 'lucide-react'
import React from 'react'

interface TimelineItem {
  date: string
  title: string
  institution: string
  description: string
  icon: 'circle' | 'star'
}

const education: TimelineItem[] = [
  {
    date: "2021",
    title: "10th Grade",
    institution: "MDS Public School",
    description: "Completed 10th grade with a strong academic record.",
    icon: "circle"
  },
  {
    date: "2023",
    title: "12th Grade - Science (PCM)",
    institution: "MDS Sr. Sec. School",
    description: "Graduated with distinction in Science stream (PCM).",
    icon: "circle"
  },
  {
    date: "2023 - Present",
    title: "B.Tech in Computer Science",
    institution: "SRM Institute of Science and Technology",
    description: "Currently in 2nd year with a CGPA of 9.65.",
    icon: "star"
  }
]

const experience: TimelineItem[] = [
  {
    date: "Jun 2026 – Present",
    title: "AI/ML Research Intern",
    institution:
      "National Centre for Polar and Ocean Research (NCPOR), Ministry of Earth Sciences, India",
    description:
      "Conducting applied ML/DL research on Arctic Sea Ice variability and its teleconnective linkage with Indian heatwave events, working on a high-impact national climate intelligence problem.\n• Engineering LSTM-based time-series models to analyse multi-decadal sea ice extent data, identifying seasonal degradation patterns and anomalous melt signals correlated with extreme heat events over India.\n• Building end-to-end data preprocessing pipelines in Python to ingest, clean, and transform large-scale geospatial and climate datasets, enabling robust model training and reproducible analytical workflows.",
    icon: "star"
  },
  {
    date: "Jun 2025 – Jul 2025",
    title: "Summer Research Intern",
    institution: "CSIR–Central Scientific Instruments Organisation",
    description:
      "Engineered a scalable backend allocation algorithm that reduced processing time for large datasets, delivering measurable performance improvements on a production research system.\n• Optimized SQL queries via advanced indexing and JOIN strategies, improving throughput for heavy read/write workloads– directly applicable to debugging and scaling backend systems at production SaaS scale.\n• Designed relational database schemas from scratch to support data-intensive operations, owning the full data layer end-to-end with minimal supervision.",
    icon: "star"
  },
  {
    date: "1 Nov 2025 - 31 Dec 2025",
    title: "Software Developer Intern",
    institution: "Bluestock Pvt. Ltd.",
    description: "Developed responsive and reusable UI components for stock market analytics dashboards",
    icon: "star"
  }
]

const TimelineSection = ({
  title,
  items
}: {
  title: string
  items: TimelineItem[]
}) => (
  <div className="space-y-6">
    <span className="text-zinc-600 dark:text-gray-400">• {title}</span>
    <div className="relative space-y-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-zinc-200 dark:bg-zinc-700" />
      {items.map((item, index) => (
        <div key={index} className="relative pl-8">
          <div className="absolute left-0 top-1.5 -translate-x-[1px]">
            {item.icon === 'star' ? (
              <Star className="w-4 h-4 text-zinc-400 dark:text-zinc-500 fill-current" />
            ) : (
              <Circle className="w-4 h-4 text-zinc-400 dark:text-zinc-500 fill-current" />
            )}
          </div>
          <div className="space-y-2">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              {item.date}
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400">{item.institution}</p>
            <p className="text-zinc-600 dark:text-zinc-300 whitespace-pre-line">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Page = () => {
  return (
    <div className="flex justify-center min-h-screen p-4">
      <Card className="w-full max-w-4xl md:w-[44.5%] shadow-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-900 dark:text-white p-4 md:p-8 space-y-6 md:space-y-8">
        <TimelineSection title="Education" items={education} />
        <TimelineSection title="Work Experience" items={experience} />
        <Footer />
      </Card>
    </div>
  )
}

export default Page