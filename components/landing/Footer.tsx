import Link from "next/link";
import { TwitterIcon, GitHubIcon } from "../assets/svg";

const footerSections = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Documentation"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: TwitterIcon,
  },
  {
    label: "GitHub",
    href: "#",
    icon: GitHubIcon,
  },
];

const linkClass =
  "text-[#C0C7D4] text-[15px] transition-colors hover:text-white";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 flex w-full flex-col items-center border-t border-white/20 px-6 py-12">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        {/* Brand */}
        <Link href="#" className="flex flex-col items-center gap-4 md:items-start">
          <h2 className="text-[24px] font-black leading-8 tracking-[-0.24px] text-[#E0E2EA]">
            Codebase.AI
          </h2>

          <p className="max-w-sm text-center text-[15px] leading-6 text-[#C0C7D4] md:text-left">
            Empowering developers with AI-driven codebase analysis and insights.
          </p>
        </Link>

        {/* Footer Links */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {footerSections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-center gap-3 md:items-start"
            >
              <h4 className="text-[16px] font-semibold text-[#E0E2EA]">
                {section.title}
              </h4>

              {section.links.map((link) => (
                <Link key={link} href="#" className={linkClass}>
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p className="text-[14px] text-[#C0C7D4]">
          © {currentYear} Codebase.AI. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              className="text-[#C0C7D4] transition-colors hover:text-white"
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
