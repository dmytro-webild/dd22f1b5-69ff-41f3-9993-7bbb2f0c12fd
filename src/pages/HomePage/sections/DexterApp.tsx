import React from 'react';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import { Smartphone, CreditCard, Bell, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function DexterAppSection(): React.JSX.Element {
  const features = [
    {
      icon: CreditCard,
      title: "Contactless Mobile Payments",
      description: "Pay for your wash and dry cycles securely using your phone with credit, debit, or prepaid account balances."
    },
    {
      icon: Clock,
      title: "Real-Time Machine Status",
      description: "Check available washers and dryers before you arrive, saving time and planning your laundry trip easily."
    },
    {
      icon: Bell,
      title: "Cycle Completion Alerts",
      description: "Receive instant push notifications as soon as your laundry cycle finishes so you don't have to wait around."
    },
    {
      icon: Sparkles,
      title: "Exclusive Rewards & Savings",
      description: "Earn loyalty points on every visit, access special promos, and enjoy bonus savings on select washing days."
    }
  ];

  return (
    <div id="dexter-app" data-webild-section="dexter-app" data-section="dexter-app">
      <SectionErrorBoundary name="dexter-app">
        <section aria-label="Dexter App Section" className="py-20 bg-background">
          <div className="flex flex-col gap-12 mx-auto w-content-width">
            
            {/* Header & Main Callout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column - Text & Downloads */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="px-3 py-1 text-sm card rounded w-fit">
                  <p className="font-medium text-foreground">Dexter Pay App</p>
                </div>
                
                <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-semibold leading-tight text-foreground">
                  Convenient Laundry Payments in the Palm of Your Hand
                </h2>
                
                <p className="text-lg md:text-xl text-accent leading-relaxed">
                  Skip the coins and make laundry day effortless with Dexter Pay. Control your wash, monitor cycles remotely, and earn rewards directly from your mobile device at Ware Coin Laundry.
                </p>

                {/* App Download Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a 
                    href="https://apps.apple.com/us/app/dexter-pay/id1478132029" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="primary-button rounded px-5 py-3.5 flex items-center gap-3 shadow-md hover:opacity-90 transition-all"
                  >
                    <svg className="w-7 h-7 fill-current text-primary-cta-text" viewBox="0 0 384 512">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-92.1zM273.8 88.6c18.7-22.3 32-52.5 27.7-84.6-26.1 1.5-57.8 17.3-75.2 38.3-15.8 18.7-29.3 49.3-24.8 80.5 29.1 2.2 58.7-14.2 72.3-34.2z"/>
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-xs uppercase tracking-wider opacity-80 text-primary-cta-text">Download on the</span>
                      <span className="text-base font-semibold text-primary-cta-text leading-tight">App Store</span>
                    </div>
                  </a>

                  <a 
                    href="https://play.google.com/store/apps/details?id=com.dexter.dexterpay" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="primary-button rounded px-5 py-3.5 flex items-center gap-3 shadow-md hover:opacity-90 transition-all"
                  >
                    <svg className="w-7 h-7 fill-current text-primary-cta-text" viewBox="0 0 512 512">
                      <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l225.6-225.6L47 0zm425.2 225.6l-58.9-34.1-65.7 65.7 65.7 65.7 59-34.1c18-10.3 28.7-27.3 28.7-48.6s-10.7-38.3-28.8-48.6zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z"/>
                    </svg>
                    <div className="flex flex-col text-left">
                      <span className="text-xs uppercase tracking-wider opacity-80 text-primary-cta-text">Get it on</span>
                      <span className="text-base font-semibold text-primary-cta-text leading-tight">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column - Visual Phone Mockup Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="card rounded p-8 w-full max-w-md flex flex-col items-center text-center gap-6 relative overflow-hidden shadow-lg">
                  <div className="size-20 primary-button rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <Smartphone className="w-10 h-10 text-primary-cta-text" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Official Laundry App</span>
                    <h3 className="text-2xl font-bold text-foreground">Dexter Pay</h3>
                    <p className="text-sm text-accent">
                      Seamlessly pair with our commercial washers and dryers. Simple, fast, and secure.
                    </p>
                  </div>
                  <div className="w-full bg-background rounded p-4 text-left flex flex-col gap-3 text-sm">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                      <span>Encrypted Payment Processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <Smartphone className="w-4 h-4 text-accent shrink-0" />
                      <span>Compatible with iOS &amp; Android</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      <Sparkles className="w-4 h-4 text-accent shrink-0" />
                      <span>Free to download &amp; use</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="card rounded p-6 flex flex-col gap-4">
                    <div className="size-10 primary-button rounded flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-cta-text" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{feat.title}</h3>
                    <p className="text-sm text-accent leading-relaxed">{feat.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </SectionErrorBoundary>
    </div>
  );
}