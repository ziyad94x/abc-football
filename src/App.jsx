import React, { useState } from "react";

const colors = {
  ink: "#102033",
  navy: "#162A44",
  gold: "#C9A24A",
  sand: "#D8C3A5",
  cream: "#F7F3EA",
  soft: "#EEF3F1",
  white: "#FFFFFF",
};

const tabs = [
  { id: "programs", label: "Programs" },
  { id: "about", label: "About Aaron" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
  { id: "questions", label: "Question Submissions" },
];

const programs = [
  {
    icon: "⚽",
    title: "Foundation Skills",
    text: "A fun introduction to football basics: dribbling, passing, first touch, movement and confidence on the ball.",
  },
  {
    icon: "🎯",
    title: "Small Group Coaching",
    text: "Focused sessions for kids who want more attention, more touches, and a friendly environment to keep improving.",
  },
  {
    icon: "🌱",
    title: "Confidence & Game Sense",
    text: "Simple coaching that helps young players understand the game, make better decisions and enjoy playing with others.",
  },
];

const values = [
  "Friendly coaching for beginners and developing young players",
  "Simple instructions kids can actually understand",
  "A positive environment where effort matters more than pressure",
  "Sessions built around fun, confidence, teamwork and improvement",
];

const faqs = [
  {
    question: "What age group is ABC FC for?",
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
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function runContentTests() {
  const requiredCopy = [
    "ABC FC",
    "Aaron Bull Coaching & Football Academy",
    "Making football as easy as ABC",
    "Programs",
    "About Aaron",
    "FAQs",
    "Contact",
    "Question Submissions",
  ];

  const pageCopy = [
    "ABC FC",
    "Aaron Bull Coaching & Football Academy",
    "Making football as easy as ABC",
    ...tabs.map((tab) => tab.label),
  ].join(" ");

  return (
    requiredCopy.every((item) => pageCopy.includes(item)) &&
    programs.length >= 3 &&
    faqs.length >= 4 &&
    values.length >= 4 &&
    tabs.length === 5 &&
    tabs.some((tab) => tab.id === "questions")
  );
}

function Button({ children, variant = "primary", className = "", onClick, type = "button" }) {
  const primaryStyle = {
    backgroundColor: colors.navy,
    color: colors.white,
    boxShadow: "0 16px 30px rgba(22, 42, 68, 0.15)",
  };

  const outlineStyle = {
    backgroundColor: "transparent",
    color: colors.navy,
    border: `2px solid ${colors.navy}`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(
        "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-black transition hover:opacity-90 focus:outline-none focus:ring-4",
        className
      )}
      style={variant === "outline" ? outlineStyle : primaryStyle}
    >
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={cx("rounded-3xl border bg-white shadow-sm", className)}
      style={{ borderColor: "rgba(216, 195, 165, 0.45)" }}
    >
      {children}
    </div>
  );
}

function MiniBadge({ children }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-bold shadow-sm"
      style={{ borderColor: "rgba(216, 195, 165, 0.7)", color: colors.navy }}
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
    <div className="mx-auto mb-5 flex justify-center gap-3" style={{ color: colors.sand }} aria-hidden="true">
      <span className="text-3xl">★</span>
      <span className="-mt-1 text-5xl">★</span>
      <span className="text-3xl">★</span>
    </div>
  );
}

function LogoBadge() {
  return (
    <div
      className="mx-auto max-w-md rounded-3xl border bg-white p-6 shadow-2xl backdrop-blur sm:p-8"
      style={{ borderColor: colors.sand, boxShadow: "0 25px 60px rgba(22, 42, 68, 0.12)" }}
    >
      <div className="rounded-3xl border-2 px-6 py-10 text-center" style={{ borderColor: colors.navy, backgroundColor: colors.cream }}>
        <StarRow />
        <div className="text-7xl font-black tracking-tighter sm:text-8xl">
          <span style={{ color: colors.navy }}>A</span>
          <span style={{ color: colors.gold }}>B</span>
          <span style={{ color: colors.navy }}>C</span>
        </div>
        <div className="mt-1 text-4xl font-black italic" style={{ color: colors.navy }}>
          FC
        </div>
        <div className="my-6 h-px" style={{ backgroundColor: colors.sand }} />
        <p className="text-2xl font-black uppercase tracking-widest" style={{ color: colors.navy }}>
          Aaron Bull
        </p>
        <p className="mt-2 text-sm font-black uppercase tracking-wider" style={{ color: colors.gold }}>
          Coaching & Football Academy
        </p>
        <div className="my-6 h-px" style={{ backgroundColor: colors.sand }} />
        <p className="text-xs font-black uppercase tracking-widest" style={{ color: colors.navy }}>
          Making football as easy as ABC
        </p>
        <div
          className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white text-5xl shadow-inner"
          style={{ borderColor: colors.navy }}
        >
          ⚽
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="mb-2 text-sm font-black uppercase tracking-widest" style={{ color: colors.gold }}>
      {children}
    </p>
  );
}

function ProgramsPanel() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div>
        <SectionLabel>Programs</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.navy }}>
          Football coaching made simple, calm and confidence-building.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          A classy, parent-friendly academy feel: less loud sports-club energy, more trusted coaching, clear communication and enjoyable development.
        </p>
      </div>

      <div className="grid gap-5">
        {programs.map((program) => (
          <Card key={program.title} className="transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex gap-5 p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl" style={{ backgroundColor: colors.soft }} aria-hidden="true">
                {program.icon}
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-black" style={{ color: colors.navy }}>
                  {program.title}
                </h3>
                <p className="leading-7 text-slate-600">{program.text}</p>
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
    <section className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionLabel>About Aaron</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.navy }}>
          A coach kids can feel comfortable learning from.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Aaron Bull Coaching & Football Academy is built around helping young players enjoy football while learning the fundamentals that make the biggest difference: confidence, technique, movement, teamwork and decision-making.
        </p>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The tone of the academy should feel warm and trustworthy for parents, while still feeling exciting for kids who love football.
        </p>
      </div>

      <div className="grid gap-4">
        {values.map((value) => (
          <div key={value} className="flex items-start gap-4 rounded-3xl p-5" style={{ backgroundColor: colors.cream, border: `1px solid rgba(216, 195, 165, 0.45)` }}>
            <CheckIcon />
            <p className="font-semibold leading-7" style={{ color: colors.navy }}>
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQsPanel() {
  return (
    <section>
      <div className="mb-10 max-w-3xl">
        <SectionLabel>FAQs</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.navy }}>
          Quick answers for parents.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.question}>
            <div className="p-6">
              <h3 className="mb-3 text-xl font-black" style={{ color: colors.navy }}>
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
  ];

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.navy }}>
          Ready to kick off?
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          This section can be connected to Aaron’s phone, email, booking form or social pages once the details are confirmed.
        </p>
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
                <p className="font-black" style={{ color: colors.navy }}>
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
    borderColor: "rgba(216, 195, 165, 0.7)",
    backgroundColor: colors.cream,
  };

  return (
    <section className="grid gap-10 lg:grid-cols-2">
      <div>
        <SectionLabel>Question Submissions</SectionLabel>
        <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: colors.navy }}>
          Have a question before booking?
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Parents can submit a question about coaching options, age suitability, session structure, pricing or availability.
        </p>
      </div>

      <Card>
        <form className="space-y-5 p-7" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold" style={{ color: colors.navy }}>
              Parent name
              <input className={inputClass} style={inputStyle} placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold" style={{ color: colors.navy }}>
              Child age
              <input className={inputClass} style={inputStyle} placeholder="e.g. 8" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold" style={{ color: colors.navy }}>
            Email or phone
            <input className={inputClass} style={inputStyle} placeholder="Best contact details" />
          </label>
          <label className="grid gap-2 text-sm font-bold" style={{ color: colors.navy }}>
            Your question
            <textarea className={cx(inputClass, "min-h-36")} style={inputStyle} placeholder="Ask Aaron anything about sessions, programs or availability..." />
          </label>
          <Button type="submit" className="w-full">
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
  const [activeTab, setActiveTab] = useState("programs");
  const contentTestsPassed = runContentTests();

  const renderPanel = () => {
    switch (activeTab) {
      case "programs":
        return <ProgramsPanel />;
      case "about":
        return <AboutPanel />;
      case "faqs":
        return <FAQsPanel />;
      case "contact":
        return <ContactPanel />;
      case "questions":
        return <QuestionsPanel />;
      default:
        return <ProgramsPanel />;
    }
  };

  const heroStyle = {
    background: `radial-gradient(circle at top left, ${colors.soft}, transparent 35%), linear-gradient(135deg, ${colors.cream} 0%, #ffffff 52%, ${colors.soft} 100%)`,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream, color: colors.ink }}>
      {!contentTestsPassed && (
        <div className="bg-yellow-100 px-5 py-3 text-center text-sm font-bold text-yellow-900">
          Content check failed: required ABC FC copy is missing.
        </div>
      )}

      <header className="sticky top-0 z-50 border-b backdrop-blur" style={{ borderColor: "rgba(216, 195, 165, 0.55)", backgroundColor: "rgba(247, 243, 234, 0.92)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <button onClick={() => setActiveTab("programs")} className="flex items-center gap-3 text-left" aria-label="Go to home section">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black text-white shadow-sm" style={{ backgroundColor: colors.navy }}>
              ABC
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.navy }}>
                ABC FC
              </p>
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: colors.gold }}>
                Aaron Bull Coaching
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border bg-white p-1 md:flex" style={{ borderColor: "rgba(216, 195, 165, 0.65)" }} aria-label="Main navigation tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="rounded-full px-4 py-2 text-sm font-black transition hover:opacity-90"
                  style={{
                    backgroundColor: isActive ? colors.navy : "transparent",
                    color: isActive ? colors.white : colors.navy,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <Button className="hidden px-5 py-3 text-sm sm:inline-flex" onClick={() => setActiveTab("contact")}>
            Book a Session
          </Button>
        </div>

        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 pb-4 md:hidden" aria-label="Mobile navigation tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="shrink-0 rounded-full border px-4 py-2 text-sm font-black transition"
                style={{
                  borderColor: "rgba(216, 195, 165, 0.7)",
                  backgroundColor: isActive ? colors.navy : colors.white,
                  color: isActive ? colors.white : colors.navy,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden" style={heroStyle}>
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: "rgba(201, 162, 74, 0.20)" }} />
          <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full blur-3xl" style={{ backgroundColor: "rgba(216, 195, 165, 0.25)" }} />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 lg:py-28">
            <div className="space-y-7">
              <MiniBadge>
                <span aria-hidden="true">★</span>
                Football coaching for kids 12 & under
              </MiniBadge>

              <div className="space-y-4">
                <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl" style={{ color: colors.navy }}>
                  Making football as easy as <span style={{ color: colors.gold }}>ABC</span>
                </h1>
                <p className="max-w-xl text-lg font-medium leading-8 text-slate-600">
                  ABC FC — Aaron Bull Coaching & Football Academy — helps young players build skills, confidence and love for the game in a calm, positive and parent-friendly environment.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => setActiveTab("contact")}>Enquire Now</Button>
                <Button variant="outline" onClick={() => setActiveTab("programs")}>
                  View Programs
                </Button>
              </div>
            </div>

            <div className="relative">
              <LogoBadge />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="mb-8 flex flex-wrap gap-2 rounded-3xl border bg-white p-2 shadow-sm" style={{ borderColor: "rgba(216, 195, 165, 0.6)" }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="rounded-full px-5 py-3 text-sm font-black transition hover:opacity-90"
                  style={{
                    backgroundColor: isActive ? colors.navy : "transparent",
                    color: isActive ? colors.white : colors.navy,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-xl backdrop-blur md:p-10" style={{ borderColor: "rgba(216, 195, 165, 0.5)", boxShadow: "0 18px 50px rgba(22, 42, 68, 0.06)" }}>
            {renderPanel()}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rounded-3xl p-8 text-white shadow-xl md:p-12" style={{ backgroundColor: colors.navy, boxShadow: "0 20px 45px rgba(22, 42, 68, 0.16)" }}>
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-widest" style={{ color: colors.sand }}>
                  For parents
                </p>
                <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">Give your child the confidence to enjoy the game.</h2>
                <p className="max-w-2xl text-lg leading-8 text-slate-200">
                  Whether your child is brand new to football or already loves the sport, ABC FC keeps sessions positive, structured and easy to follow.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-white p-5" style={{ color: colors.navy }}>
                  <div className="mb-3 text-3xl" aria-hidden="true">
                    📅
                  </div>
                  <p className="text-xl font-black">Private, group and academy-style sessions</p>
                </div>
                <div className="rounded-3xl p-5 text-white" style={{ backgroundColor: colors.gold }}>
                  <div className="mb-3 text-3xl" aria-hidden="true">
                    🤝
                  </div>
                  <p className="text-xl font-black">Built around fun, confidence and development</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t px-5 py-8" style={{ borderColor: "rgba(216, 195, 165, 0.6)", backgroundColor: colors.cream }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm font-bold text-slate-600">© ABC FC — Aaron Bull Coaching & Football Academy</p>
          <p className="text-sm font-black uppercase tracking-widest" style={{ color: colors.gold }}>
            Making football as easy as ABC
          </p>
        </div>
      </footer>
    </div>
  );
}
