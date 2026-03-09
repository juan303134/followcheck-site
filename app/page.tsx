"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Shield,
  Lock,
  FileArchive,
  ChartColumn,
  Users,
  UserRoundCheck,
  UserRoundX,
  RefreshCcw,
  Camera,
  Eye,
  History,
  Search,
  Clock3,
  Smartphone,
  Plug,
  KeyRound,
  FileCheck,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  FolderArchive,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

type GridItem = {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
};

type Step = {
  number: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  note: string;
  group: string;
};

type FaqSection = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { q: string; a: string }[];
};

export default function FollowCheckWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openGuideGroup, setOpenGuideGroup] = useState<string>("Part 1 — Open the export flow");
  const [activeFaqCategory, setActiveFaqCategory] = useState("Privacy Security");
  const [openFaq, setOpenFaq] = useState<string | null>("privacy-security-0");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  const screenshots = [
    {
      title: "Import your Instagram ZIP",
      text: "Upload your export file in a simple and guided flow.",
      image: "/images/screen-import.jpg",
    },
    {
      title: "See non-followers and mutuals",
      text: "Clean sections make it easy to understand account relationships.",
      image: "/images/screen-results.jpg",
    },
    {
      title: "Track changes over time",
      text: "Compare imports and review follower changes with saved history.",
      image: "/images/screen-history.jpg",
    },
  ];

  const trustBar = [
    {
      title: "No login required",
      text: "No Instagram username or password needed.",
      icon: KeyRound,
    },
    {
      title: "Private by design",
      text: "Analysis happens on your device.",
      icon: Lock,
    },
    {
      title: "Simple ZIP import",
      text: "Export, download, and import your file.",
      icon: FileArchive,
    },
    {
      title: "Clear follower insights",
      text: "Understand relationships and changes over time.",
      icon: ChartColumn,
    },
  ];

  const discoverItems: GridItem[] = [
    {
      title: "Not Following You Back",
      text: "See which accounts you follow that do not follow you back.",
      icon: UserRoundX,
    },
    {
      title: "You Don't Follow Back",
      text: "Quickly find people who follow you but you are not following.",
      icon: Users,
    },
    {
      title: "Mutuals",
      text: "View accounts where the follow relationship goes both ways.",
      icon: UserRoundCheck,
    },
    {
      title: "New Followers",
      text: "Compare imports to spot who recently appeared in your follower list.",
      icon: RefreshCcw,
    },
    {
      title: "Unfollowers",
      text: "Review which accounts disappeared compared with a previous import.",
      icon: Search,
    },
    {
      title: "Compare Imports",
      text: "Use saved analysis history to compare older and newer snapshots.",
      icon: History,
    },
  ];

  const whyFollowCheck: GridItem[] = [
    {
      title: "Private by design",
      text: "FollowCheck analyzes your Instagram export on your device without asking for your Instagram password.",
      icon: Shield,
    },
    {
      title: "Simple ZIP import",
      text: "Users only need to export their Instagram data, choose the correct options, and import the ZIP file.",
      icon: FileArchive,
    },
    {
      title: "Useful follower insights",
      text: "Quickly understand non-followers, mutuals, new followers, unfollowers, and changes over time.",
      icon: ChartColumn,
    },
    {
      title: "Built for clarity",
      text: "The app is designed to make follower analysis feel clean, understandable, and easy to use.",
      icon: Eye,
    },
  ];

  const whoIsThisFor: GridItem[] = [
    {
      title: "Creators",
      text: "Great for creators who want a simple way to review audience relationships and changes over time.",
      icon: Camera,
    },
    {
      title: "Privacy-focused users",
      text: "Ideal for people who do not want to connect their Instagram account or share their password with third parties.",
      icon: Lock,
    },
    {
      title: "Anyone tracking unfollowers",
      text: "Useful for users who want to see who does not follow them back or who stopped following them.",
      icon: Search,
    },
    {
      title: "Users who want history and comparison",
      text: "Helpful for people who want to compare older and newer exports to spot account changes.",
      icon: Clock3,
    },
  ];

  const steps: Step[] = [
    {
      number: 1,
      title: "Open Instagram",
      description: "Open the Instagram app and go to your profile.",
      image: "/images/guide/step-1-2.jpg",
      badge: "",
      note: "",
      group: "Part 1 — Open the export flow",
    },
    {
      number: 2,
      title: "Open Settings",
      description:
        "Tap the three lines in the top right corner and select Settings and privacy.",
      image: "/images/guide/step-1-2.jpg",
      badge: "",
      note: "",
      group: "Part 1 — Open the export flow",
    },
    {
      number: 3,
      title: "Accounts Center",
      description: "Scroll down and tap Accounts Center.",
      image: "/images/guide/step-3.jpg",
      badge: "",
      note: "",
      group: "Part 1 — Open the export flow",
    },
    {
      number: 4,
      title: "Your information",
      description: "Tap Your information and permissions.",
      image: "/images/guide/step-4.jpg",
      badge: "",
      note: "",
      group: "Part 1 — Open the export flow",
    },
    {
      number: 5,
      title: "Export your information",
      description: "Tap Export your information.",
      image: "/images/guide/step-5.jpg",
      badge: "",
      note: "",
      group: "Part 1 — Open the export flow",
    },
    {
      number: 6,
      title: "Create export",
      description: "Tap Create export to begin creating your data export.",
      image: "/images/guide/step-6.jpg",
      badge: "",
      note: "",
      group: "Part 2 — Choose the right export settings",
    },
    {
      number: 7,
      title: "Choose your Instagram account",
      description: "Choose your Instagram account and select Export to device.",
      image: "/images/guide/step-7.jpg",
      badge: "",
      note: "",
      group: "Part 2 — Choose the right export settings",
    },
    {
      number: 8,
      title: "Customize information",
      description: "Tap Customize information and then tap Clear all selections.",
      image: "/images/guide/step-8.jpg",
      badge: "",
      note: "",
      group: "Part 2 — Choose the right export settings",
    },
    {
      number: 9,
      title: "Select Followers and Following",
      description: "After clearing everything, select ONLY Followers and Following.",
      image: "/images/guide/step-9.jpg",
      badge: "Save required",
      note: "Do not forget to press Save.",
      group: "Part 2 — Choose the right export settings",
    },
    {
      number: 10,
      title: "Choose JSON format",
      description: "Choose the JSON format and set Date Range to All Time.",
      image: "/images/guide/step-10.jpg",
      badge: "Save required",
      note: "Do not forget to press Save.",
      group: "Part 2 — Choose the right export settings",
    },
    {
      number: 11,
      title: "Wait for the email",
      description:
        "After a few minutes, depending on how much information your account has, you will receive an email letting you know your report is ready.",
      image: "/images/guide/step-11.jpg",
      badge: "",
      note: "",
      group: "Part 3 — Download and import",
    },
    {
      number: 12,
      title: "Download the ZIP file",
      description:
        "Instagram will generate a ZIP file and send it to you. Import that ZIP file into FollowCheck.",
      image: "/images/guide/step-12.jpg",
      badge: "",
      note: "",
      group: "Part 3 — Download and import",
    },
  ];

  const groupedSteps = useMemo(() => {
    const groups: Record<string, Step[]> = {};
    for (const step of steps) {
      if (!groups[step.group]) groups[step.group] = [];
      groups[step.group].push(step);
    }
    return Object.entries(groups);
  }, [steps]);

  const faqSections: FaqSection[] = [
    {
      title: "Privacy Security",
      icon: Shield,
      items: [
        {
          q: "Does FollowCheck access my Instagram account?",
          a: "No. FollowCheck does not log into Instagram or connect to your account. The app only analyzes the ZIP file that you export from Instagram.",
        },
        {
          q: "Is my data uploaded to any servers?",
          a: "No. All analysis happens locally on your device. Your Instagram data never leaves your phone.",
        },
        {
          q: "How can I remove my data from the app?",
          a: "Go to Settings and use the clear options to remove analysis history and follower comparison data stored on your device.",
        },
      ],
    },
    {
      title: "Imports Data Quality",
      icon: FileCheck,
      items: [
        {
          q: "Why does the app need a ZIP file?",
          a: "Instagram provides follower and following information through its export system. FollowCheck reads the JSON files inside the ZIP to analyze your connections.",
        },
        {
          q: "Why do I need to select All Time?",
          a: "If you do not select All Time, Instagram may only export recent data. This can make your results incomplete.",
        },
        {
          q: "Why do results sometimes look incomplete?",
          a: "Incomplete exports, incorrect export ranges, or missing JSON files can reduce analysis quality. For best results, export Followers and Following in JSON format and choose All Time.",
        },
      ],
    },
  ];

  const visibleFaqSection =
    faqSections.find((section) => section.title === activeFaqCategory) ?? faqSections[0];

  const visibleFaqs = visibleFaqSection.items.map((item, index) => ({
    ...item,
    id: `${visibleFaqSection.title.toLowerCase().replace(/\s+/g, "-")}-${index}`,
    sectionTitle: visibleFaqSection.title,
    sectionIcon: visibleFaqSection.icon,
  }));

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-cyan-300/20">
              <Image
                src="/images/followcheck-logo.png"
                alt="FollowCheck logo"
                width={44}
                height={44}
                className="h-11 w-11 object-cover"
              />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight">FollowCheck</div>
              <div className="text-sm text-white/60">Private Instagram export analysis</div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#discover" className="transition hover:text-white">
              Discover
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              Guide
            </a>
            <a href="#privacy-first" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-neutral-950/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <a href="#discover" onClick={() => setMobileMenuOpen(false)}>
                Discover
              </a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                Guide
              </a>
              <a href="#privacy-first" onClick={() => setMobileMenuOpen(false)}>
                Privacy
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]">
        <motion.div
          style={{ y: glowY }}
          className="absolute left-1/2 top-12 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          style={{ y: heroY }}
          className="absolute right-10 top-28 -z-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              No login required • On-device analysis • ZIP import workflow
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Private follower insights from your Instagram export.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              FollowCheck helps users import their Instagram export ZIP, understand follower relationships, and compare changes over time without connecting their Instagram account.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#download"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg shadow-white/10 transition hover:scale-[1.02]"
              >
                Coming Soon on the App Store
              </a>
              <a
                href="#how-it-works"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
              >
                Learn how to import your ZIP
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard>
                <div className="text-sm text-white/50">Top insight</div>
                <div className="mt-2 text-3xl font-bold">Not Following Back</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Quickly see accounts you follow that do not follow you back.
                </p>
              </GlassCard>

              <GlassCard>
                <div className="text-sm text-white/50">Timeline</div>
                <div className="mt-2 text-3xl font-bold">Import History</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Compare multiple imports over time to spot changes.
                </p>
              </GlassCard>

              <GlassCard className="md:col-span-2">
                <div className="text-sm text-white/50">What users get</div>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="text-xl font-semibold">Mutuals</div>
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="text-xl font-semibold">New Followers</div>
                  </div>
                  <div className="rounded-2xl bg-black/20 p-4">
                    <div className="text-xl font-semibold">Unfollowers</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 md:grid-cols-4"
          >
            {trustBar.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="mt-1 text-sm text-white/65">{item.text}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <SectionWrapper
        id="screenshots"
        eyebrow="App Screens"
        title="See the app experience before you use it"
        subtitle="Preview the interface and understand the flow before importing your file."
        tone="default"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {screenshots.map((screen) => (
            <motion.div key={screen.title} variants={fadeUp}>
              <PhoneMockup title={screen.title} image={screen.image} text={screen.text} />
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="comparison"
        eyebrow="Why it feels easier"
        title="From raw export files to clean, understandable insights"
        subtitle="This is the difference between reading exported data manually and using FollowCheck."
        tone="muted"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]"
        >
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              Raw Instagram export
            </div>
            <h3 className="text-2xl font-bold">More effort, less clarity</h3>
            <div className="mt-6 space-y-4 text-white/65">
              <div className="flex gap-3">
                <FolderArchive className="mt-1 h-5 w-5 shrink-0 text-white/40" />
                <p>JSON files can feel technical and hard to scan manually.</p>
              </div>
              <div className="flex gap-3">
                <Search className="mt-1 h-5 w-5 shrink-0 text-white/40" />
                <p>It is harder to quickly identify non-followers, mutuals, or changes over time.</p>
              </div>
              <div className="flex gap-3">
                <Clock3 className="mt-1 h-5 w-5 shrink-0 text-white/40" />
                <p>Comparing older and newer exports takes more time and effort.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-200">
              <ArrowRight className="h-6 w-6" />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-7">
            <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
              FollowCheck
            </div>
            <h3 className="text-2xl font-bold">Cleaner, faster, more visual</h3>
            <div className="mt-6 space-y-4 text-cyan-100/85">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                <p>Organized sections make relationship insights easier to understand.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                <p>Important follower changes become much easier to spot quickly.</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-200" />
                <p>Saved imports help users compare snapshots over time.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="why-followcheck"
        eyebrow="Why FollowCheck"
        title="A more private and useful way to understand your Instagram data"
        subtitle="Built for people who want real follower insights without giving away account access."
        tone="default"
      >
        <SectionGrid items={whyFollowCheck} />
      </SectionWrapper>

      <SectionWrapper
        id="who-is-this-for"
        eyebrow="Who is this for"
        title="Built for users who want clarity, privacy, and control"
        subtitle="Designed for different kinds of Instagram users, from casual users to creators."
        tone="muted"
      >
        <SectionGrid items={whoIsThisFor} />
      </SectionWrapper>

      <SectionWrapper
        id="discover"
        eyebrow="What you can discover"
        title="Clear insights from the data you already own"
        subtitle="FollowCheck turns Instagram export files into more understandable account insights."
        tone="default"
      >
        <SectionGrid items={discoverItems} columns="md:grid-cols-2 xl:grid-cols-3" />
      </SectionWrapper>

      <SectionWrapper
        id="privacy-first"
        eyebrow="Privacy First"
        title="Built to protect user control from the start"
        subtitle="Privacy is not just a note at the bottom of the page. It is one of the main reasons FollowCheck exists."
        tone="muted"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {[
            {
              icon: Smartphone,
              title: "Local processing",
              text: "Analysis happens on the device instead of sending private export data to remote servers.",
            },
            {
              icon: KeyRound,
              title: "No password needed",
              text: "Users never have to type their Instagram password into FollowCheck.",
            },
            {
              icon: Plug,
              title: "No account connection",
              text: "The app does not directly connect to Instagram.",
            },
            {
              icon: FileCheck,
              title: "User-controlled exports",
              text: "Users decide what data to export and when to import it.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
              >
                <div className="w-fit rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="how-it-works"
        eyebrow="How It Works"
        title="Complete 12-step export guide"
        subtitle="The guide is grouped into three parts so it feels cleaner and easier to follow."
        tone="default"
      >
        <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {groupedSteps.map(([groupName, groupSteps]) => {
              const isOpen = openGuideGroup === groupName;
              return (
                <div
                  key={groupName}
                  className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenGuideGroup(isOpen ? "" : groupName)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        Guide section
                      </div>
                      <div className="mt-1 text-xl font-semibold text-white">{groupName}</div>
                      <div className="mt-1 text-sm text-white/55">
                        {groupSteps.length} step{groupSteps.length > 1 ? "s" : ""}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-white/70"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-6 border-t border-white/10 px-6 py-6">
                      {groupSteps.map((step) => (
                        <div
                          key={step.number}
                          className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/20"
                        >
                          <div className="grid md:grid-cols-[220px_1fr]">
                            <div className="border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 bg-black/20">
                              <Image
                                src={step.image}
                                alt={`Step ${step.number} - ${step.title}`}
                                width={900}
                                height={1600}
                                className="h-full w-full object-cover"
                              />
                            </div>

                            <div className="p-5">
                              <div className="flex flex-wrap items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 font-bold text-cyan-300">
                                  {step.number}
                                </div>
                                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                                {step.badge ? (
                                  <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                                    {step.badge}
                                  </span>
                                ) : null}
                              </div>

                              <p className="mt-4 leading-7 text-white/70">{step.description}</p>

                              {step.note ? (
                                <div className="mt-4 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                                  {step.note}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-5 xl:sticky xl:top-24 xl:self-start"
          >
            <GlassCard>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Quick guide summary
              </div>
              <h3 className="mt-3 text-2xl font-bold">
                The export flow in three clear parts
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
                <div className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p>Part 1: Open the export flow inside Instagram.</p>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p>Part 2: Choose the exact export settings the app needs.</p>
                </div>
                <div className="flex gap-3">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  <p>Part 3: Wait for the file, download it, and import it into FollowCheck.</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-semibold">Quick checklist</h3>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>✅ Export to device</p>
                <p>✅ Clear all selections</p>
                <p>✅ Choose Followers and Following only</p>
                <p>✅ Select JSON</p>
                <p>✅ Set Date Range to All Time</p>
                <p>✅ Press Save when needed</p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="faq"
        eyebrow="FAQ"
        title="Answers based on how the app actually works"
        subtitle="The most common questions are grouped into categories and shown in a cleaner accordion layout."
        tone="muted"
      >
        <div className="mb-8 flex flex-wrap gap-3">
          {faqSections.map((section) => {
            const Icon = section.icon;
            const active = activeFaqCategory === section.title;
            return (
              <button
                key={section.title}
                type="button"
                onClick={() => {
                  setActiveFaqCategory(section.title);
                  setOpenFaq(`${section.title.toLowerCase().replace(/\s+/g, "-")}-0`);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                <span className="inline-flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {section.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          {visibleFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            const Icon = faq.sectionIcon;
            return (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.08 }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <div>
                    <div className="mb-1 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-cyan-300">
                      <Icon className="h-4 w-4" />
                      {faq.sectionTitle}
                    </div>
                    <div className="text-lg font-semibold text-white">{faq.q}</div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-white/70"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-white/70">
                    {faq.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="contact"
        eyebrow="Contact"
        title="Need help importing your ZIP?"
        subtitle="Review the guide first, then use the support page if you still need help."
        tone="default"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
        >
          <div className="mt-2 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
            >
              Open Support Page
            </Link>
            <Link
              href="/privacy-policy"
              className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="download"
        eyebrow="Download"
        title="Coming Soon on the App Store"
        subtitle="This page already shows how the app works and what kind of insights users can expect."
        tone="premium"
      >
        <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_32%),linear-gradient(to_bottom_right,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-cyan-500/10 md:p-10">
          <div className="max-w-3xl text-base leading-8 text-white/70">
            FollowCheck is being prepared for release. Once the app is published, replace this area with the real App Store link.
          </div>
        </div>
      </SectionWrapper>

      <footer className="border-t border-white/10 bg-black/20 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold">FollowCheck</div>
            <div className="mt-2 text-sm text-white/50">
              Private Instagram export analysis with local, user-controlled processing.
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              Pages
            </div>
            <div className="mt-3 space-y-2 text-sm text-white/50">
              <p>
                <Link href="/privacy-policy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link href="/contact" className="transition hover:text-white">
                  Support / Contact
                </Link>
              </p>
              <p>
                <a href="#faq" className="transition hover:text-white">
                  FAQs
                </a>
              </p>
              <p>
                <a href="#how-it-works" className="transition hover:text-white">
                  Import Guide
                </a>
              </p>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              Support
            </div>
            <div className="mt-3 space-y-2 text-sm text-white/50">
              <p>Need help importing your ZIP?</p>
              <p>Use the guide above before contacting support.</p>
              <p>Open the support page for contact instructions.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
          © 2026 FollowCheck. FollowCheck is an independent application and is not affiliated with or endorsed by Instagram or Meta.
        </div>
      </footer>
    </div>
  );
}

function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "default",
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  tone?: "default" | "muted" | "premium";
}) {
  const toneClass =
    tone === "muted"
      ? "bg-black/20 border-y border-white/5"
      : tone === "premium"
      ? "bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]"
      : "";

  return (
    <section id={id} className={`px-6 py-16 md:py-24 ${toneClass}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-12 max-w-3xl"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] ${className}`}
    >
      {children}
    </div>
  );
}

function PhoneMockup({
  title,
  image,
  text,
}: {
  title: string;
  image: string;
  text: string;
}) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="mx-auto w-full max-w-[260px] rounded-[2.5rem] border border-white/10 bg-neutral-900 p-2 shadow-2xl shadow-black/40">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/90" />
          <Image
            src={image}
            alt={title}
            width={900}
            height={1900}
            className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        </div>
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
    </div>
  );
}

function SectionGrid({
  items,
  columns = "md:grid-cols-2 xl:grid-cols-4",
}: {
  items: GridItem[];
  columns?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`grid gap-5 ${columns}`}
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
          >
            <div className="w-fit rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}