import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, User, Book, Mail } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = {
    frontend: [
      { name: 'React', level: 85, icon: '⚛️' },
      { name: 'TypeScript', level: 80, icon: '📘' },
      { name: 'JavaScript', level: 90, icon: '🟨' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'Tailwind CSS', level: 88, icon: '💨' },
      { name: 'Three.js', level: 70, icon: '🎲' }
    ],
    backend: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Java', level: 80, icon: '☕' },
      { name: 'SQL', level: 75, icon: '🗄️' },
      { name: 'Node.js', level: 70, icon: '🟢' },
      { name: 'Git', level: 85, icon: '📊' }
    ],
    tools: [
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'PyCharm', level: 85, icon: '🐍' },
      { name: 'NetBeans', level: 75, icon: '☕' },
      { name: 'Android Studio', level: 80, icon: '🤖' },
      { name: 'Postman', level: 85, icon: '📮' },
      { name: 'GitHub', level: 90, icon: '🐙' },
      { name: 'Photoshop', level: 75, icon: '🎨' },
      { name: 'Power BI', level: 70, icon: '📊' },
      { name: 'MongoDB', level: 65, icon: '🍃' }
    ],
    aiml: [
      { name: 'Machine Learning', level: 75, icon: '🤖' },
      { name: 'OpenCV', level: 70, icon: '👁️' },
      { name: 'YOLO', level: 65, icon: '⚡' },
      { name: 'Data Analysis', level: 80, icon: '📈' },
      { name: 'Computer Vision', level: 70, icon: '📷' }
    ]
  };

  const tabConfigs = [
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: User },
    { id: 'tools', label: 'Tools', icon: Book },
    { id: 'aiml', label: 'AI/ML', icon: Mail }
  ];

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className="p-6 glass-card hover-glow transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h4 className="text-lg font-semibold text-portfolio-text">{skill.name}</h4>
        </div>
        <span className="text-portfolio-accent font-semibold">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-portfolio-gray-light rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-accent-secondary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-portfolio-gray rounded-xl p-2">
            {tabConfigs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex items-center space-x-2 data-[state=active]:bg-portfolio-accent data-[state=active]:text-white transition-all duration-300"
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
