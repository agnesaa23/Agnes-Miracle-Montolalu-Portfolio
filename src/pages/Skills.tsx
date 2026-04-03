import { portfolioData } from '../data';
import { Brush, User, Camera, Award } from 'lucide-react';

export default function Skills() {
  const { skills, achievements } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'brush': return <Brush className="w-8 h-8" />;
      case 'face': return <User className="w-8 h-8" />;
      case 'camera': return <Camera className="w-8 h-8" />;
      default: return <Award className="w-8 h-8" />;
    }
  };

  return (
    <div className="w-full">
      {/* What I Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">My Expertise</span>
            <h2 className="font-headline text-5xl italic">Journey of My Portfolio</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.id}
                className={`p-10 rounded-lg space-y-6 transition-all duration-300 hover:-translate-y-2 group ${
                  index % 2 === 0 ? 'bg-surface-container-highest' : 'bg-surface-container-low'
                }`}
              >
                <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-primary shadow-editorial group-hover:scale-110 transition-transform">
                  {getIcon(skill.icon)}
                </div>
                <h3 className="font-headline text-2xl">{skill.title}</h3>
                <p className="text-secondary leading-relaxed font-body">{skill.description}</p>
                <ul className="text-sm text-primary space-y-2 font-body">
                  {skill.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Recognition</span>
              <h2 className="font-headline text-5xl">Awards & <span className="italic">Competitions</span></h2>
            </div>
            <div className="max-w-md text-secondary text-right font-body">
              Reflecting a commitment to academic rigor and national excellence across various disciplines.
            </div>
          </div>
          
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center justify-between p-8 bg-surface rounded-lg hover:bg-surface-container-highest transition-colors group shadow-sm">
                <div className="flex items-center gap-8">
                  <span className="text-primary/20 font-headline text-4xl group-hover:text-primary transition-colors">
                    {achievement.id}
                  </span>
                  <div>
                    <h4 className="text-xl font-headline">{achievement.title}</h4>
                    <p className="text-secondary/60 font-body mt-1">{achievement.subtitle}</p>
                  </div>
                </div>
                <Award className="text-primary opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
