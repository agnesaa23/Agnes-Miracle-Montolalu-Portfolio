import { portfolioData } from '../data';

export default function Footer() {
  return (
    <footer className="w-full rounded-t-[2rem] mt-20 bg-primary/5">
      <div className="flex flex-col lg:flex-row justify-between items-center px-8 md:px-12 py-12 md:py-16 gap-10 lg:gap-8 w-full max-w-7xl mx-auto">
        <div className="text-center lg:text-left space-y-2">
          <p className="font-headline italic text-lg text-primary">{portfolioData.profile.name} {portfolioData.profile.lastName}</p>
          <p className="font-label text-xs uppercase tracking-widest text-secondary/70">
            © {portfolioData.profile.name} {portfolioData.profile.lastName}. The Editorial Entrepreneur.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-8">
          <a href={`https://instagram.com/${portfolioData.profile.contact.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-secondary/70 hover:text-primary transition-colors font-label text-xs uppercase tracking-widest whitespace-nowrap">
            {portfolioData.profile.contact.instagram}
          </a>
          {portfolioData.profile.contact.socials.map((social, idx) => (
            <a key={idx} href={`https://instagram.com/${social.handle.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-secondary/70 hover:text-primary transition-colors font-label text-xs uppercase tracking-widest whitespace-nowrap">
            {social.handle}
            </a>
          ))}
        </div>
        <div className="text-xs uppercase tracking-widest text-secondary/70 font-label text-center lg:text-right">
          SMAK Frateran Surabaya
        </div>
      </div>
    </footer>
  );
}
