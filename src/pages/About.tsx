import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Target, ArrowRight, Zap, Heart, Star, ThumbsUp, Sparkles, Clock, MapPin, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-powerplant.jpg";

const About = () => {
  const strengths = [
    {
      icon: Users,
      title: "People",
      description: "Quality Turbo is a company of young entrepreneurs and we consider people as our biggest assets. We encourage excellence and value intellect among our people."
    },
    {
      icon: Heart,
      title: "Commitment",
      description: "Our well-defined understanding of client specifications and their requirement for a timely delivery, serve as the principal foundation for our commitment."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We have gained a reputation for integrity from our customers as our work speaks for itself, while legacy of past projects has ensured continued success."
    },
    {
      icon: Star,
      title: "Expertise",
      description: "With decades of world-class engineering services expertise under our belt, Quality Turbo has earned the trust and support to clients."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Quality of every project we deliver is the foundation stone of our value proposition where every project is processed through quality control measures."
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction",
      description: "We are committed to our clients' approval and our work is not complete until all specifications have been met and our client is satisfied."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Veeresham",
      role: "Head Services (Ex BHEL - Hyderabad)",
      description: "Mechanical Engineer with 38+ years experience in Power Plant Erection & Commissioning, Overhauling and Troubleshooting on Steam & Gas Turbines from 1 MW to 500 MW capacities."
    },
    {
      name: "Mr. S Balakrishna Reddy",
      role: "Managing Director",
      description: "Mechanical Engineer with 17 years of experience in Erection, Overhauling and Commissioning of Steam Turbines and Compressor & Operation and Maintenance in various Power Plants."
    },
    {
      name: "Mr. Kista Reddy",
      role: "Mechanical Services",
      description: "Mechanical Engineer with 18+ years experience in Troubleshooting, Commissioning & Overhauling - Especially for Regulation System on Steam turbines."
    }
  ];

  const highlights = [
    "Overhauls & Refurbishments",
    "Spares & Services", 
    "Repairs & Retrofits",
    "Erection & Commissioning",
    "Re-Engineering Solutions",
    "Power Plant Relocation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Quality Turbo Power Services - Hyderabad</title>
        <meta name="description" content="Learn about Quality Turbo Power Services - a growth-oriented engineering organization specializing in rotating equipment services. Expert team, commitment to quality, and excellence since 2018." />
        <meta name="keywords" content="about quality turbo, turbine company Hyderabad, rotating equipment experts, power plant services company, industrial engineering services, turbine maintenance company" />
        <meta property="og:title" content="About Us | Quality Turbo Power Services" />
        <meta property="og:description" content="Growth-oriented engineering organization specializing in rotating equipment services since 2018." />
        <link rel="canonical" href="https://qualityturbopower.com/about" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-12 pt-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 mb-4">
              <Sparkles className="w-3 h-3 text-blue-400" />
              <span className="text-white/80 text-xs">Established 2018</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight">
              About{" "}
              <span className="text-blue-400">Quality Turbo Power Services</span>
            </h1>
            <p className="text-base text-white/70 leading-relaxed">
              A Complete Solution for Rotating Equipments
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column - Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-1.5 mb-6">
                  <Users className="w-4 h-4 text-blue-700" />
                  <span className="text-blue-700 text-sm font-medium">Who We Are</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  Multi Disciplinary Engineering & Service Organization
                </h2>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  M/s. Quality Turbo Power Services is a multi disciplinary, growth oriented, Engineering and service 
                  organization headquartered in Hyderabad, established in 2018, by a group of Engineers with the 
                  primary focus to serve the power/process industry.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-8">
                  We as an organization have varied & vast experience in Engineering, Operation & Maintenance, 
                  Overhauls, Trouble shooting, Fabrication and Erection & Commissioning of rotating equipment & its auxiliaries.
                </p>

                {/* Services List */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: "7+", label: "Years Exp." },
                    { value: "15+", label: "Projects" },
                    { value: "20+", label: "Clients" },
                    { value: "24/7", label: "Support" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-slate-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Why Choose Us */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Why Choose Us</h3>
                      <p className="text-slate-500 text-sm">Your Trusted Partner</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Users, title: "Expert Team", desc: "Skilled professionals", color: "bg-blue-500" },
                      { icon: Clock, title: "Quick Response", desc: "24/7 emergency support available", color: "bg-emerald-500" },
                      { icon: MapPin, title: "Strategic Location", desc: "Based in Hyderabad, serving industries", color: "bg-blue-500" }
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                          <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">{item.title}</div>
                            <div className="text-xs text-slate-500">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Our Strengths</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Makes Us Different</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-white/80 text-sm font-medium">Our Team</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Leadership <span className="text-blue-400">Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-white">{member.name.charAt(4)}</span>
                </div>
                <h3 className="text-lg font-bold text-white text-center mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm text-center mb-4">{member.role}</p>
                <p className="text-white/60 text-sm text-center leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-slate-900">Our Clients</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["Linde", "ISGEC", "Praxair", "KCPL", "Thermax", "Ultratech", "ACC Cement", "IOCL"].map((client, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-slate-50 rounded-lg text-slate-600 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-neutral-900">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Partner?</h3>
            <p className="text-white/70 mb-8">
              Let us help you maintain peak performance of your power generation equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg h-11 px-8">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg h-11 px-8">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
