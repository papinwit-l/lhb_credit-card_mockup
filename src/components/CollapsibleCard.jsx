import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CollapsibleCard({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="flex-1 text-left text-xl font-bold text-gray-900">
          {title}
        </h3>
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full bg-[#4BA5BC]/10 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="w-5 h-5 text-[#4BA5BC]" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CollapsibleCard;
