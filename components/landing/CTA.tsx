export const CTA = () => {
  return (
    <section className="flex max-w-3xl pt-25 flex-col items-start gap-6">
      <div className="flex flex-col items-center self-stretch">
        <h1 className="text-[#E0E2EA] text-center text-[60px] font-black leading-15">
          Ready to master your legacy?
        </h1>
      </div>
      <div className="flex flex-col items-center self-stretch">
        <p className="text-[#C0C7D4] text-center text-base font-normal leading-6">
          Stop guessing where the debt is. Start analyzing with AI Codebase
          Analyzer today.
        </p>
      </div>
      <div className="flex pt-4 flex-col items-center gap-4 self-stretch">
        <button className="flex px-8 py-6 justify-center items-center rounded-2xl bg-[#58A6FF]">
          <span className="absolute w-[262.13px] h-19 rounded-2xl bg-transparent shadow-[0_20px_25px_-5px_rgba(162,201,255,0.2),0_8px_10px_-6px_rgba(162,201,255,0.2)]"></span>
          <p className="text-[#003A6B] text-center font-black text-[20px] leading-7">
            Start Your First Scan
          </p>
        </button>
        <div className="flex flex-col items-center self-stretch">
          <p className="text-[#8B919D] text-center text-base font-normal leading-6">
            Free for open source projects. Professional plans start at $19/mo.
          </p>
        </div>
      </div>
    </section>
  );
};
