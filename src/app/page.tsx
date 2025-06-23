"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlusCircle } from "lucide-react";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { projects } from "./projects/data";
import { ProjectCard } from "@/components/ProjectCards";

const PortfolioCard = () => {
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jainishjain.1105@gmail.com").then(() => {
      toast({
        title: "Email copied!",
        description: "The email has been copied to your clipboard.",
      });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-4xl md:w-[44.5%] shadow-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-900 dark:text-white p-4 md:p-8 space-y-6 md:space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex flex-row sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-zinc-600 dark:text-gray-400">
              • Software Developer
            </span>
            <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 text-sm px-3 py-1 rounded-full">
              • Open To Innovation
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
          <div className="space-y-2 text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">I'm Jainish Jain</h1>
            <p className="text-zinc-600 dark:text-gray-400">
              Student at SRMIST, Chennai.
            </p>
            <p className="text-zinc-600 dark:text-gray-400">
              Developing skills in AI-ML and Full Stack Development.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 mt-4">
              <Button
                size="sm"
                className="bg-white text-black dark:bg-zinc-800 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
              >
                <PlusCircle className="mr-2" />
                <Link href={"/contact"}>Contact Me</Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleCopyEmail}
                className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white"
              >
                Copy Email
              </Button>
            </div>
          </div>
          <div className="h-[150px] w-[150px] rounded-full bg-zinc-300 dark:bg-gray-700 flex items-center justify-center shadow-xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full rounded-full object-cover pointer-events-none"
            >
              <source src="/profile.mp4" type="video/mp4" />
              <track
                src="/videos/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
            </video>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-4 bg-white shadow-lg dark:bg-zinc-800/50 rounded-lg p-4 md:p-5">
          <div className="flex justify-between items-center">
            <span className="text-zinc-600 dark:text-gray-400">• Projects</span>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-600 hover:text-zinc-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Link href={"/projects"} className="flex">
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {projects
              .slice(0, 3)
              .map((project) => (
                <Card
                  key={project.id}
                  className="bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <ProjectCard project={project} />
                </Card>
              ))}
          </div>
        </div>

        <Footer />
      </Card>
    </div>
  );
};

export default PortfolioCard;