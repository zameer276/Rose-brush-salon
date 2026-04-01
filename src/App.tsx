import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageCircle, 
  User, 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  CheckCircle2, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ChevronRight,
  Sparkles,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, WHATSAPP_NUMBER } from './constants';
import { BookingFormData } from './types';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: '',
    address: '',
    date: '',
    time: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Rose Brush Home Saloon,

I want to book a home service appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Address: ${formData.address}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    
    // Small delay to allow the menu closing animation to start and layout to stabilize
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold text-xl shadow-md">R</div>
            <span className="text-xl font-bold tracking-tight text-brand-dark">Rose Brush</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium hover:text-brand-pink transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-brand-pink text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-rose-400 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {['Home', 'About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full text-left py-3 font-medium border-b border-gray-50 hover:text-brand-pink transition-colors cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-brand-pink text-white py-3 rounded-xl font-semibold text-center"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-beige/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1920" 
            alt="Facial Treatment" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-beige via-brand-beige/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-brand-pink"></span>
                <span className="text-brand-pink text-sm font-bold uppercase tracking-[0.3em]">
                  Srinagar's Premier At-Home Salon
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-brand-dark leading-[1.05] mb-8 tracking-tighter">
                Elegance <br />
                <span className="text-brand-pink italic font-serif">Redefined</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-xl leading-relaxed font-light">
                Professional beauty treatments delivered to your sanctuary. 
                Experience the luxury of <span className="font-semibold text-brand-dark">Rose Brush</span> by Wani Rabiya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-brand-pink transition-all flex items-center justify-center gap-3 group"
                >
                  Book Your Glow
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-dark border border-gray-200 px-10 py-5 rounded-full font-bold text-lg shadow-sm hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={22} className="text-green-500" />
                  WhatsApp Consult
                </a>
              </div>

              <div className="mt-16 flex items-center gap-10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <span className="text-sm text-gray-500 font-medium">Trusted by 500+ Ladies in Srinagar</span>
                </div>
              </div>
            </motion.div>

            <div className="relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="w-[500px] h-[650px] rounded-[100px] overflow-hidden shadow-3xl border-[15px] border-white rotate-3">
                  <img 
                    src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800" 
                    alt="Luxury Facial" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 bg-white p-8 rounded-[40px] shadow-2xl border border-rose-50 z-20"
                >
                  <div className="w-12 h-12 bg-brand-pink/10 rounded-2xl flex items-center justify-center text-brand-pink mb-4">
                    <Sparkles size={24} />
                  </div>
                  <p className="font-bold text-brand-dark text-lg leading-tight">Signature <br />Glow Facial</p>
                  <p className="text-brand-pink font-bold mt-2">₹1,500</p>
                </motion.div>

                {/* Floating Image 2 */}
                <motion.div 
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-10 -right-10 w-64 h-64 rounded-[50px] overflow-hidden shadow-2xl border-[10px] border-white -rotate-6 z-20"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500" 
                    alt="Clean Face" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>
              
              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-pink/10 rounded-full -z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-brand-pink/5 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">The Experience</span>
            <h2 className="text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-gray-500 text-lg">We bring the complete salon sanctuary to your home in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-[1px] bg-brand-beige -z-10"></div>
            
            {[
              { step: "01", title: "Book Online", desc: "Select your preferred treatments and schedule a time that suits your lifestyle." },
              { step: "02", title: "We Arrive", desc: "Our professional beautician arrives with a full sterilized kit and premium products." },
              { step: "03", title: "Relax & Glow", desc: "Sit back and enjoy a personalized beauty session in the comfort of your home." }
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-brand-pink flex items-center justify-center text-brand-pink font-bold text-2xl mb-8 shadow-xl relative z-10">
                  {item.step}
                </div>
                <h4 className="font-bold text-2xl mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck size={32} />, title: "Sterilized Tools", desc: "Medical-grade sterilization for all equipment after every use." },
              { icon: <Sparkles size={32} />, title: "Premium Products", desc: "We only use high-end, dermatologically tested international brands." },
              { icon: <Clock size={32} />, title: "Time Saving", desc: "No more salon queues. We value your time as much as your beauty." },
              { icon: <User size={32} />, title: "Expert Care", desc: "Certified professional with deep knowledge of skin & hair." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-brand-beige text-brand-pink flex items-center justify-center mb-6 group-hover:bg-brand-pink group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-beige/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl border-[15px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800" 
                  alt="Wani Rabiya" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-dark text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-brand-gold" fill="currentColor" />)}
                </div>
                <h4 className="font-bold text-2xl mb-2">Wani Rabiya</h4>
                <p className="text-rose-200 text-sm mb-4">Master Esthetician & Founder</p>
                <div className="flex items-center gap-2 text-brand-pink font-bold text-sm">
                  <CheckCircle2 size={16} />
                  Certified Professional
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">The Visionary</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight">Elevating Beauty <br />Standards in <span className="text-brand-pink italic">Srinagar</span></h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed font-light">
                Rose Brush Home Saloon was born from a simple realization: luxury beauty care shouldn't be a stressful commute. 
                I've dedicated my career to mastering the art of esthetics, ensuring that every treatment is a therapeutic experience.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h5 className="font-bold text-3xl text-brand-dark mb-1">05+</h5>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Years Experience</p>
                </div>
                <div>
                  <h5 className="font-bold text-3xl text-brand-dark mb-1">12+</h5>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">Certifications</p>
                </div>
              </div>

              <button 
                onClick={() => scrollToSection('services')}
                className="group flex items-center gap-3 text-brand-dark font-bold text-lg hover:text-brand-pink transition-colors"
              >
                Explore Our Treatments
                <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">Our Menu</span>
              <h2 className="text-5xl font-bold mb-6">Curated Beauty <br />Experiences</h2>
              <p className="text-gray-500 text-lg">Every service is performed with precision, using only the finest products and techniques.</p>
            </div>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-brand-beige text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-pink hover:text-white transition-all"
            >
              Custom Packages Available
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-brand-beige/20 rounded-[40px] p-10 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(232,160,191,0.2)] transition-all duration-500 border border-transparent hover:border-brand-pink/10 flex flex-col"
              >
                <div className="mb-8 flex justify-between items-start">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-pink shadow-sm group-hover:bg-brand-pink group-hover:text-white transition-all duration-500">
                    {service.category === 'Skincare' && <Sparkles size={32} />}
                    {service.category === 'Hair Removal' && <Heart size={32} />}
                    {service.category === 'Makeup' && <Star size={32} />}
                    {service.category === 'Hair' && <Sparkles size={32} />}
                  </div>
                  <span className="text-2xl font-bold text-brand-dark">{service.price}</span>
                </div>
                
                <span className="text-xs font-bold text-brand-pink uppercase tracking-widest mb-4 block">{service.category}</span>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-pink transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-10 leading-relaxed flex-grow">{service.description}</p>
                
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, service: service.title }));
                    scrollToSection('booking');
                  }}
                  className="w-full py-4 rounded-2xl bg-brand-dark text-white font-bold group-hover:bg-brand-pink transition-all flex items-center justify-center gap-2"
                >
                  Book Treatment
                  <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-brand-beige/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">Our Work</span>
              <h2 className="text-5xl font-bold mb-6">Visual Portfolio</h2>
              <p className="text-gray-500 text-lg">A glimpse into the transformations and moments of care we provide.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1527799822344-429dfa851bc1?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1526045431048-f857369aba09?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-[30px] group cursor-pointer ${i % 3 === 0 ? 'aspect-[3/4] md:row-span-2' : 'aspect-square'}`}
              >
                <img 
                  src={img} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-pink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-brand-pink flex items-center justify-center shadow-xl">
                    <Instagram size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Booking Section */}
      <section id="booking" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto bg-brand-dark rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-brand-pink p-16 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10">
                <span className="text-rose-100 font-bold uppercase tracking-widest text-xs mb-4 block">Reservation</span>
                <h2 className="text-5xl font-bold mb-8 leading-tight">Secure Your <br />Luxury Slot</h2>
                <p className="text-rose-100 mb-12 text-lg font-light">Experience the ultimate convenience. Our team will coordinate with you via WhatsApp to finalize your personalized beauty session.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-pink transition-all"><Phone size={24} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-rose-200 mb-1">Call / WhatsApp</p>
                      <p className="text-xl font-bold">+91 95963 43252</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-brand-pink transition-all"><MapPin size={24} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-rose-200 mb-1">Service Area</p>
                      <p className="text-xl font-bold">Srinagar, J&K</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10 relative z-10">
                <p className="text-sm text-rose-100 italic font-light">"Professionalism is at the heart of everything we do. We bring the full salon setup to your doorstep."</p>
              </div>
            </div>

            <div className="md:w-3/5 p-16 bg-white">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g. Sarah Jan"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-beige/30 border border-transparent focus:bg-white focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/5 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10-digit mobile"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-beige/30 border border-transparent focus:bg-white focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/5 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3 sm:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Treatment</label>
                  <div className="relative">
                    <select 
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-2xl bg-brand-beige/30 border border-transparent focus:bg-white focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/5 outline-none transition-all font-medium appearance-none"
                    >
                      <option value="">Choose a treatment</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Custom Package">Custom Luxury Package</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronRight size={20} className="rotate-90" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3 sm:col-span-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Home Address</label>
                  <input 
                    required
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Complete address in Srinagar"
                    className="w-full px-6 py-4 rounded-2xl bg-brand-beige/30 border border-transparent focus:bg-white focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/5 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Preferred Date</label>
                  <input 
                    required
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-brand-beige/30 border border-transparent focus:bg-white focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/5 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Preferred Time</label>
                  <input 
                    required
                    type="time" 
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-brand-beige/30 border border-transparent focus:bg-white focus:border-brand-pink focus:ring-4 focus:ring-brand-pink/5 outline-none transition-all font-medium"
                  />
                </div>
                <div className="sm:col-span-2 pt-6">
                  <button 
                    type="submit"
                    className="w-full bg-brand-dark text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-pink transition-all flex items-center justify-center gap-3 group"
                  >
                    Request Appointment
                    <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                  </button>
                  <p className="text-center text-gray-400 text-xs mt-4">By clicking, you'll be redirected to WhatsApp to finalize your booking.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-brand-beige/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">Kind Words</span>
            <h2 className="text-5xl font-bold mb-6">Client Experiences</h2>
            <div className="flex justify-center gap-1 text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-12 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 relative group"
              >
                <div className="absolute -top-6 left-12 w-12 h-12 bg-brand-pink rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                  <Sparkles size={20} fill="currentColor" />
                </div>
                <p className="text-gray-600 mb-10 italic leading-relaxed text-lg font-light">"{t.feedback}"</p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-beige text-brand-pink flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg">{t.name}</h5>
                    <div className="flex text-brand-gold">
                      {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">Common Queries</span>
              <h2 className="text-5xl font-bold mb-8">Frequently Asked <br />Questions</h2>
              <p className="text-gray-500 text-lg mb-12">Everything you need to know about our at-home salon experience.</p>
              
              <div className="space-y-6">
                {[
                  { q: "How do you maintain hygiene?", a: "We follow medical-grade sterilization protocols. All tools are sanitized after every use, and we use disposable kits wherever possible." },
                  { q: "Do I need to provide anything?", a: "No, we bring the entire salon setup including professional products, towels, and equipment. We only need a small space and access to water." },
                  { q: "What areas do you cover?", a: "We serve all major areas in Srinagar including Rajbagh, Hyderpora, Lal Bazar, and more." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[30px] bg-brand-beige/20 border border-transparent hover:border-brand-pink/10 transition-all">
                    <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                      {item.q}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="sticky top-32">
                <div className="aspect-square rounded-[60px] overflow-hidden shadow-3xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800" 
                    alt="Salon Tools" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20"></div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 bg-brand-pink text-white p-10 rounded-[40px] shadow-2xl max-w-xs">
                  <h4 className="font-bold text-2xl mb-2">Need Help?</h4>
                  <p className="text-rose-100 text-sm mb-6">Our beauty consultant is available for a free WhatsApp consultation.</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="inline-block bg-white text-brand-pink px-6 py-3 rounded-full font-bold text-sm hover:bg-rose-50 transition-colors"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-brand-dark rounded-[60px] p-16 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-brand-pink font-bold uppercase tracking-widest text-sm mb-4 block">Availability</span>
                <h2 className="text-5xl font-bold mb-8 leading-tight">Serving the Heart <br />of <span className="text-brand-pink italic">Srinagar</span></h2>
                <p className="text-gray-400 text-xl mb-10 font-light leading-relaxed">
                  We bring our boutique salon experience to all major residential areas in Srinagar. Our mobile unit is fully equipped for a seamless setup.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {['Srinagar City', 'Lal Bazar', 'Hyderpora', 'Rajbagh', 'Nishat', 'Gulberg Colony'].map((area, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300 group">
                      <div className="w-2 h-2 rounded-full bg-brand-pink group-hover:scale-150 transition-transform"></div>
                      <span className="text-lg font-light">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-[12px] border-white/5 relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105764.123456789!2d74.7973!3d34.0837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c505%3A0x4f899a619f9121d9!2sSrinagar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Service Area Map"
                  className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hygiene Commitment Badge */}
      <section className="py-16 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl">100% Sterilized</h4>
                <p className="text-gray-400 text-sm">Medical-grade protocols</p>
              </div>
            </div>
            <div className="w-[1px] h-12 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl">Certified Expert</h4>
                <p className="text-gray-400 text-sm">Wani Rabiya (Founder)</p>
              </div>
            </div>
            <div className="w-[1px] h-12 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink">
                <Sparkles size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl">Premium Brands</h4>
                <p className="text-gray-400 text-sm">International standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-beige/30 pt-32 pb-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center text-white font-bold text-2xl shadow-lg">R</div>
                <span className="text-2xl font-bold tracking-tighter text-brand-dark">Rose Brush</span>
              </div>
              <p className="text-gray-500 text-base leading-relaxed mb-10 font-light">
                Redefining beauty convenience in Srinagar. Professional salon standards delivered with a personal touch.
              </p>
              <div className="flex gap-5">
                {[
                  { icon: <Instagram size={22} />, href: "#" },
                  { icon: <Facebook size={22} />, href: "#" },
                  { icon: <MessageCircle size={22} />, href: `https://wa.me/${WHATSAPP_NUMBER}` }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-dark hover:bg-brand-pink hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold text-xl mb-8 text-brand-dark">Navigation</h5>
              <ul className="space-y-5 text-gray-500 text-base font-light">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-brand-pink transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-brand-pink transition-colors">Our Story</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-pink transition-colors">Treatments</button></li>
                <li><button onClick={() => scrollToSection('booking')} className="hover:text-brand-pink transition-colors">Book Now</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xl mb-8 text-brand-dark">Treatments</h5>
              <ul className="space-y-5 text-gray-500 text-base font-light">
                <li>Signature Facials</li>
                <li>Skin Detox Cleanup</li>
                <li>Silk-Touch Waxing</li>
                <li>Bridal Makeovers</li>
                <li>Couture Hair Styling</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xl mb-8 text-brand-dark">Connect</h5>
              <ul className="space-y-6 text-gray-500 text-base font-light">
                <li className="flex items-start gap-4">
                  <MapPin size={20} className="text-brand-pink shrink-0 mt-1" />
                  <span>Srinagar, Jammu & Kashmir, 190001</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={20} className="text-brand-pink shrink-0" />
                  <span className="font-medium text-brand-dark">+91 95963 43252</span>
                </li>
                <li className="flex items-center gap-4">
                  <MessageCircle size={20} className="text-brand-pink shrink-0" />
                  <span>WhatsApp Consult Available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm font-light">
            <p>© 2026 Rose Brush Home Saloon. Crafted for elegance.</p>
            <p>Designed for <span className="text-brand-dark font-bold">Wani Rabiya</span></p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-brand-pink transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-pink transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Book Button */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button 
          onClick={() => scrollToSection('booking')}
          className="md:hidden w-16 h-16 bg-brand-pink text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <Calendar size={28} />
        </button>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageCircle size={32} />
          <span className="absolute right-full mr-4 bg-white text-brand-dark px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
            Chat with us
          </span>
        </a>
      </div>
    </div>
  );
}
