import {
  BrainIcon,
  BuildingIcon,
  NetworkFlowIcon,
  TurtleIcon,
} from "../assets/svg";

import Image from "next/image";
import photoInFeatureSection from "@/public/photoInFeatureSection.jpg";
export const Feautures = () => {
  return (
    <section className="flex max-w-7xl w-full px-4 py-8 flex-col items-start gap-8">
      <div className=" flex flex-col items-start gap-2 self-stretch">
        <h2 className="flex flex-col items-start self-stretch text-[#E0E2EA] font-inter text-[32px] font-bold leading-10 tracking-[-0.64px]">
          Unmatched Engineering Insights
        </h2>
        <p className="flex flex-col items-start self-stretch text-[#C0C7D4] font-inter text-[16px] font-normal leading-6">
          Built for teams managing hyper-scale distributed systems.
        </p>
      </div>
      {/* Bento */}
      <div className="inline-grid gap-4 self-stretch grid-cols-3 grid-rows-[482px_258px]">
        {/* Large feature card */}
        <div className="flex p-8 flex-col justify-between items-start row-start-1 row-span-1 col-start-1 col-span-2 justify-self-stretch rounded-2xl border border-[rgba(48,54,61,0.5)] bg-[rgba(22,27,34,0.8)] backdrop-blur-[6px]">
          <div className="flex flex-col items-start gap-4 self-stretch">
            <div className="flex w-12 h-12 justify-center items-center rounded-lg bg-[rgba(162,201,255,0.2)]">
              {" "}
              <div className="flex flex-col items-start">
                {" "}
                <TurtleIcon />{" "}
              </div>
            </div>
            <div className="flex pt-2 flex-col items-start self-stretch text-[#E0E2EA] text-2xl font-semibold leading-8 tracking-[-0.24px]">
              Dynamic Dependency Mapping
            </div>
            <div className="flex max-w-md flex-col items-start text-[#C0C7D4] text-base font-normal leading-6">
              Visualize how your services interact in real-time. Detect circular
              dependencies and architectural drift before they hit production.
            </div>
          </div>
          <div className="flex h-56 pt-8 flex-col items-start self-stretch">
            <div className="flex h-48 p-4 flex-col justify-center items-start shrink-0 self-stretch rounded-lg border border-[rgba(65,71,82,0.3)] bg-[#1C2025]">
              <div className="flex justify-center items-start gap-2 flex-1 self-stretch">
                <div className="flex w-[236.88px] justify-center items-center self-stretch rounded border border-[rgba(162,201,255,0.2)] bg-[rgba(162,201,255,0.1)]">
                  {" "}
                  <div className=" flex flex-col items-start">
                    <NetworkFlowIcon />
                  </div>
                </div>
                <div className="w-[236.89px] self-stretch rounded border border-[rgba(65,71,82,0.5)] bg-[#272A30]"></div>
                <div className="w-[236.89px] self-stretch rounded border border-[rgba(65,71,82,0.5)] bg-[#272A30]"></div>
              </div>
            </div>
          </div>
        </div>
        {/* AI Insights */}
        <div className="flex p-[32px_32px_256px_32px] flex-col items-start gap-4 row-start-1 row-span-1 col-start-3 col-span-1 justify-self-stretch rounded-2xl border-t border-r border-b border-l-4 border-[rgba(48,54,61,0.5)] bg-[rgba(22,27,34,0.8)] backdrop-blur-[6px]">
          <div className="flex w-12 h-12 justify-center items-center rounded-lg bg-[rgba(91,33,181,0.2)]">
            <div className="flex flex-col items-start">
              <BrainIcon />
            </div>
          </div>
          <div className="flex pt-2 flex-col items-start self-stretch ">
            <p className="self-stretch text-[#E0E2EA] text-2xl font-semibold leading-8 tracking-[-0.24px]">
              Neural Logic Analysis
            </p>
          </div>
          <div className="flex flex-col items-start self-stretch">
            <p className="self-stretch text-[#C0C7D4] text-base font-normal leading-6">
              AI that doesn't just read code, it understands intent. Detect
              logic flaws that traditional linters miss.
            </p>
          </div>
        </div>

        {/* Complexity Metrics */}
        <div className="flex p-8 flex-col items-start gap-4 row-start-2 row-span-1 col-start-1 col-span-1 justify-self-stretch">
          <div className="flex w-12 h-12 justify-center items-center rounded-lg bg-[rgba(218,150,0,0.2)]">
            {" "}
            <div className="flex flex-col items-start">
              <BuildingIcon />
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch pt-2">
            <p className="self-stretch text-[#E0E2EA] text-2xl font-semibold leading-8 tracking-[-0.24px]">
              Complexity Metrics
            </p>
          </div>
          <div className="flex flex-col items-start self-stretch">
            {" "}
            <p className="self-stretch text-[#C0C7D4] text-base font-normal leading-6">
              Automated Cyclomatic and Halstead metrics delivered with
              actionable refactoring suggestions.
            </p>
          </div>
        </div>

        {/*File Security*/}
        <div className="flex h-64.5 p-8 items-center gap-8 row-start-2 row-span-1 col-start-2 col-span-2 justify-self-stretch rounded-2xl border border-[rgba(48,54,61,0.5)] bg-[rgba(22,27,34,0.8)] backdrop-blur-[6px]">
          <div className="flex w-[253.55px] flex-col justify-center items-start aspect-[253.55/142.61] rounded-lg border border-[rgba(65,71,82,0.3)]">
            <Image
              src={photoInFeatureSection}
              alt={""}
              className="h-[140.61px] self-stretch opacity-50 bg-[url('/path-to-image')] bg-no-repeat bg-size-[100%_178.899%] bg-position-[0px_-55.47px]"
            />
          </div>
          <div className="flex flex-col items-start gap-4 w-119">
            <div className="flex flex-col items-start self-stretch">
              <p className="self-stretch text-[#E0E2EA] text-2xl font-semibold leading-8 tracking-[-0.24px]">
                SOC-2 Compliant Analysis
              </p>
            </div>
            <div className="flex flex-col items-start self-stretch">
              <p className="self-stretch text-[#C0C7D4] text-base font-normal leading-6">
                Your codebase never leaves your VPC. We offer on-premise
                execution with full encryption and zero-retention policies for
                the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
