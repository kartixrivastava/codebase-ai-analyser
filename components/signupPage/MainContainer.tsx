import Link from "next/link";
import { GitHubIcon, SignupIcon, VerificationBadge } from "../assets/svg";

const formFields = [
  {
    label: "Full Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    label: "Work Email",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    label: "Password",
    type: "password",
    placeholder: "• • • • • • • • • •",
    helper: "Password must include symbols and digits",
  },
];

const inputClass =
  "flex h-11 w-full items-center rounded-lg border border-[#6B7280] bg-[rgba(13,17,23,0.5)] px-4 py-3 text-sm font-normal text-[#E0E2EA] placeholder-[rgba(139,145,157,0.5)] transition-colors focus:border-[#58A6FF] focus:outline-none";

const labelClass =
  "text-sm font-semibold leading-4 tracking-[0.55px] text-[#C0C7D4]";

const linkClass = "text-[#A2C9FF] hover:underline";

const MainContainer = () => {
  return (
    <div className="relative z-10 flex w-full max-w-120 flex-col items-center gap-8">
      {/* Brand */}
      <div className="flex flex-col items-center gap-2 self-stretch">
        <div className="flex items-center gap-2 pb-2">
          <SignupIcon />
          <p className="text-2xl font-black leading-8 tracking-[-0.6px] text-[#E0E2EA]">
            Codebase.ai
          </p>
        </div>

        <p className="text-center text-[32px] font-bold leading-10 tracking-[-0.64px] text-[#E0E2EA]">
          Create your developer account
        </p>

        <p className="pt-1 text-sm font-normal leading-5 text-[#C0C7D4]">
          Precision intelligence for software architects.
        </p>
      </div>

      {/* Auth Panel */}
      <form className="flex w-full flex-col gap-6 rounded-xl border border-[#30363D] bg-[rgba(22,27,34,0.8)] p-8 shadow-2xl backdrop-blur-[6px]">
        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-[#24292F] transition-colors hover:bg-[#30363D]"
        >
          <GitHubIcon />
          <span className="text-sm text-white">Sign up with GitHub</span>
        </button>

        <div className="flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-[#414752]" />
          <p className="text-[11px] font-semibold tracking-[0.55px] text-[#8B919D]">
            VIA EMAIL
          </p>
          <div className="h-px flex-1 bg-[#414752]" />
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          {formFields.map(({ label, type, placeholder, helper }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <label className={labelClass}>{label}</label>

              <input
                type={type}
                placeholder={placeholder}
                className={inputClass}
              />

              {helper && (
                <div className="flex flex-col gap-2 pt-1">
                  <div className="h-1 overflow-hidden rounded-sm bg-[#1C2025]" />
                  <p className="text-xs text-[#8B919D]">{helper}</p>
                </div>
              )}
            </div>
          ))}

          {/* Terms */}
          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 shrink-0 rounded border border-[#414752] bg-[#181C21] accent-[#58A6FF]"
            />

            <p className="text-xs leading-[19.5px] text-[#C0C7D4]">
              I agree to the{" "}
              <Link href="#" className={linkClass}>
                Terms of Service
              </Link>{" "}
              and acknowledge the{" "}
              <Link href="#" className={linkClass}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group relative mt-2 flex h-12 w-full items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-[#58A6FF] to-[#8957E5] transition-opacity hover:opacity-90"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />

            <span className="relative z-10 text-sm font-semibold text-[#00315C] shadow-sm">
              Create Account
            </span>
          </button>
        </div>
      </form>

      {/* Trust Badge */}
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex items-center gap-2 rounded-full border border-[rgba(65,71,82,0.3)] bg-[rgba(39,42,48,0.5)] px-4 py-2 backdrop-blur-[2px]">
          <VerificationBadge />
          <p className="text-[13px] font-semibold tracking-[0.55px] text-[#E0E2EA]">
            Join 10k+ architects mapping their legacy code.
          </p>
        </div>

        <p className="text-sm text-[#C0C7D4]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#A2C9FF] hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
