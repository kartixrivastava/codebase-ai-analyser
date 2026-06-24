import { UploadIcon } from "../assets/svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex min-h-230 px-[112.5px] py-4 flex-col items-center justify-center w-full">
      {/* Heading */}
      <div className="flex py-44 flex-col items-center ">
        <div className="flex max-w-4xl flex-col items-center gap-6">
          <div className="flex px-2 py-1 justify-center items-start rounded-[9999px] border border-[rgba(162,201,255,0.30)] bg-[rgba(22,27,34,0.80)] backdrop-blur-[6px] text-[#A2C9FF] text-center font-inter text-[11px] font-semibold leading-4 tracking-[1.1px]">
            V1.0.4 NOW LIVE
          </div>

          <div className="flex flex-col items-center self-stretch text-[#E0E2EA] text-center font-inter text-[96px] font-black leading-24 tracking-[-4.8px] max-w-2xl">
            <h1>
              AI{" "}
              <span className="bg-linear-to-r from-[#58A6FF] to-[#8957E5] bg-clip-text text-transparent font-inter text-[96px] font-black leading-24 tracking-[-4.8px]">
                Codebase
              </span>{" "}
              Analyser
            </h1>
          </div>

          <div className="flex max-w-2xl flex-col items-center">
            <p className="text-[#C0C7D4] text-center font-inter text-[16px]  leading-6 px-15">
              Deep repository intelligence for architects. Map dependencies,
              detect structural flaws, and generate architectural insights with
              neural-powered analysis.
            </p>
          </div>

          <div className="flex pt-4 justify-center items-start gap-4 self-stretch">
            <Link href="/signup" className="flex px-8 py-4 items-center gap-2 rounded-xl bg-[#A2C9FF] hover:bg-[#B3D4FF] transition-colors">
              <UploadIcon />
              <p className="text-[#00315C] text-center font-['Nimbus_Sans'] text-[17px] font-bold leading-7">
                Upload Project
              </p>
            </Link>
            <Link href="/signup" className="flex px-8 py-4.25 justify-center items-center rounded-xl border border-[rgba(48,54,61,0.50)] bg-[rgba(22,27,34,0.80)] backdrop-blur-[6px] hover:bg-[rgba(32,37,44,0.80)] transition-colors">
              Explore Demo
            </Link>
          </div>
        </div>
      </div>
      {/* Floating Decorative Element */}
      <div className="flex w-5xl max-w-5xl px-4 pt-4 flex-col items-start ">
        <div className="flex flex-col items-start self-stretch border border-[rgba(65,71,82,0.30)] bg-[rgba(22,27,34,0.80)] shadow-[0_0_20px_0_rgba(88,166,255,0.10)] backdrop-blur-[6px] rounded-2xl">
          <div className="flex px-4 py-2 items-center gap-1 self-stretch bg-[#32353B] rounded-t-2xl">
            <div className="size-3 bg-[#FF605C] rounded-full"></div>
            <div className="size-3 bg-[#FFBD44] rounded-full"></div>
            <div className="size-3 bg-[#00CA4E] rounded-full"></div>
            <div className="flex pl-2 flex-col items-start">
              <div className="flex flex-col items-center">
                <p className="text-[#C0C7D4] text-center font-['JetBrains_Mono'] text-[1px] leading-4.5"></p>
                analyzer_core.py — AI Insight Engine
              </div>
            </div>
          </div>

          {/* Dummy Code */}
          <div className="flex p-6 flex-col items-start gap-1 self-stretch bg-black rounded-b-2xl">
            {/* Line 1 */}
            <div className="flex items-start gap-8 self-stretch">
              <span className="text-[rgba(139,145,157,0.40)] text-center font-['JetBrains_Mono'] text-[13px] font-normal leading-5 w-6 shrink-0">
                01
              </span>
              <span className="text-[#E0E2EA] font-['JetBrains_Mono'] text-[13px] font-normal leading-5 whitespace-pre">
                <span className="text-[#D3BBFF]">async def</span>{" "}
                <span className="text-[#A2C9FF]">analyze_complexity</span>{" "}
                (repo_path: str):
              </span>
            </div>

            {/* Line 2 */}
            <div className="flex items-start gap-8 self-stretch">
              <span className="text-[rgba(139,145,157,0.40)] text-center font-['JetBrains_Mono'] text-[13px] font-normal leading-5 w-6 shrink-0">
                02
              </span>
              <span className="text-[#E0E2EA] font-['JetBrains_Mono'] text-[13px] font-normal leading-5 whitespace-pre">
                {"    "}
                <span className="text-[#D3BBFF]">insights</span> = await
                AI.process(repo_path)
              </span>
            </div>

            {/* Line 3 */}
            <div className="flex items-start gap-8 self-stretch">
              <span className="text-[rgba(139,145,157,0.40)] text-center font-['JetBrains_Mono'] text-[13px] font-normal leading-5 w-6 shrink-0">
                03
              </span>
              <span className="text-[#8B919D] font-['JetBrains_Mono'] text-[13px] font-normal leading-5 whitespace-pre">
                {"    "}# Mapping deep dependencies...
              </span>
            </div>

            {/* Line 4 */}
            <div className="flex items-start gap-8 self-stretch">
              <span className="text-[rgba(139,145,157,0.40)] text-center font-['JetBrains_Mono'] text-[13px] font-normal leading-5 w-6 shrink-0">
                04
              </span>
              <span className="text-[#E0E2EA] font-['JetBrains_Mono'] text-[13px] font-normal leading-5 whitespace-pre">
                {"    "}
                <span className="text-[#D3BBFF]">for</span> node{" "}
                <span className="text-[#D3BBFF]">in</span> insights.graph.nodes:
              </span>
            </div>

            {/* Line 5 */}
            <div className="flex items-start gap-8 self-stretch">
              <span className="text-[rgba(139,145,157,0.40)] text-center font-['JetBrains_Mono'] text-[13px] font-normal leading-5 w-6 shrink-0">
                05
              </span>
              <span className="text-[#E0E2EA] font-['JetBrains_Mono'] text-[13px] font-normal leading-5 whitespace-pre">
                {"        "}
                <span className="text-[#A2C9FF]">if</span> node.coupling &gt;{" "}
                <span className="text-[#FFBD44]">0.85</span>:
              </span>
            </div>

            {/* Line 6 */}
            <div className="flex items-start gap-8 self-stretch">
              <span className="text-[rgba(139,145,157,0.40)] text-center font-['JetBrains_Mono'] text-[13px] font-normal leading-5 w-6 shrink-0">
                06
              </span>
              <span className="text-[#E0E2EA] font-['JetBrains_Mono'] text-[13px] font-normal leading-5 whitespace-pre">
                {"               "}
                <span className="text-[#FFBD44]">yield</span>{" "}
                StructuralAlert(node,{" "}
                <span className="text-[#A2C9FF]">"High Coupling"</span>)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
