"use client";

import React, { useState, useEffect, useRef } from "react";
import DonationsModal from "../../modal/DonationsModal";
import { motion, AnimatePresence } from "framer-motion";

function MainHeader() {
  const [showPayPal, setShowPayPal] = useState(false);
  const paypalRef = useRef(null);

  useEffect(() => {
    if (showPayPal && paypalRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AXr4UIOmeot54V2uNE_M4bGGch06W-yNS1LHcezuvFN0VQI_Vw9-GOXvs0tzdua4eVnYAYYbVdHqlEYq&vault=true&intent=subscription";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.paypal
          .Buttons({
            style: {
              shape: "pill",
              color: "blue",
              layout: "vertical",
              label: "subscribe",
            },
            createSubscription: function (data, actions) {
              return actions.subscription.create({
                plan_id: "P-75E64413KL930952ENBWCOXA",
              });
            },
            onApprove: function (data, actions) {
              alert(
                `Thank you for subscribing! Subscription ID: ${data.subscriptionID}`
              );
            },
          })
          .render(paypalRef.current);
      };
    }
  }, [showPayPal]);

  return (
    <>
      <header className="border-b border-gray-800 p-8 w-full h-16 flex items-center bg-gray-900">
        <img
          className="w-full h-fit min-w-6 max-w-8 min-h-6 max-h-8 object-contain mr-auto cursor-pointer"
          src="/logo.png"
          alt="logo icon"
        />
        <div className="flex items-center gap-2 sm:gap-8 sm:text-base text-xs font-[Inter]">
          <a
            id="resumeAnalitics"
            className="hover:text-[#FFD700] hover:scale-125 transition-transform duration-200"
            target="_blank"
            href="https://resume.koxland.dev/"
          >
            Resume
          </a>
          <a
            id="githubAnalitics"
            className="hover:text-[#FFD700] hover:scale-125 transition-transform duration-200"
            target="_blank"
            href="https://github.com/Koxone"
          >
            Github
          </a>
          <a
            className="hover:text-[#FFD700] hover:scale-125 transition-transform duration-200"
            target="_blank"
            href="https://www.youtube.com/@KoxDeveloper"
          >
            Youtube
          </a>
          <a
            id="contactAnalitics"
            className="hover:text-[#FFD700] hover:scale-125 transition-transform duration-200"
            href="#footer"
          >
            Contact
          </a>
          <a
            id="donateAnalitics"
            className="hover:text-[#FFD700] hover:scale-125 transition-transform duration-200 cursor-pointer"
            onClick={() => setShowPayPal(true)}
          >
            Donate
          </a>
        </div>
      </header>
      <AnimatePresence>
        {showPayPal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowPayPal(false)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-gray-900 p-6 rounded-lg border flex flex-col items-center gap-4 w-[300px]"
              onClick={(e) => e.stopPropagation()}
            >
              {showPayPal && (
                <DonationsModal
                  paypalRef={paypalRef}
                  setShowPayPal={setShowPayPal}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MainHeader;
