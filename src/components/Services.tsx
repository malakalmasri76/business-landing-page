import { Zap, Target, Shield, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Zap,
    title: "Fast Solutions",
    description: "Quick turnaround times without compromising on quality. We deliver results when you need them.",
  },
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Data-driven strategies tailored to your business goals and market opportunities.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability you can trust for your business operations.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Scalable solutions designed to grow with your business and maximize your ROI.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with years of industry experience at your service.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful projects and satisfied clients across industries.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive solutions designed to help your business succeed in today's competitive market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border-gray-200"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
