import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  Wallet,
  Gift,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";

// Import card images
import platinumCardImg from "@/assets/platinum-card.png";
import infiniteCardImg from "@/assets/infinite-card.png";
import titaniumCardImg from "@/assets/titanium-card.png";

export function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Secure & Protected",
      description:
        "Advanced security features and fraud protection for your peace of mind",
      color: "text-[#8b3f92]",
      bgColor: "bg-[#8b3f92]/10",
    },
    {
      icon: Wallet,
      title: "Smart Rewards",
      description: "Earn cashback and points on every purchase you make",
      color: "text-[#47b9c0]",
      bgColor: "bg-[#47b9c0]/10",
    },
    {
      icon: Gift,
      title: "Exclusive Perks",
      description:
        "Access to VIP lounges, travel benefits, and lifestyle privileges",
      color: "text-[#0080be]",
      bgColor: "bg-[#0080be]/10",
    },
    {
      icon: Zap,
      title: "Instant Approval",
      description:
        "Get approved in minutes with our streamlined application process",
      color: "text-[#ced629]",
      bgColor: "bg-[#ced629]/10",
    },
  ];

  const benefits = [
    "No annual fee for the first year",
    "Up to 5% cashback on selected categories",
    "0% installment plans available",
    "24/7 customer support",
    "Travel insurance included",
    "Contactless payment ready",
  ];

  const creditCards = [
    {
      name: "Platinum",
      image: platinumCardImg,
      tagline: "Premium Lifestyle",
      highlight: "3% Cashback",
      bgGradient: "from-gray-200 to-gray-400",
    },
    {
      name: "Infinite",
      image: infiniteCardImg,
      tagline: "Unlimited Rewards",
      highlight: "Exclusive Access",
      bgGradient: "from-gray-700 to-gray-900",
    },
    {
      name: "Titanium",
      image: titaniumCardImg,
      tagline: "Smart Benefits",
      highlight: "4x Points",
      bgGradient: "from-[#6d4c7d] to-[#8b3f92]",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#8b3f92] via-[#6d3f8f] to-[#47b9c0] py-20 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ced629] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0080be] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-medium text-sm">
                  Award-Winning Credit Cards
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Financial Freedom Starts Here
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience premium banking with exclusive rewards, cashback, and
                lifestyle benefits designed for modern living.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/credit-cards")}
                  className="bg-white text-[#8b3f92] hover:bg-white/90 h-14 px-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/credit-cards")}
                  className="border-2 border-white text-white bg-transparent hover:bg-white/10 h-14 px-8 text-lg font-semibold rounded-xl"
                >
                  Compare Cards
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    500K+
                  </div>
                  <div className="text-white/80 text-sm">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    ฿10B+
                  </div>
                  <div className="text-white/80 text-sm">Credit Limit</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">
                    4.9/5
                  </div>
                  <div className="text-white/80 text-sm">Customer Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Featured Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating card effect */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <img
                    src={titaniumCardImg}
                    alt="LH Bank Credit Card"
                    className="w-full max-w-lg mx-auto drop-shadow-2xl"
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ced629] rounded-full blur-3xl opacity-30"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0080be] rounded-full blur-3xl opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Benefits list */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#8b3f92]/10 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-[#8b3f92]" />
                <span className="text-[#8b3f92] font-semibold text-sm">
                  Premium Benefits
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#6d7071] mb-6">
                Everything You Need in One Card
              </h2>

              <p className="text-lg text-[#888a8c] mb-8">
                Unlock a world of possibilities with benefits designed to
                enhance every aspect of your financial life.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#8b3f92] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#6d7071] font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => navigate("/credit-cards")}
                className="mt-8 bg-gradient-to-r from-[#8b3f92] to-[#47b9c0] hover:from-[#6d3f8f] hover:to-[#3a9aa0] text-white h-12 px-8 text-base font-semibold rounded-xl"
              >
                Explore All Benefits
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Right - Image/Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#8b3f92]/10 to-[#47b9c0]/10 rounded-3xl p-8 lg:p-12">
                <img
                  src={infiniteCardImg}
                  alt="LH Bank Card Benefits"
                  className="w-full max-w-md mx-auto drop-shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#ced629] rounded-full blur-2xl opacity-30"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0080be] rounded-full blur-2xl opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credit Card Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d7071] mb-4">
              Choose Your Perfect Card
            </h2>
            <p className="text-lg text-[#888a8c] max-w-2xl mx-auto">
              Find the credit card that matches your lifestyle and financial
              goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {creditCards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Card Image */}
                    <div
                      className={`h-64 bg-gradient-to-br ${card.bgGradient} relative overflow-hidden flex items-center justify-center p-6`}
                    >
                      <img
                        src={card.image}
                        alt={`LH Bank ${card.name}`}
                        className="w-full max-w-[280px] drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-bold text-[#8b3f92]">
                          {card.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Card Details */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#6d7071]">
                          LH Bank {card.name}
                        </h3>
                        <p className="text-[#888a8c]">{card.tagline}</p>
                      </div>

                      <Button
                        onClick={() => navigate("/credit-cards")}
                        className="w-full bg-gradient-to-r from-[#8b3f92] to-[#47b9c0] hover:from-[#6d3f8f] hover:to-[#3a9aa0] text-white h-12 rounded-xl font-semibold"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate("/credit-cards")}
              variant="outline"
              className="border-2 border-[#8b3f92] text-[#8b3f92] hover:bg-[#8b3f92] hover:text-white h-14 px-10 text-lg font-semibold rounded-xl"
            >
              View All Credit Cards
              <CreditCard className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8b3f92] via-[#6d3f8f] to-[#47b9c0] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ced629] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0080be] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Apply for your LH Bank credit card today and start enjoying
              exclusive rewards and benefits
            </p>
            <Button
              onClick={() => navigate("/credit-cards")}
              className="bg-white text-[#8b3f92] hover:bg-white/90 h-14 px-10 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl"
            >
              Apply Now - Get Approved in Minutes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
