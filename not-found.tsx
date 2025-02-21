"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CardSuit = ({ suit }: { suit: "♠" | "♥" | "♣" | "♦" }) => (
  <motion.div
    className={`text-6xl ${
      suit === "♥" || suit === "♦" ? "text-red-500" : "text-white"
    }`}
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
  >
    {suit}
  </motion.div>
);

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4">
          {Array.from({ length: 64 }).map(() => (
            <CardSuit
              key={crypto.randomUUID()} // Use a unique key instead of the index
              suit={
                ["♠", "♥", "♣", "♦"][Math.floor(Math.random() * 4)] as
                  | "♠"
                  | "♥"
                  | "♣"
                  | "♦"
              }
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center z-10"
      >
        <h1 className="text-9xl font-bold text-white mb-4 relative">
          <span className="absolute -inset-1 bg-[#3498db] blur opacity-30"></span>
          <span className="relative">404</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Looks like you&apos;ve drawn a dead hand. Let&apos;s get you back to
          the action.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#3498db] text-white px-8 py-3 rounded font-semibold hover:bg-[#2980b9] transition-colors"
        >
          Return Home
        </Link>
      </motion.div>

      {/* Animated Cards */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <motion.div
          className="relative"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="absolute -left-4 -bottom-4 w-20 h-28 bg-white rounded-lg shadow-lg"
            initial={{ rotate: -15 }}
            animate={{ rotate: [-15, 0, -15] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-1 left-1 text-2xl text-red-500">♥</div>
            <div className="absolute bottom-1 right-1 text-2xl text-red-500 transform rotate-180">
              ♥
            </div>
          </motion.div>
          <motion.div
            className="w-20 h-28 bg-white rounded-lg shadow-lg"
            initial={{ rotate: 15 }}
            animate={{ rotate: [15, 0, 15] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="absolute top-1 left-1 text-2xl">♠</div>
            <div className="absolute bottom-1 right-1 text-2xl transform rotate-180">
              ♠
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
