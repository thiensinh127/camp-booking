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

export default function Page() {
  return (
    <div className="relative h-screen w-full">
      <OverLay />
      <Navigation />
      <NavigationContent />
      <BookingForm />
      <About />
      <Activity />
      <Booking />
      <News />
      <Gallery />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
