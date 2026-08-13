import mbbsAbroad from "@/data/courses/mbbs-abroad.json";
import bds from "@/data/courses/bds.json";

const courses = [
  mbbsAbroad,
  bds,
];

export function getCourseBySlug(slug) {
  return (
    courses.find((course) => course?.course?.slug === slug) || null
  );
}