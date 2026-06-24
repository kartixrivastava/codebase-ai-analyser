import { AnalyseIcon, ExploreIcon, UploadIcon2 } from "../assets/svg";

const steps = [
  {
    title: "01. Upload",
    description:
      "Drag and drop your project folder or connect your GitHub repository in one click.",
    borderColor: "border-[#A2C9FF]",
    icon: UploadIcon2,
  },
  {
    title: "02. Analyse",
    description:
      "Our neural engine builds an AST-based graph of your entire system, identifying patterns.",
    borderColor: "border-[#D3BBFF]",
    icon: AnalyseIcon,
  },
  {
    title: "03. Explore",
    description:
      "Interact with your code via the dashboard. Ask questions and get instant architectural answers.",
    borderColor: "border-[#FFBA42]",
    icon: ExploreIcon,
  },
];

export const HowItWorks = () => {
  return (
    <section className="flex w-full flex-col items-center bg-[rgba(11,14,20,0.5)] py-8">
      <div className="flex w-full max-w-7xl flex-col items-start gap-8 px-4">
        <div className="flex flex-col items-center self-stretch">
          <p className="text-center text-[32px] font-bold leading-10 tracking-[-0.64px] text-[#E0E2EA]">
            From Repo to Intelligence
          </p>
        </div>

        <div className="inline-grid grid-cols-3 grid-rows-[164px] gap-8 self-stretch">
          {steps.map(({ title, description, borderColor, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center justify-self-stretch"
            >
              <div className="flex h-20 w-16 flex-col items-start pb-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 ${borderColor} bg-[#272A30] shadow-[0_0_15px_0_rgba(162,201,255,0.3)]`}
                >
                  <Icon />
                </div>
              </div>

              <div className="pb-1">
                <p className="text-center text-2xl font-semibold leading-8 tracking-[-0.24px] text-[#E0E2EA]">
                  {title}
                </p>
              </div>

              <div className="flex flex-col items-center px-[8.91px]">
                <p className="text-center text-base font-normal leading-6 text-[#C0C7D4]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
