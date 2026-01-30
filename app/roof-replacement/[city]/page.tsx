import { cities } from "@/data/cities";
import CityPage from "@/components/layout/CityPage";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.name.toLowerCase(),
  }));
}

// Define the page props type
interface PageProps {
  params: { city: string }; // Directly access `city` from `params`
}

// Generate metadata dynamically based on the city
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: cityParam } = params;
  const city = cities.find((c) => c.name.toLowerCase() === cityParam);

  if (!city) {
    return {};
  }

  const title = `Free Roof Replacement Quotes in ${city.name}, ${city.state} After Storm`;
  const description = `Get a free roof replacement quote in ${city.name}, ${city.state} after storm damage. Reliable, fast, and affordable roofing services.`;

  return {
    title,
    description,
  };
}

export default function CityPageRoute({ params }: PageProps) {
  const { city: cityParam } = params;
  const city = cities.find((c) => c.name.toLowerCase() === cityParam);

  if (!city) {
    notFound();
  }

  return <CityPage city={city} />;
}
