import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "FAQ",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="elastic" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Coin Laundry"
      ctaButton={{
        text: "Get Directions",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="Coin Laundry Ware"
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "123 Main St, Ware, MA 01082",
              href: "#",
            },
          ],
        },
        {
          title: "Hours",
          items: [
            {
              label: "Mon-Sun: 7am - 10pm",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Coin Laundry Ware. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3HyWygIw3kCD5enT6ADPad4uVIu/uploaded-1786843820160-03k1rpba.png?_wi=2"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
