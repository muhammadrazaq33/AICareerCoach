import Link from "next/link";
import {
  BriefcaseIcon,
  FileText,
  BarChart2,
  Mic,
  LayoutDashboard,
  BookOpen,
  Mail,
  Github,
  Shield,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const platformLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/resume", label: "Resume Builder", icon: FileText },
    { href: "/interview", label: "Interview Prep", icon: Mic },
    { href: "/ai-cover-letter", label: "Cover Letter", icon: BookOpen },
    { href: "/insights", label: "Industry Insights", icon: BarChart2 },
  ];

  const resourceLinks = [
    { href: "/interview/mock", label: "Mock Interview", icon: Mic },
    { href: "/resume", label: "ATS Resume", icon: FileText },
    { href: "/insights", label: "Market Trends", icon: BarChart2 },
    { href: "/ai-cover-letter/new", label: "Generate Letter", icon: Sparkles },
  ];

  const aboutLinks = [
    {
      href: "/about/uet-taxila",
      label: "UET Taxila",
      icon: GraduationCap,
    },
    {
      href: "/about/team",
      label: "Our Team",
      icon: Users,
    },
    {
      href: "/privacy-policy",
      label: "Privacy Policy",
      icon: Shield,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
    },
    {
      href: "https://github.com",
      label: "GitHub",
      icon: Github,
    },
  ];

  const techStack = [
    "Next.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Gemini AI",
    "Prisma",
    "Clerk",
    "Shadcn UI",
  ];

  return (
    <footer className="w-full border-t border-primary/10 bg-background mt-10">
      <div className="container mx-auto px-5 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold gradient-title">
                CareerForge AI
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Your AI-powered career partner. Build ATS-ready resumes, prep for
              interviews, and stay ahead with real-time industry insights — all
              in one place.
            </p>

            {/* Feature badges matching project badge style */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary gap-1"
              >
                <FileText className="h-3 w-3" />
                ATS Resume
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary gap-1"
              >
                <Mic className="h-3 w-3" />
                Mock Interview
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 text-primary gap-1"
              >
                <BarChart2 className="h-3 w-3" />
                Insights
              </Badge>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <Icon className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <Icon className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground tracking-wide uppercase">
              About
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
                  >
                    <Icon className="h-3.5 w-3.5 group-hover:text-primary transition-colors" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-primary/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} CareerAI · Final Year Project,{" "}
            <span className="text-primary font-medium">UET Taxila</span>
          </p>

          {/* Tech stack chips — matching bg-primary/5 border-primary/20 pattern */}
          <div className="flex items-center flex-wrap gap-2 justify-center md:justify-end">
            <span className="text-xs text-muted-foreground mr-1">
              Built with
            </span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
