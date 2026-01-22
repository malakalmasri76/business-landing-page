import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0">
              <span className="text-2xl font-bold text-blue-600">YourBrand</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
              <Button onClick={() => scrollToSection("contact")}>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 min-h-screen flex items-center bg-linear-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grow Your Business
                  <span className="text-blue-600"> With Confidence</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  We provide innovative solutions to help your business thrive in the digital age. 
                  Our expert team is dedicated to delivering results that matter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMG9mZmljZXxlbnwxfHx8fDE3NjkwNzUwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern business office"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
