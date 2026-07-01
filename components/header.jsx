"use client";

export const runtime = "nodejs";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "/resume", label: "Resume Builder", icon: FileText },
  { href: "/ai-cover-letter", label: "Cover Letter", icon: PenBox },
  { href: "/interview", label: "Interview Prep", icon: GraduationCap },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "top-3 px-6" : "top-0 px-0"
        }`}
      >
        <nav
          className={`mx-auto flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "h-16 max-w-5xl rounded-2xl border border-primary/10 bg-background/90 backdrop-blur-xl shadow-xl shadow-primary/5 px-6"
              : "h-20 max-w-full border-b border-primary/8 bg-background/85 backdrop-blur-lg px-8"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center h-9 w-9 rounded-xl bg-primary text-white shadow-lg shadow-primary/40 group-hover:shadow-primary/60 group-hover:scale-105 transition-all duration-300">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold gradient-title tracking-tight">
                CareerForge AI
              </span>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide hidden sm:block">
                Your AI Career Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav pill */}
          <SignedIn>
            <div className="hidden lg:flex items-center gap-1 bg-primary/5 border border-primary/10 rounded-xl px-2 py-2">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-background hover:shadow-sm px-4 py-2 rounded-lg transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </SignedIn>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <SignedIn>
              <Link href="/dashboard" className="hidden sm:block">
                <Button
                  size="sm"
                  className="h-9 gap-2 text-sm px-4 rounded-xl shadow-md shadow-primary/20 hover:shadow-primary/35 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:inline">Industry Insights</span>
                </Button>
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 text-sm px-4 rounded-xl border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "h-9 w-9 rounded-xl ring-2 ring-primary/15 hover:ring-primary/40 hover:scale-105 transition-all duration-200",
                    userButtonPopoverCard:
                      "shadow-2xl border border-primary/10 rounded-2xl",
                    userPreviewMainIdentifier: "font-bold",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>

            {/* Mobile toggle */}
            <SignedIn>
              <button
                className="lg:hidden flex items-center justify-center h-9 w-9 rounded-xl border border-primary/15 bg-primary/5 hover:bg-primary/10 hover:border-primary/25 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </SignedIn>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <SignedIn>
          <div className="fixed top-24 left-5 right-5 z-40 lg:hidden rounded-2xl border border-primary/10 bg-background/96 backdrop-blur-xl shadow-2xl shadow-primary/10 px-4 py-4 space-y-1.5">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 px-4 py-3 rounded-xl transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/8 border border-primary/12">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                {label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full gap-2 h-10 rounded-xl cursor-pointer">
                  <LayoutDashboard className="h-4 w-4" />
                  Industry Insights
                </Button>
              </Link>
            </div>
          </div>
        </SignedIn>
      )}
    </>
  );
};

export default Header;
