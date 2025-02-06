"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
// import image from "../assets/contact.png";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      alert("You have reached the maximum number of submissions for today.");
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
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen w-full bg-white p-4 md:p-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        {/* Left side illustration */}
        <div className="relative hidden lg:block">
          <div className="absolute left-8 top-8 h-[400px] w-[400px] rounded-[40px] border bg-white p-4 shadow-sm">
            {/* <img 
              src={image.src} 
              alt="Illustration" 
              className="rounded-[36px]" 
            /> */}
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
                className="text-base font-semibold text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="rounded-xl border-gray-300 bg-white"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-base font-semibold text-gray-700"
              >
                Phone No.
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="rounded-xl border-gray-300 bg-white"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-base font-semibold text-gray-700"
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
                className="rounded-xl border-gray-300 bg-white"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-base font-semibold text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="min-h-[120px] resize-none rounded-xl border-gray-300 bg-white"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="rounded-xl bg-black px-8 py-3 text-lg font-semibold text-white hover:bg-black/90"
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}