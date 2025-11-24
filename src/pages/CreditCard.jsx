import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronRight,
  Phone,
  MapPin,
  Clock,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import OTPDialog from "@/components/OTPDialog";

// Import card images
import platinumCardImg from "@/assets/platinum-card.png";
import infiniteCardImg from "@/assets/infinite-card.png";
import titaniumCardImg from "@/assets/titanium-card.png";

export default function CreditCardPage() {
  // Initial form state
  const initialFormState = {
    firstName: "",
    lastName: "",
    monthlyIncome: "",
    mobileNumber: "",
    workingProvince: "",
    availableTime: "",
    agreeToTerms: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showOTP, setShowOTP] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();
  const tableRef = useRef();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.monthlyIncome ||
      !formData.mobileNumber ||
      !formData.workingProvince ||
      !formData.availableTime ||
      !formData.agreeToTerms
    ) {
      // Add this
      alert("Please fill in all required fields and agree to the terms");
      return;
    }

    console.log("Form submitted:", formData);
    setIsSubmitting(true);

    // Simulate API call to send OTP
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("OTP sent to:", formData.mobileNumber);

      // Show OTP dialog
      setShowOTP(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle successful OTP verification
  const handleVerifySuccess = () => {
    console.log("Application submitted successfully with data:", formData);

    // Clear the form
    setFormData(initialFormState);

    // You can also add additional actions here like:
    // - Sending data to backend
    // - Showing a success notification
    // - Redirecting to another page

    console.log("Form cleared and ready for next application");
  };

  // Handle OTP dialog close
  const handleOTPClose = (open) => {
    setShowOTP(open);
    // If closing without success, you might want to handle it differently
  };

  // handle scroll to form
  const scrollToForm = () => {
    const yOffset = -80; // Adjust this value based on your header height
    const element = formRef.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // handle scroll to table
  const scrollToTable = () => {
    const yOffset = -80;
    const element = tableRef.current;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Mock up credit card data
  const creditCards = [
    {
      name: "Platinum",
      image: platinumCardImg,
      gradient: "from-gray-300 to-gray-400",
      bgColor: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400",
      benefits: [
        "Up to 3% cashback on dining & travel",
        "Free airport lounge access worldwide",
        "24/7 personal concierge service",
      ],
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      accentColor: "text-gray-600",
    },
    {
      name: "Infinite",
      image: infiniteCardImg,
      gradient: "from-gray-800 to-black",
      bgColor: "bg-gradient-to-br from-gray-800 to-black",
      benefits: [
        "Unlimited reward points on all spending",
        "Premium travel insurance & protection",
        "Exclusive VIP lifestyle privileges",
      ],
      buttonColor: "bg-gray-900 hover:bg-black",
      accentColor: "text-yellow-600",
    },
    {
      name: "Titanium",
      image: titaniumCardImg,
      gradient: "from-[#6d4c7d] to-[#8b3f92]",
      bgColor: "bg-gradient-to-br from-[#6d4c7d] to-[#8b3f92]",
      benefits: [
        "Up to 4x reward points on all purchases",
        "Complimentary travel insurance coverage",
        "Exclusive shopping privileges & discounts",
      ],
      buttonColor: "bg-[#8b3f92] hover:bg-[#6d3f8f]",
      accentColor: "text-[#8b3f92]",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full bg-gradient-to-br from-[#8b3f92] via-[#6d3f8f] to-[#47b9c0] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ced629] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0080be] rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Credit Cards</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              LH Bank Credit Cards
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Enjoy exclusive privileges, cashback, and lifestyle benefits
              crafted for your financial journey.
            </p>
          </motion.div>
        </div>

        {/* Wave Bottom */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div> */}
      </div>

      {/* Card List Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#6d7071] mb-4">
            Choose Your Perfect Card
          </h2>
          <p className="text-lg text-[#888a8c] max-w-2xl mx-auto">
            Select from our premium card offerings designed to match your
            lifestyle
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {creditCards.map((card, index) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 3) }}
            >
              <Card className="rounded-2xl shadow-lg overflow-hidden border-0 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-0">
                  {/* Card Image */}
                  <div
                    className={`h-64 ${card.bgColor} relative overflow-hidden flex items-center justify-center p-8`}
                  >
                    <img
                      src={card.image}
                      alt={`LH Bank ${card.name} Card`}
                      className="w-full h-auto max-w-[320px] object-contain drop-shadow-2xl"
                    />
                  </div>

                  <div className="p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white">
                    <div>
                      <h3 className="text-2xl font-bold text-[#6d7071] mb-2">
                        LH Bank {card.name}
                      </h3>
                      <div className="h-1 w-16 bg-gradient-to-r from-[#8b3f92] to-[#47b9c0] rounded-full"></div>
                    </div>

                    <ul className="space-y-3">
                      {card.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#6d7071]"
                        >
                          <span
                            className={`${card.accentColor} font-bold mt-0.5 text-lg`}
                          >
                            ✓
                          </span>
                          <span className="text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full flex items-center justify-center gap-2 ${card.buttonColor} text-white rounded-xl py-6 text-base font-semibold transition-all duration-300`}
                      onClick={scrollToForm}
                    >
                      Apply Now
                      <ChevronRight size={20} />
                    </Button>

                    {/* Add this new button */}
                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 border-2 border-[#8b3f92] text-[#8b3f92] hover:bg-[#8b3f92] hover:text-white rounded-xl py-3 text-base font-semibold transition-all duration-300"
                      onClick={scrollToTable}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Card Comparison Table Section */}
      <div className="bg-white py-16" ref={tableRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#6d7071] mb-4">
              Compare Card Benefits
            </h2>
            <p className="text-lg text-[#888a8c] max-w-2xl mx-auto">
              Find the perfect card that matches your spending habits
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#8b3f92] to-[#47b9c0]">
                  <th className="px-6 py-4 text-left text-white font-semibold">
                    Card Level
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Platinum
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Infinite
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold">
                    Titanium
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    Target Customer
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Premium lifestyle seekers
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    High-net-worth individuals
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Smart digital users
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    Value Proposition
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Travel & dining rewards
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Unlimited exclusive access
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Pick your perk, Reward your way
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    Points Rebate
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    10 THB = 1 point
                    <br />
                    <span className="text-xs">
                      (limit: 20,000 points/cycle)
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    10 THB = 1 point
                    <br />
                    <span className="text-xs">Unlimited points</span>
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    10 THB = 1 point
                    <br />
                    <span className="text-xs">
                      (limit: 10,000 points/cycle)
                    </span>
                    <br />
                    10 THB = 3 points selective
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    Burn Points
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    10 points = 1 THB
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    10 points = 1 THB
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    10 points = 1 THB
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    Redeem Channel
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Redeem via LHB PromptPay
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Redeem via LHB PromptPay
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Redeem via LHB PromptPay
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    FX Markup Fee
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    0% for TWD
                    <br />
                    2.5% for other currencies
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">0%</td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    0% for TWD
                    <br />
                    2.5% for other currencies
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#6d7071]">
                    Special Offers
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    Free airport lounge access
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    VIP concierge service
                  </td>
                  <td className="px-6 py-4 text-center text-[#888a8c]">
                    0% installment for 4 months
                    <br />
                    3% fee waiving via LHB YOU
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {creditCards.map((card) => (
              <Card key={card.name} className="shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-[#6d7071] mb-4 pb-3 border-b-2 border-[#8b3f92]">
                    {card.name}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-[#6d7071] mb-1">
                        Target Customer
                      </p>
                      <p className="text-[#888a8c] text-sm">
                        {card.name === "Platinum" &&
                          "Premium lifestyle seekers"}
                        {card.name === "Infinite" &&
                          "High-net-worth individuals"}
                        {card.name === "Titanium" && "Smart digital users"}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#6d7071] mb-1">
                        Points Rebate
                      </p>
                      <p className="text-[#888a8c] text-sm">
                        10 THB = 1 point
                        {card.name === "Platinum" &&
                          " (limit: 20,000 points/cycle)"}
                        {card.name === "Infinite" && " (Unlimited points)"}
                        {card.name === "Titanium" &&
                          " (limit: 10,000 points/cycle), 10 THB = 3 points selective"}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#6d7071] mb-1">
                        FX Markup Fee
                      </p>
                      <p className="text-[#888a8c] text-sm">
                        {card.name === "Infinite"
                          ? "0%"
                          : "0% for TWD, 2.5% for other currencies"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA to Apply */}
          <div className="text-center mt-12">
            <Button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#8b3f92] to-[#47b9c0] hover:from-[#6d3f8f] hover:to-[#3a9aa0] text-white h-14 px-10 text-lg font-semibold rounded-xl shadow-lg"
            >
              Apply for a Card Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lead Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
            ref={formRef}
          >
            <Card className="rounded-2xl shadow-xl overflow-hidden border-0">
              <div className="bg-gradient-to-r from-[#8b3f92] via-[#6d3f8f] to-[#47b9c0] p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Apply for Your Card Today
                  </h2>
                  <p className="text-white/90 text-lg">
                    Complete the form below and our team will contact you within
                    24 hours
                  </p>
                </div>
              </div>

              <CardContent className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-[#6d7071] font-semibold text-sm"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        className="rounded-lg border-gray-300 focus:border-[#8b3f92] focus:ring-[#8b3f92] h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-[#6d7071] font-semibold text-sm"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="rounded-lg border-gray-300 focus:border-[#8b3f92] focus:ring-[#8b3f92] h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Monthly Income */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="monthlyIncome"
                      className="text-[#6d7071] font-semibold text-sm"
                    >
                      Monthly Income *
                    </Label>
                    <Select
                      value={formData.monthlyIncome}
                      onValueChange={(value) =>
                        setFormData({ ...formData, monthlyIncome: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#8b3f92] focus:ring-[#8b3f92] h-12">
                        <SelectValue placeholder="Select your monthly income" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="below-15000">
                          Below ฿15,000
                        </SelectItem>
                        <SelectItem value="15000-30000">
                          ฿15,000 - ฿30,000
                        </SelectItem>
                        <SelectItem value="30000-50000">
                          ฿30,000 - ฿50,000
                        </SelectItem>
                        <SelectItem value="50000-100000">
                          ฿50,000 - ฿100,000
                        </SelectItem>
                        <SelectItem value="above-100000">
                          Above ฿100,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="mobileNumber"
                      className="text-[#6d7071] font-semibold text-sm"
                    >
                      <Phone className="inline w-4 h-4 mr-1 mb-0.5" />
                      Mobile Number *
                    </Label>
                    <Input
                      id="mobileNumber"
                      type="tel"
                      placeholder="0XX-XXX-XXXX"
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobileNumber: e.target.value,
                        })
                      }
                      className="rounded-lg border-gray-300 focus:border-[#8b3f92] focus:ring-[#8b3f92] h-12"
                      required
                    />
                  </div>

                  {/* Working Province */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="workingProvince"
                      className="text-[#6d7071] font-semibold text-sm"
                    >
                      <MapPin className="inline w-4 h-4 mr-1 mb-0.5" />
                      Working Province *
                    </Label>
                    <Select
                      value={formData.workingProvince}
                      onValueChange={(value) =>
                        setFormData({ ...formData, workingProvince: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#8b3f92] focus:ring-[#8b3f92] h-12">
                        <SelectValue placeholder="Select your working province" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bangkok">Bangkok</SelectItem>
                        <SelectItem value="chiang-mai">Chiang Mai</SelectItem>
                        <SelectItem value="phuket">Phuket</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Available Time */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="availableTime"
                      className="text-[#6d7071] font-semibold text-sm"
                    >
                      <Clock className="inline w-4 h-4 mr-1 mb-0.5" />
                      Available Time *
                    </Label>
                    <Select
                      value={formData.availableTime}
                      onValueChange={(value) =>
                        setFormData({ ...formData, availableTime: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#8b3f92] focus:ring-[#8b3f92] h-12">
                        <SelectValue placeholder="Select your available time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          Morning (9:00 AM - 12:00 PM)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          Afternoon (12:00 PM - 3:00 PM)
                        </SelectItem>
                        <SelectItem value="evening">
                          Evening (3:00 PM - 6:00 PM)
                        </SelectItem>
                        <SelectItem value="anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="flex items-start space-x-3 py-4">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, agreeToTerms: checked })
                      }
                      className="mt-1 data-[state=checked]:bg-[#8b3f92] data-[state=checked]:border-[#8b3f92]"
                      required
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm text-[#6d7071] leading-relaxed cursor-pointer"
                      >
                        I have read and agree to the{" "}
                        <button
                          type="button"
                          onClick={() => window.open("/terms", "_blank")}
                          className="text-[#8b3f92] hover:text-[#6d3f8f] underline font-semibold"
                        >
                          Terms & Conditions
                        </button>{" "}
                        and{" "}
                        <button
                          type="button"
                          onClick={() => window.open("/privacy", "_blank")}
                          className="text-[#8b3f92] hover:text-[#6d3f8f] underline font-semibold"
                        >
                          Privacy Policy
                        </button>
                        {" *"}
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.agreeToTerms}
                    className="w-full bg-gradient-to-r from-[#8b3f92] to-[#47b9c0] hover:from-[#6d3f8f] hover:to-[#3a9aa0] text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending OTP...
                      </span>
                    ) : (
                      <>
                        Submit Application
                        <ChevronRight size={22} className="ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-[#888a8c] mt-4">
                    Your information is secure and will only be used to process
                    your application
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* OTP Dialog */}
      <OTPDialog
        open={showOTP}
        onOpenChange={handleOTPClose}
        phoneNumber={formData.mobileNumber}
        onVerifySuccess={handleVerifySuccess}
      />

      {/* Footer spacing */}
      <div className="h-12"></div>
    </div>
  );
}
