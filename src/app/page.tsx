import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero/>
      <AboutUs/>
    </main>
  );
}
