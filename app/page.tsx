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
  UserRoundCheck,
  UserRoundX,
  Camera,
  Eye,
  History,
  Smartphone,
  Plug,
  KeyRound,
  FileCheck,
  ChevronDown,
  Menu,
  X,
  Building2,
  User,
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
};

type FaqSection = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: { q: string; a: string }[];
};

export default function FollowCheckWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      title: "Clear insights",
      text: "Understand follower relationships faster.",
      icon: ChartColumn,
    },
  ];

  const mainBenefits: GridItem[] = [
    {
      title: "See who does not follow you back",
      text: "Quickly review accounts you follow that do not follow you back.",
      icon: UserRoundX,
    },
    {
      title: "Find mutuals and unmatched connections",
      text: "Understand which relationships are mutual and which ones are one-sided.",
      icon: UserRoundCheck,
    },
    {
      title: "Compare account changes over time",
      text: "Use saved imports to review new followers, unfollowers, and account changes.",
      icon: History,
    },
    {
      title: "Made for privacy-focused users",
      text: "Great for people who do not want to connect their Instagram account or share their password.",
      icon: Shield,
    },
    {
      title: "Useful for creators and regular users",
      text: "Whether you are a creator or a casual user, FollowCheck helps make exported data easier to read.",
      icon: Camera,
    },
    {
      title: "Built for clarity",
      text: "The app turns exported files into a cleaner and more understandable experience.",
      icon: Eye,
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
    },
    {
      number: 2,
      title: "Open Settings",
      description:
        "Tap the three lines in the top right corner and select Settings and privacy.",
      image: "/images/guide/step-1-2.jpg",
      badge: "",
      note: "",
    },
    {
      number: 3,
      title: "Accounts Center",
      description: "Scroll down and tap Accounts Center.",
      image: "/images/guide/step-3.jpg",
      badge: "",
      note: "",
    },
    {
      number: 4,
      title: "Your information",
      description: "Tap Your information and permissions.",
      image: "/images/guide/step-4.jpg",
      badge: "",
      note: "",
    },
    {
      number: 5,
      title: "Export your information",
      description: "Tap Export your information.",
      image: "/images/guide/step-5.jpg",
      badge: "",
      note: "",
    },
    {
      number: 6,
      title: "Create export",
      description: "Tap Create export to begin creating your data export.",
      image: "/images/guide/step-6.jpg",
      badge: "",
      note: "",
    },
    {
      number: 7,
      title: "Choose your Instagram account",
      description: "Choose your Instagram account and select Export to device.",
      image: "/images/guide/step-7.jpg",
      badge: "",
      note: "",
    },
    {
      number: 8,
      title: "Customize information",
      description: "Tap Customize information and then tap Clear all selections.",
      image: "/images/guide/step-8.jpg",
      badge: "",
      note: "",
    },
    {
      number: 9,
      title: "Select Followers and Following",
      description: "After clearing everything, select ONLY Followers and Following.",
      image: "/images/guide/step-9.jpg",
      badge: "Save required",
      note: "Do not forget to press Save.",
    },
    {
      number: 10,
      title: "Choose JSON format",
      description: "Choose the JSON format and set Date Range to All Time.",
      image: "/images/guide/step-10.jpg",
      badge: "Save required",
      note: "Do not forget to press Save.",
    },
    {
      number: 11,
      title: "Wait for the email",
      description:
        "After a few minutes, depending on how much information your account has, you will receive an email letting you know your report is ready.",
      image: "/images/guide/step-11.jpg",
      badge: "",
      note: "",
    },
    {
      number: 12,
      title: "Download the ZIP file",
      description:
        "Instagram will generate a ZIP file and send it to you. Import that ZIP file into FollowCheck.",
      image: "/images/guide/step-12.jpg",
      badge: "",
      note: "",
    },
  ];

  const allSteps = useMemo(() => steps, [steps]);

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
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
            <a href="#screenshots" className="transition hover:text-white">
              App Screens
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              Guide
            </a>
            <a href="#benefits" className="transition hover:text-white">
              Benefits
            </a>
            <a href="#privacy-first" className="transition hover:text-white">
              Privacy
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#credits" className="transition hover:text-white">
              Credits
            </a>
            <a href="#final" className="transition hover:text-white">
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
          <div className="border-t border-white/10 bg-neutral-950/95 px-5 py-4 sm:px-6 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-white/80">
              <a href="#screenshots" onClick={() => setMobileMenuOpen(false)}>
                App Screens
              </a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                Guide
              </a>
              <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>
                Benefits
              </a>
              <a href="#privacy-first" onClick={() => setMobileMenuOpen(false)}>
                Privacy
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="#credits" onClick={() => setMobileMenuOpen(false)}>
                Credits
              </a>
              <a href="#final" onClick={() => setMobileMenuOpen(false)}>
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

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:grid-cols-2 md:gap-12 md:py-28">
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

            <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Private follower insights from your Instagram export.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              FollowCheck helps users import their Instagram export ZIP, understand follower relationships, and compare changes over time without connecting their Instagram account.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#how-it-works"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/15 px-6 py-4 text-base font-semibold text-cyan-100 shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-[1.02] hover:bg-cyan-400/20"
              >
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                Learn how to import your ZIP
              </a>

              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition duration-300 hover:bg-white/10"
              >
                Coming Soon on the App Store
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
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6">
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
        id="how-it-works"
        eyebrow="Guide"
        title="Export the right Instagram file step by step"
        subtitle="Use the arrows or swipe on mobile to move through the full guide from start to finish."
        tone="muted"
      >
        <div className="space-y-8">
          <HorizontalStepsSlider
            groupName="Complete Instagram export guide"
            steps={allSteps}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 xl:grid-cols-2"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Quick summary
              </div>
              <h3 className="mt-3 text-2xl font-bold">
                What matters most in the export
              </h3>

              <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  Select <span className="font-semibold text-white">Export to device</span>.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  Tap <span className="font-semibold text-white">Customize information</span> and clear all selections.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  Choose only <span className="font-semibold text-white">Followers and Following</span>.
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  Use <span className="font-semibold text-white">JSON</span> and set the date range to <span className="font-semibold text-white">All Time</span>.
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Best results checklist</h3>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>✅ Export to device</p>
                <p>✅ Clear all selections</p>
                <p>✅ Choose Followers and Following only</p>
                <p>✅ Select JSON</p>
                <p>✅ Set Date Range to All Time</p>
                <p>✅ Press Save when needed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="benefits"
        eyebrow="Why people use FollowCheck"
        title="A simpler, clearer way to understand your Instagram export"
        subtitle="Everything important in one focused section."
        tone="default"
      >
        <SectionGrid items={mainBenefits} columns="md:grid-cols-2 xl:grid-cols-3" />
      </SectionWrapper>

      <SectionWrapper
        id="privacy-first"
        eyebrow="Privacy First"
        title="Built to protect user control from the start"
        subtitle="Privacy is one of the main reasons FollowCheck exists."
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
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6"
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
        id="faq"
        eyebrow="FAQ"
        title="Answers based on how the app actually works"
        subtitle="The most common questions, without making the page feel too heavy."
        tone="default"
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
        id="credits"
        eyebrow="Credits"
        title="Created independently and built with care"
        subtitle="The product creator and the brand behind the official website."
        tone="muted"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-3xl text-base leading-8 text-white/70"
          >
            FollowCheck was created by Juan Bedoya and presented by Bdox Tech. This website was designed to explain the app clearly, highlight its privacy-first approach, and help users understand how to export and import the correct Instagram file.
          </motion.p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                  <User className="h-5 w-5" />
                </div>
                <div className="text-sm text-white/50">Creator</div>
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">Juan Bedoya</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-400/10 p-2 text-cyan-300">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="text-sm text-white/50">Company</div>
              </div>
              <div className="mt-3 text-2xl font-semibold text-white">Bdox Tech</div>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="final"
        eyebrow="Support & Download"
        title="Need help or waiting for launch?"
        subtitle="A simpler closing section instead of multiple separate blocks."
        tone="premium"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Support
            </div>
            <h3 className="mt-3 text-2xl font-bold">Need help importing your ZIP?</h3>
            <p className="mt-4 text-base leading-8 text-white/70">
              Review the guide first. If you still need help, open the support page or review the privacy policy.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
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
          </div>

          <div
            id="download"
            className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_32%),linear-gradient(to_bottom_right,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-cyan-500/10"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Download
            </div>
            <h3 className="mt-3 text-2xl font-bold">Coming Soon on the App Store</h3>
            <p className="mt-4 text-base leading-8 text-white/70">
              FollowCheck is being prepared for release. Once the app is published, replace this area with the real App Store link.
            </p>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-100">
              Launch note: the release page is not live yet.
            </div>
          </div>
        </div>
      </SectionWrapper>

      <footer className="border-t border-white/10 bg-black/20 px-5 py-10 sm:px-6">
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
                <a href="#screenshots" className="transition hover:text-white">
                  App Screens
                </a>
              </p>
              <p>
                <a href="#how-it-works" className="transition hover:text-white">
                  Guide
                </a>
              </p>
              <p>
                <a href="#benefits" className="transition hover:text-white">
                  Benefits
                </a>
              </p>
              <p>
                <a href="#faq" className="transition hover:text-white">
                  FAQ
                </a>
              </p>
              <p>
                <a href="#credits" className="transition hover:text-white">
                  Credits
                </a>
              </p>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
              Legal & Support
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
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
          <p>© 2026 FollowCheck. Created by Juan Bedoya · Built by Bdox Tech.</p>
          <p className="mt-2">
            FollowCheck is an independent application and is not affiliated with or endorsed by Instagram or Meta.
          </p>
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
    <section id={id} className={`px-5 py-14 sm:px-6 md:py-24 ${toneClass}`}>
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
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
            {subtitle}
          </p>
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
    <div className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 sm:rounded-[2rem] sm:p-5">
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
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6"
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

function HorizontalStepsSlider({
  groupName,
  steps,
}: {
  groupName: string;
  steps: Step[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevStep = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextStep = () => {
    setCurrentIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const currentStep = steps[currentIndex];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="rounded-[1.25rem] border border-white/10 bg-white/5 p-3 sm:p-6 md:rounded-[2rem] md:p-8"
    >
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Guide section
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{groupName}</h3>
          <p className="mt-2 text-sm text-white/55">
            Step {currentIndex + 1} of {steps.length}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentIndex === 0}
            className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={nextStep}
            disabled={currentIndex === steps.length - 1}
            className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20 sm:rounded-[1.75rem]">
        <motion.div
          key={currentStep.number}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            const threshold = 60;
            if (info.offset.x < -threshold && currentIndex < steps.length - 1) {
              setCurrentIndex((prev) => prev + 1);
            } else if (info.offset.x > threshold && currentIndex > 0) {
              setCurrentIndex((prev) => prev - 1);
            }
          }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="grid cursor-grab active:cursor-grabbing md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]"
        >
          <div className="border-b border-white/10 bg-black/20 md:border-b-0 md:border-r md:border-white/10">
            <div className="relative h-[220px] w-full sm:h-[280px] md:h-full">
              <Image
                src={currentStep.image}
                alt={`Step ${currentStep.number} - ${currentStep.title}`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="p-3 sm:p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300 ring-1 ring-cyan-400/20 sm:h-10 sm:w-10 sm:text-base">
                {currentStep.number}
              </div>

              <h4 className="text-base font-semibold text-white sm:text-xl">
                {currentStep.title}
              </h4>

              {currentStep.badge ? (
                <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-200 sm:px-3 sm:text-xs">
                  {currentStep.badge}
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-sm leading-6 text-white/70 sm:mt-4 sm:text-base sm:leading-7">
              {currentStep.description}
            </p>

            {currentStep.note ? (
              <div className="mt-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                {currentStep.note}
              </div>
            ) : null}

            {(currentStep.number === 1 || currentStep.number === 2) && (
              <p className="mt-3 text-xs text-cyan-200/75 sm:text-sm">
                Note: Steps 1 and 2 use the same screenshot because they happen on the same screen.
              </p>
            )}

            <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/35 sm:mt-5 sm:text-xs">
              Swipe on mobile or use arrows
            </p>

            <div className="mt-3 flex gap-2 sm:mt-4">
              {steps.map((step, index) => (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition sm:h-2.5 ${
                    index === currentIndex
                      ? "w-7 bg-cyan-300 sm:w-8"
                      : "w-2 bg-white/20 hover:bg-white/40 sm:w-2.5"
                  }`}
                  aria-label={`Go to step ${step.number}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}