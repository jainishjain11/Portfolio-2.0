import {
  Bot,
  Stethoscope,
  Plane,
  Music,
  Heart,
  Syringe,
  Pill,
} from "lucide-react";
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
    githubRepo: "https://github.com/jainishjain11", // Replace with actual repo link
  },
  {
    id: 4,
    name: "HealthAdmin",
    description:
      "Admin portal for managing healthcare systems including doctors, patients, and appointments. Focused on secure CRUD operations and analytics.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    icon: Heart,
    color: "bg-pink-600",
    githubRepo: "https://github.com/jainishjain11/HealthAdmin",
  },
  {
    id: 5,
    name: "PillPal",
    description:
      "A smart pill reminder app that notifies patients of medication schedules. Includes dose tracking and adherence monitoring.",
    tags: ["Android", "Java", "SQLite"],
    icon: Pill,
    color: "bg-purple-500",
    githubRepo: "https://github.com/jainishjain11/PillPal",
  },
  {
    id: 6,
    name: "Music-System",
    description:
      "A web-based music system using audio APIs and playlists to explore, search, and play songs. Part of a front-end mini-project.",
    tags: ["Python", "MySQL",],
    icon: Music,
    color: "bg-yellow-500",
    githubRepo: "https://github.com/jainishjain11/Music-System",
  },
];
