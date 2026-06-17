"use client";


import Image from "next/image";
import heroBg from "@/app/assets/images/hero-bg.jpg";
import { ArrowRight, Star, BookCheck, Users, Trophy, BadgeCheck } from "lucide-react";
import { Button } from "../ui/button";

const stats = [
  { icon: BookCheck, value: "2,500+", label: "Books Published" },
  { icon: Users, value: "1,200+", label: "Happy Authors" },
  { icon: Trophy, value: "98%", label: "Satisfaction Rate" },
  { icon: Star, value: "10+", label: "Years Experience" },
];

export default function HeroSection() {
  // Form submission handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Yahan tum apna data backend par bhej sakte ho
    alert("Form successfully submit ho gaya!");
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white py-10 md:py-15"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-white via-white/90 to-transparent pointer-events-none" />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 z-2 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D5D9D9 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Orange glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-amazon-orange/8 rounded-full blur-3xl pointer-events-none z-2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-serif md:text-5xl xl:text-6xl text-amazon-dark leading-[1.08] tracking-tight mb-5">
          Your Story Deserves{" "}
          <span className="text-amazon-orange relative inline-block">
            to Be Heard
            <svg
              className="absolute -bottom-1.5 left-0 w-full"
              height="5"
              viewBox="0 0 200 5"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 3 Q100 0 200 3"
                stroke="#FF9900"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          From manuscript to bestseller — we handle every step of your
          publishing journey with expert ghostwriters, designers, editors,
          and marketers.
        </p>

        {/* --- MAIN FORM START --- */}
        <form onSubmit={handleSubmit} className="mt-10 bg-white border border-border rounded-md shadow-md overflow-hidden">
          {/* Form header bar */}
          <div className="bg-secondary px-6 py-4 text-left">
            <h3 className="font-serif text-white text-base">
              Start Your Publishing Journey
            </h3>
            <p className="text-white/60 text-xs mt-0.5">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Form body */}
          <div className="px-6 py-6 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Book Title */}
              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Book Title
                </label>
                <input
                  type="text"
                  required   /* <--- Alert ke liye mandatory kiya */
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface"
                  placeholder="Enter your book title"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required   /* <--- Alert ke liye mandatory kiya */
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col items-start gap-1.5">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  required   /* <--- Alert ke liye mandatory kiya */
                  className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface"
                  placeholder="Enter your email"
                />
              </div>

              {/* Service Dropdown */}
              <div className="flex flex-col items-start gap-1.5 w-full">
                <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                  Service Interested In
                </label>
                <div className="relative w-full">
                  <select
                    required   /* <--- Dropdown check ke liye */
                    className="w-full border border-border rounded-sm py-2.5 pl-3 pr-10 text-sm text-amazon-dark focus:outline-none focus:border-amazon-orange bg-amazon-surface appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    <option value="ghostwriting">Ghostwriting</option>
                    <option value="editing">Editing</option>
                    <option value="cover-design">Cover Design</option>
                    <option value="publishing">Publishing</option>
                    <option value="marketing">Marketing</option>
                    <option value="Others">Others</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-amazon-dark">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Textarea */}
            <div className="flex flex-col items-start gap-1.5">
              <label className="text-xs font-serif text-amazon-dark uppercase tracking-wide">
                Tell Us About Your Project
              </label>
              <textarea
                required   /* <--- Agar message bhi zaroori rakhna ho */
                className="w-full border border-border rounded-sm py-2.5 px-3 text-sm text-amazon-dark placeholder:text-muted-foreground focus:outline-none focus:border-amazon-orange bg-amazon-surface min-h-[100px]"
                placeholder="Briefly describe your project (e.g., genre, estimated word count)..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" /* <--- Type ko submit kiya taake validation trigger ho */
              className="w-full bg-amazon-orange hover:bg-amazon-orange-hover text-amazon-dark font-bold text-sm py-3 rounded-sm transition-colors duration-150 uppercase tracking-wide cursor-pointer"
            >
              Get a Free Consultation →
            </button>
          </div>
        </form>
        {/* --- MAIN FORM END --- */}

      </div>
    </section>
  );
}