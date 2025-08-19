import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  PenTool,
  Code2,
  Megaphone,
  Mail,
  ArrowRight,
  Quote,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

// Single-file React component that recreates the look & sections of the
// ThemeWagon/Colorlib "Noah" portfolio template using Tailwind CSS + Framer Motion.
// Drop this into a Vite/CRA project with Tailwind configured and render <NoahPortfolio />.
// Images use Unsplash placeholders; replace with your own.

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Blog" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const services = [
  {
    id: 1,
    title: "Graphic Design",
    icon: PenTool,
    items: [
      "UI Design",
      "Website & Digital Design",
      "Branding & Visual Identity",
      "Print Design",
    ],
  },
  {
    id: 2,
    title: "Illustration",
    icon: LayoutGrid,
    items: ["Editorial", "Narrative", "Motion Graphics", "Animation", "VFX"],
  },
  {
    id: 3,
    title: "Front End Development",
    icon: Code2,
    items: ["HTML / CSS", "JavaScript", "React", "WordPress"],
  },
  {
    id: 4,
    title: "Web Marketing",
    icon: Megaphone,
    items: ["Sales Marketing", "Landing Pages", "eCommerce", "Analytics"],
  },
];

const portfolio = [
  {
    title: "Pursuing Best",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    description:
      "Far far away, behind the word mountains, there live the blind texts.",
  },
  {
    title: "Coordinates",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    description:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
  },
  {
    title: "Cristall",
    image:
      "https://images.unsplash.com/photo-1520975922215-230d6a0b1071?q=80&w=1600&auto=format&fit=crop",
    description:
      "A large language ocean of ideas and details shaped with clarity.",
  },
  {
    title: "Black",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
    description:
      "Typography-forward, minimal, and bold composition for impact.",
  },
];

const posts = [
  {
    title: "A Japanese Constellation",
    date: "Feb 15, 2018",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown...",
  },
  {
    title: "Road Trip",
    date: "Feb 15, 2018",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia...",
  },
  {
    title: "Art Gallery in Japan",
    date: "Feb 9, 2018",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean...",
  },
];

const testimonials = [
  {
    quote:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    author: "George Brooks",
  },
  {
    quote:
      "Even the all-powerful Pointing has no control about the blind texts...",
    author: "Daniel Foster",
  },
  {
    quote:
      "When she reached the first hills of the Italic Mountains, she had a last view back on the skyline...",
    author: "Liam Jenkins",
  },
];

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}> 
    <div className="container mx-auto px-6 lg:px-8">{children}</div>
  </section>
);

const Header = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
    <div className="container mx-auto px-6 lg:px-8">
      <nav className="flex items-center justify-between py-4">
        <a href="#home" className="font-extrabold tracking-tight text-xl">Noah</a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:shadow-sm"
        >
          <Mail className="w-4 h-4" /> Contact
        </a>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <Section id="home" className="pt-36 md:pt-44 bg-gradient-to-b from-white to-slate-50">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 md:order-1"
      >
        <p className="uppercase tracking-widest text-xs text-gray-500 mb-3">Noah Henderson</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">I'm a Designer</h1>
        <p className="mt-6 text-gray-600 max-w-xl">
          A small river named Duden flows by their place and supplies it with the
          necessary regelialia. It is a paradisematic country, in which roasted parts
          of sentences fly into your mouth.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90"
          >
            Contact Me <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:shadow-sm"
          >
            View Work
          </a>
        </div>
        <div className="mt-10 flex gap-3 text-gray-500">
          <a href="#" aria-label="Twitter" className="hover:text-black"><Twitter className="w-5 h-5" /></a>
          <a href="#" aria-label="GitHub" className="hover:text-black"><Github className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-black"><Linkedin className="w-5 h-5" /></a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="order-1 md:order-2"
      >
        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
            alt="Noah portrait"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
        </div>
      </motion.div>
    </div>
  </Section>
);

