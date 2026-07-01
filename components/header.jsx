"use client";

export const runtime = "nodejs";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import React, { useState } from "react";

import { Button } from "./ui/button";

import {
  FileText,
  GraduationCap,
  LayoutDashboard,
  Menu,
  PenBox,
  X,
} from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-bold sm:text-2xl">ai coach</h1>
        </Link>

        {/* Desktop Menu */}
        <SignedIn>
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/resume"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              Build Resume
            </Link>

            <Link
              href="/ai-cover-letter"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <PenBox className="h-4 w-4" />
              Cover Letter
            </Link>

            <Link
              href="/interview"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <GraduationCap className="h-4 w-4" />
              Interview Prep
            </Link>
          </div>
        </SignedIn>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Dashboard Button */}
          <SignedIn>
            <Link href="/dashboard" className="hidden sm:block">
              <Button className="flex items-center gap-2 cursor-pointer">
                <LayoutDashboard className="h-4 w-4" />

                <span className="hidden md:inline">Industry Insights</span>
              </Button>
            </Link>
          </SignedIn>

          {/* Sign In Button */}
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          {/* User Button */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-bold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>

          {/* Mobile Menu Button */}
          <SignedIn>
            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </SignedIn>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <SignedIn>
          <div className="lg:hidden border-t bg-background px-4 py-4 space-y-4">
            <Link
              href="/resume"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              Build Resume
            </Link>

            <Link
              href="/ai-cover-letter"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PenBox className="h-4 w-4" />
              Cover Letter
            </Link>

            <Link
              href="/interview"
              className="flex items-center gap-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GraduationCap className="h-4 w-4" />
              Interview Prep
            </Link>

            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
            </Link>
          </div>
        </SignedIn>
      )}
    </header>
  );
};

export default Header;
