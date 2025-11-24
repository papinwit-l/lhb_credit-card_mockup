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

// Import card images
import platinumCardImg from "@/assets/platinum-card.png";
import infiniteCardImg from "@/assets/infinite-card.png";
import titaniumCardImg from "@/assets/titanium-card.png";
import OTPDialogV2 from "@/components/OTPDialogV2";

export default function CreditCardV2() {
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

    console.log("Form cleared and ready for next application");
  };

  // Handle OTP dialog close
  const handleOTPClose = (open) => {
    setShowOTP(open);
  };

  // handle scroll to form
  const scrollToForm = () => {
    const yOffset = -80;
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

  // Mock up credit card data - Updated to match LH Bank design
  const creditCards = [
    {
      name: "Foreigner VISA",
      image: platinumCardImg,
      gradient: "from-gray-300 to-gray-400",
      bgColor: "bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400",
      benefits: [
        "10 THB get 1 point for all spending (limit: 20,000 points/cycle)",
        "The First Choice of Taiwanese in Thailand",
        "0% FX markup fee for all currencies",
      ],
      buttonColor: "bg-gray-800 hover:bg-gray-900",
      accentColor: "text-gray-800",
    },
    {
      name: "VISA card Signature",
      image: infiniteCardImg,
      gradient: "from-gray-800 to-black",
      bgColor: "bg-gradient-to-br from-gray-800 to-black",
      benefits: [
        "10 THB get 1 point (limit: 20,000 points/cycle)",
        "10 THB get 3 points selective (limit: 30,000 points/cycle)",
        "Pick your perk. Reward your way",
      ],
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
      accentColor: "text-yellow-600",
    },
    {
      name: "VISA card Platinum",
      image: titaniumCardImg,
      gradient: "from-[#6d4c7d] to-[#8b3f92]",
      bgColor: "bg-gradient-to-br from-[#6d4c7d] to-[#8b3f92]",
      benefits: [
        "10 THB get 1 point (limit: 10,000 points/cycle)",
        "10 THB get 3 points selective (limit: 15,000 points/cycle)",
        "0% installment for 4 months",
      ],
      buttonColor: "bg-gray-600 hover:bg-gray-700",
      accentColor: "text-gray-600",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section - Updated to match LH Bank style */}
      <div className="relative w-full bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <CreditCard className="w-6 h-6 text-gray-700" />
              <span className="text-gray-600 font-medium">Credit Cards</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              LH Bank VISA Credit Cards
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Details
            </p>
          </motion.div>
        </div>
      </div>

      {/* Card List Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Card
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              <Card className="rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white">
                <CardContent className="p-0">
                  {/* Card Image */}
                  <div
                    className={`h-64 ${card.bgColor} relative overflow-hidden flex items-center justify-center p-8`}
                  >
                    <img
                      src={card.image}
                      alt={`LH Bank ${card.name}`}
                      className="w-full h-auto max-w-[320px] object-contain drop-shadow-2xl"
                    />
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        LHB {card.name}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {card.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="text-gray-900 font-bold mt-0.5 text-sm">
                            •
                          </span>
                          <span className="text-sm leading-relaxed">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg py-5 text-sm font-semibold transition-all duration-300 border border-gray-300"
                      onClick={scrollToForm}
                    >
                      Apply Now
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg py-5 text-sm font-semibold transition-all duration-300"
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
      <div className="bg-white py-16 border-t border-gray-200" ref={tableRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare Card Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect card that matches your spending habits
            </p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300">
                  <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">
                    Card level
                  </th>
                  <th className="px-6 py-4 text-center text-gray-900 font-semibold text-sm">
                    LHB Foreigner VISA card
                  </th>
                  <th className="px-6 py-4 text-center text-gray-900 font-semibold text-sm">
                    LHB VISA card Signature
                  </th>
                  <th className="px-6 py-4 text-center text-gray-900 font-semibold text-sm">
                    LHB VISA card Platinum
                  </th>
                  <th className="px-6 py-4 text-center text-gray-900 font-semibold text-sm">
                    Installation/Cash Advance
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    Card level
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Signature
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Signature
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Platinum
                  </td>
                  <td
                    className="px-6 py-4 text-center text-gray-700 text-sm"
                    rowSpan="7"
                  >
                    <div className="space-y-2">
                      <p className="font-semibold">
                        0% installment for 4 months
                      </p>
                      <p className="font-semibold">
                        3% fee waving when apply via LHB YOU
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    Target customer
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Taiwanese working in Thailand
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Thai affluent with travel needs
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Thai mass affluent and digital
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    Value proposition
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    The First Choice of Taiwanese in Thailand
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Pick your perk. Reward your way
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Pick your perk. Reward your way
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    Points rebate
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    10 THB get 1 point for all spending
                    <br />
                    <span className="text-xs">
                      (limit: 20,000 points/cycle)*
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    10 THB get 1 point for all spending
                    <br />
                    <span className="text-xs">
                      (limit: 20,000 points/cycle)
                    </span>
                    <br />
                    10 THB get 3 points selective lifestyle
                    <br />
                    <span className="text-xs">
                      (limit: 30,000 points/cycle)**
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    10 THB get 1 point for all spending
                    <br />
                    <span className="text-xs">
                      (limit: 10,000 points/cycle)
                    </span>
                    <br />
                    10 THB get 3 points selective lifestyle
                    <br />
                    <span className="text-xs">
                      (limit: 15,000 points/cycle)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    Burn points
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    10 points = 1 THB
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    10 points = 1 THB
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    10 points = 1 THB
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    Redeem channel
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Redeem via LHB PromptPay
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Redeem via LHB PromptPay
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    Redeem via LHB PromptPay
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900 text-sm bg-gray-50">
                    FX markup fee
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    0%
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    0%
                  </td>
                  <td className="px-6 py-4 text-center text-gray-700 text-sm">
                    0% for TWD
                    <br />
                    2.5% for other non-Thai currency
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {creditCards.map((card) => (
              <Card
                key={card.name}
                className="shadow-md border border-gray-200"
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-300">
                    LHB {card.name}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-sm">
                        Target Customer
                      </p>
                      <p className="text-gray-700 text-sm">
                        {card.name === "Foreigner VISA" &&
                          "Taiwanese working in Thailand"}
                        {card.name === "VISA card Signature" &&
                          "Thai affluent with travel needs"}
                        {card.name === "VISA card Platinum" &&
                          "Thai mass affluent and digital"}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-sm">
                        Points Rebate
                      </p>
                      <p className="text-gray-700 text-sm">
                        {card.name === "Foreigner VISA" &&
                          "10 THB = 1 point (limit: 20,000 points/cycle)"}
                        {card.name === "VISA card Signature" &&
                          "10 THB = 1 point (limit: 20,000 points/cycle), 10 THB = 3 points selective (limit: 30,000 points/cycle)"}
                        {card.name === "VISA card Platinum" &&
                          "10 THB = 1 point (limit: 10,000 points/cycle), 10 THB = 3 points selective (limit: 15,000 points/cycle)"}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 text-sm">
                        FX Markup Fee
                      </p>
                      <p className="text-gray-700 text-sm">
                        {card.name === "Foreigner VISA" ||
                        card.name === "VISA card Signature"
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
              className="bg-[#4BA5BC] hover:bg-[#3d8ea3] text-white h-12 px-10 text-base font-semibold rounded-full shadow-md"
            >
              Apply for Card Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lead Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
            ref={formRef}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden border border-gray-200 bg-white">
              <div className="bg-[#4BA5BC] p-8 md:p-10 text-white relative overflow-hidden">
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">
                    Apply for Your Card Today
                  </h2>
                  <p className="text-white/95 text-lg">
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
                        className="text-gray-900 font-semibold text-sm"
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
                        className="rounded-lg border-gray-300 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-gray-900 font-semibold text-sm"
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
                        className="rounded-lg border-gray-300 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] h-12"
                        required
                      />
                    </div>
                  </div>

                  {/* Monthly Income */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="monthlyIncome"
                      className="text-gray-900 font-semibold text-sm"
                    >
                      Monthly Income *
                    </Label>
                    <Select
                      value={formData.monthlyIncome}
                      onValueChange={(value) =>
                        setFormData({ ...formData, monthlyIncome: value })
                      }
                    >
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] h-12">
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
                      className="text-gray-900 font-semibold text-sm"
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
                      className="rounded-lg border-gray-300 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] h-12"
                      required
                    />
                  </div>

                  {/* Working Province */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="workingProvince"
                      className="text-gray-900 font-semibold text-sm"
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
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] h-12">
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
                      className="text-gray-900 font-semibold text-sm"
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
                      <SelectTrigger className="rounded-lg border-gray-300 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] h-12">
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
                      className="mt-1 data-[state=checked]:bg-[#4BA5BC] data-[state=checked]:border-[#4BA5BC]"
                      required
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                      >
                        I have read and agree to the{" "}
                        <button
                          type="button"
                          onClick={() => window.open("/terms", "_blank")}
                          className="text-[#4BA5BC] hover:text-[#3d8ea3] underline font-semibold"
                        >
                          Terms & Conditions
                        </button>{" "}
                        and{" "}
                        <button
                          type="button"
                          onClick={() => window.open("/privacy", "_blank")}
                          className="text-[#4BA5BC] hover:text-[#3d8ea3] underline font-semibold"
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
                    className="w-full bg-[#4BA5BC] hover:bg-[#3d8ea3] text-white rounded-full py-6 text-lg font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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

                  <p className="text-center text-sm text-gray-600 mt-4">
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
      <OTPDialogV2
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
