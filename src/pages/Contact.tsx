import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import industriesImage from "@/assets/industries.jpg";

const Contact = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9492121315", "+91 9492125536"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["qualityturboservices@gmail.com"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: MapPin,
      title: "Registered Office",
      details: ["H.No. 7-66/1, Sai Ram Colony", "Patancheru, Hyderabad - 509 319"],
      color: "from-[#283852] to-[#9ee055]"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 6PM", "Emergency: 24/7"],
      color: "from-[#283852] to-[#9ee055]"
    }
  ];

  const whyChooseUs = [
    "Expert team with deep industry knowledge",
    "24/7 emergency support available",
    "Expert team of mechanical engineers",
    "Based in Hyderabad, Telangana"
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Quality Turbine Power Services - Get Expert Turbine Solutions | Hyderabad</title>
        <meta name="description" content="Contact Quality Turbine Power Services for expert turbine solutions. Located in Patancheru, Hyderabad - 509 319. 24/7 emergency support available. Call +91 94921 21315, +91 94921 25536 or email qualityturboservices@gmail.com. Expert team ready to assist with turbine erection, commissioning, overhauls, repairs, and maintenance." />
        <meta name="keywords" content="contact quality turbine power services, turbine services Hyderabad contact, Patancheru turbine company, emergency turbine support 24/7, power plant services contact, industrial equipment services contact, turbine repair contact, turbine maintenance contact, turbine erection services contact, Hyderabad turbine experts phone" />
        <meta property="og:title" content="Contact Us | Quality Turbine Power Services - Get Expert Turbine Solutions" />
        <meta property="og:description" content="Get in touch for turbine solutions. Located in Hyderabad with 24/7 emergency support. Expert team ready to assist." />
        <meta property="og:url" content="https://qualityturbopowerservices.com/contact" />
        <meta property="og:image" content="https://qualityturbopowerservices.com/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://qualityturbopowerservices.com/contact" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-10 overflow-hidden">
        <div className="absolute inset-0">
          <img src={industriesImage} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/4 w-48 h-48 bg-[#283852]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#283852]/15 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3" />
              Get in Touch
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              Contact <span className="text-[#9ee055] drop-shadow-lg">Us</span>
            </h1>
            <p className="text-sm text-white/70">
              Get in touch with our team for inquiries, quotes, or technical support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div 
            ref={infoRef}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto transition-all duration-700 ${infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index} 
                  className={`group relative bg-white rounded-xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 ${
                    infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-11 h-11 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={`text-slate-600 text-[10px] md:text-xs ${info.title === "Email" ? "break-all" : ""}`}>{detail}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div 
            ref={formRef}
            className={`grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto transition-all duration-700 ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-slate-200/50 border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#283852] to-[#9ee055] rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Send us a Message</h2>
                    <p className="text-xs text-slate-500">We'll get back to you within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <Input 
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg h-11 border-slate-200 focus:border-[#283852] focus:ring-[#283852]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">Email *</label>
                      <Input 
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-lg h-11 border-slate-200 focus:border-[#283852] focus:ring-[#283852]/20"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">Phone</label>
                      <Input 
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg h-11 border-slate-200 focus:border-[#283852] focus:ring-[#283852]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">Company</label>
                      <Input 
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className="rounded-lg h-11 border-slate-200 focus:border-[#283852] focus:ring-[#283852]/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Subject *</label>
                    <Input 
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="rounded-lg h-11 border-slate-200 focus:border-[#283852] focus:ring-[#283852]/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1.5">Message *</label>
                    <Textarea 
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="rounded-lg resize-none border-slate-200 focus:border-[#283852] focus:ring-[#283852]/20"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-[#283852] hover:bg-[#283852]/90 text-white rounded-xl h-12 font-semibold shadow-lg shadow-[#283852]/25"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-5">
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#283852] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Emergency Support */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 overflow-hidden">
                {/* Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-[#9ee055] text-xs font-semibold uppercase tracking-wide">24/7 Available</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Emergency Support</h3>
                  <p className="text-white/60 text-sm mb-4">
                    For urgent turbine breakdowns or critical issues, our emergency team is ready.
                  </p>
                  <a 
                    href="tel:+919492121315" 
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors border border-white/10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#283852] to-[#9ee055] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Emergency Hotline</div>
                      <div className="text-lg font-bold text-white">+91 94921 21315</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl p-3 shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=Sai%20Ram%20Colony%2C%20Patancheru%2C%20Hyderabad%2C%20Telangana%20509319&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="180" 
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quality Turbine Power Services - Sai Ram Colony, Patancheru, Hyderabad"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
