import Footer from "@/components/client/layout/footer";
import NavBar from "@/components/client/layout/nav";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="min-h-[80vh]">
        <h1>Landing Page</h1>
      </section>
      <Footer />
    </main>
  );
}
