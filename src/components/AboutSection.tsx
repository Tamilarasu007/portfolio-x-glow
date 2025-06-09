
import { Code, Book, User } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, efficient code"
    },
    {
      icon: Book,
      title: "Continuous Learner",
      description: "Always exploring new technologies and frameworks"
    },
    {
      icon: User,
      title: "Team Player",
      description: "Experienced in collaborative development environments"
    }
  ];

  return (
    <section className="section-padding bg-portfolio-gray/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Driven by curiosity and powered by code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-portfolio-accent to-portfolio-accent-secondary p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/305d0a7d-7584-4f2d-8ae5-3918f56b45c8.png" 
                    alt="Tamilarasu K - Profile Picture"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-portfolio-accent-secondary/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-portfolio-text">
                Hello! I'm Tamilarasu K
              </h3>
              <p className="text-portfolio-text-muted leading-relaxed mb-6">
                I completed my Bachelor of Science in Computer Science at Sri Ramakrishna College of Arts & Science, 
                Coimbatore. With a strong foundation in programming and web development, I'm passionate about creating 
                innovative solutions that make a difference.
              </p>
              <p className="text-portfolio-text-muted leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI tools, contributing to 
                open-source projects, or listening to lo-fi music while debugging. I believe in the power of clean code 
                and continuous learning to build better software.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl glass-card hover-glow transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-portfolio-accent/10">
                    <highlight.icon className="w-6 h-6 text-portfolio-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-text mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-portfolio-text-muted">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
