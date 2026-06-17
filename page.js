import Image from 'next/image';
import Link from 'next/link';
import { Flame, Users, Trophy, Dumbbell, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    desc: 'State-of-the-art machines and free weights to power every kind of workout.',
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    desc: 'Certified coaches who build real, personalized plans — not cookie-cutter routines.',
  },
  {
    icon: Clock,
    title: 'Open Early to Late',
    desc: 'Flexible hours that fit your schedule, whether you train at dawn or midnight.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    desc: 'Thousands of transformations backed by tracked progress and real accountability.',
  },
];

const classes = [
  {
    title: 'Strength Training',
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
    desc: 'Build raw power with barbells, racks, and progressive overload programs.',
  },
  {
    title: 'HIIT & Cardio',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
    desc: 'High-intensity sessions designed to torch fat and boost endurance fast.',
  },
  {
    title: 'Group Classes',
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    desc: 'Train alongside a motivated community in energetic, coach-led sessions.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Gym training floor"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />

        <div className="relative z-10 text-center px-5 max-w-4xl animate-fade-up">
          <p className="uppercase tracking-[0.3em] text-primary font-semibold text-sm mb-4">
            Lahore&apos;s Premier Training Facility
          </p>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl leading-none mb-6">
            TRAIN HARD.<br />
            <span className="text-gradient">LIVE STRONG.</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-9">
            Unlock your strongest self with elite coaching, premium equipment, and a
            community that pushes you further every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primaryDark transition-all duration-200 hover:scale-105 text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-md flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="border border-white/30 hover:border-primary hover:text-primary transition-all duration-200 text-white font-semibold uppercase tracking-widest text-sm px-8 py-4 rounded-md flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <span className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['10+', 'Years Running'],
            ['5,000+', 'Members Trained'],
            ['30+', 'Weekly Classes'],
            ['15', 'Expert Coaches'],
          ].map(([num, label]) => (
            <div key={label}>
              <p className="font-heading text-4xl sm:text-5xl">{num}</p>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-white/90 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-pad px-5 sm:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold text-sm mb-3">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl">
              EVERYTHING YOU NEED TO <span className="text-gradient">LEVEL UP</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-surface border border-white/5 rounded-xl p-7 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-primary/10 group-hover:bg-primary transition-colors duration-300 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Icon size={26} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl mb-2 tracking-wide">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section className="section-pad px-5 sm:px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold text-sm mb-3">
              Our Programs
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl">
              FIND YOUR <span className="text-gradient">PERFECT TRAINING</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {classes.map(({ title, img, desc }) => (
              <div
                key={title}
                className="relative rounded-xl overflow-hidden h-96 group cursor-pointer"
              >
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-heading text-2xl mb-2 tracking-wide">{title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20 transition-all duration-300 overflow-hidden">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop"
          alt="Gym equipment"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Flame className="text-primary mx-auto mb-5" size={42} />
          <h2 className="font-heading text-4xl sm:text-5xl mb-5">
            READY TO START YOUR <span className="text-gradient">TRANSFORMATION?</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Join IronCore today and get your first week completely free. No commitment, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-2">
            {['No Contracts', 'Certified Trainers', 'Flexible Plans'].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 size={16} className="text-primary" /> {t}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex mt-6 bg-primary hover:bg-primaryDark transition-all duration-200 hover:scale-105 text-white font-semibold uppercase tracking-widest text-sm px-9 py-4 rounded-md items-center gap-2"
          >
            Claim Your Free Week <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
