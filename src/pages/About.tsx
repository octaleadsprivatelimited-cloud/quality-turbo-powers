import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Award, Target, ArrowRight, Zap, Heart, Star, ThumbsUp, Sparkles, Clock, MapPin, Shield, HardHat, Handshake, Settings, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-powerplant.jpg";
import iconPeople from "@/assets/icon-people.png";
import iconCommitment from "@/assets/icon-commitment.png";
import iconIntegrity from "@/assets/icon-integrity.png";
import iconQuality from "@/assets/icon-quality.png";
import iconSatisfaction from "@/assets/icon-satisfaction.png";

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
      name: "Mr VEERESHAM",
      role: "HEAD SERVICES (Ex BHEL - HYDERABAD)",
      description: "Mechanical Engineer working in Power Plant Erection & Commissioning, Overhauling, and Troubleshooting on Steam & Gas Turbines (1 MW to 500 MW capacities) for over 38 years."
    },
    {
      name: "Mr S BALAKRISHNA REDDY",
      role: "Managing Director",
      description: "Mechanical Engineer with 17 years of experience in Erection, Overhauling, and Commissioning of Steam Turbines and Compressors, as well as Operation and Maintenance in various Power Plants."
    },
    {
      name: "Mr KISTA REDDY",
      role: "MECHANICAL SERVICES",
      description: "Mechanical Engineer working in the field of power plant Troubleshooting, Commissioning & Overhauling, specifically specializing in Regulation Systems on Steam turbines for over 18 years."
    }
  ];

  const highlights = [
    "Overhauls & Refurbishments",
    "Spare Parts Supply & Services", 
    "Repairs & Retrofits",
    "Erection & Commissioning",
    "Re-Engineering Solutions",
    "Power Plant Relocation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Quality Turbine Power Services - Hyderabad</title>
        <meta name="description" content="Learn about Quality Turbine Power Services - a growth-oriented engineering organization specializing in rotating equipment services. Expert team, commitment to quality, and excellence since 2018." />
        <meta name="keywords" content="about quality turbine, turbine company Hyderabad, rotating equipment experts, power plant services company, industrial engineering services, turbine maintenance company" />
        <meta property="og:title" content="About Us | Quality Turbine Power Services" />
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
              <Sparkles className="w-3 h-3 text-[#9ee055]" />
              <span className="text-white/80 text-xs">Established 2018</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight">
              About{" "}
              <span className="text-[#9ee055]">Quality Turbo Power Services</span>
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
                <div className="inline-flex items-center gap-2 bg-[#9ee055]/10 rounded-full px-4 py-1.5 mb-6">
                  <Users className="w-4 h-4 text-[#283852]" />
                  <span className="text-[#283852] text-sm font-medium">Who We Are</span>
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
                      <CheckCircle2 className="w-4 h-4 text-[#9ee055] flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-6">
                  {[
                    { value: "7+", label: "Years Exp." },
                    { value: "40+", label: "Projects" },
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
                    <div className="w-12 h-12 bg-[#283852] rounded-xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">Why Choose Us</h3>
                      <p className="text-slate-500 text-sm">Your Trusted Partner</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { 
                        image: iconPeople,
                        title: "People", 
                        desc: "Quality Turbo is a company of young entrepreneurs and we consider people as our biggest assets"
                      },
                      { 
                        image: iconCommitment,
                        title: "Commitment", 
                        desc: "Our well-defined understanding of client specifications and their requirement for a timely delivery"
                      },
                      { 
                        image: iconIntegrity,
                        title: "Integrity", 
                        desc: "We have gained a reputation for integrity from our customers as our work speaks for itself"
                      },
                      { 
                        icon: Heart,
                        title: "Trust", 
                        desc: "With decades of world-class engineering services expertise, Quality Turbo has earned the trust and support of clients",
                        color: "bg-blue-500"
                      },
                      { 
                        image: iconQuality,
                        title: "Quality", 
                        desc: "Quality of every project we deliver is the foundation stone of our value proposition"
                      },
                      { 
                        image: iconSatisfaction,
                        title: "Satisfaction", 
                        desc: "We are committed to our clients' approval and our work is not complete until all specifications have been met"
                      }
                    ].map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl hover:bg-[#9ee055]/10 transition-colors">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                            {item.image ? (
                              <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                            ) : (
                              <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                                {IconComponent && <IconComponent className="w-5 h-5 text-white" />}
                              </div>
                            )}
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
            <div className="inline-flex items-center gap-2 bg-[#9ee055]/10 rounded-full px-4 py-2 mb-4">
              <Zap className="w-4 h-4 text-[#9ee055]" />
              <span className="text-[#9ee055] text-sm font-medium">Our Strengths</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="bg-slate-50 rounded-2xl p-4 md:p-6 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#283852] rounded-xl flex items-center justify-center mb-3 md:mb-4 flex-shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 flex-shrink-0">{item.title}</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed flex-grow">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          {/* Title Banner */}
          <div className="bg-[#9ee055] border-2 border-slate-300 rounded-lg px-6 py-3 mb-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Team</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white/5 border-2 border-white/30 rounded-lg p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-2">{member.name}</h3>
                <p className="text-yellow-400 font-semibold text-sm md:text-base mb-3">{member.role}</p>
                <p className="text-white text-sm md:text-base leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-20">
          {/* Section Title */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Clientele
            </h2>
            <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
              Trusted by leading companies across various industries
            </p>
          </div>

          {/* Clients Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
            {[
              { 
                name: "Client 1", 
                logo: "/clients/client-1.png" 
              },
              { 
                name: "Client 2", 
                logo: "/clients/client-2.jpeg" 
              },
              { 
                name: "Client 3", 
                logo: "/clients/client-3.jpeg" 
              },
            ].map((client, index) => (
              <div
                key={index}
                className="group"
              >
                {/* Logo Card */}
                <div className="relative w-full h-24 md:h-28 lg:h-32 flex items-center justify-center p-2 md:p-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-slate-700 font-semibold text-sm md:text-base text-center">${client.name}</div>`;
                      }
                    }}
                  />
                </div>
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
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg h-11 px-8">
                  Contact Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-[#283852] hover:bg-[#283852]/90 text-white font-semibold rounded-lg h-11 px-8">
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
