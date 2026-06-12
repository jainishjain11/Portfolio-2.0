import {
  Stethoscope,
  Plane,
  Music,
  Heart,
  Syringe,
  Pill,
  Code,
  Cpu,
  Sparkles,
} from "lucide-react";
import { Project } from "../../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Oil Spill Detection from Satellite Images",
    description:
      "Shipped an end-to-end ML product from raw Sentinel-1 SAR ingestion to a live Next.js visualization dashboard, achieving 94% detection accuracy using transfer learning.",
    tags: ["Python", "OpenCV", "TensorFlow", "Next.js"],
    icon: Code,
    color: "bg-cyan-600",
    githubRepo: "https://github.com/jainishjain11/oil-spill-detection",
  },
  {
    id: 2,
    name: "FaceAttend — Face Recognition Attendance System",
    description:
      "A production-ready face recognition attendance system with React/Vite frontend, FastAPI backend, DeepFace Facenet512 embeddings, OpenCV liveness checks, Supabase PostgreSQL, and JWT auth.",
    tags: ["React", "Vite", "TailwindCSS", "FastAPI", "Supabase"],
    icon: Cpu,
    color: "bg-orange-600",
    githubRepo: "https://github.com/jainishjain11/Biometrics_FaceAttendanceSystem/",
  },
  {
    id: 3,
    name: "Finly — Personal Finance Companion App",
    description:
      "Built a senior-level finance app with an on-device NLP assistant, Spotify-style skeleton loading, gamified health score, custom keypad UX, and dynamic multicurrency support.",
    tags: ["Flutter", "Dart", "Hive", "CustomPainter", "NLP"],
    icon: Sparkles,
    color: "bg-emerald-600",
    githubRepo: "https://github.com/jainishjain11/Personal_Finance_Campanion",
  },
  {
    id: 4,
    name: "Moodify",
    description:
      "Human's Emotion-based music player app using Java, Kotlin & Python. Facial emotion is classified using a CNN model and then plays mood-matching music using YouTube API.",
    tags: ["Android Studio", "Java", "Kotlin", "Python", "Firebase"],
    icon: Music,
    color: "bg-purple-600",
    githubRepo: "https://github.com/jainishjain11/Moodify",
  },
  {
    id: 5,
    name: "HealthEase",
    description:
      "A full-stack doctor appointment website with patient registration, doctor management, and appointment booking, powered by React, Node.js, and MySQL.",
    tags: ["React", "Node.js", "MySQL"],
    icon: Stethoscope,
    color: "bg-green-700",
    githubRepo: "https://github.com/jainishjain11/HealthEase",
  },
  {
    id: 6,
    name: "TravelSphere",
    description:
      "An all-in-one Android app for travel planning, hotel booking, and itinerary management. Built with Firebase integration.",
    tags: ["Java", "Kotlin", "XML", "Firebase"],
    icon: Plane,
    color: "bg-sky-600",
    githubRepo: "https://github.com/jainishjain11", // Replace with actual repo link
  },
  {
    id: 7,
    name: "HealthAdmin",
    description:
      "Admin portal for managing healthcare systems including doctors, patients, and appointments. Focused on secure CRUD operations and analytics.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    icon: Heart,
    color: "bg-pink-600",
    githubRepo: "https://github.com/jainishjain11/HealthAdmin",
  },
  {
    id: 8,
    name: "PillPal",
    description:
      "A smart pill reminder app that notifies patients of medication schedules. Includes dose tracking and adherence monitoring.",
    tags: ["Android", "Java", "SQLite"],
    icon: Pill,
    color: "bg-purple-500",
    githubRepo: "https://github.com/jainishjain11/PillPal",
  },
  {
    id: 9,
    name: "Music-System",
    description:
      "A web-based music system using audio APIs and playlists to explore, search, and play songs. Part of a front-end mini-project.",
    tags: ["Python", "MySQL"],
    icon: Music,
    color: "bg-yellow-500",
    githubRepo: "https://github.com/jainishjain11/Music-System",
  },
];