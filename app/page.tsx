"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "About", href: "#about", id: "about" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const services = [
    {
      title: "Digital Strategy",
      description: "We develop comprehensive digital strategies tailored to your business goals.",
      icon: "🚀",
    },
    {
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: "💻",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging experiences.",
      icon: "🎨",
    },
  ]

  const projects = [
    {
      title: "Outdoor Adventure Gear",
      category: "E-commerce Platform",
      image: "https://source.unsplash.com/random/800x600/?hiking,boots,outdoor",
    },
    {
      title: "Fitness App",
      category: "Mobile Development",
      image: "https://source.unsplash.com/random/800x600/?fitness,app",
    },
    {
      title: "Corporate Rebrand",
      category: "Branding",
      image: "https://source.unsplash.com/random/800x600/?corporate,office",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "https://source.unsplash.com/random/800x600/?dashboard,tech",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-violet-100 text-violet-950">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold">RA</span>
              </div>
            </motion.div>
            <motion.span
              className="text-xl font-bold"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Rocket Air
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative font-medium hover:text-violet-600 transition-colors ${
                  activeSection === item.id ? "text-violet-600" : ""
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-600"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-violet-950" onClick={toggleMenu} aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold">RA</span>
                </div>
                <span className="text-xl font-bold">Rocket Air</span>
              </Link>
              <button onClick={toggleMenu} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-4 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-2xl font-medium hover:text-violet-600 transition-colors"
                  onClick={() => {
                    setActiveSection(item.id)
                    toggleMenu()
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-violet-600 hover:bg-violet-700 text-white mt-4">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We Build <span className="text-violet-600">Digital</span> Experiences
              </h1>
              <p className="text-lg text-violet-700 mb-8 max-w-lg">
                Transforming ideas into exceptional digital products. We create websites and applications that drive
                growth and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 text-lg">Get Started</Button>
                <Button
                  variant="outline"
                  className="border-violet-600 text-violet-600 hover:bg-violet-50 px-8 py-6 text-lg"
                >
                  Our Work
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="https://source.unsplash.com/random/600x600/?digital,technology"
                  alt="Digital Experience"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-6 -right-6 w-full h-full bg-violet-200 rounded-2xl -z-10"></div>
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-400 rounded-full -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-violet-700 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-violet-50 p-6 rounded-xl hover:shadow-lg transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-violet-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-violet-700">{service.description}</p>
                <div className="mt-4 flex items-center text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-violet-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-violet-700 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise and creativity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-violet-200 text-sm mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-violet-600 text-violet-600 hover:bg-violet-50">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative z-10">
                <Image
                  src="https://source.unsplash.com/random/600x600/?team,office"
                  alt="Our Team"
                  width={600}
                  height={600}
                  className="rounded-2xl"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-violet-200 rounded-2xl -z-10"></div>
              <motion.div
                className="absolute -top-10 -left-10 w-32 h-32 bg-violet-400 rounded-full -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Rocket Air</h2>
              <p className="text-violet-700 mb-6">
                Founded in 2015, Rocket Air is a digital agency dedicated to creating exceptional digital experiences
                that drive business growth. Our team of experts combines creativity with technical expertise to deliver
                solutions that exceed expectations.
              </p>
              <p className="text-violet-700 mb-8">
                We believe in collaborative partnerships with our clients, working closely to understand their unique
                challenges and goals. This approach allows us to create tailored solutions that deliver real results.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-4xl font-bold text-violet-600 mb-2">150+</h3>
                  <p className="text-violet-700">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-violet-600 mb-2">50+</h3>
                  <p className="text-violet-700">Happy Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-violet-600 mb-2">15+</h3>
                  <p className="text-violet-700">Team Members</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-violet-600 mb-2">8+</h3>
                  <p className="text-violet-700">Years Experience</p>
                </div>
              </div>

              <Button className="bg-violet-600 hover:bg-violet-700 text-white">Meet Our Team</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-violet-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-violet-700 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-white p-8 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-violet-200 flex items-center justify-center mr-4">
                    <span className="text-violet-600 font-bold">C{item}</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Client Name</h3>
                    <p className="text-sm text-violet-600">Company {item}</p>
                  </div>
                </div>
                <p className="text-violet-700">
                  "Working with Rocket Air was a game-changer for our business. Their team understood our vision and
                  delivered a solution that exceeded our expectations. The results speak for themselves."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-violet-700 mb-8">
                Ready to start your next project? Contact us today to discuss how we can help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <span className="text-violet-600">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-violet-700">123 Innovation Street, Tech City</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <span className="text-violet-600">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-violet-700">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <span className="text-violet-600">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-violet-700">hello@rocketair.example</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-violet-50 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                    placeholder="Subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">Send Message</Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Next Project?</h2>
            <p className="text-violet-100 mb-8">
              Let's work together to create something amazing. Contact us today to get started on your journey to
              digital success.
            </p>
            <Button className="bg-white text-violet-600 hover:bg-violet-50">Get Started</Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-violet-600 font-bold">RA</span>
                </div>
                <span className="text-xl font-bold">Rocket Air</span>
              </Link>
              <p className="text-violet-300 mb-6">
                Creating exceptional digital experiences that drive business growth.
              </p>
              <div className="flex gap-4">
                {["Twitter", "Facebook", "Instagram", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-violet-800 flex items-center justify-center hover:bg-violet-700 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-4">
                {["Digital Strategy", "Web Development", "Mobile Apps", "UI/UX Design", "Branding"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-violet-300 hover:text-white transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                {["About", "Team", "Careers", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-violet-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-violet-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <form className="space-y-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-violet-800 border border-violet-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder:text-violet-400"
                  placeholder="Your email"
                />
                <Button className="w-full bg-white text-violet-600 hover:bg-violet-50">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-violet-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-violet-400 text-sm">
              &copy; {new Date().getFullYear()} Cloned by Sahilpreet Singh 24BMM0084.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-violet-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-violet-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-violet-400 text-sm hover:text-white transition-colors">
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg z-40 ${
          scrollY > 300 ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <ChevronDown className="rotate-180" />
      </motion.button>
    </div>
  )
}

