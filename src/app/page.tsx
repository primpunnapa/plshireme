"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("students");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <span className="text-2xl font-bold text-indigo-700">HireMeMaybe</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</a>
          <a href="#partners" className="text-gray-700 hover:text-indigo-600 transition-colors">Partners</a>
        </div>
        
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-indigo-600 font-medium hover:bg-indigo-50 rounded-lg transition-colors">
            Log in
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Connecting <span className="text-indigo-600">Kasetsart Talent</span> with Career Opportunities
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              HireMeMaybe is the dedicated employment platform for SKE and CPE students at Kasetsart University. 
              Launch your career or find the perfect candidate with our specialized matching system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Find Jobs
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
                Post a Job
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Join 1,500+ SKE & CPE Students</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-3xl font-bold">200+</p>
                    <p className="text-sm">Companies</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">95%</p>
                    <p className="text-sm">Placement Rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">500+</p>
                    <p className="text-sm">Jobs Posted</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">4.8/5</p>
                    <p className="text-sm">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Designed for Kasetsart Talent</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our platform is tailored specifically for the needs of SKE and CPE students and the companies looking to hire them.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-indigo-600 text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Targeted Matching</h3>
              <p className="text-gray-600">Algorithms designed specifically for tech roles and skill sets taught in SKE and CPE programs.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">University Integration</h3>
              <p className="text-gray-600">Seamless connection with Kasetsart University's career services and academic departments.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Industry Partnerships</h3>
              <p className="text-gray-600">Exclusive access to companies specifically looking for Kasetsart University talent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">How It Works</h2>
          
          <div className="flex border-b border-gray-200 mb-8">
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'students' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('students')}
            >
              For Students
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'employers' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('employers')}
            >
              For Employers
            </button>
          </div>
          
          {activeTab === 'students' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Create Profile</h3>
                <p className="text-gray-600">Build your profile showcasing projects, skills, and coursework specific to SKE/CPE.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Find Opportunities</h3>
                <p className="text-gray-600">Browse internships, part-time, and full-time roles from companies seeking Kasetsart talent.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Get Hired</h3>
                <p className="text-gray-600">Connect directly with employers and kickstart your career in software engineering.</p>
              </div>
            </div>
          )}
          
          {activeTab === 'employers' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Register Company</h3>
                <p className="text-gray-600">Create an employer account and verify your company details.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Post Jobs</h3>
                <p className="text-gray-600">List opportunities specifically targeting SKE and CPE students and graduates.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Find Talent</h3>
                <p className="text-gray-600">Access a curated pool of pre-vetted Kasetsart University tech talent.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-600">S</span>
                </div>
                <div>
                  <h4 className="font-bold">Somchai Jaidee</h4>
                  <p className="text-gray-500">SKE Senior, Placed at TechCorp</p>
                </div>
              </div>
              <p className="text-gray-600">
                "HireMeMaybe connected me with exactly the kind of software engineering role I was looking for. The platform understood my skills from the SKE program."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600">R</span>
                </div>
                <div>
                  <h4 className="font-bold">Rajana Smith</h4>
                  <p className="text-gray-500">HR Manager, Innovative Solutions Co.</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We've found our best interns through HireMeMaybe. The quality of Kasetsart SKE and CPE students is exceptional, and the platform makes recruitment efficient."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 px-6 bg-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Partners</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Trusted by leading companies and integrated with Kasetsart University
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center">
              <span className="text-gray-700 font-bold">Company A</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center">
              <span className="text-gray-700 font-bold">Company B</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center">
              <span className="text-gray-700 font-bold">Company C</span>
            </div>
            <div className="w-32 h-32 bg-white rounded-xl shadow-md flex items-center justify-center">
              <span className="text-gray-700 font-bold">Company D</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to launch your career?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of SKE and CPE students who have found their dream jobs through HireMeMaybe
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg text-gray-800"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HireMeMaybe</h3>
            <p className="text-gray-400">
              The dedicated employment platform for SKE and CPE students at Kasetsart University.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For Students</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Create Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Talent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">Kasetsart University</p>
            <p className="text-gray-400 mb-2">Bangkok, Thailand</p>
            <p className="text-gray-400">info@hirememaybe.com</p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2023 HireMeMaybe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}