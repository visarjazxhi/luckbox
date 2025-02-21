"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Book() {
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle booking submission (e.g., send data to an API)
    console.log("Booking submitted:", bookingData);
    // Reset form
    setBookingData({ service: "", date: "", time: "", name: "", email: "" });
  };

  return (
    <div className="min-h-screen py-20">
      <section className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-blue-600">
          Book Your Session
        </h1>
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <label
                htmlFor="service"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Service
              </label>
              <select
                id="service"
                name="service"
                value={bookingData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a service</option>
                <option value="coaching">Expert Coaching</option>
                <option value="tournament">Live Tournament</option>
                <option value="workshop">Strategy Workshop</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="time"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={bookingData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={bookingData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={bookingData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors"
            >
              Book Now
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
