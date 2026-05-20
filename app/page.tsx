import { ClassCards } from "@/components/ClassCards";
import { CTASection } from "@/components/CTASection";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { ReferralSection } from "@/components/referralSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F7F7] flex flex-col gap-12 py-4 px-8 sm:px-16 md:px-20">
      <Header />
      <ClassCards />
      <ProgressBar />
      <ReferralSection />
      <CTASection />
    </main>
  );
}
