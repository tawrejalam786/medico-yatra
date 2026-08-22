import { notFound } from "next/navigation";

// Sirf valid country URLs
const validCountries = [
  "russia",
  "georgia",
  "kazakhstan",
  "kyrgyzstan",
  "uzbekistan",
  "nepal",
  "bangladesh",
  "philippines",
];

export default async function CountryPage({ params }) {
  const { slug } = await params;

  // URL ko lowercase mein check karega
  const countrySlug = slug?.toLowerCase();

  // Galat country URL par 404 page
  if (!validCountries.includes(countrySlug)) {
    notFound();
  }

  // Valid country ke according component render karo
  switch (countrySlug) {
    case "russia":
      return <div>Russia Page</div>;

    case "georgia":
      return <div>Georgia Page</div>;

    case "kazakhstan":
      return <div>Kazakhstan Page</div>;

    case "kyrgyzstan":
      return <div>Kyrgyzstan Page</div>;

    case "uzbekistan":
      return <div>Uzbekistan Page</div>;

    case "nepal":
      return <div>Nepal Page</div>;

    case "bangladesh":
      return <div>Bangladesh Page</div>;

    case "philippines":
      return <div>Philippines Page</div>;

    default:
      notFound();
  }
}