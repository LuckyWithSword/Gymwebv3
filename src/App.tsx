/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Star,
  Activity,
  Flame,
  MessageCircle,
  Menu,
  X,
  Play
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white">
              <Activity size={24} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
              Aura<span className="text-brand-blue">Fit</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#services" className="hover:text-brand-blue transition-colors">Programs</a>
            <a href="#results" className="hover:text-brand-blue transition-colors">Results</a>
            <a href="#pricing" className="hover:text-brand-blue transition-colors">Pricing</a>
            <a href="#trainers" className="hover:text-brand-blue transition-colors">Coaches</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="hidden lg:block text-slate-600 font-medium hover:text-brand-blue transition-colors">Contact</a>
            <a href="#pricing" className="bg-brand-blue hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transform hover:-translate-y-0.5">
              Book Free Trial
            </a>
          </div>

          <button 
            className="md:hidden text-slate-900" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Programs</a>
          <a href="#results" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Results</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Pricing</a>
          <a href="#trainers" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-slate-700 font-medium hover:bg-slate-50 rounded-lg">Coaches</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="mt-2 bg-brand-blue text-white px-4 py-3 rounded-lg font-medium text-center">Book Free Trial</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-blue font-medium text-sm mb-6"
            >
              <Flame size={16} />
              <span>Durgapur's Premium Fitness Experience</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
            >
              Transform Your Body in 90 Days <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
                — Without Confusion
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Beginner-friendly, trainer-guided gym in City Center. We cut the noise and give you a clear roadmap to the best shape of your life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pb-8"
            >
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium text-lg transition-transform hover:scale-105 flex items-center justify-center gap-2">
                Book Free Trial <ArrowRight size={20} />
              </a>
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2">
                <Play size={20} className="text-brand-blue" /> See Our Programs
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium"
            >
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Member" className="w-8 h-8 rounded-full border-2 border-white" />
                ))}
              </div>
              <p>Join 100+ members transforming today</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            {/* Abstract Premium Image Representation */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Training" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-5 text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-brand-cyan flex items-center justify-center">
                      <Flame className="text-slate-900" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-tight">Average Fat Loss</p>
                      <p className="text-white/80 text-sm">per 90-day program</p>
                    </div>
                  </div>
                  <p className="text-4xl font-display font-bold">5–8 kg</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[80px] -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-purple/20 rounded-full blur-[80px] -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <div className="py-10 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
          <div className="text-center px-4">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">90</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Day Transformations</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">5-8kg</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Average Fat Loss</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-1">100+</h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Happy Members</p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-3xl font-display font-bold text-slate-900 mb-1 flex items-center justify-center gap-1">5.0 <Star className="fill-yellow-400 text-yellow-400" size={24} /></h3>
            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Google Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Programs Designed for Results</h2>
          <p className="text-lg text-slate-600">No guesswork. Choose the format that fits your lifestyle and let our experts guide you to your goals.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-brand-blue">
              <Dumbbell size={28} />
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Personal Training</h3>
            <p className="text-slate-600 mb-6 flex-1">1-on-1 coaching for maximum accountability and custom-tailored programming.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>Custom nutrition plan</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>Form correction & injury rehab</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-900">₹8k - ₹12k /mo</span>
              <a href="#pricing" className="text-brand-blue font-medium hover:text-blue-700 flex items-center gap-1">Details <ArrowRight size={16} /></a>
            </div>
          </motion.div>

          {/* Card 2 - Highlighted */}
          <motion.div whileHover={{ y: -5 }} className="bg-slate-900 rounded-3xl p-8 shadow-[0_20px_40px_rgba(37,99,235,0.15)] border border-slate-800 flex flex-col relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl">Most Effective</div>
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-brand-cyan">
              <Flame size={28} />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-2">12-Week Transformation</h3>
            <p className="text-slate-400 mb-6 flex-1">Our flagship program. A complete overhaul of your body, diet, and habits in 90 days.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <span>Guaranteed results (5-8kg loss)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <span>Daily accountability check-ins</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 size={18} className="text-brand-cyan shrink-0 mt-0.5" />
                <span>Mindset & lifestyle coaching</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-semibold text-white">₹15k /total</span>
              <a href="#pricing" className="text-brand-cyan font-medium hover:text-white transition-colors flex items-center gap-1">Book Trial <ArrowRight size={16} /></a>
            </div>
            
            {/* Glow */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/20 blur-[40px] rounded-full pointer-events-none"></div>
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-brand-purple">
              <Activity size={28} />
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900 mb-2">Group Classes</h3>
            <p className="text-slate-600 mb-6 flex-1">High-energy workouts with a community. Perfect for staying motivated and consistent.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-brand-purple shrink-0 mt-0.5" />
                <span>HIIT & Strength variations</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-brand-purple shrink-0 mt-0.5" />
                <span>Max 10 people per class</span>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-900">₹3k - ₹5k /mo</span>
              <a href="#pricing" className="text-brand-purple font-medium hover:text-purple-700 flex items-center gap-1">Details <ArrowRight size={16} /></a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2 block">Clear Pricing</span>
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Invest In Your Health</h2>
          <p className="text-lg text-slate-600">All plans come with a 3-Day Free Trial. Save 10% when you pay quarterly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-blue/30 transition-colors flex flex-col">
            <h3 className="text-xl font-display font-bold text-slate-900">Basic</h3>
            <p className="text-sm text-slate-500 mb-6">Open gym access</p>
            <div className="mb-6">
              <span className="text-4xl font-display font-extrabold">₹1,500</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-slate-400" /> Full gym access
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-slate-400" /> Basic workout plan
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-slate-400" /> Locker room access
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Premium */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan"></div>
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">Most Popular</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white mt-2">Premium</h3>
            <p className="text-sm text-slate-400 mb-6">Group + Coaching</p>
            <div className="mb-6 text-white">
              <span className="text-4xl font-display font-extrabold">₹4,500</span>
              <span className="text-slate-400">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={18} className="text-brand-cyan" /> Unlimited Group Classes
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={18} className="text-brand-cyan" /> 2 PT sessions / month
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={18} className="text-brand-cyan" /> Custom Macro Plan
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <CheckCircle2 size={18} className="text-brand-cyan" /> Priority Support
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-medium transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              Start Premium Trial
            </button>
          </div>

          {/* Standard */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-brand-blue/30 transition-colors flex flex-col">
            <h3 className="text-xl font-display font-bold text-slate-900">Standard</h3>
            <p className="text-sm text-slate-500 mb-6">Gym + Classes</p>
            <div className="mb-6">
              <span className="text-4xl font-display font-extrabold">₹2,500</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-slate-400" /> Full gym access
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-slate-400" /> 4 Group Classes / month
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-slate-400" /> Progress tracking
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Real Members. Real Results.</h2>
          <p className="text-lg text-slate-600">See what happens when you follow a clear plan with expert guidance.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="h-64 bg-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2070&auto=format&fit=crop" alt="Before and After" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity">
                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View Transformation</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"Lost 7kg in 2 months. The trainers here didn't just give me a workout, they fixed my relationship with food. Best investment in myself!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200">
                   <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Vikram S.</p>
                  <p className="text-sm text-slate-500">12-Week Program</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <div className="h-64 bg-slate-200 relative">
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" alt="Before and After" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/40 transition-opacity">
                <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View Transformation</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex text-yellow-400 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} size={18} className="fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"First time I stayed consistent. The atmosphere is intimidating-free, and the equipment is top-notch. Love the group classes!"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200">
                   <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Pooja M.</p>
                  <p className="text-sm text-slate-500">Premium Member</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#pricing" className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:text-blue-700">
            Start Your Journey Today <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Meet Your Coaches</h2>
            <p className="text-lg text-slate-600">Expert guidance from certified professionals who care about your progress.</p>
          </div>
          <button className="hidden md:block px-6 py-3 rounded-full border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors">
            Book a Consultation
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Trainer 1 */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop" alt="Rahul Singh" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300">
              <div className="w-12 h-1 bg-brand-cyan mb-4 rounded-full"></div>
              <h3 className="text-3xl font-display font-bold text-white mb-1">Rahul Singh</h3>
              <p className="text-brand-cyan font-medium mb-4">Head Coach & Founder</p>
              
              <div className="space-y-2 opacity-90">
                <p className="text-slate-300 text-sm flex items-center gap-2"><CheckCircle2 size={16} /> 8+ Years Experience</p>
                <p className="text-slate-300 text-sm flex items-center gap-2"><CheckCircle2 size={16} /> Fat Loss & Hypertrophy Expert</p>
              </div>
            </div>
          </div>

          {/* Trainer 2 */}
          <div className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" alt="Aman Verma" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300">
              <div className="w-12 h-1 bg-brand-purple mb-4 rounded-full"></div>
              <h3 className="text-3xl font-display font-bold text-white mb-1">Aman Verma</h3>
              <p className="text-brand-purple font-medium mb-4">Strength Specialist</p>
              
              <div className="space-y-2 opacity-90">
                <p className="text-slate-300 text-sm flex items-center gap-2"><CheckCircle2 size={16} /> 5+ Years Experience</p>
                <p className="text-slate-300 text-sm flex items-center gap-2"><CheckCircle2 size={16} /> Powerlifting & Rehab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 to-brand-purple/40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-5xl md:text-6xl font-display font-extrabold text-white mb-6">Start Your Transformation Today</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">Join Aura Fitness and get exactly what you need to succeed: clarity, coaching, and a premium environment.</p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            Book Free Trial Now
          </a>
          <a href="https://wa.me/something" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <MessageCircle size={22} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-8">Come visit us.</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Location</h4>
                  <p className="text-slate-600 mt-1">City Center, Near Junction Mall<br/>Durgapur, India</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Call Us</h4>
                  <p className="text-slate-600 mt-1"><a href="tel:+910000000000" className="hover:text-brand-blue">+91 98765 43210</a></p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                  <p className="text-slate-600 mt-1"><a href="mailto:hello@aurafitness.in" className="hover:text-brand-blue">hello@aurafitness.in</a></p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4">Opening Hours</h4>
              <div className="space-y-2 text-slate-600">
                <div className="flex justify-between"><span>Mon - Sat</span> <span>5:30 AM - 10:30 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span> <span>7:00 AM - 1:00 PM</span></div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 rounded-3xl overflow-hidden min-h-[400px] relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-400">
               <MapPin size={48} className="mb-4 opacity-50" />
               <p className="font-medium">Interactive Google Map</p>
               <p className="text-sm">City Center, Durgapur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-cyan flex items-center justify-center text-white">
                <Activity size={18} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Aura<span className="text-brand-blue">Fit</span>
              </span>
            </div>
            <p className="text-sm max-w-xs">Premium fitness startup in Durgapur helping you transform your body without the confusion.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#trainers" className="hover:text-white transition-colors">Coaches</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Aura Fitness. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-cyan/30 text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        
        {/* Further sections will be implemented next */}
        <Services />
        <Pricing />
        <Results />
        <Trainers />
        <CTA />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/something" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 hover:bg-green-600"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
