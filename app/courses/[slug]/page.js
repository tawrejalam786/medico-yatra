import { notFound } from "next/navigation";
import CourseDetailPage from "@/components/courses/detailPage/CourseDetailPage";
import { getCourseBySlug } from "@/lib/courses";

export default async function Page({ params }) {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailPage course={course} />;
}