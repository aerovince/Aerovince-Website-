






// app/(main)/layout.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BehavioralPopups from "@/components/BehavioralPopups";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ChatMascot from "@/components/WhatsAppMascot";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        {children}
      </main>

      <Footer />

      {/*
        BehavioralPopups — lives here so it runs on every route in (main).
        Renders:
          1. Grow Your Brand popup — 8s after every load, repeats every hour
          2. Email newsletter popup — 20s delay, once per calendar day
          3. Floating "See what we do" button → agency showcase drawer
        Admin routes are outside (main) so they stay popup-free.
      */}
      <WhatsAppFloat />
      <ChatMascot />
      <BehavioralPopups />
    </>
  );
}
