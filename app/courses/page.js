"use client";

import CompareCourses from "@/components/courses/CompareCourses";
import CTASection from "@/components/courses/CTASection";
import Hero from "@/components/courses/Hero";
import PopularCourses from "@/components/courses/PopularCourses";


export default function CoursesPage() {
  return (
    <main>
      <Hero />
      <PopularCourses />
      <CompareCourses />
      <CTASection />
    </main>
  );
}