import { Bot, Stethoscope, Plane, Music } from "lucide-react";
import { Project } from "../../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Moodify",
    description:
      "Human's Emotion-based music player app using Java, Kotlin & Python. Facial emotion is classified using a CNN model and then plays mood-matching music using YouTube API.",
    tags: ["Android Studio", "Java", "Kotlin", "Python", "Firebase"],
    icon: Music,
    color: "bg-purple-600",
    githubRepo: "https://github.com/jainishjain11/Moodify",
  },
  {
    id: 2,
    name: "HealthEase",
    description:
      "A full-stack doctor appointment website with patient registration, doctor management, and appointment booking, powered by React, Node.js, and MySQL.",
    tags: ["React", "Node.js", "MySQL"],
    icon: Stethoscope,
    color: "bg-green-700",
    githubRepo: "https://github.com/jainishjain11/HealthEase",
  },
  {
    id: 3,
    name: "TravelSphere",
    description:
      "An all-in-one Android app for travel planning, hotel booking, and itinerary management. Built with Firebase integration.",
    tags: ["Java", "Kotlin", "XML", "Firebase"],
    icon: Plane,
    color: "bg-sky-600",
    githubRepo: "https://github.com/jainishjain11", // Replace with actual repo link if available
  },
];
