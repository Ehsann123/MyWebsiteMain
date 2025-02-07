import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Star, Code, Palette, MessageSquare } from 'lucide-react';

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true });
  const [reviewsRef, reviewsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 
  };

  const experiences = [
    {
      company: "Army Welfare Trust",
      role: "Junior ASP.NET Developer",
      duration: "6 months - Present",
      description: "Currently working on developing and maintaining web applications using ASP.NET technology stack. Created and deployed jobs.awt.com.pk, a comprehensive job portal for the organization.",
      technologies: ["ASP.NET", "C#", "SQL Server", "JavaScript"]
    },
    {
      company: "Devisic Private Limited",
      role: "Frontend Developer",
      duration: "3 months",
      description: "Developed modern and responsive user interfaces for various client projects. Created RESTful APIs for an ERP application.",
      technologies: ["React", "TypeScript", "Node.js", "RESTful APIs"]
    },
    {
      company: "Interstellus ltd.",
      role: "Software Engineer",
      duration: "2 years",
      description: "Frontend and backend development for various projects. Worked on a React based web application for a client.",
      technologies: ["React", "JavaScript", "Docker"]
    }
  ];

  const projects = [
    {
      title: "AI Chatbot App",
      description: "ChatBot trained on real data of history of Pakistan",
      image: "https://media.istockphoto.com/id/1928965132/photo/hand-of-businessman-using-smartphone-chatting-with-chat-bot.jpg?s=2048x2048&w=is&k=20&c=rrJlCNvtCzSCQQWjpDEjCsWmRh6DzZsoOg4g6RI4Wlw=",
      tags: ["Django", "Python", "XML"]
    },
    {
      title: "Blog Website",
      description: "A Django Based Blog Website, which I later converted to a Docker Image",
      image: "https://media.istockphoto.com/id/887987150/photo/blogging-woman-reading-blog.jpg?s=2048x2048&w=is&k=20&c=BLIZmKTwiKOk7OAtP4yGmVskp0wqpJWAsamVJb17x5w=",
      tags: ["Django", "Python", "XML"]
    },
    {
      title: "Face Recognition Attendance System",
      description: "User Friendly Python Based App for Attendance Management System",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      tags: ["Python", "Django", "MSSQL"]
    },
    {
      title: "AWT Jobs Portal",
      description: "Designed and developed a comprehensive job portal for Army Welfare Trust. Features include job posting, application management, and candidate tracking.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      link: "https://jobs.awt.com.pk/",
      tags: ["ASP.NET", "SQL Server", "Bootstrap", "JavaScript"]
    },
    {
      title: "ERP System APIs",
      description: "Developed robust RESTful APIs for an enterprise resource planning system, handling various business operations including inventory, HR, and finance modules.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "MongoDB", "REST APIs"]
    }
  ];

  const reviews = [
    {
      name: "Wajeeha Tahir",
      role: "GM ERPdevs",
      content: "Ehsan is an exceptional developer who delivers outstanding results. The attention to detail and user experience is remarkable.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sajid Ali",
      role: "Product Manager",
      content: "Working with Ehsan was a game-changer for our project. The technical expertise and design sensibility are top-notch.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-medium mb-8">Ehsan ul haq</h3>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Full Stack Developer<br />& UX/UI Designer</h1>
            <p className="text-xl md:text-2xl mb-12">Crafting beautiful digital experiences</p>
            <div className="flex justify-center space-x-6">
              <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition">Get in Touch</a>
              <a href="#projects" className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">View Work</a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
        id="about"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                alt="Working on laptop"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate Full Stack Developer and UX/UI Designer with over 2 years of experience in creating
                beautiful and functional digital solutions. I combine technical expertise with design thinking to deliver
                exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Code className="w-8 h-8 text-blue-600 mr-3" />
                  <span>Full Stack Development</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-8 h-8 text-blue-600 mr-3" />
                  <span>UI/UX Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
        id="projects"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

       {/* Experience Section */}
       <motion.section
        ref={experienceRef}
        initial="hidden"
        animate={experienceInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
        id="experience"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{experience.role}</h3>
                    <p className="text-xl text-blue-600">{experience.company}</p>
                  </div>
                  <span className="text-gray-600">{experience.duration}</span>
                </div>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        ref={reviewsRef}
        initial="hidden"
        animate={reviewsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Client Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-6">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="text-gray-600">{review.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{review.content}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-blue-600 text-white"
        id="contact"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <a href="mailto:ehsanssb@gmail.com" className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
                <Mail className="w-6 h-6 mr-3" />
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/ehcan-qureshi" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
                <Linkedin className="w-6 h-6 mr-3" />
                <span>LinkedIn</span>
              </a>
            </div>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-opacity-50 focus:outline-none" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-opacity-50 focus:outline-none" />
              </div>
              <div>
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:border-opacity-50 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Ehsan ul haq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;