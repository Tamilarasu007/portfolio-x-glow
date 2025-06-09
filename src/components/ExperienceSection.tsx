
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Book, Code, User, Mail } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = {
    education: [
      {
        title: "Bachelor of Science in Computer Science",
        organization: "Sri Ramakrishna College of Arts & Science",
        location: "Coimbatore",
        period: "2022 - 2025",
        details: [
          "CGPA: 8.3/10",
          "Focused on algorithms, data structures, and software engineering",
          "Active participation in tech clubs and coding competitions"
        ],
        type: "education"
      },
      {
        title: "Higher Secondary Certificate (HSC), Class XII",
        organization: "GRG Matriculation Higher Secondary School",
        location: "Coimbatore",
        period: "2020 - 2022",
        details: [
          "Score: 72.3%",
          "Mathematics and Computer Science specialization",
          "Foundation in programming and problem-solving"
        ],
        type: "education"
      }
    ],
    experience: [
      {
        title: "Networks Intern",
        organization: "Internet Society",
        location: "Coimbatore",
        period: "May 2024 - Nov 2024",
        details: [
          "Configured and optimized network infrastructure using TCP/IP, DNS, DHCP and VLANs",
          "Collaborated with network engineers to implement advanced routing protocols",
          "Gained hands-on experience in network troubleshooting and issue resolution"
        ],
        type: "internship"
      },
      {
        title: "Web Development Intern",
        organization: "Clover Technologies",
        location: "Coimbatore",
        period: "Jun 2024 - Nov 2024",
        details: [
          "Developed responsive web applications using HTML, CSS, and JavaScript",
          "Collaborated with senior developers on client projects",
          "Implemented modern web development best practices"
        ],
        type: "internship"
      },
      {
        title: "Business Development Associate",
        organization: "Tech Vedhu",
        location: "Coimbatore",
        period: "April 2025 - June 2025",
        details: [
          "Helped students to decide the Courses for them to Join",
          "Developed communication and client relationship skills",
          "Gained insight into technology education sector"
        ],
        type: "part-time"
      }
    ],
    certifications: [
      {
        title: "TCS ION Career Edge-Young Professional",
        organization: "TCS ION",
        period: "May 2023",
        details: ["Professional development and career readiness"],
        type: "certification"
      },
      {
        title: "Internet Society - Design and deploy a simple lan and Wifi network",
        organization: "Internet Society",
        period: "Aug 2024",
        details: ["Network design and implementation"],
        type: "certification"
      },
      {
        title: "MyCaptain - Python Programming Course",
        organization: "MyCaptain",
        period: "Feb 2023",
        details: ["Python fundamentals and programming concepts"],
        type: "certification"
      },
      {
        title: "MyCaptain - Data Analytics With Python",
        organization: "MyCaptain",
        period: "Mar 2023",
        details: ["Data analysis and visualization with Python"],
        type: "certification"
      },
      {
        title: "Tata Strive - Cyber Security course",
        organization: "Tata Strive",
        period: "Aug 2024",
        details: ["Cybersecurity fundamentals and best practices"],
        type: "certification"
      },
      {
        title: "IBM - Data Visualization with R",
        organization: "IBM",
        period: "Mar 2024",
        details: ["R programming for data visualization"],
        type: "certification"
      }
    ]
  };

  const tabConfigs = [
    { id: 'education', label: 'Education', icon: Book },
    { id: 'experience', label: 'Experience', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: User }
  ];

  const TimelineItem = ({ item }: { item: any }) => (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-portfolio-gray-light"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-portfolio-accent border-2 border-portfolio-dark"></div>
      
      <div className="glass-card p-6 hover-glow transition-all duration-300">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-portfolio-text mb-1">
              {item.title}
            </h3>
            <p className="text-portfolio-accent font-medium">
              {item.organization}
              {item.location && <span className="text-portfolio-text-muted"> • {item.location}</span>}
            </p>
          </div>
          <Badge variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20 mt-2 lg:mt-0">
            {item.period}
          </Badge>
        </div>
        
        <ul className="space-y-2">
          {item.details.map((detail: string, index: number) => (
            <li key={index} className="text-portfolio-text-muted flex items-start">
              <span className="text-portfolio-accent mr-2 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            My journey through academics, professional experience, and continuous learning
          </p>
        </div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-12 bg-portfolio-gray rounded-xl p-2">
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

          {Object.entries(experiences).map(([category, items]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="relative">
                {items.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
