import { portfolioData } from '../data';
import { Phone, AtSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { profile } = portfolioData;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary-container/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="block font-label text-xs uppercase tracking-widest text-primary font-bold">
                {profile.title}
              </span>
              <h1 className="font-headline text-6xl md:text-8xl leading-tight text-on-surface">
                {profile.name.split(' ')[0]} <span className="italic text-primary">{profile.name.split(' ')[1]}</span> <br />
                {profile.lastName}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed font-light">
              {profile.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/projects" className="px-8 py-4 bg-primary text-on-primary rounded-full shadow-editorial hover:opacity-90 transition-all text-lg font-medium">
                Explore My Work
              </Link>
              <a href="#about" className="px-8 py-4 bg-surface-container-highest text-primary rounded-full hover:bg-surface-container-low transition-all text-lg font-medium">
                Learn More
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-editorial bg-surface-container-highest">
              <img 
                src={profile.heroImage} 
                alt={`Portrait of ${profile.name}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface p-6 rounded-lg shadow-editorial hidden md:block">
              <p className="font-headline italic text-2xl text-primary">{profile.role}</p>
              <p className="font-label text-xs uppercase tracking-tighter text-secondary opacity-60">{profile.subRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-lg overflow-hidden shadow-editorial">
                <img 
                  src={profile.about.image1} 
                  alt="Academic Excellence" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-editorial">
                <img 
                  src={profile.about.image3} 
                  alt="Creative Process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-editorial">
                <img 
                  src={profile.about.image4} 
                  alt="Behind the scenes" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-editorial">
                <img 
                  src={profile.about.image2} 
                  alt="Creative Spirit" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <div className="space-y-4">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Behind The Portfolio</span>
              <h2 className="font-headline text-5xl leading-tight">
                Turning Passion Into Real<span className="italic"> Opportunities.</span>
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                {profile.about.description1}
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                {profile.about.description2}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 border-t border-primary/10 pt-8">
              {profile.about.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-headline text-primary">{stat.value}</p>
                  <p className="font-label text-xs uppercase tracking-widest text-secondary/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {profile.about.gallery?.map((img, idx) => (
              <div 
                key={idx} 
                className={`rounded-lg overflow-hidden shadow-editorial ${
                  idx % 3 === 0 ? 'aspect-square' : 'aspect-[4/5]'
                } ${idx % 2 !== 0 ? 'md:mt-8' : ''}`}
              >
                <img 
                  src={img} 
                  alt={`Behind the scenes ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <div className="space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Contact</span>
            <h2 className="font-headline text-6xl">Let's <span className="italic text-primary">Collaborate</span></h2>
            <p className="text-xl text-secondary">Open for photography bookings, modeling projects, and custom nail orders.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <a href={`https://wa.me/${profile.contact.phone.replace(/^0/, '62')}`} target="_blank" rel="noreferrer" className="p-8 bg-surface-container-low rounded-lg flex items-center gap-6 hover:bg-primary-container/20 transition-all group">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-secondary/60">Phone</p>
                <p className="text-xl font-medium text-primary">{profile.contact.phone}</p>
              </div>
            </a>
            <a href={`https://instagram.com/${profile.contact.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="p-8 bg-surface-container-low rounded-lg flex items-center gap-6 hover:bg-primary-container/20 transition-all group">
              <AtSign className="w-8 h-8 text-primary" />
              <div>
                <p className="font-label text-xs uppercase tracking-widest text-secondary/60">Instagram</p>
                <p className="text-xl font-medium text-primary">{profile.contact.instagram}</p>
              </div>
            </a>
          </div>
          
          <div className="pt-12 border-t border-primary/10">
            <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary/60 mb-8">Follow my creative spaces</p>
            <div className="flex flex-wrap justify-center gap-12">
              {profile.contact.socials.map((social, idx) => (
                <a key={idx} href={`https://instagram.com/${social.handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors flex flex-col items-center gap-2">
                  <span className="text-lg font-headline italic">{social.handle}</span>
                  <span className="font-label text-[10px] uppercase tracking-widest opacity-50">{social.type}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
