import { CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Over 10 years of industry experience",
  "Dedicated support team available 24/7",
  "Custom solutions tailored to your needs",
  "Proven track record with 500+ successful projects",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5MDIyODUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden sm:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6 order-1 lg:order-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About Our Company
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are a team of passionate professionals committed to delivering 
                exceptional results for our clients. Our mission is to help businesses 
                thrive through innovative solutions and strategic partnerships.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a focus on quality, reliability, and customer satisfaction, 
                we've built lasting relationships with clients across various industries.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
