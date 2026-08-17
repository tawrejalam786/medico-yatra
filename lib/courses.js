// Import course data
import mbbsData from "@/data/courses/mbbs.json";
import nursingData from "@/data/courses/nursing.json";
import bdsData from "@/data/courses/bds.json";
import mbbsAbroadData from "@/data/courses/mbbs-abroad.json";

// Course data mapping for getCourseData function
const courseData = {
  mbbs: mbbsData,
  nursing: nursingData,
  bds: bdsData,
  "mbbs-abroad": mbbsAbroadData,
  // Add placeholders for missing courses
  pharmacy: null,
  physiotherapy: null, 
  dentistry: null,
  veterinary: null,
};

// Legacy course array for existing functionality
const courses = [
  mbbsAbroadData,
  bdsData,
  nursingData,
];

// Get course data by ID (for new course pages)
export async function getCourseData(courseId) {
  return courseData[courseId] || null;
}

// Get course by slug (for existing dynamic routing)
export function getCourseBySlug(slug) {
  return (
    courses.find((course) => course?.course?.slug === slug) || null
  );
}