import CategorySection from "@/components/client/landing/category-section";
import FeaturedProductsSection from "@/components/client/landing/featured-products";
import FeaturedProductsList from "@/components/client/landing/featured-products/list";
import Hero from "@/components/client/landing/hero";
import NewArrivalsProductsSection from "@/components/client/landing/new-arrivals";

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh]">
        <Hero />
        {/* categories */}
        <CategorySection />

        {/* featured products */}
        <FeaturedProductsSection />
        
        {/* new arrivals */}
        <NewArrivalsProductsSection />
      </section>
    </main>
  );
}
