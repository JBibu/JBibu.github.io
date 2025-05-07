"use client";

import { useState, useEffect } from "react";
import { Navbar1 } from "@/components/Navbar1";
import { 
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin // Added for location
} from "lucide-react";
import Image from "next/image";

import Particles from "@/components/Particles";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Modify the Navbar1 component to have acrylic effect
const AcrylicNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Custom navbar props
  const navbarProps = {
    logo: {
      url: "/",
      src: "/favicon.ico",
      alt: "Portfolio Logo",
      title: "Javi Dev.",
    },
    menu: [
      { title: "Home", url: "#home" },
      { title: "About", url: "#about" },
      { title: "Projects", url: "#projects" },
      { title: "Skills", url: "#skills" },
      { title: "Contact", url: "#contact" },
    ],
    auth: {
      login: { title: "Resume", url: "#resume" },
      signup: { title: "Contact Me", url: "#contact" },
    },
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/10 backdrop-blur-lg backdrop-saturate-150 shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <Navbar1 {...navbarProps} />
      </div>
    </div>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      {/* Add Particles component as background */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={150}
        staticity={30}
        color="#9ca3af"
        size={0.8}
      />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="inline-block">
                System Administrator & Aspiring Full Stack Developer
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Javier Muñoz Solano
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Building efficient, scalable systems with a passion for DevOps and web application development.
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                <MapPin className="h-4 w-4" />
                <span>Murcia, Spain</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                View Projects
              </Button>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/JBibu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/jbibu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:javier@munozsolano.com" aria-label="Email">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-800 md:w-[400px]">
              <Avatar className="h-full w-full">
                <AvatarImage src="/avatar.jpg" alt="Javier Muñoz Solano" />
                <AvatarFallback>JMS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 relative">
      {/* Add Particles with gray color for About section */}
      <Particles
        className="absolute inset-0 -z-10 opacity-30"
        quantity={100}
        staticity={50}
        color="#9ca3af"
        size={0.4}
      />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m an aspiring full-stack developer and system administrator with a solid foundation in IT infrastructure and a passion for DevOps. 
              Currently pursuing advanced training in web application development, focused on building both front-end and back-end solutions.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              I&apos;m enthusiastic about automation, clean configurations, and creating efficient, scalable systems.
              My professional interests include connecting infrastructure with code, developing reliable systems, 
              and continuously expanding my knowledge in both DevOps and web development.
            </p>
            <div className="mt-6 space-y-2">
              <h3 className="text-xl font-bold">Languages</h3>
              <div className="flex gap-2">
                <Badge>Spanish (Native)</Badge>
                <Badge>English (Fluent/Bilingual)</Badge>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Experience & Education</h3>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>System Administrator</CardTitle>
                  <CardDescription>C3i Servicios Informáticos • Current (Part-time)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Applying knowledge of infrastructure while simultaneously learning and refining development skills.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web (DAW)</CardTitle>
                  <CardDescription>CIFP Carlos III, Murcia • 2023 - 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Focus on full-stack web development, covering both front-end and back-end technologies.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ciclo de Grado Medio en Sistemas Microinformáticos y Redes (SMR)</CardTitle>
                  <CardDescription>IES Ingeniero De la Cierva, Murcia • 2021 - 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Completed in-depth coursework on microcomputer systems and networks.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Tailwind CSS, and Stripe for payments.",
      image: "/project1.jpg",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills, built with React and Three.js.",
      image: "/project2.jpg",
      tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks and projects, with real-time collaboration features.",
      image: "/project3.jpg",
      tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-16 relative">
      {/* Add Particles with gray color for Projects section */}
      <Particles
        className="absolute inset-0 -z-10 opacity-30"
        quantity={80}
        staticity={70}
        color="#9ca3af"
        size={0.5}
      />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-all hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button size="sm" className="gap-1">
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = {
    devops: ["Linux", "Windows", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Jenkins", "Ansible", "Prometheus", "Grafana", "Nginx", "PostgreSQL", "S3"],
    development: ["HTML", "CSS", "JavaScript", "Tailwind", "Angular", "Python", "Java", "PHP (Laravel)", "Node.js", "WordPress", "Postman", "Electron"],
    learning: ["Rust", "React", "TypeScript", "Godot"]
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 relative">
      {/* Add Particles with gray color for Skills section */}
      <Particles
        className="absolute inset-0 -z-10 opacity-20"
        quantity={120}
        staticity={40}
        color="#9ca3af"
        size={0.3}
      />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              These are the technologies and tools I work with.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="devops" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="devops">DevOps & Infrastructure</TabsTrigger>
              <TabsTrigger value="development">Web Development</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
            </TabsList>
            <TabsContent value="devops" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.devops.map((skill, index) => (
                  <Card key={index} className="flex items-center justify-center p-4">
                    <p className="text-center font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="development" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.development.map((skill, index) => (
                  <Card key={index} className="flex items-center justify-center p-4">
                    <p className="text-center font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="learning" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillCategories.learning.map((skill, index) => (
                  <Card key={index} className="flex items-center justify-center p-4">
                    <p className="text-center font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-16 relative">
      {/* Add Particles with gray color for Contact section */}
      <Particles
        className="absolute inset-0 -z-10 opacity-30"
        quantity={90}
        staticity={60}
        color="#9ca3af"
        size={0.4}
      />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>javier@munozsolano.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/jbibu</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span>github.com/JBibu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Murcia, Spain</span>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" className="w-full rounded-md border border-gray-300 p-2" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" className="w-full rounded-md border border-gray-300 p-2" placeholder="Your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input id="subject" className="w-full rounded-md border border-gray-300 p-2" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" className="min-h-[120px] w-full rounded-md border border-gray-300 p-2" placeholder="Your message" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-500 dark:text-gray-400">© 2025 Javier Muñoz Solano. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/JBibu" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/jbibu" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:javier@munozsolano.com">
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen mx-auto">
      <AcrylicNavbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
