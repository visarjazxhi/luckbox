"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="text-2xl font-bold mb-4 block">
            <span className="text-[#3498db]">Luck</span>Box
          </Link>
          <p className="text-gray-600 dark:text-gray-400">
            Transform from a luck box to a skilled player through comprehensive
            poker training.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Training</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/training/fundamentals"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Fundamentals
              </Link>
            </li>
            <li>
              <Link
                href="/training/advanced"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Advanced Strategy
              </Link>
            </li>
            <li>
              <Link
                href="/training/mental-game"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Mental Game
              </Link>
            </li>
            <li>
              <Link
                href="/training/live-sessions"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Live Sessions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => {
                  /* Add handler */
                }}
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Discord Community
              </button>
            </li>
            <li>
              <a
                href="https://twitter.com/luckbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/luckbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/luckbox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#3498db] transition-colors"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} LuckBox Poker Training. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
