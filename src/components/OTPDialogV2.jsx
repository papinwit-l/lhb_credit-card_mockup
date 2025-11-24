import React, { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function OTPDialogV2({
  open,
  onOpenChange,
  phoneNumber,
  onVerifySuccess,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    if (open && timer > 0 && !showSuccess) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [open, timer, showSuccess]);

  // Reset when dialog opens
  useEffect(() => {
    if (open) {
      setOtp(["", "", "", "", "", ""]);
      setTimer(60);
      setCanResend(false);
      setShowSuccess(false);
      setIsVerifying(false);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [open]);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
      inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
    // Here you would trigger resend OTP API
    console.log("Resending OTP to:", phoneNumber);
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");
    console.log("Verifying OTP:", otpCode);

    setIsVerifying(true);

    // Simulate API call for OTP verification
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setShowSuccess(true);

      // Wait 2 seconds then close and trigger success callback
      setTimeout(() => {
        onVerifySuccess();
        onOpenChange(false);
      }, 2000);
    } catch (error) {
      console.error("OTP verification failed:", error);
      setIsVerifying(false);
      // Handle error (you can add error state and display)
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  // Success Screen
  if (showSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="w-20 h-20 bg-[#4BA5BC] rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Verification Successful!
            </h3>
            <p className="text-center text-gray-600">
              Your application has been submitted successfully.
              <br />
              We'll contact you shortly.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            Verify Your Identity
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Enter the 6-digit code sent to
            <br />
            <span className="font-semibold text-gray-900">{phoneNumber}</span>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* OTP Input Fields */}
          <div className="flex gap-2 justify-center" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                disabled={isVerifying}
                className="w-12 h-12 text-center text-xl font-bold rounded-lg border-2 focus:border-[#4BA5BC] focus:ring-[#4BA5BC] disabled:opacity-50"
              />
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="text-center">
            {!canResend ? (
              <p className="text-sm text-gray-600">
                Resend code in{" "}
                <span className="font-semibold text-[#4BA5BC]">{timer}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                disabled={isVerifying}
                className="text-sm text-[#4BA5BC] hover:text-[#3d8ea3] font-semibold transition-colors disabled:opacity-50"
              >
                Resend Code
              </button>
            )}
          </div>

          {/* Verify Button */}
          <Button
            className="w-full bg-[#4BA5BC] hover:bg-[#3d8ea3] text-white h-12 font-semibold disabled:opacity-50 disabled:cursor-not-allowed rounded-full"
            onClick={handleVerify}
            disabled={!isOtpComplete || isVerifying}
          >
            {isVerifying ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Verifying...
              </span>
            ) : (
              "Verify & Continue"
            )}
          </Button>

          {/* Help Text */}
          <p className="text-xs text-center text-gray-600">
            Having trouble? Contact us at 1234-5678
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
