import mbbsAbroad from "@/data/courses/mbbs-abroad.json";
import bds from "@/data/courses/bds.json";
import nursing from "@/data/courses/nursing.json";

const courses = [
  mbbsAbroad,
  bds,
  nursing,
];

export function getCourseBySlug(slug) {
  return (
    courses.find((course) => course?.course?.slug === slug) || null
  );
}