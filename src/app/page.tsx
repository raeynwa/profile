'use client';

import React, { useState, useEffect, useRef } from 'react';

// --- SVG Icons (as components for reusability) ---
// Using inline SVGs for specific tech logos as lucide-react or other libraries aren't available in this environment.

const HtmlIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const CssIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

const JavascriptIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2z" />
    <path d="M8 9h3v6H8z" />
    <path d="M15.5 12c0-1.5-1.12-2.5-2.5-2.5h-1V15h1c1.38 0 2.5-1.5 2.5-2.5z" />
  </svg>
);

const PhpIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="12" rx="10" ry="7" />
    <path d="M7 15V9h2.5a2.5 2.5 0 1 1 0 5H7" />
    <path d="M12.5 15V9h2.5a2.5 2.5 0 1 1 0 5H12.5" />
    <path d="M18 15V9h2.5a2.5 2.5 0 1 1 0 5H18" />
  </svg>
);

const LaravelIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
    <line x1="16" y1="8" x2="2" y2="22"></line>
    <line x1="17.5" y1="15" x2="9" y2="15"></line>
  </svg>
);

const NextjsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 15V9l7.7 10.5A9 9 0 1 1 9 9Z" />
  </svg>
);


const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const ServerIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const GitBranchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="6" y1="3" x2="6" y2="15"></line>
    <circle cx="18" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <path d="M18 9a9 9 0 0 1-9 9"></path>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);


// Custom hook to detect when an element is on screen
const useOnScreen = (ref: React.RefObject<Element | null>, options?: IntersectionObserverInit): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};


