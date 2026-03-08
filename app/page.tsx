import Image from "next/image";
import Link from "next/link";

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

  const features = [
    {
      title: "100% on-device analysis",
      text: "FollowCheck reads your Instagram export ZIP locally on your device. No Instagram login, no account scraping, and no server upload.",
      icon: "🛡️",
    },
    {
      title: "Simple ZIP import",
      text: "Export Followers and Following data from Instagram in JSON format, then import the ZIP into the app.",
      icon: "📦",
    },
    {
      title: "Instant relationship insights",
      text: "Review non-followers, accounts you do not follow back, mutuals, new followers, and unfollowers.",
      icon: "📊",
    },
    {
      title: "History and comparison tools",
      text: "Compare saved imports over time and understand how your account relationships change.",
      icon: "📈",
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

  const whyPeopleUseIt = [
    {
      title: "To check account relationships",
      text: "Users want a cleaner way to understand who follows them, who they follow, and where those lists do not match.",
      icon: "🔍",
    },
    {
      title: "To compare change over time",
      text: "Saved imports make it easier to understand how follower data changes between exports.",
      icon: "⏱️",
    },
    {
      title: "To avoid giving account access",
      text: "Many users prefer a method that does not require logging into Instagram inside a third-party tool.",
      icon: "🚫",
    },
    {
      title: "To keep analysis simple",
      text: "Instead of reading raw exported files, users get a clearer and more understandable view of their data.",
      icon: "🧠",
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
      description:
        "After clearing everything, select ONLY Followers and Following.",
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
        {
          q: "How can I remove my data from the app?",
          a: "Go to Settings and use the clear options to remove analysis history and follower comparison data stored on your device.",
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
        {
          q: "Why do results sometimes look incomplete?",
          a: "Incomplete exports, incorrect export ranges, or missing JSON files can reduce analysis quality. For best results, export Followers and Following in JSON format and choose All Time.",
        },
        {
          q: "Why do some usernames show 'Follow date unavailable'?",
          a: "Instagram exports do not always include follow timestamps for every account. When a timestamp is missing, FollowCheck cannot infer that date.",
        },
      ],
    },
    {
      title: "Metrics & Insights",
      icon: "📊",
      items: [
        {
          q: "What does 'Not Following You Back' mean?",
          a: "These are accounts that you follow but that do not follow you back.",
        },
        {
          q: "What does 'You Don't Follow Back' mean?",
          a: "These are accounts that follow you but that you are not following.",
        },
        {
          q: "What is the difference between New Followers and Unfollowers?",
          a: "These values are calculated by comparing your latest import against your previous saved follower snapshot. They are comparison-based metrics, not live Instagram events.",
        },
        {
          q: "Can I compare older periods, not just the latest import?",
          a: "Yes. Use the Compare Imports feature in Analytics to select any two saved imports and view side-by-side differences.",
        },
      ],
    },
    {
      title: "General",
      icon: "ℹ️",
      items: [
        {
          q: "Is FollowCheck affiliated with Instagram?",
          a: "No. FollowCheck is an independent application and is not affiliated with or endorsed by Instagram or Meta.",
        },
        {
          q: "Does FollowCheck guarantee perfect accuracy?",
          a: "No app can guarantee perfect accuracy from exported data alone. FollowCheck provides best-effort analysis based on the files you import.",
        },
        {
          q: "Where can I request support?",
          a: "Support can be requested through the contact channel listed on the app's distribution page.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 transition duration-300 hover:opacity-90">
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
            <a href="#why-followcheck" className="transition hover:text-white">
              Why FollowCheck
            </a>
            <a href="#who-is-this-for" className="transition hover:text-white">
              Who it's for
            </a>
            <a href="#discover" className="transition hover:text-white">
              Discover
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              Guide
            </a>
            <a href="#privacy-first" className="transition hover:text-white">
              Privacy First
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center">
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
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-black shadow-lg shadow-white/10 transition duration-300 hover:scale-[1.02]"
            >
              Coming Soon on the App Store
            </a>
            <a
              href="#how-it-works"
              className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition duration-300 hover:bg-white/5"
            >
              Learn how to import your ZIP
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/60">
            <span>✅ No Instagram password</span>
            <span>✅ No direct account connection</span>
            <span>✅ Your export stays under your control</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-500/20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur transition duration-300 hover:-translate-y-1">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5 transition duration-300 hover:bg-neutral-800">
                <div className="text-sm text-white/50">Top insight</div>
                <div className="mt-2 text-3xl font-bold">Not Following Back</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Quickly see accounts you follow that do not follow you back.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5 transition duration-300 hover:bg-neutral-800">
                <div className="text-sm text-white/50">Timeline</div>
                <div className="mt-2 text-3xl font-bold">Import History</div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Compare multiple imports over time to spot changes in your account relationships.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5 md:col-span-2 transition duration-300 hover:bg-neutral-800">
                <div className="text-sm text-white/50">What users get</div>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xl font-semibold">Mutuals</div>
                    <p className="mt-2 text-sm text-white/65">
                      Find accounts that follow you and that you follow back.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xl font-semibold">New followers</div>
                    <p className="mt-2 text-sm text-white/65">
                      Review who appeared since the previous import.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="text-xl font-semibold">Unfollowers</div>
                    <p className="mt-2 text-sm text-white/65">
                      Identify which accounts disappeared compared with your last saved analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid gap-4 md:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5 transition duration-300 hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold text-cyan-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-cyan-100/75">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            App Screens
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            See the app experience before you use it
          </h2>
          <p className="mt-4 text-white/65">
            These are real app screens so visitors can quickly understand the experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {screenshots.map((screen) => (
            <div
              key={screen.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 shadow-xl shadow-black/30">
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
            </div>
          ))}
        </div>
      </section>

      <section id="why-followcheck" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Why FollowCheck
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            A more private and useful way to understand your Instagram data
          </h2>
          <p className="mt-4 text-white/65">
            FollowCheck is built for people who want real follower insights without giving away account access.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyFollowCheck.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who-is-this-for" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Who is this for
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built for users who want clarity, privacy, and control
          </h2>
          <p className="mt-4 text-white/65">
            FollowCheck is designed for different kinds of Instagram users, from casual users to creators who want a better way to understand account changes.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whoIsThisFor.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            What you can discover
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Clear insights from the data you already own
          </h2>
          <p className="mt-4 text-white/65">
            FollowCheck turns Instagram export files into more understandable account insights.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {discoverItems.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Features
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built around clarity, privacy, and useful follower insights
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why-people-use-it" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Why people use it
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built around real user needs
          </h2>
          <p className="mt-4 text-white/65">
            People use FollowCheck because exported Instagram data is useful, but hard to read on its own.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyPeopleUseIt.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How it works
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Complete 12-step export guide
          </h2>
          <p className="mt-4 text-white/65">
            Follow these steps to export the correct Instagram data and get the best results inside FollowCheck.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-0 before:w-px before:bg-white/10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
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

                    {(step.number === 1 || step.number === 2) && (
                      <p className="mt-3 text-sm text-cyan-200/80">
                        Note: Steps 1 and 2 use the same screenshot because they happen on the same screen.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Important setup
              </div>
              <h3 className="mt-3 text-2xl font-bold">
                No passwords. No scraping. No guessing.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/70">
                FollowCheck is built to analyze exported account data that users control. That means a cleaner experience and a much stronger privacy story for your official website.
              </p>
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
          </div>
        </div>
      </section>

      <section id="privacy-first" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Privacy first
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built to protect user control from the start
          </h2>
          <p className="mt-4 text-white/65">
            Privacy is not just a note at the bottom of the page. It is one of the main reasons FollowCheck exists.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1">
            <div className="text-3xl">📱</div>
            <h3 className="mt-4 text-xl font-semibold">Local processing</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Analysis happens on the device instead of sending private Instagram export data to remote servers.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1">
            <div className="text-3xl">🔑</div>
            <h3 className="mt-4 text-xl font-semibold">No password needed</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Users never have to type their Instagram password into FollowCheck.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1">
            <div className="text-3xl">🔌</div>
            <h3 className="mt-4 text-xl font-semibold">No account connection</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              The app does not directly connect to Instagram. It works from exported files the user requested themselves.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1">
            <div className="text-3xl">🧾</div>
            <h3 className="mt-4 text-xl font-semibold">User-controlled exports</h3>
            <p className="mt-3 text-sm leading-7 text-white/65">
              Users decide what data to export, when to generate it, and when to import it into the app.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Answers based on how the app actually works
          </h2>
          <p className="mt-4 text-white/65">
            These questions match the information and behavior inside the app.
          </p>
        </div>

        <div className="space-y-8">
          {faqSections.map((section) => (
            <div
              key={section.title}
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
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:bg-black/30"
                  >
                    <h4 className="text-base font-semibold text-white">{item.q}</h4>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Need help importing your ZIP?
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              Review the guide first. If you still need help, use the support page to contact the app team and describe your issue clearly.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                Open Support Page
              </Link>
              <Link
                href="/privacy-policy"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition duration-300 hover:bg-white/5"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/5 to-transparent p-8 md:p-10 shadow-2xl shadow-cyan-500/10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Download
            </div>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Coming Soon on the App Store
            </h2>
            <p className="mt-4 text-base leading-8 text-white/70">
              FollowCheck is being prepared for release. This website already shows how the app works, how to export the correct Instagram file, and what kind of insights users can expect when the app becomes available.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.02]"
              >
                App Store Release Coming Soon
              </a>
              <a
                href="#how-it-works"
                className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white/90 transition duration-300 hover:bg-white/5"
              >
                Review the import guide
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-7 text-cyan-100">
              Launch note: the release page is not live yet. Once the app is published, replace this button with the real App Store link.
            </div>
          </div>
        </div>
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