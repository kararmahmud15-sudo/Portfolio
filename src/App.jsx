import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Globe,
  Layout,
  Linkedin,
  Menu,
  PenTool,
  Quote,
  Smartphone,
  Star,
  Twitter,
  Users,
  X,
} from "lucide-react";

const NAV_ITEMS = ["Home", "Services", "Team", "Work", "Contact"];

const services = [
  {
    id: "01",
    title: "UI Design",
    description: "We design clean, modern, and pixel-perfect web and app interfaces that feel premium and easy to use.",
    icon: Layout,
  },
  {
    id: "02",
    title: "UX Research",
    description: "We study user behavior, plan user flows, and create wireframes that make the experience smooth and clear.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Prototyping",
    description: "We build interactive high-fidelity prototypes so you can test the real product feel before development.",
    icon: Smartphone,
  },
  {
    id: "04",
    title: "Web Design",
    description: "We create responsive, conversion-focused websites that look sharp on every device.",
    icon: Globe,
  },
];

const stats = [
  { label: "Projects Completed", value: "150+", icon: Briefcase },
  { label: "Happy Clients", value: "80+", icon: Users },
  { label: "Awards Won", value: "12", icon: Award },
  { label: "Experience", value: "5 Yrs", icon: Star },
];

const teamMembers = [
  {
    name: "Sabbir Ahmed",
    role: "Lead UI/UX Designer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rifat Hasan",
    role: "Senior Web Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nusrat Jahan",
    role: "Product Strategist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow",
    text: "Mixium Lab transformed our product experience with a clean and powerful UI. Our users understood the product faster and engaged more.",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    text: "The design process was smooth, strategic, and professional. Every section felt intentional and aligned with our business goals.",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "David Chen",
    role: "Founder, GreenWave",
    text: "Their design direction gave our brand a stronger digital presence. The final website looked premium, simple, and conversion-focused.",
    image: "https://i.pravatar.cc/150?u=david",
  },
];

const projects = [
  {
    title: "Fintech Dashboard",
    type: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fashion E-commerce",
    type: "Mobile App",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=900&q=80",
    shift: true,
  },
];

