import {
  Shield,
  ShieldCheck,
  Activity,
  Search,
  FileWarning,
  Lock,
  Brain,
  ArrowRight,
  Check,
  Zap,
  Eye,
  Scale,
  ChevronRight,
  AlertTriangle,
  BarChart3,
  Users,
  Phone,
} from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[oklch(0.1_0.02_200/0.8)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-[oklch(0.7_0.18_185)]" />
          <span className="text-xl font-bold tracking-tight text-white">
            Archon AI
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#services"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-white/60 transition hover:text-white"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm text-white/60 transition hover:text-white"
          >
            Pricing
          </a>
        </div>
        <a
          href="#pricing"
          className="rounded-lg bg-[oklch(0.7_0.18_185)] px-5 py-2.5 text-sm font-semibold text-[oklch(0.1_0.02_200)] transition hover:bg-[oklch(0.75_0.16_185)]"
        >
          Book a Free Call
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb-1 absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[oklch(0.5_0.15_185/0.12)] blur-[120px]" />
        <div className="hero-orb-2 absolute top-40 left-0 h-[400px] w-[400px] rounded-full bg-[oklch(0.5_0.12_260/0.08)] blur-[100px]" />
        <div className="hero-orb-3 absolute top-60 right-0 h-[300px] w-[300px] rounded-full bg-[oklch(0.6_0.15_185/0.06)] blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge — stagger 1 */}
          <div className="hero-fade-up hero-delay-1 mb-8 inline-flex items-center gap-2 rounded-full border border-[oklch(0.7_0.18_185/0.3)] bg-[oklch(0.7_0.18_185/0.1)] px-4 py-1.5 text-sm text-[oklch(0.7_0.18_185)]">
            <ShieldCheck className="h-4 w-4" />
            Trusted by 50+ enterprise teams
          </div>

          {/* Headline — stagger 2 */}
          <h1 className="hero-fade-up hero-delay-2 text-4xl leading-[1.1] font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Is your AI{" "}
            <span className="hero-gradient-text bg-gradient-to-r from-[oklch(0.7_0.18_185)] to-[oklch(0.7_0.15_220)] bg-clip-text text-transparent">
              actually safe?
            </span>
          </h1>

          {/* Subhead — stagger 3 */}
          <p className="hero-fade-up hero-delay-3 mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl">
            Most companies deploying AI have no idea what risks they&apos;re
            carrying. We find the vulnerabilities, biases, and compliance gaps
            before they become headlines.
          </p>

          {/* CTAs — stagger 4 */}
          <div className="hero-fade-up hero-delay-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-[oklch(0.7_0.18_185)] px-8 py-4 text-base font-semibold text-[oklch(0.1_0.02_200)] transition hover:bg-[oklch(0.75_0.16_185)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Your AI Health Check
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              See How It Works
            </a>
          </div>

          {/* Trust line — stagger 5 */}
          <div className="hero-fade-up hero-delay-5 mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[oklch(0.7_0.18_185)]" />
              SOC 2 Compliant
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[oklch(0.7_0.18_185)]" />
              ISO 27001
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[oklch(0.7_0.18_185)]" />
              EU AI Act Ready
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-[oklch(0.7_0.18_185)]" />
              NIST AI RMF
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      stat: "77%",
      label:
        "of companies using AI have zero security policy around it",
    },
    {
      icon: FileWarning,
      stat: "$4.2M",
      label:
        "average cost of an AI-related data breach — before legal fees",
    },
    {
      icon: Scale,
      stat: "Now",
      label:
        "EU AI Act is in force. Non-compliance fines reach €35M or 7% of revenue",
    },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            AI is your biggest asset.
            <br />
            <span className="text-white/40">And your biggest risk.</span>
          </h2>
          <p className="mt-4 text-lg text-white/40">
            You wouldn&apos;t ship software without a security audit. Why are
            you shipping AI without one?
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-white/10 hover:bg-white/[0.04]"
            >
              <p.icon className="mb-4 h-8 w-8 text-[oklch(0.7_0.15_50)]" />
              <div className="text-4xl font-bold text-white">{p.stat}</div>
              <p className="mt-2 text-base leading-relaxed text-white/40">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Vulnerability Assessment",
      description:
        "We attack your AI the way a hacker would — prompt injection, data extraction, model theft — so you can patch the holes before someone exploits them.",
    },
    {
      icon: Brain,
      title: "Bias & Fairness Audit",
      description:
        "Uncover hidden biases that could trigger discrimination lawsuits, lost customers, or front-page scandals. Get proof your models treat everyone fairly.",
    },
    {
      icon: Lock,
      title: "Data Privacy Review",
      description:
        "Know exactly where your AI touches PII — and whether it complies with GDPR, CCPA, and the AI regulations heading your way.",
    },
    {
      icon: Activity,
      title: "Performance Health Check",
      description:
        "Model drift, hallucination spikes, latency creep — we catch silent failures that erode trust and cost money before your users notice.",
    },
    {
      icon: Scale,
      title: "Compliance Mapping",
      description:
        "EU AI Act, NIST AI RMF, ISO 42001 — we map every AI system to the frameworks that apply to you and flag exactly what&apos;s missing.",
    },
    {
      icon: Eye,
      title: "AI Supply Chain Audit",
      description:
        "Every third-party model, API, and dataset you rely on is a risk you didn&apos;t build. We audit your entire AI supply chain so nothing slips through.",
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold tracking-widest uppercase text-[oklch(0.7_0.18_185)]">
            What We Check
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Six attack surfaces. One report.<br className="hidden md:block" /> Zero guesswork.
          </h2>
          <p className="mt-4 text-lg text-white/40">
            We audit every layer of your AI stack so you know exactly where
            you&apos;re exposed and how to fix it.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[oklch(0.13_0.02_200)] p-8 transition hover:bg-[oklch(0.15_0.025_200)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-[oklch(0.7_0.18_185/0.1)] p-2.5">
                <s.icon className="h-5 w-5 text-[oklch(0.7_0.18_185)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Free Discovery Call",
      description:
        "30 minutes. We learn your AI stack, threat model, and regulatory exposure. You get an honest assessment of your risk — no sales pitch.",
      icon: Phone,
    },
    {
      step: "02",
      title: "Deep Assessment",
      description:
        "Over 10 business days, our team runs automated scans and manual red-teaming across all six audit areas.",
      icon: Search,
    },
    {
      step: "03",
      title: "Report & Roadmap",
      description:
        "You get a risk-scored report with every finding, an executive summary your board can read, and a prioritized fix list.",
      icon: BarChart3,
    },
    {
      step: "04",
      title: "Fix & Monitor",
      description:
        "We help you remediate the critical issues and optionally monitor your systems so new risks never go unnoticed.",
      icon: Activity,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold tracking-widest uppercase text-[oklch(0.7_0.18_185)]">
            How It Works
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            From first call to full clarity in 2 weeks
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="text-5xl font-black text-white/[0.04]">
                {s.step}
              </div>
              <div className="mt-2 mb-3 inline-flex rounded-lg bg-[oklch(0.7_0.18_185/0.1)] p-2.5">
                <s.icon className="h-5 w-5 text-[oklch(0.7_0.18_185)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/40">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { value: "200+", label: "AI Systems Audited" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "<12hr", label: "Avg First Response" },
    { value: "40+", label: "Industries Served" },
  ];

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-[oklch(0.7_0.18_185/0.05)] to-transparent p-12 md:p-16">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-white md:text-5xl">
                  {s.value}
                </div>
                <p className="mt-2 text-sm text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-white/50 italic">
            &ldquo;Archon AI found a prompt injection vulnerability in our
            customer-facing chatbot that would have exposed 400K user records.
            Their team flagged it, helped us patch it, and had the fix verified
            — all within 48 hours.&rdquo;
          </p>
          <div className="mt-6">
            <div className="text-sm font-semibold text-white">Sarah Chen</div>
            <div className="text-sm text-white/30">
              CTO, Meridian Financial
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Health Check",
      price: "4,500",
      period: "one-time",
      description:
        "A single AI system — fully tested, scored, and documented in 10 business days.",
      features: [
        "One AI system, six audit areas",
        "Red-team vulnerability testing",
        "Bias & fairness scan",
        "Compliance gap analysis",
        "Risk-scored findings report",
        "30 days of remediation support",
      ],
      cta: "Book Health Check",
      highlighted: false,
    },
    {
      name: "Full Audit",
      price: "12,000",
      period: "one-time",
      description:
        "Every AI system in your org — audited, mapped, and risk-ranked with a board-ready report.",
      features: [
        "Unlimited AI systems in scope",
        "All six audit areas per system",
        "Adversarial penetration testing",
        "Executive summary + technical deep-dive",
        "Prioritized remediation roadmap",
        "90 days of remediation support",
      ],
      cta: "Book Full Audit",
      highlighted: true,
    },
    {
      name: "Continuous",
      price: "3,500",
      period: "/month",
      description:
        "Always-on protection. Catch new vulnerabilities the day they appear, not the day they explode.",
      features: [
        "24/7 automated threat monitoring",
        "Real-time model drift alerts",
        "Monthly vulnerability scans",
        "Quarterly deep audit included",
        "Dedicated security advisor",
        "Regulatory change alerts",
      ],
      cta: "Start Monitoring",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 text-sm font-semibold tracking-widest uppercase text-[oklch(0.7_0.18_185)]">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Know your risk. Fix your risk. Stay safe.
          </h2>
          <p className="mt-4 text-lg text-white/40">
            Every plan starts with a free discovery call. No commitment until
            you&apos;re confident we&apos;re the right fit.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-[oklch(0.7_0.18_185/0.4)] bg-[oklch(0.7_0.18_185/0.05)]"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[oklch(0.7_0.18_185)] px-4 py-1 text-xs font-semibold text-[oklch(0.1_0.02_200)]">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-white/40">$</span>
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-white/40">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/40">
                {plan.description}
              </p>

              <a
                href="mailto:hello@archon-ai.com"
                className={`mt-6 block rounded-xl py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-[oklch(0.7_0.18_185)] text-[oklch(0.1_0.02_200)] hover:bg-[oklch(0.75_0.16_185)]"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.7_0.18_185)]" />
                    <span className="text-white/60">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk reversal */}
        <p className="mt-8 text-center text-sm text-white/30">
          Not sure which plan? Book a free 30-minute discovery call — zero
          obligation, zero pressure.
        </p>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[oklch(0.7_0.18_185/0.1)] via-[oklch(0.13_0.02_200)] to-[oklch(0.5_0.12_260/0.1)] p-12 text-center md:p-20">
          {/* Glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[oklch(0.5_0.15_185/0.15)] blur-[100px]" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
              The next AI breach will cost millions.
              <br />
              <span className="text-white/40">
                Your health check costs a fraction.
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/40">
              In 2 weeks, you&apos;ll know exactly where your AI systems are exposed
              and have a clear plan to fix every gap. Start with a free call.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@archon-ai.com"
                className="inline-flex items-center gap-2 rounded-xl bg-[oklch(0.7_0.18_185)] px-8 py-4 text-base font-semibold text-[oklch(0.1_0.02_200)] transition hover:bg-[oklch(0.75_0.16_185)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Free Discovery Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@archon-ai.com"
                className="inline-flex items-center gap-2 text-base text-white/50 transition hover:text-white"
              >
                Or email hello@archon-ai.com
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-[oklch(0.7_0.18_185)]" />
          <span className="font-semibold text-white">Archon AI</span>
        </div>
        <div className="flex gap-8 text-sm text-white/30">
          <a href="#services" className="transition hover:text-white/60">
            Services
          </a>
          <a href="#how-it-works" className="transition hover:text-white/60">
            Process
          </a>
          <a href="#pricing" className="transition hover:text-white/60">
            Pricing
          </a>
          <a
            href="mailto:hello@archon-ai.com"
            className="transition hover:text-white/60"
          >
            Contact
          </a>
        </div>
        <div className="text-sm text-white/20">
          &copy; 2026 Archon AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.1_0.02_200)] text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <HowItWorks />
      <SocialProof />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
