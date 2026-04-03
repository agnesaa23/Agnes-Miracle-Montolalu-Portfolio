import { portfolioData } from '../data';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <div className="w-full">
      <div className="pt-20 pb-12 text-center">
        <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Selected Works</span>
        <h2 className="font-headline text-5xl mt-4">Creative <span className="italic">&</span> Academic Projects</h2>
      </div>

      {projects.map((project, index) => (
        <section 
          key={project.id} 
          className={`py-24 ${index % 2 !== 0 ? 'bg-surface-container-low' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
              <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                {project.category}
              </span>
              <h2 className="font-headline text-4xl md:text-5xl">
                {project.title}
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {project.gallery?.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-lg overflow-hidden shadow-editorial ${
                    idx % 3 === 0 ? 'aspect-square' : 'aspect-[4/5]'
                  } ${idx % 2 !== 0 ? 'md:mt-8' : ''}`}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} - Image ${idx + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
