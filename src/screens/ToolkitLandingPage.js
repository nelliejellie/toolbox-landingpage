import React, { useState } from "react";
import toolboxlogo from "../assets/images/toolboklogo.png";
import Femi from "../assets/images/Femi.jpg";
import Bukola from "../assets/images/Bukola.jpg";
import Ndubisi from "../assets/images/Ndubisi.jpg";
import abel from "../assets/images/abel.jpg";
import nosa from "../assets/images/nosa.jpg";
import believe from "../assets/images/believe.jpg";
import victor from "../assets/images/victor.jpg";
import funke from "../assets/images/Funke.jpg";
import juliet from "../assets/images/juliet.jpg";
import brenda from "../assets/images/brenda.jpg";
import Tunde from "../assets/images/Tunde.jpg";
import video from "../assets/product_video.mp4";
import {
  Shield,
  Calendar,
  MessageCircle,
  Star,
  Search,
  CheckCircle,
  Smartphone,
  Clock,
  DollarSign,
  MapPin,
  Users,
  Zap,
  Download,
} from "lucide-react";

var contributors = [
  {
    name: "Femi",
    role: "Contributor",
    image: Femi,
    bio: "Visionary leader with 10+ years in home services industry",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Bukola",
    role: "Contributor",
    image: Bukola,
    bio: "Tech expert passionate about connecting communities",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Tunde",
    role: "Contributor",
    image: Tunde,
    bio: "Full-stack developer building seamless user experiences",
    color: "from-green-500 to-green-600",
  },
  {
    name: "Ndubisi",
    role: "Contributor",
    image: Ndubisi,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Abel",
    role: "Contributor",
    image: abel,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Juliet",
    role: "Contributor",
    image: juliet,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Brenda",
    role: "Contributor",
    image: brenda,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Believe",
    role: "Contributor",
    image: believe,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Nosa",
    role: "Contributor",
    image: nosa,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Abel",
    role: "Contributor",
    image: abel,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Victor",
    role: "Contributor",
    image: victor,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Funke",
    role: "Contributor",
    image: funke,
    bio: "Creative designer focused on intuitive app interfaces",
    color: "from-orange-500 to-orange-600",
  },
];

const ToolkitLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoOpen = () => setIsVideoOpen(true);
  const handleVideoClose = () => setIsVideoOpen(false);
  const handleComingSoon = () => {
    alert("Coming Soon!");
  };
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1n6DbwrASM_a-Lj9acXkTR0ILegVTej4L/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img
                src={toolboxlogo}
                alt="ToolBox Logo"
                style={{ width: "200px" }}
                className="ml-1"
              />
              <div className="w-10 h-10 flex items-center justify-center">
                {/* <span className="text-white font-bold text-xl">T</span> */}
              </div>
              {/* <span className="text-2xl font-bold bg-[#FA4E61] bg-clip-text text-transparent">
                ToolBox
              </span> */}
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#artisans"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                For Artisans
              </a>
            </nav>
            <button
              onClick={handleDownload}
              className="bg-[#FA4E61] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Download App
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Connect with
                  <span className="bg-[#FA4E61] bg-clip-text text-transparent block">
                    Verified Artisans,
                  </span>
                  <span className="text-gray-900">Instantly</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  ToolBox is the ultimate app for finding trusted, skilled
                  artisans for your home repair and service needs. Seamless,
                  secure, and hassle-free.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownload}
                  className="bg-[#FA4E61] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="inline-block w-5 h-5 mr-2" />
                  Download Now
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                  <span>Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold">50</span>
                  <span>Users</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">100</span>
                  <span>Verified Artisans</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-96 h-96 transform hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  {/* Toilet */}
                  <g opacity="0.8">
                    <rect
                      x="80"
                      y="200"
                      width="60"
                      height="80"
                      rx="8"
                      fill="#E6F3FF"
                    />
                    <rect
                      x="90"
                      y="190"
                      width="40"
                      height="20"
                      rx="20"
                      fill="#D1E7FF"
                    />
                    <rect
                      x="75"
                      y="280"
                      width="70"
                      height="40"
                      rx="35"
                      fill="#B8D4FF"
                    />
                    <circle cx="110" cy="210" r="3" fill="#9CA3AF" />
                  </g>

                  {/* Plunger on right */}
                  <g opacity="0.6">
                    <rect
                      x="420"
                      y="280"
                      width="8"
                      height="80"
                      fill="#8B4513"
                    />
                    <ellipse cx="424" cy="360" rx="15" ry="8" fill="#4A5568" />
                  </g>

                  {/* Plumber character */}
                  <g>
                    {/* Body - overalls */}
                    <path
                      d="M200 180 L200 320 L280 320 L280 240 L300 240 L300 180 Z"
                      fill="#6BB6FF"
                    />
                    <path
                      d="M200 180 L200 240 L220 240 L220 180 Z"
                      fill="#5A9FE6"
                    />

                    {/* Shirt */}
                    <rect
                      x="220"
                      y="160"
                      width="60"
                      height="80"
                      rx="10"
                      fill="#8B1538"
                    />

                    {/* Arms */}
                    <ellipse cx="190" cy="200" rx="15" ry="35" fill="#8B1538" />
                    <ellipse cx="310" cy="200" rx="15" ry="35" fill="#8B1538" />

                    {/* Hands */}
                    <circle cx="180" cy="230" r="12" fill="#FDBCB4" />
                    <circle cx="320" cy="230" r="12" fill="#FDBCB4" />

                    {/* Head */}
                    <circle cx="250" cy="130" r="30" fill="#FDBCB4" />

                    {/* Cap */}
                    <ellipse cx="250" cy="110" rx="35" ry="15" fill="#6BB6FF" />
                    <rect
                      x="215"
                      y="100"
                      width="70"
                      height="20"
                      rx="10"
                      fill="#6BB6FF"
                    />
                    <rect
                      x="260"
                      y="95"
                      width="20"
                      height="15"
                      rx="3"
                      fill="#8B1538"
                    />

                    {/* Face features */}
                    <circle cx="240" cy="125" r="2" fill="#333" />
                    <circle cx="260" cy="125" r="2" fill="#333" />
                    <path
                      d="M245 135 Q250 140 255 135"
                      stroke="#333"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Legs */}
                    <rect
                      x="220"
                      y="320"
                      width="20"
                      height="50"
                      rx="10"
                      fill="#4A5568"
                    />
                    <rect
                      x="260"
                      y="320"
                      width="20"
                      height="50"
                      rx="10"
                      fill="#4A5568"
                    />

                    {/* Shoes */}
                    <ellipse cx="230" cy="380" rx="18" ry="8" fill="#2D3748" />
                    <ellipse cx="270" cy="380" rx="18" ry="8" fill="#2D3748" />
                  </g>

                  {/* Large wrench */}
                  <g>
                    <rect
                      x="160"
                      y="220"
                      width="140"
                      height="12"
                      rx="6"
                      fill="#4A90E2"
                      transform="rotate(-20 230 226)"
                    />
                    <circle
                      cx="150"
                      cy="215"
                      r="20"
                      fill="#2C5282"
                      transform="rotate(-20 230 226)"
                    />
                    <circle
                      cx="150"
                      cy="215"
                      r="12"
                      fill="#4A90E2"
                      transform="rotate(-20 230 226)"
                    />
                    <rect
                      x="140"
                      y="200"
                      width="8"
                      height="30"
                      fill="#2C5282"
                      transform="rotate(-20 230 226)"
                    />
                    <rect
                      x="158"
                      y="200"
                      width="8"
                      height="30"
                      fill="#2C5282"
                      transform="rotate(-20 230 226)"
                    />
                  </g>
                </svg>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Choose ToolBox?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to find, book, and manage home repair
              services—all in one app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Find Verified Artisans",
                description:
                  "Discover skilled professionals in your area with verified credentials and ratings, ensuring trust and quality.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Calendar,
                title: "Book with Ease",
                description:
                  "Schedule services at your convenience with transparent pricing and no hidden fees.",
                color: "from-green-500 to-green-600",
              },
              {
                icon: MessageCircle,
                title: "Secure Communication",
                description:
                  "Chat or call artisans directly in-app without sharing personal contact details.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Star,
                title: "Track & Rate",
                description:
                  "Stay updated with real-time job status and share feedback to help others choose the best artisans.",
                color: "from-orange-500 to-orange-600",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              How ToolBox Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting your home repair needs met is as easy as 1-2-3.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: Search,
                title: "Search for Artisans",
                description:
                  "Browse verified artisans by service type, location, and availability using our intuitive app.",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "2",
                icon: Calendar,
                title: "Book a Job",
                description:
                  "Select your preferred artisan, schedule a time, and get a clear quote upfront.",
                color: "from-purple-500 to-purple-600",
              },
              {
                step: "3",
                icon: CheckCircle,
                title: "Get It Done",
                description:
                  "Your artisan arrives, completes the job, and you verify with a unique job code for added security.",
                color: "from-green-500 to-green-600",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center w-[100%] items-center">
          <button
            onClick={handleVideoOpen}
            className="bg-[#FA4E61] text-white px-8 py-3 mt-8 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Watch Video
          </button>
        </div>
      </section>

      {/* For Artisans Section */}
      <section id="artisans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">
                  For Artisans: Grow Your Business
                </h2>
                <p className="text-xl text-gray-600">
                  Join ToolBox as an artisan to connect with clients, manage
                  your schedule, and build your reputation.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    text: "Showcase your skills with a professional profile.",
                  },
                  {
                    icon: CheckCircle,
                    text: "Accept jobs that fit your expertise and availability.",
                  },
                  {
                    icon: DollarSign,
                    text: "Enjoy secure payments and subscription options to stay visible.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>

              <button className="bg-[#FA4E61] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Join as an Artisan
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-3xl shadow-2xl">
                <div className="bg-white p-8 rounded-3xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                        <div className="h-3 bg-gray-100 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="h-4 bg-gray-200 rounded w-20"></div>
                        <div className="h-6 bg-green-500 rounded-full w-16"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-12 bg-gray-100 rounded-lg"></div>
                        <div className="h-12 bg-gray-100 rounded-lg"></div>
                        <div className="h-12 bg-blue-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Toolkit who are dedicated to
              connecting homeowners with trusted artisans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {contributors.map((member, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center space-y-4">
                  {/* Profile Avatar */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img
                      src={member.image}
                      className="w-[100%] h-[100%] rounded-full"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}
                    >
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Links (optional) */}
                  <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <span className="text-xs text-gray-600">in</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <span className="text-xs text-gray-600">@</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team CTA */}
          {/* <div className="text-center mt-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Join Our Team?
              </h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who share our
                passion for connecting communities and building great products.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
            </div>
          </div> */}
        </div>
      </section>
      {/* Why Toolkit Stands Out */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Why ToolBox Stands Out</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Artisans",
                description:
                  "Every artisan is verified with ID checks and optional background validation.",
              },
              {
                icon: DollarSign,
                title: "Transparent Pricing",
                description: "Know the cost upfront with no surprises.",
              },
              {
                icon: Clock,
                title: "Real-Time Updates",
                description:
                  "Get notifications on job progress and appointment reminders.",
              },
              {
                icon: MessageCircle,
                title: "Secure & Private",
                description:
                  "In-app messaging and calling keep your personal details safe.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FA4E61]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Whether you're fixing a leaky faucet or offering your expertise,
              ToolBox is here to make it happen.
            </p>
            <p className="text-lg text-blue-100">
              Download now and experience the easiest way to connect for home
              repairs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                Download for iOS
              </button>
              <button
                onClick={handleDownload}
                className="bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Download className="inline-block w-5 h-5 mr-2" />
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src={toolboxlogo}
                  alt="ToolBox Logo"
                  style={{ width: "100px" }}
                  className="ml-1"
                />
                {/* <div className="w-8 h-8 bg-[#FA4E61] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="text-xl font-bold">ToolBox</span> */}
              </div>
              <p className="text-gray-400">
                The ultimate app for finding trusted, skilled artisans for your
                home repair needs.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Product</h4>
              <div className="space-y-2">
                <a
                  onClick={() => setIsOpen(true)}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </a>
                <a
                  onClick={() => setIsOpen(true)}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">For Artisans</h4>
              <div className="space-y-2">
                <a
                  onClick={() => setIsOpen(true)}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Join Now
                </a>
                <a
                  onClick={() => setIsOpen(true)}
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Resources
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Support</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          {isVideoOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
              <div className="bg-white rounded-2xl p-4 w-[90%] max-w-2xl relative">
                {/* Close button */}
                <button
                  onClick={handleVideoClose}
                  className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                >
                  ✕
                </button>

                {/* Video player */}
                <video
                  src={video} // put your video in public/assets/video.mp4
                  controls
                  autoPlay
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          )}
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              {/* Modal Content */}
              <div className="bg-white rounded-2xl p-6 w-80 shadow-lg text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Coming Soon 🚀
                </h2>
                <p className="text-gray-600 mb-6">
                  This feature will be available soon. Stay tuned!
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-[#FA4E61] text-white rounded-lg hover:opacity-90"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ToolBox SMP 96 Group One. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ToolkitLandingPage;
