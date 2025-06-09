
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github, Code } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "2D to 3D Shape Converter",
      description: "Built a web application that converts 2D images into 3D models by detecting contours using OpenCV.js and extruding them with Three.js.",
      longDescription: "This innovative project combines computer vision with 3D graphics to transform 2D images into interactive 3D models. The application uses advanced contour detection algorithms to identify shapes and automatically generates realistic 3D representations with customizable extrusion parameters.",
      tech: ["JavaScript", "Three.js", "OpenCV.js", "WebGL"],
      category: "web",
      image: "🎲",
      features: [
        "Real-time contour detection using OpenCV.js",
        "Interactive 3D model generation with Three.js",
        "Drag-and-drop interface with light/dark themes",
        "Export support in OBJ and GLTF formats"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Anomaly Detection Application",
      description: "Created an Anomaly Detection Application to help users track number of people entering or exiting inside a room space.",
      longDescription: "A sophisticated Python-based application designed for real-time monitoring and anomaly detection in space occupancy. The system provides accurate tracking and alerts for unusual patterns in foot traffic.",
      tech: ["Python", "OpenCV", "ML"],
      category: "ai",
      image: "🔍",
      features: [
        "Real-time people counting and tracking",
        "Anomaly detection algorithms",
        "Space occupancy monitoring",
        "Alert system for unusual patterns"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Media Downloader",
      description: "Developed a Python application that downloads YouTube videos or extracts audio as MP3 with metadata tagging.",
      longDescription: "A comprehensive media downloading solution that provides high-quality video and audio extraction from YouTube with advanced metadata management and organization features.",
      tech: ["Python", "yt-dlp", "GUI"],
      category: "app",
      image: "📱",
      features: [
        "High-quality video downloads",
        "Audio extraction to MP3 format",
        "Automatic metadata tagging",
        "Batch download capabilities"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Android Music Player",
      description: "Designed a basic music player app for Android that scans local storage, lists .mp3 files, and allows playback from selected folders.",
      longDescription: "A clean and intuitive Android music player focused on simplicity and performance. Features local music library management with folder-based organization and smooth playback experience.",
      tech: ["Java", "Android SDK", "XML"],
      category: "mobile",
      image: "🎵",
      features: [
        "Local storage scanning",
        "Folder-based music organization",
        "Smooth audio playback",
        "Material design interface"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "QR Code Scanner",
      description: "Built a lightweight Android app for real-time scanning of QR codes and barcodes using Google ML Kit and CameraX API.",
      longDescription: "A fast and reliable QR code scanning application built with modern Android technologies. Features real-time detection with camera preview and support for various barcode formats.",
      tech: ["Java", "ML Kit", "CameraX"],
      category: "mobile",
      image: "📱",
      features: [
        "Real-time QR/barcode detection",
        "Camera preview integration",
        "Multiple format support",
        "Scan history storage"
      ],
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Vehicle Detection System",
      description: "Built an automated system to detect vehicles from highway traffic video using the YOLOv5 object detection model.",
      longDescription: "An advanced computer vision system for traffic monitoring and analysis. Processes highway video feeds to identify and track different vehicle types with high accuracy and performance optimization.",
      tech: ["Python", "YOLOv5", "OpenCV"],
      category: "ai",
      image: "🚗",
      features: [
        "Real-time vehicle detection",
        "Multiple vehicle type classification",
        "Traffic density analysis",
        "Performance optimization for real-time processing"
      ],
      github: "#",
      demo: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'app', label: 'Desktop' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="glass-card hover-glow p-6 group transition-all duration-300 hover:scale-105">
      <div className="text-6xl mb-4 text-center">{project.image}</div>
      
      <h3 className="text-xl font-semibold text-portfolio-text mb-3 group-hover:text-portfolio-accent transition-colors">
        {project.title}
      </h3>
      
      <p className="text-portfolio-text-muted mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech: string, index: number) => (
          <Badge key={index} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20">
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90 flex-1">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl bg-portfolio-gray border-portfolio-gray-light">
            <DialogHeader>
              <DialogTitle className="text-2xl text-portfolio-text">{project.title}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="text-center text-6xl">{project.image}</div>
              
              <p className="text-portfolio-text-muted leading-relaxed">
                {project.longDescription}
              </p>

              <div>
                <h4 className="text-lg font-semibold text-portfolio-text mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="text-portfolio-text-muted flex items-start">
                      <span className="text-portfolio-accent mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-portfolio-text mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button className="bg-portfolio-accent hover:bg-portfolio-accent/90 flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                <Button variant="outline" className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white flex-1">
                  <Code className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-portfolio-gray/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            A showcase of my development journey and technical expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
                  : "border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
