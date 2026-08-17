export async function generateMetadata() {
  return {
    title: "Veterinary Medicine Abroad - Coming Soon | Medico Yatra",
    description: "Veterinary medicine abroad programs coming soon. Contact us for more information about studying veterinary medicine internationally.",
    keywords: ["veterinary medicine abroad", "dvm abroad", "study veterinary abroad", "veterinary career", "animal medicine"],
  };
}

export default function VeterinaryPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0263CC] to-[#0D47A1]">
      <div className="text-center text-white px-6">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Veterinary Medicine Abroad</h1>
        <p className="text-xl lg:text-2xl mb-8 opacity-90">Coming Soon</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We're working on creating comprehensive information about veterinary medicine programs abroad. 
          Contact us for early access and personalized guidance.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <a
            href="/counselling"
            className="inline-block bg-white text-[#0263CC] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            Book Free Counselling
          </a>
          <a
            href="/courses"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0263CC] transition-colors"
          >
            View Available Courses
          </a>
        </div>
      </div>
    </main>
  );
}