// --- Main App Component ---
export default function App() {
  const skills = [
    { name: 'HTML', icon: <HtmlIcon className="w-8 h-8" /> },
    { name: 'CSS', icon: <CssIcon className="w-8 h-8" /> },
    { name: 'JavaScript', icon: <JavascriptIcon className="w-8 h-8" /> },
    { name: 'Next.js', icon: <NextjsIcon className="w-8 h-8" /> },
    { name: 'PHP', icon: <PhpIcon className="w-8 h-8" /> },
    { name: 'Laravel', icon: <LaravelIcon className="w-8 h-8" /> },
    { name: 'PostgreSQL', icon: <DatabaseIcon className="w-8 h-8" /> },
    { name: 'Git', icon: <GitBranchIcon className="w-8 h-8" /> },
    { name: 'VPS Management', icon: <ServerIcon className="w-8 h-8" /> },
  ];

  const projects = [
    {
      title: "Lab BK UIN Banten - Psychometric Testing Platform",
      description: "Developed a comprehensive psychometric testing platform for UIN Banten, featuring various psychological assessments including RIASEC, DISC, DCM, VAK, and Sociometry tests. The system enables students to complete assessments and provides detailed analytical reports for counselors.",
      tags: ["Next.js", "Laravel", "PostgreSQL"],
      link: "https://labbkpi.id"
    },
    {
      title: "PMB Ma’soem University",
      description: "Developed a streamlined online admission portal for new students, handling the entire registration process from form submission, document uploads, and implementing a payment gateway for admission fees, to selection announcements.",
      tags: ["Laravel", "PostgreSQL", "JavaScript"],
      link: "https://pmb.masoemuniversity.com"
    },
    {
      title: "Ma'soem University Academic & Finance Portal",
      description: "Built a comprehensive academic and financial portal for students and staff, managing course registration, grade viewing, tuition payments via an integrated payment gateway, and academic progress tracking.",
      tags: ["Laravel", "PostgreSQL", "JavaScript"],
      link: "https://siakad.masoemuniversity.com"
    },
    {
      title: "Telemarketing Ma’soem",
      description: "Engineered a dedicated platform for the telemarketing team to manage leads, track call activities, and analyze performance metrics for targeted outreach campaigns.",
      tags: ["Laravel", "PostgreSQL", "JavaScript"],
      link: "https://telemarketing.masoemuniversity.com"
    },
    {
      title: "Ma'soem Run",
      description: "Created a web application for the 'Ma'soem Run' event, featuring user registration, race information, participant management, and a secure payment gateway for registration fees.",
      tags: ["Laravel", "MySQL", "JavaScript"],
      link: "https://run.masoemuniversity.com"
    },
    {
      title: "SIPS Al Ma'soem (Al Ma'soem School Enrolment)",
      description: "Designed and implemented an online enrollment system for Al Ma'soem school, simplifying the admission process for parents and administrators, including an integrated payment gateway for enrollment fees.",
      tags: ["Laravel", "MySQL", "JavaScript"],
      link: "https://sips.almasoem.com"
    },
    {
      title: "Al Ma'soem Parents Info",
      description: "A dedicated portal for parents to monitor their child's academic progress, view attendance records, receive important announcements, and handle tuition payments through a secure payment gateway.",
      tags: ["Laravel", "MySQL", "JavaScript"],
      link: "https://api.almasoem.com"
    },
    {
      title: "SMPN 2 Cicalengka Web Profile",
      description: "Developed the official school profile website for SMPN 2 Cicalengka, showcasing school information, news, extracurricular activities, and contact details.",
      tags: ["NextJs", "MySQL"],
      link: "https://smpn2cicalengka.vercel.app"
    },
    {
      title: "Point Of Sales Koperasi MBS Mataram",
      description: "Built a custom Point of Sales (POS) system for Koperasi MBS Mataram, tailored to manage cooperative sales, member transactions, and inventory control.",
      tags: ["Laravel", "MySQL", "JavaScript"],
      link: "https://pos.koperasimbs.com"
    },
    {
      title: "Point Of Sales CV. Harmoni Family Bandung",
      description: "Delivered a complete POS solution for CV. Harmoni Family, enabling efficient sales processing, real-time inventory tracking, and detailed sales reporting to support business growth.",
      tags: ["Laravel", "MySQL", "JavaScript"],
      link: "https://harmonifamily.com"
    }
  ];

  // Refs for scroll animation
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);

  const isSkillsVisible = useOnScreen(skillsRef, { threshold: 0.1 });
  const isProjectsVisible = useOnScreen(projectsRef, { threshold: 0.1 });
  const isExperienceVisible = useOnScreen(experienceRef, { threshold: 0.1 });

  return (
    <div className="bg-[#111111] text-[#FAFAFA] font-sans leading-relaxed">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111] bg-opacity-80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white transition duration-300 hover:text-[#AA0632]">
            Raey Maulana Yunus
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#skills" className="text-lg transition duration-300 hover:text-[#AA0632]">Skills</a>
            <a href="#projects" className="text-lg transition duration-300 hover:text-[#AA0632]">Projects</a>
            <a href="#experience" className="text-lg transition duration-300 hover:text-[#AA0632]">Experience</a>
            <a href="#contact" className="text-lg transition duration-300 hover:text-[#AA0632]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Delivering <span className="text-[#AA0632]">Digital Solutions</span> to Modernize Your Business
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Hi, I&#39;m Raey, a software engineer with expertise in building end-to-end systems including Point of Sales, Inventory Management, and Academic Information Systems for universities and schools. Let&#39;s work together to find solutions to your challenges.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <a href="#contact" className="bg-[#AA0632] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-red-800 transform hover:scale-105">
                Get In Touch
              </a>
              <a href="/api/download" target="_blank" rel="noopener noreferrer" className="border-2 border-[#AA0632] text-[#AA0632] font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-[#AA0632] hover:text-white transform hover:scale-105 flex items-center">
                <DownloadIcon className="w-5 h-5 mr-2" />
                View CV
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={skillsRef}
          className={`py-20 transition-all duration-1000 ease-in-out ${isSkillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2">Technical Skills</h2>
            <div className="w-24 h-1 bg-[#AA0632] mx-auto mb-12"></div>
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {skills.map((skill, index) => (
                <div key={index} className="bg-[#222222] p-6 rounded-lg flex flex-col items-center justify-center transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#AA0632]/20 hover:bg-[#AA0632]">
                  {skill.icon}
                  <span className="text-lg font-medium mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className={`py-20 bg-[#1a1a1a] transition-all duration-1000 ease-in-out ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2">Projects</h2>
            <div className="w-24 h-1 bg-[#AA0632] mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#222222] rounded-lg overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl hover:shadow-[#AA0632]/30 transform hover:-translate-y-1 flex flex-col">
                  <div className="p-6 flex-grow">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-[#333] text-sm text-[#AA0632] font-semibold px-3 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#AA0632] text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out hover:bg-red-800 transform hover:scale-105">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={experienceRef}
          className={`py-20 bg-[#111111] transition-all duration-1000 ease-in-out ${isExperienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-2">Work Experience</h2>
            <div className="w-24 h-1 bg-[#AA0632] mx-auto mb-12"></div>
            <div className="max-w-4xl mx-auto relative border-l-2 border-[#AA0632] pl-10 space-y-12">
              {/* Timeline Item */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1.5 w-4 h-4 bg-[#AA0632] rounded-full border-4 border-[#111111]"></div>
                <p className="text-[#AA0632] font-semibold text-lg">Nov 2022 - Present</p>
                <h3 className="text-2xl font-bold mt-1">Project Manager</h3>
                <p className="text-gray-400 mb-2">Yayasan Al Ma&#39;soem Bandung</p>
                <p className="text-gray-300">
                  Overseeing all aspects of software development, from system analysis and backend/frontend development to quality control. Responsible for team management, ensuring performance aligns with targets, and maintaining clear communication with stakeholders for smooth project execution.
                </p>
              </div>
              {/* Timeline Item */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1.5 w-4 h-4 bg-[#AA0632] rounded-full border-4 border-[#111111]"></div>
                <p className="text-[#AA0632] font-semibold text-lg">Dec 2019 - Nov 2022</p>
                <h3 className="text-2xl font-bold mt-1">Full Stack Engineer</h3>
                <p className="text-gray-400 mb-2">Yayasan Al Ma&#39;soem Bandung</p>
                <p className="text-gray-300">
                  Gathered user needs, created detailed project briefs, and coordinated with the team to analyze, design, and implement solutions. Handled both front-end and back-end development, database design, and deployment to ensure applications were efficient and maintainable.
                </p>
              </div>
              {/* Timeline Item */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1.5 w-4 h-4 bg-[#AA0632] rounded-full border-4 border-[#111111]"></div>
                <p className="text-[#AA0632] font-semibold text-lg">2019 - 2025 (Expected)</p>
                <h3 className="text-2xl font-bold mt-1">Freelance Web Developer</h3>
                <p className="text-gray-400 mb-2">Remote</p>
                <p className="text-gray-300">
                  Focused on full-stack web development, acting as a system consultant to build web applications for personal clients, small businesses, and mid-to-large enterprises.
                </p>
              </div>
              {/* Timeline Item */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1.5 w-4 h-4 bg-[#AA0632] rounded-full border-4 border-[#111111]"></div>
                <p className="text-[#AA0632] font-semibold text-lg">Mar 2018 - Feb 2019</p>
                <h3 className="text-2xl font-bold mt-1">Fullstack Developer & Teacher</h3>
                <p className="text-gray-400 mb-2">Children&#39;s House (Yayasan Cendekia Harapan)</p>
                <p className="text-gray-300">
                  Developed a student value system and a UKS Android application. Also taught ICT and Design & Technology subjects, bridging the gap between technical development and educational needs.
                </p>
              </div>
              {/* Timeline Item */}
              <div className="relative">
                <div className="absolute -left-[46px] top-1.5 w-4 h-4 bg-[#AA0632] rounded-full border-4 border-[#111111]"></div>
                <p className="text-[#AA0632] font-semibold text-lg">Aug 2016 - July 2017</p>
                <h3 className="text-2xl font-bold mt-1">Frontend Developer</h3>
                <p className="text-gray-400 mb-2">Kopertis Wil. 4 Jabar Banten</p>
                <p className="text-gray-300">
                  Worked in a team to build a web application to validate student data across private universities in West Java and Banten, using Bootstrap 3 and Semantic UI.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
            <div className="w-24 h-1 bg-[#AA0632] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I&#39;m currently open to new opportunities. Feel free to reach out if you have a project in mind or just want to connect.
            </p>
            <div className="flex justify-center items-center mb-8">
              <a href="mailto:raeynwa@gmail.com" className="flex items-center text-lg transition duration-300 hover:text-[#AA0632]">
                <MailIcon className="w-8 h-8 mr-2" />
                raeynwa@gmail.com
              </a>
            </div>
            <div className="flex justify-center items-center space-x-6">
              <a href="https://github.com/raeynwa" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-[#AA0632]">
                <GithubIcon className="w-10 h-10" />
              </a>
              <a href="https://www.linkedin.com/in/raey-m-yunus-32b470233/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-[#AA0632]">
                <LinkedinIcon className="w-10 h-10" />
              </a>
              <a href="https://wa.me/6287792067999" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition duration-300 hover:text-[#AA0632]">
                <WhatsappIcon className="w-10 h-10" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Raey Maulana Yunus. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}