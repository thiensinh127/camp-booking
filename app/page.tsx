import { BookingForm } from "@/components/booking-form/BookingForm";
import { Navigation } from "@/components/header/Navigation";
import NavigationContent from "@/components/header/NavigationContent";
import OverLay from "@/components/OverLay";
import About from "./about/page";
import Activity from "./activity/page";
import Booking from "./booking/page";
import BackToTopButton from "@/components/back-to-top";
import News from "./news/page";
import Gallery from "./gallery/page";
import Footer from "@/components/footer/Footer";
import { Benefits } from "@/components/site/Benefits";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";

export default function Page() {
  return (
    <main className="overflow-x-clip bg-[var(--warm-ivory)]">
      <section className="relative min-h-[640px] md:min-h-[720px]">
        <OverLay />
        <Navigation />
        <NavigationContent />
        <BookingForm />
      </section>
      <About />
      <Activity />
      <Booking />
      <Benefits />
      <Testimonials />
      <News />
      <Gallery />
      <FinalCta />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
