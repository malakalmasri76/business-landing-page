import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello! I'm ${formData.name}.

Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    // Open WhatsApp with pre-filled message (replace with your WhatsApp number)
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number (include country code without + or spaces)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
  };

  const handleWhatsAppClick = () => {
    // Direct WhatsApp link (replace with your WhatsApp number)
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    const message = "Hello! I'd like to know more about your services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have a question or ready to start your project? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@yourbrand.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600">123 Business St, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Button */}
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 gap-2"
              size="lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (234) 567-8900"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, your message will be sent via WhatsApp
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
