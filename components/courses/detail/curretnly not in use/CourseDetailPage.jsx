import CourseDetailHero from "./CourseDetailHero";
// import CourseOverview from "./CourseOverview";
// import CourseHighlights from "./CourseHighlights";
// import CourseEligibility from "./CourseEligibility";
// import CourseFees from "./CourseFees";
// import CourseAdmission from "./CourseAdmission";
// import CourseUniversities from "./CourseUniversities";
// import CourseDocuments from "./CourseDocuments";
// import CourseFAQ from "./CourseFAQ";
// import CourseCTA from "./CourseCTA";

export default function CourseDetailPage({ slug }) {
  return (
    <main>
      <CourseDetailHero slug={slug} />
      {/* <CourseOverview slug={slug} />
      <CourseHighlights slug={slug} />
      <CourseEligibility slug={slug} />
      <CourseFees slug={slug} />
      <CourseAdmission slug={slug} />
      <CourseUniversities slug={slug} />
      <CourseDocuments slug={slug} />
      <CourseFAQ slug={slug} />
      <CourseCTA slug={slug} /> */}
    </main>
  );
}