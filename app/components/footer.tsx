"use client";
import Link from "next/link";
import { AnimatedSubscribeButton } from "./animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

export function Footer({
  dictionary,
}: {
  dictionary: Record<string, string>;
}) {
  return (
    <footer className="relative mt-12 overflow-hidden  rounded-t-xl">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
        <path
          fill="#3b82f6"
          fillOpacity="1"
          d="M0,64C160,128,1280,128,1440,64C1600,0,1600,320,1440,320C1280,320,160,320,0,320Z"
        ></path>
      </svg>
      <div className="px-4 pt-14 pb-8 bg-gradient-to-b from-blue-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {dictionary.title}
            </h2>
            <p className="text-lg mb-8 text-white/90">
              {dictionary.description}
            </p>

            {/* Email form */}
            <form className="max-w-xl mx-auto flex gap-2 mb-12">
              <input
                type="email"
                placeholder={dictionary.emailPlaceholder}
                className="flex-1 px-4 py-2 rounded-full text-gray-900 bg-white placeholder:text-gray-500"
              />
              <AnimatedSubscribeButton className="w-36 rounded-full" onClick={() => { }}>
                <span className="group inline-flex items-center">
                  {dictionary.subscribeButton}
                  <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="group inline-flex items-center">
                  <CheckIcon className="mr-2 size-4" />
                  {dictionary.subscribedButton}
                </span>
              </AnimatedSubscribeButton>
            </form>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-sm font-medium">
              <Link href="/blog" className="hover:underline">
                {dictionary.blogLink}
              </Link>
              <Link href="/new-features" className="hover:underline">
                {dictionary.newFeaturesLink}
              </Link>
              <Link href="/contact" className="hover:underline">
                {dictionary.contactLink}
              </Link>
            </nav>

            {/* Logo */}
            <div className="flex justify-center mb-8">
              <svg width="120" height="40" viewBox="0 0 120 40" fill="currentColor">
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="24">
                  {dictionary.logo}
                </text>
              </svg>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/80">
              <span>{dictionary.copyright}</span>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:underline">
                {dictionary.privacyPolicy}
              </Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:underline">
                {dictionary.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
