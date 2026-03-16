"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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
  Download,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Star,
  Expand,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/followchecker/id6760327258";

const NAV_ITEMS = [
  { href: "#screenshots", label: "App Screens", id: "screenshots" },
  { href: "#how-it-works", label: "Guide", id: "how-it-works" },
  { href: "#benefits", label: "Benefits", id: "benefits" },
  { href: "#compare", label: "Compare", id: "compare" },
  { href: "#faq", label: "FAQ", id: "faq" },
  { href: "#final", label: "Download", id: "final" },
];

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
  variant?: "default" | "highlight" | "soft";
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

type LightboxImage = {
  src: string;
  title: string;
};

export default function FollowCheckerWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaqCategory, setActiveFaqCategory] = useState("Privacy Security");
  const [openFaq, setOpenFaq] = useState<string | null>("privacy-security-0");
  const [activeScreen, setActiveScreen] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);
  const [activeSection, setActiveSection] = useState("screenshots");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -180]);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
      title: "Now on the App Store",
      text: "Download FollowChecker today.",
      icon: Download,
    },
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
  ];

  const mainBenefits: GridItem[] = [
    {
      title: "See who does not follow you back",
      text: "Quickly review accounts you follow that do not follow you back.",
      icon: UserRoundX,
      variant: "highlight",
    },
    {
      title: "Find mutuals and unmatched connections",
      text: "Understand which relationships are mutual and which ones are one-sided.",
      icon: UserRoundCheck,
      variant: "default",
    },
    {
      title: "Compare account changes over time",
      text: "Use saved imports to review new followers, unfollowers, and account changes.",
      icon: History,
      variant: "soft",
    },
    {
      title: "Made for privacy-focused users",
      text: "Great for people who do not want to connect their Instagram account or share their password.",
      icon: Shield,
      variant: "default",
    },
    {
      title: "Useful for creators and regular users",
      text: "Whether you are a creator or a casual user, FollowChecker helps make exported data easier to read.",
      icon: Camera,
      variant: "soft",
    },
    {
      title: "Built for clarity",
      text: "The app turns exported files into a cleaner and more understandable experience.",
      icon: Eye,
      variant: "highlight",
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
        "Instagram will generate a ZIP file and send it to you. Import that ZIP file into FollowChecker.",
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
          q: "Does FollowChecker access my Instagram account?",
          a: "No. FollowChecker does not log into Instagram or connect to your account. The app only analyzes the ZIP file that you export from Instagram.",
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
          a: "Instagram provides follower and following information through its export system. FollowChecker reads the JSON files inside the ZIP to analyze your connections.",
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

  const nextScreen = () =>
    setActiveScreen((prev) => (prev + 1) % screenshots.length);

  const prevScreen = () =>
    setActiveScreen((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl ring-1 ring-cyan-300/20">
              <Image
                src="/images/followcheck-logo.png"
                alt="FollowChecker logo"
                width={44}
                height={44}
                className="h-11 w-11 object-cover"
              />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight">FollowChecker</div>
              <div className="text-sm text-white/60">Private Instagram export analysis</div>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-cyan-400/12 text-cyan-200 ring-1 ring-cyan-400/25"
                      : "text-white/70 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="border-t border-white/10 bg-neutral-950/95 px-5 py-4 backdrop-blur-2xl sm:px-6 md:hidden"
            >
              <div className="mx-auto max-w-7xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/25">
                  <div className="mb-4 rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10 p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-xl bg-cyan-400/15 p-2 text-cyan-200">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-cyan-100">
                          FollowChecker is live
                        </div>
                        <p className="mt-1 text-sm leading-6 text-cyan-100/75">
                          Download it now from the App Store and start using it right away.
                        </p>
                      </div>
                    </div>

                    <a
                      href={APP_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:scale-[1.01]"
                    >
                      <Download className="h-4 w-4" />
                      Download on the App Store
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="grid gap-2">
                    {NAV_ITEMS.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 text-white/45" />
                      </a>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                    <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                      Quick info
                    </div>
                    <div className="mt-3 space-y-2 text-sm text-white/65">
                      <p>• No Instagram login required</p>
                      <p>• Private on-device analysis</p>
                      <p>• JSON export workflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_25%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.12),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent)]">
        <motion.div
          style={{ y: glowY }}
          className="absolute left-1/2 top-10 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <motion.div
          style={{ y: heroY }}
          className="absolute right-10 top-28 -z-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-6 md:grid-cols-2 md:items-center md:gap-16 md:py-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Now on the App Store • No login required • On-device analysis
            </div>

            <h1 className="text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
              Understand your Instagram export in a cleaner, smarter way.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              FollowChecker helps you import your Instagram export ZIP, review non-followers, mutuals, history, and account changes without connecting your account inside the app.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                <Star className="h-4 w-4 text-cyan-300" />
                Privacy-first workflow
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                <Star className="h-4 w-4 text-cyan-300" />
                No Instagram login
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70">
                <Star className="h-4 w-4 text-cyan-300" />
                App Store live now
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black shadow-xl shadow-white/10 transition duration-300 hover:scale-[1.02]"
              >
                <Download className="h-5 w-5" />
                Download on the App Store
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-4 text-base font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-400/15"
              >
                Learn how to import your ZIP
              </a>
            </div>

            <div className="mt-6">
              <AppStoreBadge />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
            <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr]">
              <div className="order-2 space-y-5 lg:order-1">
                <GlassCard>
                  <div className="text-sm text-white/50">Top insight</div>
                  <div className="mt-2 text-2xl font-bold">Not Following Back</div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Quickly see accounts you follow that do not follow you back.
                  </p>
                </GlassCard>

                <GlassCard>
                  <div className="text-sm text-white/50">Timeline</div>
                  <div className="mt-2 text-2xl font-bold">Import History</div>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Compare saved imports and track account changes over time.
                  </p>
                </GlassCard>
              </div>

              <div className="order-1 lg:order-2">
                <button
                  type="button"
                  onClick={() =>
                    setLightboxImage({
                      src: screenshots[activeScreen].image,
                      title: screenshots[activeScreen].title,
                    })
                  }
                  className="group block w-full text-left"
                >
                  <RealPhoneMockup
                    src={screenshots[activeScreen].image}
                    alt={screenshots[activeScreen].title}
                    showExpand
                  />
                </button>

                <div className="mt-5 text-center">
                  <div className="text-lg font-semibold">{screenshots[activeScreen].title}</div>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    {screenshots[activeScreen].text}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 py-7 sm:px-6">
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
        eyebrow="App Preview"
        title="Explore the app with a more interactive preview"
        subtitle="Switch between screens and open them larger when you want a closer look."
        tone="default"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm uppercase tracking-[0.18em] text-cyan-300">
                  Interactive preview
                </div>
                <h3 className="mt-2 text-2xl font-bold">{screenshots[activeScreen].title}</h3>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prevScreen}
                  className="rounded-2xl border border-white/10 bg-black/20 p-3 transition hover:bg-white/10"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextScreen}
                  className="rounded-2xl border border-white/10 bg-black/20 p-3 transition hover:bg-white/10"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setLightboxImage({
                  src: screenshots[activeScreen].image,
                  title: screenshots[activeScreen].title,
                })
              }
              className="mt-7 block w-full"
            >
              <div className="flex justify-center">
                <RealPhoneMockup
                  src={screenshots[activeScreen].image}
                  alt={screenshots[activeScreen].title}
                  maxWidth="max-w-[340px]"
                  showExpand
                />
              </div>
            </button>

            <p className="mt-6 text-center text-sm leading-7 text-white/65">
              {screenshots[activeScreen].text}
            </p>
          </div>

          <div className="grid gap-4">
            {screenshots.map((screen, index) => (
              <button
                key={screen.title}
                type="button"
                onClick={() => setActiveScreen(index)}
                className={`rounded-[1.5rem] border p-4 text-left transition ${
                  index === activeScreen
                    ? "border-cyan-400/30 bg-cyan-400/10"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-20 shrink-0">
                    <RealPhoneMockup
                      src={screen.image}
                      alt={screen.title}
                      compact
                      maxWidth="max-w-[80px]"
                    />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-white">{screen.title}</div>
                    <p className="mt-2 text-sm leading-6 text-white/65">{screen.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper
        id="how-it-works"
        eyebrow="Guide"
        title="Export the right Instagram file step by step"
        subtitle="Use the arrows or swipe on mobile to move through the full guide from start to finish."
        tone="muted"
      >
        <div className="space-y-10">
          <HorizontalStepsSlider
            groupName="Complete Instagram export guide"
            steps={allSteps}
            onOpenImage={(src, title) => setLightboxImage({ src, title })}
          />

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 xl:grid-cols-2"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 md:p-7">
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

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-7">
              <h3 className="text-xl font-semibold">Best results checklist</h3>
              <div className="mt-5 space-y-3 text-sm text-white/70">
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
        eyebrow="Why people use FollowChecker"
        title="A simpler, clearer way to understand your Instagram export"
        subtitle="Everything important in one focused section."
        tone="default"
      >
        <SectionGrid items={mainBenefits} columns="md:grid-cols-2 xl:grid-cols-3" />
      </SectionWrapper>

      <SectionWrapper
        id="compare"
        eyebrow="Quick comparison"
        title="Why this feels easier than reading raw export files"
        subtitle="A small visual comparison that shows the difference without making the page longer than it needs to be."
        tone="muted"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-7"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Without FollowChecker
            </div>
            <h3 className="mt-3 text-2xl font-bold">More manual and harder to read</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-white/65">
              <p>• Raw export files feel more technical</p>
              <p>• Relationship insights are harder to see quickly</p>
              <p>• Comparing imports takes more effort</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-7"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
              With FollowChecker
            </div>
            <h3 className="mt-3 text-2xl font-bold">Cleaner, faster, and more visual</h3>
            <div className="mt-5 space-y-3 text-sm leading-7 text-cyan-100/85">
              <p>• Non-followers and mutuals are easier to review</p>
              <p>• Import history makes changes easier to compare</p>
              <p>• The workflow stays private and simple</p>
            </div>
          </motion.div>
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
        id="final"
        eyebrow="Download"
        title="Download FollowChecker now"
        subtitle="The app is live on the App Store and ready to use."
        tone="premium"
      >
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_32%),linear-gradient(to_bottom_right,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-2xl shadow-cyan-500/10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Official App Store Release
            </div>

            <h3 className="mt-4 text-3xl font-bold">Ready to download?</h3>
            <p className="mt-4 text-base leading-8 text-white/75">
              Get FollowChecker on the App Store and start reviewing your Instagram export with a cleaner, private, on-device workflow.
            </p>

            <div className="mt-6">
              <AppStoreBadge />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-black shadow-xl shadow-white/10 transition duration-300 hover:scale-[1.02]"
              >
                <Download className="h-5 w-5" />
                Download on the App Store
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 transition duration-300 hover:bg-white/10"
              >
                Review the import guide
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-100">
              No Instagram login inside the app. Import your ZIP and review insights directly on your device.
            </div>
          </div>

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

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/65">
              Quick start: export your Instagram data in JSON format, choose Followers and Following only, set the date range to All Time, and import the ZIP into FollowChecker.
            </div>
          </div>
        </div>
      </SectionWrapper>

      <footer className="border-t border-white/10 bg-black/20 px-5 py-10 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold">FollowChecker</div>
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
                <a href="#compare" className="transition hover:text-white">
                  Compare
                </a>
              </p>
              <p>
                <a href="#faq" className="transition hover:text-white">
                  FAQ
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
              <p>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  App Store Page
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
          <p>© 2026 FollowChecker. Created by Juan Bedoya · Built by Bdox Tech.</p>
          <p className="mt-2">
            FollowChecker is an independent application and is not affiliated with or endorsed by Instagram or Meta.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {lightboxImage ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="absolute right-0 top-[-3rem] rounded-full border border-white/10 bg-white/10 p-2 text-white transition hover:bg-white/20"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="rounded-[2rem] border border-white/10 bg-neutral-900 p-3 shadow-2xl shadow-black/60">
                <div className="mb-4 px-2 pt-1 text-center">
                  <div className="text-lg font-semibold">{lightboxImage.title}</div>
                </div>
                <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden rounded-[1.5rem] bg-black">
                  <Image
                    src={lightboxImage.src}
                    alt={lightboxImage.title}
                    width={1200}
                    height={2400}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-black px-4 py-3 transition hover:scale-[1.01] hover:bg-neutral-900"
    >
      <div className="rounded-xl bg-white/10 p-2 text-white">
        <Download className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className="text-[11px] uppercase tracking-[0.18em] text-white/55">
          Download on the
        </div>
        <div className="text-lg font-semibold text-white">App Store</div>
      </div>
    </a>
  );
}

function RealPhoneMockup({
  src,
  alt,
  maxWidth = "max-w-[300px]",
  compact = false,
  showExpand = false,
}: {
  src: string;
  alt: string;
  maxWidth?: string;
  compact?: boolean;
  showExpand?: boolean;
}) {
  return (
    <div className={`mx-auto w-full ${maxWidth}`}>
      <div className="relative rounded-[3rem] border border-white/10 bg-neutral-900 p-[7px] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
        <div className="absolute inset-y-20 left-[-2px] w-[3px] rounded-full bg-white/10" />
        <div className="absolute inset-y-24 right-[-2px] w-[3px] rounded-full bg-white/10" />
        <div className="relative overflow-hidden rounded-[2.45rem] border border-white/10 bg-black">
          <div className="absolute left-1/2 top-2 z-10 h-6 w-32 -translate-x-1/2 rounded-full bg-black/95 shadow-inner" />
          {showExpand ? (
            <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-white/80 opacity-0 transition group-hover:opacity-100">
              <Expand className="h-4 w-4" />
            </div>
          ) : null}
          <Image
            src={src}
            alt={alt}
            width={900}
            height={1900}
            className={`h-auto w-full object-cover ${compact ? "" : ""}`}
          />
        </div>
      </div>
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
    <section id={id} className={`px-5 py-16 sm:px-6 md:py-28 ${toneClass}`}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-14 max-w-3xl"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
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

        const variantClass =
          item.variant === "highlight"
            ? "border-cyan-400/20 bg-cyan-400/10"
            : item.variant === "soft"
            ? "border-white/10 bg-black/20"
            : "border-white/10 bg-white/5";

        return (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className={`rounded-[1.6rem] ${variantClass} p-5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 sm:p-6`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-fit rounded-xl bg-black/20 p-2 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              {item.variant === "highlight" ? (
                <BadgeCheck className="h-5 w-5 text-cyan-200/80" />
              ) : item.variant === "soft" ? (
                <CheckCircle2 className="h-5 w-5 text-white/35" />
              ) : null}
            </div>

            <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
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
  onOpenImage,
}: {
  groupName: string;
  steps: Step[];
  onOpenImage: (src: string, title: string) => void;
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
          <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
            {groupName}
          </h3>
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
          <div className="border-b border-white/10 bg-black md:border-b-0 md:border-r md:border-white/10">
            <button
              type="button"
              onClick={() =>
                onOpenImage(
                  currentStep.image,
                  `Step ${currentStep.number} - ${currentStep.title}`
                )
              }
              className="group relative block w-full"
            >
              <div className="relative flex h-[260px] w-full items-center justify-center bg-black sm:h-[320px] md:h-full md:min-h-[420px]">
                <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-white/80 opacity-0 transition group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </div>
                <Image
                  src={currentStep.image}
                  alt={`Step ${currentStep.number} - ${currentStep.title}`}
                  fill
                  className="object-contain p-2 sm:p-3"
                />
              </div>
            </button>
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
              Swipe on mobile, use arrows, or tap image to enlarge
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