function SectionTitle({ eyebrow, title, highlight, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.35em] text-[#abe048]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-6xl font-black uppercase leading-none tracking-tighter md:text-8xl">
        {title}
        <br />
        <span className="text-[#abe048]">{highlight}</span>
      </h2>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 140;
      const sections = ["home", "services", "team", "work", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (!element) return;

        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    window.scrollTo({
      top: sectionId === "home" ? 0 : element.offsetTop - 80,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans text-gray-100 selection:bg-[#abe048] selection:text-black">
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-white/5 bg-[#0a0a0a]/90 py-4 shadow-2xl backdrop-blur-xl"
            : "bg-transparent py-8"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black uppercase tracking-tighter text-white"
          >
            MIXIUM LAB<span className="text-[#abe048]">.</span>
          </button>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.slice(0, 4).map((item) => {
              const sectionId = item.toLowerCase();

              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition hover:text-[#abe048] ${
                    activeSection === sectionId ? "text-[#abe048]" : "text-gray-400"
                  }`}
                >
                  {item}
                </button>
              );
            })}

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#abe048] px-8 py-3 text-xs font-black uppercase tracking-[0.15em] text-black transition hover:bg-white active:scale-95"
            >
              Let’s Talk
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((value) => !value)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a] transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-4xl font-black uppercase tracking-tighter transition hover:text-[#abe048]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#abe048]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Ready for new challenges
            </span>
          </div>

          <h1 className="pointer-events-none mb-4 text-6xl font-black uppercase leading-[0.8] tracking-tighter md:text-[10rem] lg:text-[13rem]">
            <span className="block opacity-90">Creative</span>
            <span
              className="block text-transparent italic"
              style={{ WebkitTextStroke: "2px #abe048" }}
            >
              Beyond
            </span>
            <span className="block">
              Limits<span className="text-[#abe048]">.</span>
            </span>
          </h1>

          <div className="mt-12 flex flex-col items-start justify-between gap-12 border-t border-white/10 pt-12 md:flex-row">
            <div className="max-w-md">
              <p className="mb-8 text-xl font-medium leading-relaxed text-gray-400">
                We create digital experiences that look beautiful, feel smooth, and help brands grow with clear strategy and bold design.
              </p>

              <div className="flex gap-12">
                {["UI/UX", "Web"].map((item) => (
                  <div key={item} className="group">
                    <p className="text-2xl font-black uppercase tracking-tighter text-[#abe048] transition group-hover:translate-x-1">
                      {item}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                      Expertise
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollToSection("work")}
              className="group relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[#abe048] transition duration-500 hover:scale-110 active:scale-90"
              aria-label="View work"
            >
              <span className="absolute inset-0 translate-y-full bg-[#abe048] transition-transform duration-500 group-hover:translate-y-0" />
              <ArrowUpRight
                size={40}
                className="relative z-10 text-[#abe048] transition-colors group-hover:text-black"
              />
            </button>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-10 right-0 select-none text-[20rem] font-black uppercase tracking-tighter opacity-[0.02]">
          MIXIUM
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="group flex flex-col items-center transition md:items-start">
                <Icon className="mb-5 text-[#abe048]" size={26} />
                <span className="mb-3 text-5xl font-black transition group-hover:text-[#abe048] md:text-7xl">
                  {value}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition group-hover:text-white">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#0a0a0a] py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-24 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle title="Our" highlight="Expertise." />
            <p className="max-w-xs border-l-2 border-[#abe048] pl-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Strategy-driven design and flawless execution for modern brands.
            </p>
          </div>

          <div>
            {services.map(({ id, title, description, icon: Icon }) => (
              <article
                key={id}
                className="group relative flex cursor-pointer flex-col justify-between gap-8 overflow-hidden border-b border-white/10 py-16 transition-all duration-500 hover:px-8 md:flex-row md:items-center lg:hover:px-12"
              >
                <div className="absolute inset-0 -z-10 translate-x-full bg-[#abe048] transition-transform duration-700 ease-in-out group-hover:translate-x-0" />

                <div className="relative z-10 flex items-center gap-8 md:gap-12">
                  <span className="text-xl font-black text-gray-700 transition group-hover:text-black">
                    {id}
                  </span>
                  <Icon className="hidden text-[#abe048] transition group-hover:text-black md:block" size={32} />
                  <h3 className="text-4xl font-black uppercase tracking-tight transition group-hover:text-black md:text-6xl">
                    {title}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center gap-10">
                  <p className="max-w-xs text-sm font-medium text-gray-500 transition group-hover:text-black/80 lg:block">
                    {description}
                  </p>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition duration-500 group-hover:bg-black group-hover:text-[#abe048]">
                    <ArrowRight size={24} className="-rotate-45 transition-transform group-hover:rotate-0" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="flex overflow-hidden whitespace-nowrap bg-[#abe048] py-8">
        <div className="flex animate-marquee items-center gap-12">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="flex items-center gap-6 text-4xl font-black uppercase tracking-tighter text-black"
            >
              Design <Star size={24} fill="black" /> Strategy <Star size={24} fill="black" /> Development <Star size={24} fill="black" />
            </span>
          ))}
        </div>
      </div>

      <section id="team" className="bg-[#0a0a0a] py-40">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle title="Meet" highlight="Our Team." />
            <p className="max-w-xs text-left text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 md:text-right">
              Meet the passionate experts behind our creative work.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="group">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex gap-4">
                      <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#abe048] text-black transition hover:-translate-y-2 hover:bg-white">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition hover:-translate-y-2 hover:bg-[#abe048]">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-[#abe048] pl-6 transition duration-300 group-hover:translate-x-2">
                  <h4 className="mb-1 text-3xl font-black uppercase tracking-tight transition group-hover:text-[#abe048]">
                    {member.name}
                  </h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0a0a0a] py-40">
        <div className="mx-auto mb-24 max-w-7xl px-6 md:px-12">
          <SectionTitle title="Client" highlight="Feedbacks." />
        </div>

        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 transition duration-500 hover:border-[#abe048]/50 md:p-12"
              >
                <Quote
                  size={120}
                  className="absolute -bottom-4 -right-4 text-white/[0.03] transition group-hover:text-[#abe048]/10"
                />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-8 flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={14} className="fill-[#abe048] text-[#abe048]" />
                      ))}
                    </div>
                    <p className="mb-12 text-xl font-black uppercase italic leading-tight tracking-tight text-white/90 md:text-2xl">
                      “{testimonial.text}”
                    </p>
                  </div>

                  <div className="mt-auto flex items-center gap-5">
                    <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/10 transition group-hover:ring-[#abe048]/50">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover grayscale transition group-hover:grayscale-0"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-black uppercase transition group-hover:text-[#abe048]">
                        {testimonial.name}
                      </h4>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#0a0a0a] py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-20 border-b border-white/10 pb-8">
            <SectionTitle title="Selected" highlight="Works." />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`group cursor-pointer ${project.shift ? "md:mt-32" : ""}`}
              >
                <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-[#111]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-40 grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-8 left-8 flex h-16 w-16 translate-y-4 items-center justify-center rounded-full bg-[#abe048] text-black opacity-0 shadow-2xl transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={32} />
                  </div>
                </div>

                <h3 className="mb-3 text-3xl font-black uppercase tracking-tighter transition group-hover:text-[#abe048]">
                  {project.title}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#abe048]">
                  {project.type}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#abe048] py-40 text-black">
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center md:px-12">
          <h2 className="mb-12 cursor-default text-7xl font-black uppercase tracking-tighter transition duration-700 hover:scale-105 md:text-[12rem]">
            Let’s Talk.
          </h2>

          <div className="mb-20 flex flex-col items-center justify-center gap-8 md:flex-row">
            <a
              href="mailto:hello@mixiumlab.com"
              className="group flex items-center gap-6 bg-black px-10 py-6 text-xl font-black uppercase tracking-tighter text-white shadow-2xl transition hover:-translate-y-2 hover:bg-[#007430] active:scale-95 md:px-12 md:text-2xl"
            >
              hello@mixiumlab.com
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-black uppercase tracking-widest md:gap-12">
            {["Dribbble", "LinkedIn", "Instagram"].map((social) => (
              <a key={social} href="#" className="transition hover:underline hover:decoration-4 hover:underline-offset-8">
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#0a0a0a] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row md:px-12">
          <div>
            <span className="text-2xl font-black uppercase tracking-tighter">
              MIXIUM LAB<span className="text-[#abe048]">.</span>
            </span>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
              Beyond Digital Limits
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 md:gap-12">
            <button className="transition hover:text-white">Privacy Policy</button>
            <span>© {new Date().getFullYear()} MIXIUM LAB.</span>
          </div>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