const Services = () => (
  <Section id="services">
    <div className="text-center mb-12">
      <p className="uppercase tracking-widest text-xs text-gray-500">Services</p>
      <h2 className="text-3xl md:text-4xl font-extrabold">Here Are Some of My Skills</h2>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(({ id, title, icon: Icon, items }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-xl border">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Work = () => (
  <Section id="work" className="bg-slate-50">
    <div className="flex items-end justify-between mb-8">
      <div>
        <p className="uppercase tracking-widest text-xs text-gray-500">Works</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">Portfolio</h2>
      </div>
      <a href="#" className="text-sm font-medium hover:underline">View all</a>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {portfolio.map((p, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group overflow-hidden rounded-3xl border bg-white shadow-sm"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{p.description}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline">
              View details <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);

const Blog = () => (
  <Section id="blog">
    <div className="text-center mb-12">
      <p className="uppercase tracking-widest text-xs text-gray-500">Blog</p>
      <h2 className="text-3xl md:text-4xl font-extrabold">Our Blog</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-3xl border bg-white shadow-sm hover:shadow-md"
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-6">
            <time className="text-xs uppercase tracking-widest text-gray-500">{post.date}</time>
            <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold hover:underline">
              Read more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);

const Testimonies = () => (
  <Section id="testimonies" className="bg-slate-50">
    <div className="text-center mb-12">
      <p className="uppercase tracking-widest text-xs text-gray-500">Testimonies</p>
      <h2 className="text-3xl md:text-4xl font-extrabold">Clients Say</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <motion.figure
          key={idx}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border bg-white p-8 shadow-sm"
        >
          <Quote className="w-8 h-8 mb-4" />
          <blockquote className="text-gray-700">“{t.quote}”</blockquote>
          <figcaption className="mt-4 font-semibold">— {t.author}</figcaption>
        </motion.figure>
      ))}
    </div>
  </Section>
);

const About = () => (
  <Section id="about">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1520975922215-230d6a0b1071?q=80&w=1600&auto=format&fit=crop"
          alt="Studio"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="uppercase tracking-widest text-xs text-gray-500">About</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">Noah Henderson</h2>
        <p className="mt-6 text-gray-600">
          A small river named Duden flows by their place and supplies it with the necessary
          regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
        <p className="mt-4 text-gray-600">
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
        </p>
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="bg-slate-50">
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <p className="uppercase tracking-widest text-xs text-gray-500">Let's Talk</p>
        <h2 className="text-3xl md:text-4xl font-extrabold">Get in Touch</h2>
        <p className="mt-6 text-gray-600 max-w-prose">
          A small river named Duden flows by their place and supplies. Feel free to reach out
          for collaborations or just a friendly hello.
        </p>
        <div className="mt-8 space-y-2 text-gray-700">
          <p>Email: <a className="font-semibold hover:underline" href="mailto:noah@info.com">noah@info.com</a></p>
          <p>Location: Bookmarksgrove, Semantics</p>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="bg-white rounded-3xl border p-6 shadow-sm">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">First name</label>
            <input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Jane" />
          </div>
          <div>
            <label className="text-sm font-medium">Last name</label>
            <input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Doe" />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium">Email</label>
          <input type="email" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="you@example.com" />
        </div>
        <div className="mt-4">
          <label className="text-sm font-medium">Message</label>
          <textarea rows={5} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Say hello..." />
        </div>
        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90">
          Send Message <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="py-12 border-t">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div>
          <h4 className="font-extrabold text-xl">Noah</h4>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Latest Blog</h5>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>
              <p className="font-medium">Art Gallery in Japan</p>
              <time className="text-xs text-gray-500">February 15, 2018</time>
            </li>
            <li>
              <p className="font-medium">A Japanese Constellation</p>
              <time className="text-xs text-gray-500">February 9, 2018</time>
            </li>
            <li>
              <p className="font-medium">Road Trip</p>
              <time className="text-xs text-gray-500">February 15, 2018</time>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Newsletter</h5>
          <p className="mt-3 text-sm text-gray-600">Subscribe to get occasional updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
            <input className="flex-1 rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="Your email" />
            <button className="rounded-xl border px-4 py-2 text-sm font-semibold hover:shadow-sm">Subscribe</button>
          </form>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} All rights reserved • Template inspired by Colorlib/ThemeWagon "Noah"
      </p>
    </div>
  </footer>
);

export default function NoahPortfolio() {
  React.useEffect(() => {
    // Smooth scroll for internal links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute('href');
      if (hash && hash.length > 1) {
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <Blog />
        <Testimonies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
