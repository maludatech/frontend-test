import { Header } from "@/components/Header";
import { ClassCards } from "@/components/ClassCards";
import { ProgressBar } from "@/components/ProgressBar";
import { InviteFriendsSection } from "@/components/InviteFriendsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#F8F7F7] via-[#C8A2FF] to-[#B17BFF] flex flex-col gap-12 rounded-[8px] py-4 px-8 sm:px-16 md:px-20">
      <Header />
      <ClassCards />
      <section className="bg-[#FFFFFF] flex flex-col gap-2 p-2 rounded-[4.8px]">
        <ProgressBar />
        <InviteFriendsSection />
      </section>

      <CTASection />
    </main>
  );
}
