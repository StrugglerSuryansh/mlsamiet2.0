"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { TextAnimate } from "./magicui/text-animate";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  // Custom toast notification state
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to show toast notification
  const displayToast = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    
    // Auto-dismiss toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];
    const storedData = localStorage.getItem("submissionData");
    const submissionData = storedData
      ? JSON.parse(storedData)
      : { date: today, count: 0 };

    if (submissionData.date !== today) {
      submissionData.date = today;
      submissionData.count = 0;
    }

    if (submissionData.count >= 5) {
      displayToast("You have reached the maximum number of submissions for today.", "error");
      return;
    }

    submissionData.count += 1;
    localStorage.setItem("submissionData", JSON.stringify(submissionData));

    fetch("https://mlsa-server.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        displayToast("Form submitted successfully!", "success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        displayToast("Failed to send your message. Please try again later.", "error");
      });
  };

  return (
    <section id="contact">
      {/* Custom Toast Notification - Bottom Right */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-lg animate-fade-in-up"
             style={{ 
               backgroundColor: toastType === "success" ? "#E8F5E9" : "#FFEBEE",
               borderLeft: `4px solid ${toastType === "success" ? "#4CAF50" : "#F44336"}`,
               animation: "slideInUp 0.3s ease-out forwards"
             }}>
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2">
              {toastType === "success" ? (
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </div>
            <div>
              <p className={`font-medium ${toastType === "success" ? "text-green-800" : "text-red-800"}`}>
                {toastMessage}
              </p>
            </div>
            <button 
              onClick={() => setShowToast(false)}
              className="ml-auto text-gray-500 hover:text-gray-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      <div className="flex flex-col items-center justify-center gap-4 text-[#203A61] dark:text-cyan-400 text-center m-4">
        <TextAnimate
          animation="blurInUp"
          by="character"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl primary" children={""}          >
        </TextAnimate>
      </div>

      <div className="min-h-screen w-full bg-white p-4 md:p-8 id=contact">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Left side illustration */}
          <div className="relative hidden lg:block">
            <div className="absolute left-8 top-8 h-[400px] w-[400px] rounded-[40px] border bg-white p-4 shadow-sm">
              <img
                src="mlsamietlogo1.png"
                alt="Illustration"
                className="rounded-[36px]"
              />
            </div>
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-blue-50"></div>
            <div className="absolute -bottom-4 right-12 h-32 w-32 rounded-full bg-yellow-50"></div>
            <div className="absolute bottom-32 -left-8 h-16 w-16 rounded-full bg-red-50"></div>
            <div className="absolute right-0 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-green-50"></div>
          </div>

          {/* Right side form */}
          <div className="relative rounded-[40px] bg-white p-8 border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="rounded-xl border-gray-300 bg-white secondary"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Phone No.
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="rounded-xl border-gray-300 bg-white secondary"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-xl border-gray-300 bg-white secondary"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-base font-semibold text-gray-700 primary"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="min-h-[120px] resize-none rounded-xl border-gray-300 bg-white secondary"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-[#203A61] hover:bg-[##607da9] text-white font-bold py-2 px-6 rounded-[5px] shadow-lg transition-all duration-300 transform hover:scale-105 secondary"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}