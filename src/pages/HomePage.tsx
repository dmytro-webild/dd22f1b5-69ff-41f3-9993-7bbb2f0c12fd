import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import HeroBillboardBrand from '@/components/sections/hero/HeroBillboardBrand';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import { CheckCircle, Clock, Smile } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardBrand
      brand="Coin Laundry"
      description="Clean Clothes. Easy Laundry. Right Here in Ware, MA. Your friendly local spot for quick, reliable wash-and-dry services."
      primaryButton={{
        text: "Get Directions",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Call Us Now",
        href: "tel:4135550123",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/person-inside-laundromat-with-washing-machines_23-2151176217.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="About Us"
      title="Convenient, Clean, & Reliable Local Laundry"
      description="We believe doing laundry should be the simplest part of your day. Located in the heart of Ware, our laundromat is designed to be family-friendly, well-lit, and clean, providing you with a comfortable environment while you take care of your laundry needs."
      items={[
        {
          icon: CheckCircle,
          title: "Modern Machines",
          description: "High-efficiency washers and dryers for all load sizes.",
        },
        {
          icon: Clock,
          title: "Flexible Hours",
          description: "Open early and late to fit your busy schedule.",
        },
        {
          icon: Smile,
          title: "Family Friendly",
          description: "Safe, clean, and welcoming environment for all.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-garage-sale_23-2150574532.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesComparison
      tag="Our Services"
      title="Comprehensive Laundry Solutions"
      description="Whether it's a quick wash or a full weekend's load, we've got you covered."
      negativeItems={[
        "High wait times",
        "Old, dirty machines",
        "Uncomfortable waiting areas",
      ]}
      positiveItems={[
        "Clean, well-maintained facility",
        "Large-capacity machines available",
        "Safe, brightly lit atmosphere",
        "Quick, efficient cycles",
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Why Choose Us"
      title="Quality at Every Turn"
      description="Dedicated to maintaining the highest standards for our community."
      metrics={[
        {
          value: "24/7",
          description: "Reliable Service Available",
        },
        {
          value: "15+",
          description: "Large Load Capacity Washers",
        },
        {
          value: "100%",
          description: "Customer Satisfaction Goal",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="What Our Neighbors Say"
      title="Trusted by Local Families"
      description="See why our customers keep coming back to Coin Laundry."
      testimonials={[
        {
          name: "Alice T.",
          role: "Ware Resident",
          quote: "The cleanest laundromat in Ware! I love the large capacity machines.",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HyWygIw3kCD5enT6ADPad4uVIu/uploaded-1786843820158-lyci51ue.jpg",
        },
        {
          name: "Bob M.",
          role: "Local Business Owner",
          quote: "Reliable and always open when I need it. Great customer service.",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HyWygIw3kCD5enT6ADPad4uVIu/uploaded-1786843820159-9r2hn15q.jpg",
        },
        {
          name: "Cindy L.",
          role: "Busy Mom",
          quote: "Safe and bright environment for my family. Highly recommend.",
          rating: 5,
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HyWygIw3kCD5enT6ADPad4uVIu/uploaded-1786843820160-03k1rpba.png",
        },
        {
          name: "David W.",
          role: "Ware Resident",
          quote: "Best laundromat near me. Always well maintained.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-inside-laundromat-with-washing-machines_23-2151176217.jpg",
        },
        {
          name: "Emma H.",
          role: "Student",
          quote: "Affordable and very user-friendly equipment.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-garage-sale_23-2150574532.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Common Questions"
      title="We're Here to Help"
      description="Have questions about your visit? Find answers below."
      categories={[
        {
          name: "General",
          items: [
            {
              question: "Where are you located?",
              answer: "We are centrally located in downtown Ware, MA.",
            },
            {
              question: "Are you open on weekends?",
              answer: "Yes, we are open seven days a week.",
            },
          ],
        },
        {
          name: "Services",
          items: [
            {
              question: "Do you offer wash-dry-fold?",
              answer: "Please inquire at our service desk regarding full service options.",
            },
            {
              question: "Do you have change machines?",
              answer: "Yes, change machines are available onsite.",
            },
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us"
      text="Located in the heart of Ware. Come visit us today for a clean, easy, and stress-free laundry experience."
      primaryButton={{
        text: "Call Now: 413-555-0123",
        href: "tel:4135550123",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com/?q=Laundromat+Ware+MA",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
