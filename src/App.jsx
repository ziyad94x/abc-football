import React, { useState } from "react";

const logoSrc = "/abc-logo.png";

const colors = {
  ink: "#171717",
  charcoal: "#0F1115",
  black: "#070707",
  gold: "#B88A2E",
  brightGold: "#D7B765",
  champagne: "#EFE2C2",
  cream: "#FBF6EA",
  ivory: "#FFFDF7",
  soft: "#F4EBD8",
  slate: "#53565C",
  white: "#FFFFFF",
};

const tabs = [
  { id: "programs", label: "Programs" },
  { id: "about", label: "About Aaron" },
  { id: "approach", label: "Coaching Approach" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
  { id: "questions", label: "Question Submissions" },
];

const programs = [
  {
    icon: "⚽",
    title: "Foundation Skills",
    age: "Ages 5–8",
    text: "A fun introduction to football basics: dribbling, passing, first touch, balance, movement and confidence on the ball.",
    points: ["Ball mastery", "Simple passing", "Coordination games"],
  },
  {
    icon: "🎯",
    title: "Development Coaching",
    age: "Ages 8–12",
    text: "Structured sessions for kids who already love football and want to build stronger technique, awareness and decision-making.",
    points: ["First touch", "Shooting technique", "Game awareness"],
  },
  {
    icon: "👥",
    title: "Small Group Sessions",
    age: "2–6 players",
    text: "A friendly group setting that gives every player plenty of touches, coaching feedback and confidence without feeling overwhelmed.",
    points: ["More touches", "Teamwork", "Mini challenges"],
  },
  {
    icon: "🌟",
    title: "Confidence Sessions",
    age: "Beginner friendly",
    text: "Perfect for kids who are shy, new to sport, nervous in teams, or need a patient coach to help them enjoy the game.",
    points: ["Low pressure", "Positive feedback", "Confidence first"],
  },
];

const values = [
  "Friendly coaching for beginners and developing young players",
  "Simple instructions kids can actually understand",
  "A positive environment where effort matters more than pressure",
  "Sessions built around fun, confidence, teamwork and improvement",
  "A parent-friendly approach with clear communication and realistic development goals",
  "Football taught in a way that feels encouraging, structured and enjoyable",
];

const faqs = [
  {
    question: "What age group is ABC Football for?",
    answer: "The academy is designed mainly for kids 12 and under, with sessions adjusted depending on age, confidence and ability.",
  },
  {
    question: "Does my child need to already play football?",
    answer: "No. Beginners are welcome. The goal is to make football feel simple, fun and approachable.",
  },
  {
    question: "Are sessions private or group based?",
    answer: "The site can be set up for private coaching, small group sessions, school holiday clinics or team-style programs once Aaron confirms what he wants to offer.",
  },
  {
    question: "What should kids bring?",
    answer: "Comfortable sports clothes, boots or runners, water, shin pads if needed, and a good attitude.",
  },
  {
    question: "Is this only for serious players?",
    answer: "No. ABC Football is built for enjoyment and development first. Kids can be brand new, casual players, or already playing in a team.",
  },
  {
    question: "How long are sessions?",
    answer: "Session length can be adjusted, but most kids coaching sessions work best around 45 to 60 minutes depending on age and attention span.",
  },
];

const pathway = [
  {
    step: "01",
    title: "Build comfort",
    text: "Kids start by feeling safe, relaxed and excited to touch the ball. Confidence comes before complexity.",
  },
  {
    step: "02",
    title: "Learn the basics",
    text: "Aaron breaks football skills into simple parts: touch, movement, control, passing and shooting.",
  },
  {
    step: "03",
    title: "Play with purpose",
    text: "Players then use those skills in small games, challenges and realistic football moments.",
  },
  {
    step: "04",
    title: "Grow confidence",
    text: "The goal is a child who feels better, braver and more capable each time they play.",
  },
];

const sessionFlow = [
  "Warm-up games to get comfortable",
  "Ball mastery and touch work",
  "Focused skill of the day",
  "Small-sided challenge or mini game",
  "Positive recap and simple take-home tip",
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function runContentTests() {
  const requiredCopy = [
    "ABC Football",
    "Aaron Bull Coaching & Football",
    "Making football as easy as ABC",
    "Programs",
    "About Aaron",
    "Coaching Approach",
    "FAQs",
    "Contact",
    "Question Submissions",
  ];

  const pageCopy = [
    "ABC Football",
    "Aaron Bull Coaching & Football",
    "Making football as easy as ABC",
    ...tabs.map((tab) => tab.label),
  ].join(" ");

  return (
    requiredCopy.every((item) => pageCopy.includes(item)) &&
    programs.length >= 4 &&
    faqs.length >= 6 &&
    values.length >= 6 &&
    pathway.length >= 4 &&
    sessionFlow.length >= 5 &&
    tabs.length === 6 &&
    tabs.some((tab) => tab.id === "questions") &&
    tabs.some((tab) => tab.id === "approach")
  );
}

function Button({ children, variant = "primary", className = "", onClick, type = "button" }) {
  const primaryStyle = {
    background: `linear-gradient(135deg, ${colors.black}, ${colors.charcoal})`,
    color: colors.white,
    boxShadow: "0 16px 32px rgba(7, 7, 7, 0.22)",
  };

  const goldStyle = {
    background: `linear-gradient(135deg, ${colors.gold}, ${colors.brightGold})`,
    color: colors.black,
    boxShadow: "0 16px 30px rgba(184, 138, 46, 0.22)",
  };

  const outlineStyle = {
    backgroundColor: "transparent",
    color: colors.black,
    border: `2px solid ${colors.black}`,
  };

  const style = variant === "outline" ? outlineStyle : variant === "gold" ? goldStyle : primaryStyle;

  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(
        "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-black transition hover:-translate-y-0.5 hover:opacity-95 focus:outline-none focus:ring-4",
        className
      )}
      style={style}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "", style = {} }) {
  return (
    <div
      className={cx("rounded-3xl border bg-white shadow-sm", className)}
      style={{ borderColor: "rgba(184, 138, 46, 0.22)", ...style }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <p className="mb-2 text-sm font-black uppercase tracking-[0.22em]" style={{ color: dark ? colors.brightGold : colors.gold }}>
      {children}
    </p>
  );
}

function MiniBadge({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur"
      style={{ borderColor: "rgba(184, 138, 46, 0.32)", color: colors.black }}
    >
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-1 h-6 w-6 shrink-0" style={{ color: colors.gold }} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRow() {
  return (
    <div className="mx-auto mb-5 flex justify-center gap-3" style={{ color: colors.brightGold }} aria-hidden="true">
      <span className="text-3xl">★</span>
      <span className="-mt-1 text-5xl">★</span>
      <span className="text-3xl">★</span>
    </div>
  );
}

function LogoBadge() {
  return (
    <div
      className="mx-auto max-w-md rounded-[2rem] border bg-black p-5 shadow-2xl backdrop-blur sm:p-7"
      style={{ borderColor: "rgba(184, 138, 46, 0.42)", boxShadow: "0 28px 70px rgba(7, 7, 7, 0.22)" }}
    >
      <div className="rounded-[1.65rem] border px-5 py-6 text-center" style={{ borderColor: "rgba(215, 183, 101, 0.36)", backgroundColor: colors.black }}>
        <img
          src={logoSrc}
          alt="ABC Football - Aaron Bull Coaching & Football logo"
          className="mx-auto h-auto w-full max-w-sm rounded-2xl object-contain"
        />
        <p className="mt-5 text-xs font-black uppercase tracking-[0.24em]" style={{ color: colors.brightGold }}>
          Making football as easy as ABC
        </p>
      </div>
    </div>
  );
}

function ProgramsPanel() {
  return (
    <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionLabel>Programs</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.black }}>
          Football coaching made simple, calm and confidence-building.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          ABC Football is designed to feel structured enough for parents to trust, but fun enough that kids actually look forward to turning up each week.
        </p>
        <div className="mt-8 rounded-3xl p-6" style={{ backgroundColor: colors.black, color: colors.white }}>
          <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: colors.brightGold }}>
            Core promise
          </p>
          <p className="mt-3 text-2xl font-black leading-tight">Every session should leave kids feeling more confident than when they arrived.</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {programs.map((program) => (
          <Card key={program.title} className="transition hover:-translate-y-1 hover:shadow-xl">
            <div className="p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl" style={{ backgroundColor: colors.soft }} aria-hidden="true">
                {program.icon}
              </div>
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em]" style={{ color: colors.gold }}>
                {program.age}
              </p>
              <h3 className="mb-3 text-2xl font-black" style={{ color: colors.black }}>
                {program.title}
              </h3>
              <p className="mb-5 leading-7 text-slate-600">{program.text}</p>
              <div className="flex flex-wrap gap-2">
                {program.points.map((point) => (
                  <span key={point} className="rounded-full px-3 py-1 text-xs font-bold" style={{ backgroundColor: colors.cream, color: colors.black }}>
                    {point}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function AboutPanel() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
      <div>
        <SectionLabel>About Aaron</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.black }}>
          A coach kids can feel comfortable learning from.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Aaron Bull Coaching & Football is built around helping young players enjoy football while learning the fundamentals that make the biggest difference: confidence, technique, movement, teamwork and decision-making.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The tone of ABC Football is warm, clear and encouraging. It should feel professional enough for parents, but relaxed enough that kids do not feel intimidated.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black" style={{ color: colors.gold }}>12U</p>
            <p className="mt-1 text-sm font-bold text-slate-600">Kids focus</p>
          </div>
          <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black" style={{ color: colors.gold }}>1:1</p>
            <p className="mt-1 text-sm font-bold text-slate-600">Personal feedback</p>
          </div>
          <div className="rounded-3xl bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-black" style={{ color: colors.gold }}>ABC</p>
            <p className="mt-1 text-sm font-bold text-slate-600">Simple coaching</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {values.map((value) => (
          <div key={value} className="flex items-start gap-4 rounded-3xl p-5" style={{ backgroundColor: colors.ivory, border: `1px solid rgba(184, 138, 46, 0.22)` }}>
            <CheckIcon />
            <p className="font-semibold leading-7" style={{ color: colors.black }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ApproachPanel() {
  return (
    <section className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Coaching Approach</SectionLabel>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.black }}>
            A simple pathway from nervous beginner to confident player.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Kids improve fastest when the coaching is clear, positive and matched to their level. ABC Football keeps the pressure low, the energy high and the learning simple.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {pathway.map((item) => (
            <Card key={item.step}>
              <div className="p-6">
                <p className="mb-4 text-sm font-black uppercase tracking-[0.2em]" style={{ color: colors.gold }}>
                  Step {item.step}
                </p>
                <h3 className="mb-3 text-2xl font-black" style={{ color: colors.black }}>
                  {item.title}
                </h3>
                <p className="leading-7 text-slate-600">{item.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] p-8 md:p-10" style={{ backgroundColor: colors.black, color: colors.white }}>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel dark>Typical Session Flow</SectionLabel>
            <h3 className="text-3xl font-black md:text-4xl">Structured enough to improve. Fun enough to remember.</h3>
          </div>
          <div className="grid gap-3">
            {sessionFlow.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-black" style={{ backgroundColor: colors.brightGold, color: colors.black }}>
                  {index + 1}
                </div>
                <p className="font-bold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQsPanel() {
  return (
    <section>
      <div className="mb-10 max-w-3xl">
        <SectionLabel>FAQs</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.black }}>
          Quick answers for parents.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          These are placeholder answers for now. Once Aaron confirms the actual session details, pricing and availability, this section can be made fully accurate.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.question}>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-black" style={{ color: colors.black }}>
                {faq.question}
              </h3>
              <p className="leading-7 text-slate-600">{faq.answer}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactPanel() {
  const contactItems = [
    { icon: "☎", label: "Phone", value: "Add phone number" },
    { icon: "✉", label: "Email", value: "Add email address" },
    { icon: "📍", label: "Location", value: "Add coaching area/suburb" },
    { icon: "📱", label: "Instagram", value: "Add Instagram handle" },
  ];

  return (
    <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.black }}>
          Ready to kick off?
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          This section can be connected to Aaron’s phone, email, booking form or social pages once the details are confirmed.
        </p>
        <div className="mt-8 rounded-3xl p-6" style={{ backgroundColor: colors.soft }}>
          <p className="text-xl font-black" style={{ color: colors.black }}>Gift draft note</p>
          <p className="mt-2 leading-7 text-slate-600">
            This site is currently a birthday concept draft. Aaron can review the name, programs, photos, contact details and pricing before it becomes the final version.
          </p>
        </div>
      </div>

      <Card>
        <div className="space-y-5 p-7">
          {contactItems.map((item) => (
            <div className="flex items-center gap-4" key={item.label}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl" style={{ backgroundColor: colors.soft }} aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">{item.label}</p>
                <p className="font-black" style={{ color: colors.black }}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
          <Button className="w-full">Send Enquiry</Button>
        </div>
      </Card>
    </section>
  );
}

function QuestionsPanel() {
  const inputClass = "rounded-2xl border px-4 py-3 outline-none focus:ring-4";
  const inputStyle = {
    borderColor: "rgba(184, 138, 46, 0.32)",
    backgroundColor: colors.ivory,
  };

  return (
    <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <SectionLabel>Question Submissions</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.black }}>
          Have a question before booking?
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Parents can submit a question about coaching options, age suitability, session structure, pricing or availability.
        </p>
        <div className="mt-8 grid gap-3">
          {["Ask about session times", "Request private coaching", "Ask which program suits your child"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
              <CheckIcon />
              <p className="font-bold" style={{ color: colors.black }}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <Card>
        <form className="space-y-5 p-7" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold" style={{ color: colors.black }}>
              Parent name
              <input className={inputClass} style={inputStyle} placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold" style={{ color: colors.black }}>
              Child age
              <input className={inputClass} style={inputStyle} placeholder="e.g. 8" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold" style={{ color: colors.black }}>
            Email or phone
            <input className={inputClass} style={inputStyle} placeholder="Best contact details" />
          </label>
          <label className="grid gap-2 text-sm font-bold" style={{ color: colors.black }}>
            Your question
            <textarea className={cx(inputClass, "min-h-36")} style={inputStyle} placeholder="Ask Aaron anything about sessions, programs or availability..." />
          </label>
          <Button type="submit" variant="gold" className="w-full">
            Submit Question
          </Button>
          <p className="text-center text-xs font-semibold text-slate-500">
            Form is a visual draft for now. It can be connected later to email, Google Forms or a booking system.
          </p>
        </form>
      </Card>
    </section>
  );
}

export default function ABCFCWebsite() {
  const contentTestsPassed = runContentTests();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const heroStyle = {
    background: `radial-gradient(circle at top left, rgba(215, 183, 101, 0.28), transparent 35%), radial-gradient(circle at bottom right, rgba(239, 226, 194, 0.65), transparent 32%), linear-gradient(135deg, ${colors.cream} 0%, ${colors.ivory} 52%, ${colors.soft} 100%)`,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream, color: colors.ink }}>
      {!contentTestsPassed && (
        <div className="bg-yellow-100 px-5 py-3 text-center text-sm font-bold text-yellow-900">
          Content check failed: required ABC Football copy is missing.
        </div>
      )}

      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: "rgba(184, 138, 46, 0.22)", backgroundColor: "rgba(251, 246, 234, 0.94)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#home" onClick={(event) => { event.preventDefault(); scrollToSection("home"); }} className="flex items-center gap-3 text-left" aria-label="Go to home section">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-black shadow-sm" style={{ boxShadow: "inset 0 0 0 2px rgba(215,183,101,0.28)" }}>
              <img src={logoSrc} alt="ABC Football logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.black }}>
                ABC Football
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.gold }}>
                Aaron Bull Coaching
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 rounded-full border bg-white/80 p-1 md:flex" style={{ borderColor: "rgba(184, 138, 46, 0.28)" }} aria-label="Main navigation links">
            {tabs.map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(tab.id);
                }}
                className="rounded-full px-4 py-2 text-sm font-black transition hover:opacity-90"
                style={{ color: colors.black }}
              >
                {tab.label}
              </a>
            ))}
          </nav>

          <Button className="hidden px-5 py-3 text-sm sm:inline-flex" onClick={() => scrollToSection("contact")}>
            Book a Session
          </Button>
        </div>

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-4 md:hidden" aria-label="Mobile navigation links">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(tab.id);
              }}
              className="shrink-0 rounded-full border bg-white px-4 py-2 text-sm font-black transition"
              style={{ borderColor: "rgba(184, 138, 46, 0.34)", color: colors.black }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section id="home" className="relative scroll-mt-28 overflow-hidden" style={heroStyle}>
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: "rgba(215, 183, 101, 0.22)" }} />
          <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: "rgba(15, 17, 21, 0.08)" }} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:py-28">
            <div className="space-y-7">
              <MiniBadge>
                <span aria-hidden="true">★</span>
                Football coaching for kids 12 & under
              </MiniBadge>

              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl" style={{ color: colors.black }}>
                  Making football as easy as <span style={{ color: colors.gold }}>ABC</span>
                </h1>
                <p className="max-w-xl text-lg font-medium leading-8 text-slate-600">
                  ABC Football — Aaron Bull Coaching & Football — helps young players build skills, confidence and love for the game in a calm, positive and parent-friendly environment.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-black" style={{ color: colors.gold }}>12U</p>
                  <p className="text-sm font-bold text-slate-600">Kids coaching</p>
                </div>
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-black" style={{ color: colors.gold }}>1:1</p>
                  <p className="text-sm font-bold text-slate-600">Simple feedback</p>
                </div>
                <div className="rounded-3xl bg-white/80 p-4 shadow-sm">
                  <p className="text-2xl font-black" style={{ color: colors.gold }}>Fun</p>
                  <p className="text-sm font-bold text-slate-600">Confidence first</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => scrollToSection("contact")}>Enquire Now</Button>
                <Button variant="outline" onClick={() => scrollToSection("programs")}>
                  View Programs
                </Button>
              </div>
            </div>

            <div className="relative">
              <LogoBadge />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-5 md:grid-cols-3">
            <Card style={{ backgroundColor: colors.black, color: colors.white }}>
              <div className="p-6">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.2em]" style={{ color: colors.brightGold }}>For kids</p>
                <h3 className="text-2xl font-black">Fun, simple sessions that build confidence.</h3>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.2em]" style={{ color: colors.gold }}>For parents</p>
                <h3 className="text-2xl font-black" style={{ color: colors.black }}>Clear communication and a positive environment.</h3>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <p className="mb-2 text-sm font-black uppercase tracking-[0.2em]" style={{ color: colors.gold }}>For growth</p>
                <h3 className="text-2xl font-black" style={{ color: colors.black }}>Better touch, better movement, better decisions.</h3>
              </div>
            </Card>
          </div>
        </section>

        <section id="programs" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-16 md:pb-20">
          <div className="rounded-[2rem] border bg-white/80 p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(184, 138, 46, 0.22)", boxShadow: "0 20px 60px rgba(7, 7, 7, 0.07)" }}>
            <ProgramsPanel />
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-16 md:pb-20">
          <div className="rounded-[2rem] border bg-white/80 p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(184, 138, 46, 0.22)", boxShadow: "0 20px 60px rgba(7, 7, 7, 0.07)" }}>
            <AboutPanel />
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-16 md:pb-20">
          <div className="rounded-[2rem] border bg-white/80 p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(184, 138, 46, 0.22)", boxShadow: "0 20px 60px rgba(7, 7, 7, 0.07)" }}>
            <ApproachPanel />
          </div>
        </section>

        <section id="faqs" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-16 md:pb-20">
          <div className="rounded-[2rem] border bg-white/80 p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(184, 138, 46, 0.22)", boxShadow: "0 20px 60px rgba(7, 7, 7, 0.07)" }}>
            <FAQsPanel />
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-16 md:pb-20">
          <div className="rounded-[2rem] border bg-white/80 p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(184, 138, 46, 0.22)", boxShadow: "0 20px 60px rgba(7, 7, 7, 0.07)" }}>
            <ContactPanel />
          </div>
        </section>

        <section id="questions" className="mx-auto max-w-7xl scroll-mt-32 px-5 pb-16 md:pb-20">
          <div className="rounded-[2rem] border bg-white/80 p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(184, 138, 46, 0.22)", boxShadow: "0 20px 60px rgba(7, 7, 7, 0.07)" }}>
            <QuestionsPanel />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rounded-[2rem] p-8 text-white shadow-xl md:p-12" style={{ background: `linear-gradient(135deg, ${colors.black}, ${colors.charcoal})`, boxShadow: "0 22px 55px rgba(7, 7, 7, 0.20)" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em]" style={{ color: colors.brightGold }}>
                  For parents
                </p>
                <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">Give your child the confidence to enjoy the game.</h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-200">
                  Whether your child is brand new to football or already loves the sport, ABC Football keeps sessions positive, structured and easy to follow.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-white p-5" style={{ color: colors.black }}>
                  <div className="mb-3 text-3xl" aria-hidden="true">📅</div>
                  <p className="text-xl font-black">Private, group and academy-style sessions</p>
                </div>
                <div className="rounded-3xl p-5" style={{ background: `linear-gradient(135deg, ${colors.gold}, ${colors.brightGold})`, color: colors.black }}>
                  <div className="mb-3 text-3xl" aria-hidden="true">🤝</div>
                  <p className="text-xl font-black">Built around fun, confidence and development</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t px-5 py-8" style={{ borderColor: "rgba(184, 138, 46, 0.22)", backgroundColor: colors.cream }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm font-bold text-slate-600">© ABC Football — Aaron Bull Coaching & Football</p>
          <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gold }}>
            Making football as easy as ABC
          </p>
        </div>
      </footer>
    </div>
  );
}
