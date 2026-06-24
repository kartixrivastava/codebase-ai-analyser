import Link from "next/link";
import { BellSVG, QuestionMark } from "../assets/svg";

const navLinks = [
  { label: "Projects", href: "" },
  { label: "Review", href: "" },
  { label: "Insights", href: "" },
];

const navLinkClass =
  "flex flex-col items-start self-stretch text-[#C0C7D4] text-[15px] font-semibold leading-6";

const iconButtonClass =
  "flex flex-col items-center justify-center p-2";

const Navbar = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between border-b border-white/20 px-6">
      <div className="flex items-center gap-8">
        <div className="text-[24px] font-black leading-8 tracking-[-0.24px] text-[#E0E2EA]">
          Codebase.AI
        </div>

        <div className="flex items-start gap-3">
          {navLinks.map(({ label, href }) => (
            <Link key={label} href={href} className={navLinkClass}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className={iconButtonClass} aria-label="Notifications">
          <BellSVG />
        </button>

        <button className={iconButtonClass} aria-label="Help">
          <QuestionMark />
        </button>

        <Link href="/login" className="text-[#C0C7D4] text-[15px] font-semibold leading-6 hover:text-white transition-colors">
          Log in
        </Link>

        <Link href="/signup" className="flex items-center justify-center rounded-xl bg-[#58A6FF] px-6 py-2 hover:bg-[#70B3FF] transition-colors">
          <span className="text-center font-['Nimbus_Sans'] text-[16px] font-bold leading-6 text-[#003A6B]">
            Sign up
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;