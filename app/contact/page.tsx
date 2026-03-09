import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to home
        </Link>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Support / Contact
          </div>
          <h1 className="mt-3 text-4xl font-bold">Need help with FollowChecker?</h1>
          <p className="mt-4 text-base leading-8 text-white/70">
            Before requesting support, review the import guide on the home page and make sure your
            Instagram export uses JSON format, Followers and Following only, and All Time as the date range.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-xl font-semibold">Common support topics</h2>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>• Import issues</p>
                <p>• Missing or incomplete results</p>
                <p>• Questions about comparison history</p>
                <p>• Privacy and data handling questions</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-6">
              <h2 className="text-xl font-semibold">How to request help</h2>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <p>• Describe what step you are stuck on</p>
                <p>• Mention whether your export used JSON</p>
                <p>• Mention whether Date Range was set to All Time</p>
                <p>• Include screenshots if useful</p>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
            <h2 className="text-xl font-semibold text-cyan-100">Support contact</h2>
            <p className="mt-3 text-sm leading-7 text-cyan-100/80">
              Replace this section with your real support email or support form when you are ready to
              publish publicly.
            </p>
            <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-black/20 px-4 py-3 text-sm text-cyan-100">
              Example: support@followcheckerapp.com
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}