import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { 
  Brain, 
  MessageSquare, 
  Users, 
  Zap, 
  Target, 
  Bell,
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Menu,
  X,
  BarChart3,
  Mail,
  Phone,
  Calendar,
  Settings,
  TrendingUp,
  Shield,
  Clock,
  Smartphone,
  Globe,
  Database,
  Workflow,
  Megaphone,
  Filter,
  PieChart
} from 'lucide-react'
import './App.css'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

// Header Component with animations
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Brain className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white">HireSevak</span>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'About', 'Contact'].map((item, index) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.div {...scaleOnHover}>
              <Button variant="outline" className="hidden md:inline-flex border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                Book A Demo
              </Button>
            </motion.div>
            <motion.div {...scaleOnHover}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Login
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-2">
                {['Home', 'Features', 'About', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return
    
    let startTime = null
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setHasStarted(true)}
      className="text-2xl font-bold"
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  )
}

// Hero Section with enhanced animations
const HeroSection = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))",
            "linear-gradient(225deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, borderColor: "rgba(234, 179, 8, 0.5)" }}
            >
              <Phone className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-gray-300">VOICE AI AGENTS</span>
            </motion.div>
            
            <motion.div className="space-y-6" variants={fadeInUp}>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Your Voice AI Agent That{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Understands
                </motion.span>
                {' '}Context & Books Appointments.
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                variants={fadeInUp}
              >
                HireSevak's Voice AI Agents handle both inbound and outbound campaigns with 
                human-like understanding. They qualify leads, book appointments, and save your 
                team hours every day while maintaining natural conversations.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-4"
              variants={fadeInUp}
            >
              <motion.div {...scaleOnHover}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Book A Demo
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Animated Mobile Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative mx-auto w-80 h-[600px] bg-slate-800 rounded-[3rem] border-8 border-slate-700 shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 1, 0, -1, 0]
              }}
              style={{ 
                transformStyle: "preserve-3d",
                transition: "transform 6s ease-in-out infinite"
              }}
            >
              {/* Phone Screen */}
              <div className="absolute inset-4 bg-slate-900 rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <motion.div 
                  className="h-8 bg-slate-800 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-20 h-1 bg-slate-600 rounded-full"></div>
                </motion.div>
                
                {/* App Content */}
                <motion.div 
                  className="p-4 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {/* Header */}
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <h3 className="text-white font-semibold">Voice AI Agent</h3>
                    <div className="text-xs text-green-400">Active</div>
                  </motion.div>
                  
                  {/* Animated Stats */}
                  <motion.div 
                    className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-between">
                      <motion.div 
                        className="text-2xl font-bold text-white"
                        animate={{ 
                          color: ["#ffffff", "#10b981", "#ffffff"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        24/7
                      </motion.div>
                      <div className="text-xs text-green-400">Voice Agent Active</div>
                    </div>
                  </motion.div>
                  
                  {/* Animated Call Cards */}
                  <motion.div 
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {[
                      { name: "Inbound Call", desc: "Appointment booked for 2PM", status: "Completed", color: "green", icon: "📞" },
                      { name: "Outbound Call", desc: "Lead qualified - Hot", status: "Success", color: "blue", icon: "📱" },
                      { name: "Follow-up Call", desc: "Meeting scheduled", status: "Scheduled", color: "purple", icon: "📅" }
                    ].map((call, index) => (
                      <motion.div
                        key={index}
                        className="bg-slate-800 rounded-lg p-3 border border-slate-700"
                        variants={{
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 }
                        }}
                        transition={{ delay: 1.4 + index * 0.2 }}
                        whileHover={{ scale: 1.02, borderColor: `rgba(${call.color === 'blue' ? '59, 130, 246' : call.color === 'purple' ? '147, 51, 234' : '34, 197, 94'}, 0.5)` }}
                      >
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className={`w-8 h-8 bg-${call.color}-500 rounded-full flex items-center justify-center`}
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-xs">{call.icon}</span>
                          </motion.div>
                          <div className="flex-1">
                            <div className="text-white text-sm font-medium">{call.name}</div>
                            <div className="text-gray-400 text-xs">{call.desc}</div>
                          </div>
                          <motion.div 
                            className={`text-${call.color === 'blue' ? 'green' : call.color === 'purple' ? 'yellow' : 'blue'}-400 text-xs`}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {call.status}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom Stats with animation */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.p 
            className="text-2xl text-gray-300 mb-8"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Voice AI Agents saving time for professionals worldwide.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Phone,
      title: "Inbound & Outbound Voice Campaigns",
      description: "Our Voice AI Agents handle both incoming calls and proactive outbound campaigns. They understand context, qualify leads, and book appointments naturally - just like a human would, but available 24/7.",
      image: "phone-calls",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Context-Aware Conversations",
      description: "Advanced natural language processing allows our Voice AI to understand complex conversations, remember previous interactions, and respond intelligently. No more robotic responses - just natural, human-like dialogue.",
      image: "voice-interface",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Smart Appointment Booking",
      description: "Voice AI Agents can schedule meetings, check availability, and book appointments directly into your calendar. They understand scheduling preferences and can handle rescheduling requests automatically.",
      image: "calendar",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call again. Our Voice AI Agents work around the clock, handling calls at any time of day or night. Perfect for global businesses and customers in different time zones.",
      image: "availability",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Voice AI that works like your best employee.
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Intelligent, context-aware, and always available. Your Voice AI Agent never sleeps, never takes breaks, and never loses track of a conversation.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl"
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="flex items-start space-x-6">
                <motion.div 
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Animated Stats */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 text-2xl font-bold text-white">
            <motion.span 
              className="text-green-400"
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedCounter end={5000} suffix="+" />
            </motion.span>
            <span className="text-gray-300">calls handled,</span>
            <motion.span 
              className="text-blue-400"
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <AnimatedCounter end={95} suffix="%" />
            </motion.span>
            <span className="text-gray-300">appointment booking success rate with HireSevak's Voice AI.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Detailed Features Section
const DetailedFeaturesSection = () => {
  const detailedFeatures = [
    {
      icon: Target,
      title: "Lead Qualification",
      subtitle: "Intelligent Lead Scoring & Qualification",
      description: "Our AI analyzes lead behavior, demographics, and engagement patterns to automatically score and qualify prospects. Advanced machine learning algorithms identify the most promising leads, ensuring your sales team focuses on high-value opportunities.",
      features: [
        "Behavioral analysis and lead scoring",
        "Demographic and firmographic data enrichment", 
        "Real-time qualification based on custom criteria",
        "Automated lead routing to appropriate team members",
        "Integration with popular CRM platforms"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Workflow,
      title: "Automated Follow-ups",
      subtitle: "Smart Multi-Channel Communication",
      description: "Never let a lead go cold with our intelligent follow-up system. Automated sequences across email, SMS, and WhatsApp ensure consistent communication that converts prospects into customers while maintaining a personal touch.",
      features: [
        "Multi-channel automated sequences",
        "Personalized messaging based on lead behavior",
        "Smart timing optimization for maximum engagement",
        "A/B testing for message optimization",
        "Automated scheduling and calendar integration"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Brain,
      title: "AI Lead Nurturing",
      subtitle: "Intelligent Conversation Management",
      description: "Guide prospects through their journey with AI-powered nurturing that understands context and intent. Our system delivers the right message at the right time, adapting to each lead's unique path to purchase.",
      features: [
        "Contextual conversation flows",
        "Intent recognition and response",
        "Personalized content delivery",
        "Journey stage identification",
        "Automated handoff to human agents"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Database,
      title: "CRM",
      subtitle: "Comprehensive Contact Management",
      description: "Built-in CRM functionality with seamless integration to popular platforms. Manage contacts, track interactions, and monitor deal progress all in one place. Sync data across your entire tech stack effortlessly.",
      features: [
        "Contact and company management",
        "Deal pipeline tracking",
        "Activity logging and history",
        "Custom fields and tags",
        "Two-way sync with major CRM platforms"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Megaphone,
      title: "Broadcasts",
      subtitle: "Targeted Mass Communication",
      description: "Reach your entire audience with precision-targeted broadcast campaigns. Advanced segmentation ensures the right message reaches the right people, while detailed analytics help you optimize performance.",
      features: [
        "Advanced audience segmentation",
        "Multi-channel broadcast capabilities",
        "Message scheduling and automation",
        "Performance tracking and analytics",
        "Compliance and opt-out management"
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10"
    },
    {
      icon: Settings,
      title: "Pre-built Campaigns",
      subtitle: "Ready-to-Launch Marketing Sequences",
      description: "Launch proven campaigns in minutes with our library of industry-tested templates. Each campaign is optimized for maximum engagement and conversion, with built-in A/B testing and performance tracking.",
      features: [
        "Industry-specific campaign templates",
        "Drag-and-drop campaign builder",
        "Built-in A/B testing capabilities",
        "Performance analytics and optimization",
        "Custom campaign creation tools"
      ],
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-500/10"
    }
  ]

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Powerful Features for Modern Professionals
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how HireSevak's comprehensive suite of AI-powered tools transforms your sales and marketing operations.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {detailedFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div 
                  className="flex items-center space-x-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                    <p className="text-lg text-gray-400">{feature.subtitle}</p>
                  </div>
                </motion.div>

                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {feature.description}
                </motion.p>

                <motion.div 
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {feature.features.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex items-center space-x-3"
                      variants={{
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 }
                      }}
                      transition={{ delay: 0.4 + itemIndex * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className={`bg-gradient-to-r ${feature.color} text-white px-6 py-3`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>

              {/* Visual */}
              <motion.div 
                className={`${feature.bgColor} rounded-2xl p-8 border border-slate-700 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square bg-slate-900/50 rounded-xl flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <feature.icon className="w-24 h-24 text-white opacity-50" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Footer
const Footer = () => {
  return (
    <motion.footer 
      className="bg-slate-900 border-t border-slate-800 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <motion.div 
              className="flex items-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Brain className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold text-white">HireSevak</span>
            </motion.div>
            <p className="text-gray-400 mb-4">Your AI Workforce for Smart Professionals</p>
            <div className="flex space-x-4">
              {[Globe, Mail, Phone].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5 text-gray-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {[
            { 
              title: "Features", 
              items: ["Lead Qualification", "Automated Follow-ups", "AI Lead Nurturing", "CRM Integration", "Broadcasts", "Smart Notifications"] 
            },
            { 
              title: "Company", 
              items: ["About", "Contact"] 
            }
          ].map((section, index) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item}
                    whileHover={{ color: "#ffffff", x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="cursor-pointer"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 HireSevak. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a href="#" whileHover={{ color: "#ffffff" }}>Terms</motion.a>
            <motion.a href="#" whileHover={{ color: "#ffffff" }}>Privacy</motion.a>
            <motion.a href="#" whileHover={{ color: "#ffffff" }}>Cookies</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DetailedFeaturesSection />
      <Footer />
    </div>
  )
}

export default App

