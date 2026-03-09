import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm text-cyan-300 hover:text-cyan-200">
          ← Back to home
        </Link>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Privacy Policy
          </div>
          <h1 className="mt-3 text-4xl font-bold">FollowChecker Privacy Policy</h1>
          <p className="mt-4 text-white/65">Last updated: March 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-white/75">
            <section>
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-3">
                FollowChecker is designed to analyze Instagram export files locally on the user’s
                device. The app does not require users to log into Instagram through the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">What data the app uses</h2>
              <p className="mt-3">
                FollowChecker uses the Instagram export ZIP file selected by the user. This may include
                follower and following data contained in Instagram’s exported JSON files.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">How data is processed</h2>
              <p className="mt-3">
                Data is processed locally on the device for analysis and comparison. FollowChecker is
                intended to avoid unnecessary remote processing of Instagram export data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Account access</h2>
              <p className="mt-3">
                FollowChecker does not ask for Instagram usernames or passwords for login purposes and
                does not directly connect to Instagram accounts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">User control</h2>
              <p className="mt-3">
                Users decide when to export their Instagram data, when to import it into FollowChecker,
                and when to clear local analysis history from the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white">Independent app</h2>
              <p className="mt-3">
                FollowChecker is an independent application and is not affiliated with or endorsed by
                Instagram or Meta.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}