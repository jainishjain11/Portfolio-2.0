"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Copy,
  PlusCircle,
  ArrowRight,
  Heart,
  Pill,
  Music,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import profilePic from "../../placeholder/Jainish_cafe.jpg"; //Image to be changed here 
import { useToast } from "../../hooks/use-toast";
import Image from "next/image";
import Link from "next/link";
import SkillsSection from "@/components/Skill";

export default function AboutPage() {
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
        
        {/* About Badge */}
        <div className="inline-flex items-center py-1 text-zinc-600 dark:text-gray-400">
          <span>• About</span>
        </div>

        {/* Intro Section */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Hey! I'm Jainish Jain</h1>
          <p className="text-zinc-600 dark:text-gray-400 leading-relaxed">
            I'm Jainish Jain, a passionate Computer Science undergraduate driven by curiosity and innovation. With a love for full-stack development and AI-ML, I enjoy building elegant, user-centric solutions that blend technology with creativity. I believe in continuous learning, and I'm always eager to explore new tools and frameworks that can bring powerful ideas to life.
          </p>
        </div>

        {/* Profile Image */}
        <Card className="overflow-hidden border-none rounded-2xl bg-[#f5e6d3]">
          <Image
            src={profilePic}
            alt="Profile photo"
            height={500}
            width={500}
            className="w-full aspect-[4/3] object-cover"
          />
        </Card>

        {/* More About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">More About Me</h2>
          <p className="text-zinc-600 dark:text-gray-400 leading-relaxed">
            I'm actively exploring the latest in software development, AI, and cloud technologies. From academic projects to personal experiments, I'm always looking to push the boundaries of what's possible with code. Whether it's working with modern frameworks or diving into machine learning models, I strive to create impact with every project I touch.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            size="sm"
            className="bg-white text-black dark:bg-zinc-800 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
          >
            <Link href="/contact" className="flex items-center">
              <PlusCircle className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white"
            onClick={handleCopyEmail}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Email
          </Button>
        </div>

        {/* Side Projects Section */}
        <div className="space-y-4 bg-white shadow-lg dark:bg-zinc-800/50 rounded-lg p-4 md:p-5">
          <div className="flex justify-between items-center">
            <span className="text-zinc-600 dark:text-gray-400">
              • Side Projects
            </span>
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

          <div className="space-y-2">
            {[
              {
                name: "HealthAdmin",
                icon: <Heart className="w-5 h-5" />,
                color: "bg-green-500",
                link: "#",
              },
              {
                name: "PillPal",
                icon: <Pill className="w-5 h-5" />,
                color: "bg-purple-500",
                link: "#",
              },
              {
                name: "Music-System",
                icon: <Music className="w-5 h-5" />,
                color: "bg-yellow-500",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-zinc-200/50 hover:bg-zinc-300/50 dark:bg-zinc-600/50 dark:hover:bg-zinc-700/50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-10 w-10 rounded-full ${project.color} flex items-center justify-center text-white`}
                  >
                    {project.icon}
                  </div>
                  <div className="font-medium">{project.name}</div>
                </div>
                <Link href={project.link} target="_blank">
                  <span className="text-xs text-zinc-500 dark:text-gray-500">
                    <SquareArrowOutUpRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <SkillsSection />

        {/* Footer */}
        <Footer />
      </Card>
    </div>
  );
}