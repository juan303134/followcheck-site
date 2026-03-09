"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

export default function FollowCheckWebsite() {
  const screenshots = [
    {
      title: "Import your Instagram ZIP",
      text: "Users can upload their export file in a simple and guided flow.",
      image: "/images/screen-import.jpg",
    },
    {
      title: "See non-followers and mutuals",
      text: "Clean sections make it easy to understand your account relationships.",
      image: "/images/screen-results.jpg",
    },
    {
      title: "Track changes over time",
      text: "History tools help users compare imports and review follower changes.",
      image: "/images/screen-history.jpg",
    },
  ];

  const discoverItems = [
    {
      title: "Not Following You Back",
      text: "See which accounts you follow that do not follow you back.",
      icon: "↩️",
    },
    {
      title: "You Don't Follow Back",
      text: "Quickly find people who follow you but you are not following.",
      icon: "👥",
    },
    {
      title: "Mutuals",
      text: "View accounts where the follow relationship goes both ways.",
      icon: "🤝",
    },
    {
      title: "New Followers",
      text: "Compare imports to spot who recently appeared in your follower list.",
      icon: "🆕",
    },
    {
      title: "Unfollowers",
      text: "Review which accounts disappeared compared with a previous import.",
      icon: "📉",
    },
    {
      title: "Compare Imports",
      text: "Use saved analysis history to compare older and newer snapshots.",
      icon: "🗂️",
    },
  ];

  const whyFollowCheck = [
    {
      title: "Private by design",
      text: "FollowCheck analyzes your Instagram export on your device without asking for your Instagram password.",
      icon: "🔒",
    },
    {
      title: "Simple ZIP import",
      text: "Users only need to export their Instagram data, choose the correct options, and import the ZIP file.",
      icon: "📁",
    },
    {
      title: "Useful follower insights",
      text: "Quickly understand non-followers, mutuals, new followers, unfollowers, and changes over time.",
      icon: "📈",
    },
    {
      title: "Built for clarity",
      text: "The app is designed to make follower analysis feel clean, understandable, and easy to use.",
      icon: "✨",
    },
  ];

  const whoIsThisFor = [
    {
      title: "Creators",
      text: "Great for creators who want a simple way to review audience relationships and changes over time.",
      icon: "🎥",
    },
    {
      title: "Privacy-focused users",
      text: "Ideal for people who do not want to connect their Instagram account or share their password with third parties.",
      icon: "🛡️",
    },
    {
      title: "Anyone tracking unfollowers",
      text: "Useful for users who want to see who does not follow them back or who stopped following them.",
      icon: "👀",
    },
    {
      title: "Users who want history and comparison",
      text: "Helpful for people who want to compare older and newer exports to spot account changes.",
      icon: "📊",
    },
  ];

  const trustItems = [
    {
      title: "No Instagram password required",
      text: "The app does not ask users to log into Instagram.",
    },
    {
      title: "No direct account connection",
      text: "FollowCheck works from exported files that users request themselves.",
    },
    {
      title: "On-device analysis",
      text: "Analysis stays on the device instead of being sent to remote servers.",
    },
    {
      title: "User-controlled exports",
      text: "Users choose what to export, when to export it, and when to import it.",
    },
  ];

  const steps = [
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

  const faqSections = [
    {
      title: "Privacy & Security",
      icon: "🔐",
      items: [
        {
          q: "Does FollowCheck access my Instagram account?",
          a: "No. FollowCheck does not log into Instagram or connect to your account. The app only analyzes the ZIP file that you export from Instagram.",
        },
        {
          q: "Is my data uploaded to any servers?",
          a: "No. All analysis happens locally on your device. Your Instagram data never leaves your phone.",
        },
      ],
    },
    {
      title: "Imports & Data Quality",
      icon: "📦",
      items: [
        {
          q: "Why does the app need a ZIP file?",
          a: "Instagram provides follower and following information through its export system. FollowCheck reads the JSON files inside the ZIP to analyze your connections.",
        },
        {
          q: "Why do I need to select 'All Time'?",
          a: "If you do not select the 'All Time' date range, Instagram may only export recent data. This can make your results incomplete.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/75 backdrop-blur-xl">
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
            <a href="#discover" className="transition hover:text-white">Discover</a>
            <a href="#how-it-works" className="transition hover:text-white">Guide</a>
            <a href="#privacy-first" className="transition hover:text-white">Privacy</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-neutral-950" />
        <motion.div
          className="absolute left-1/2 top-16 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
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

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              FollowCheck helps users import their Instagram export ZIP, understand follower relationships, and compare changes over time without connecting their Instagram account.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm text-white/50">Top insight</div>
                <div className="mt-2 text-3xl font-bold">Not Following Back</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Quickly see accounts you follow that do not follow you back.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm text-white/50">Timeline</div>
                <div className="mt-2 text-3xl font-bold">Import History</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Compare multiple imports over time to spot changes in your account relationships.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:col-span-2 backdrop-blur">
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-4"
        >
          {trustItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 transition hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold text-cyan-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-100/75">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="screenshots" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              App Screens
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              See the app experience before you use it
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {screenshots.map((screen) => (
              <motion.div
                key={screen.title}
                variants={fadeUp}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30">
                  <Image
                    src={screen.image}
                    alt={screen.title}
                    width={900}
                    height={1900}
                    className="h-auto w-full object-cover transition duration-300 hover:scale-[1.01]"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{screen.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{screen.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="why-followcheck" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <SectionGrid
          title="Why FollowCheck"
          subtitle="A more private and useful way to understand your Instagram data"
          items={whyFollowCheck}
        />
      </section>

      <section id="who-is-this-for" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <SectionGrid
          title="Who is this for"
          subtitle="Built for users who want clarity, privacy, and control"
          items={whoIsThisFor}
        />
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <SectionGrid
          title="What you can discover"
          subtitle="Clear insights from the data you already own"
          items={discoverItems}
          columns="md:grid-cols-2 xl:grid-cols-3"
        />
      </section>

      <section id="privacy-first" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Privacy first
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built to protect user control from the start
            </h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["📱", "Local processing", "Analysis happens on the device instead of sending private export data to remote servers."],
              ["🔑", "No password needed", "Users never have to type their Instagram password into FollowCheck."],
              ["🔌", "No account connection", "The app does not directly connect to Instagram."],
              ["🧾", "User-controlled exports", "Users decide what data to export and when to import it."],
            ].map(([icon, title, text]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-10 max-w-3xl"
        >
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How it works
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Complete 12-step export guide
          </h2>
        </motion.div>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className="space-y-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1"
              >
                <div className="grid md:grid-cols-[280px_1fr]">
                  <div className="border-b border-white/10 md:border-b-0 md:border-r md:border-white/10 bg-black/20">
                    <Image
                      src={step.image}
                      alt={`Step ${step.number} - ${step.title}`}
                      width={900}
                      height={1600}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-5 md:p-6">
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
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-5 xl:sticky xl:top-24 xl:self-start"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Important setup
              </div>
              <h3 className="mt-3 text-2xl font-bold">
                No passwords. No scraping. No guessing.
              </h3>
              <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5 text-sm leading-7 text-cyan-100">
                Important: choose Export to device, tap Customize information, clear all selections, then select ONLY Followers and Following. Make sure the format is JSON, set the Date Range to All Time, and do not forget to press Save.
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Quick checklist</h3>
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
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8"
        >
          <motion.div variants={fadeUp} className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              FAQ
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Answers based on how the app actually works
            </h2>
          </motion.div>

          {faqSections.map((section) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="text-2xl">{section.icon}</div>
                <h3 className="text-2xl font-semibold">{section.title}</h3>
              </div>

              <div className="grid gap-4">
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:bg-black/30"
                  >
                    <h4 className="text-base font-semibold text-white">{item.q}</h4>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
        >
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Need help importing your ZIP?
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
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
        </motion.div>
      </section>

      <section id="download" className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-transparent p-8 md:p-10 shadow-2xl shadow-cyan-500/10"
        >
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Download
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Coming Soon on the App Store
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              FollowCheck is being prepared for release. This website already shows how the app works and what kind of insights users can expect.
            </p>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
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
              <p><Link href="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link></p>
              <p><Link href="/contact" className="transition hover:text-white">Support / Contact</Link></p>
              <p><a href="#faq" className="transition hover:text-white">FAQs</a></p>
              <p><a href="#how-it-works" className="transition hover:text-white">Import Guide</a></p>
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

function SectionGrid({
  title,
  subtitle,
  items,
  columns = "md:grid-cols-2 xl:grid-cols-4",
}: {
  title: string;
  subtitle: string;
  items: { title: string; text: string; icon: string }[];
  columns?: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div variants={fadeUp} className="mb-10 max-w-2xl">
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {title}
        </div>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">{subtitle}</h2>
      </motion.div>

      <div className={`grid gap-5 ${columns}`}>
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
          >
            <div className="text-3xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}