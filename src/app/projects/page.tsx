import React from "react";
import { Card } from "@/components/ui/card";
import { projects } from "./data";
import { publications } from "./publications";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCards";

export default function ProjectsPage() {
  return (
    <div className="flex justify-center min-h-screen p-4">
      <Card className="w-full max-w-4xl md:w-[44.5%] shadow-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-900 dark:text-white p-4 md:p-8 space-y-6 md:space-y-8">
        
        {/* Header Title */}
        <div className="space-y-4">
          <span className="text-zinc-600 dark:text-gray-400">• Projects</span>
          <h1 className="text-3xl md:text-4xl font-bold">My Works</h1>
          <p className="text-zinc-600 dark:text-gray-400 leading-relaxed">
            Explore my portfolio, where innovation meets precision. I'm a CS
            undergrad from SRM, aspiring to excel in full-stack development, AI,
            and Machine Learning, blending creativity with technical expertise.
          </p>
        </div>

        {/* Projects Highlights */}
        <div className="space-y-4 bg-white shadow-lg dark:bg-zinc-800/50 rounded-lg p-4 md:p-5">
          <h2 className="text-zinc-600 dark:text-gray-400 text-lg font-semibold mb-2">
            • Highlights
          </h2>
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <ProjectCard project={project} />
            </Card>
          ))}
        </div>

        {/* Publications Section */}
        <div className="space-y-4 bg-white shadow-lg dark:bg-zinc-800/50 rounded-lg p-4 md:p-5">
          <h2 className="text-zinc-600 dark:text-gray-400 text-lg font-semibold mb-2">
            • Publications
          </h2>

          {publications.map((pub) => (
            <Card
              key={pub.id}
              className="bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors p-4"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{pub.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-gray-400">
                  {pub.authors}
                </p>
                <p className="text-sm italic text-zinc-600 dark:text-gray-400">
                  {pub.venue}
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300">
                  {pub.description}
                </p>
                <Link
                  href={pub.link}
                  target="_blank"
                  className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Publication link →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <Footer />
      </Card>
    </div>
  );
}
