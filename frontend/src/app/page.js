"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LoginPage from "./login";
import VolunteerForm from "./form";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main>
      <Projects />
      <LoginPage />
      <VolunteerForm />
    </main>
  );
}


// main page to access volunteer/shadowing info
