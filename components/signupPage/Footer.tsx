import Link from "next/link";

const footerLinks = [
  { label: "Documentation", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Status", href: "#" },
];

const Footer = () => {
  return (
    <footer className="relative z-10 mt-16 flex w-full justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between border-t border-[rgba(65,71,82,0.2)] p-6 opacity-60">
        <p className="text-xs font-normal leading-4.5 text-[#C0C7D4]">
          © 2026 AI Codebase Analyzer. Precise intelligence for architects.
        </p>

        <nav className="flex items-center gap-6">
          {footerLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs font-normal text-[#C0C7D4] transition-colors hover:text-[#E0E2EA]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;