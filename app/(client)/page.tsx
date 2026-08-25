import CategorySection from "@/components/client/landing/category-section";
import Hero from "@/components/client/landing/hero";

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh]">
        <Hero />
        {/* categories */}
        <CategorySection />
        {/* featured products */}
        {/* new arrivals */}
      </section>
    </main>
  );
}
