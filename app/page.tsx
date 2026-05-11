export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Remote Hiring Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Schedule interviews across<br />
          <span className="text-[#58a6ff]">global timezones</span> smartly
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Stop the timezone chaos. InterviewSync finds the perfect interview slot for every candidate — no matter where they are in the world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $9/mo
          </a>
          <a href="#faq" className="text-[#58a6ff] hover:underline text-base">
            See how it works ↓
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🌍', title: 'Multi-timezone Engine', desc: 'Automatically converts and compares availability across any timezone.' },
            { icon: '📅', title: 'Conflict Detection', desc: 'Instantly flags scheduling conflicts before they become problems.' },
            { icon: '⚡', title: 'Instant Suggestions', desc: 'Get ranked optimal slots in seconds, not hours of back-and-forth.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited interview scheduling',
              'Up to 50 candidates per session',
              'All global timezones supported',
              'Calendar integration (Google & Outlook)',
              'Conflict detection & smart suggestions',
              'Email notifications & reminders'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">7-day free trial. No credit card required.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the timezone detection work?',
              a: 'InterviewSync uses each candidate\'s local timezone (detected or manually set) to map their availability into a shared timeline, then surfaces slots where everyone overlaps.'
            },
            {
              q: 'Can I connect my existing calendar?',
              a: 'Yes. InterviewSync integrates with Google Calendar and Microsoft Outlook so your busy times are automatically respected when finding open slots.'
            },
            {
              q: 'What happens if there is no overlapping availability?',
              a: 'The scheduler highlights the closest near-miss slots and suggests which candidate could flex their schedule the least — making the conversation easy.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} InterviewSync. All rights reserved.
      </footer>
    </main>
  )
}
