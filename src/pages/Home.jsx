import { CheckCircle, Shield, Clock, Users, TrendingUp, FileText, Calculator, Building2, ChevronRight, Star } from 'lucide-react';
import React from 'react';

export default function Home({ onNavigate }) {
  const services = [
    {
      icon: <FileText size={40} />,
      title: 'Income Tax Services',
      description: 'Expert tax planning, filing, and advisory for individuals and businesses.',
    },
    {
      icon: <Calculator size={40} />,
      title: 'GST Compliance',
      description: 'Complete GST registration, filing, and consultation services.',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Audit & Assurance',
      description: 'Statutory, internal, and tax audits with detailed reporting.',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and business growth consultation.',
    },
  ];

  const features = [
    {
      icon: <Users size={32} />,
      title: '15+ Years Experience',
      description: 'Trusted expertise in accounting and taxation',
    },
    {
      icon: <Shield size={32} />,
      title: '100% Confidentiality',
      description: 'Your data is secure and private with us',
    },
    {
      icon: <CheckCircle size={32} />,
      title: '99% Accuracy',
      description: 'Precision in every calculation and filing',
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Delivery',
      description: 'Never miss a deadline with our services',
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Innovations Pvt Ltd',
      text: 'Excel Associates has been managing our accounts for 5 years. Their expertise in tax planning saved us significant costs.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      company: 'Fashion Boutique',
      text: 'Professional, responsive, and reliable. They helped us with GST compliance and startup registration seamlessly.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      company: 'Manufacturing Solutions',
      text: 'Their audit services are thorough and insightful. Highly recommend for any business looking for CA services.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Tax Returns Filed' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trusted Chartered Accountants for Your Business Growth
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
              Expert services in taxation, auditing, GST, income tax, financial advisory, compliance, and startup registration.
              Your financial success is our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => onNavigate('contact')} className="btn-primary text-lg px-8 py-4">
                Book Consultation
              </button>
              <button onClick={() => onNavigate('services')} className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
                Our Services <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial and accounting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 card-hover cursor-pointer"
                onClick={() => onNavigate('services')}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                <button className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence through experience, precision, and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl text-center card-hover">
                <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our clients say about our services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl card-hover">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">"{t.text}"</p>

                <div className="border-t pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert consultation from our experienced chartered accountants
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary text-lg px-8 py-4 bg-white text-blue-900 hover:bg-gray-100"
          >
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
