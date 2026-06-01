"use client";

import { useAuth } from "@/hooks/useAuth";
import PasswordGate from "@/components/PasswordGate";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Itinerary from "@/components/Itinerary";
import GettingAround from "@/components/GettingAround";
import Lodging from "@/components/Lodging";
import PackingList from "@/components/PackingList";
import CostBreakdown from "@/components/CostBreakdown";
import Attendees from "@/components/Attendees";
import PhotoGallery from "@/components/PhotoGallery";
import QuickReference from "@/components/QuickReference";
import Footer from "@/components/Footer";

export default function Home() {
  const { authenticated, loading, login } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pine-800">
        <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!authenticated) {
    return <PasswordGate onSuccess={() => window.location.reload()} />;
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <Itinerary />
      <GettingAround />
      <Lodging />
      <PackingList />
      <CostBreakdown />
      <Attendees />
      <PhotoGallery />
      <QuickReference />
      <Footer />
    </>
  );
}
