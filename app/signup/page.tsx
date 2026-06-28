import Footer from "@/components/signupPage/Footer";
import MainContainer from "@/components/signupPage/MainContainer";

const SignUpPage = () => {
  return (
    <section className="flex w-full min-h-screen relative overflow-hidden flex-col items-center bg-[#0D1117]">
      {/* Background decoration */}
      <div className="absolute w-[400px] h-[400px] -left-32 bottom-[-100px] rounded-full bg-[rgba(211,187,255,0.05)] blur-[60px] pointer-events-none"></div>
      <div className="absolute w-[400px] h-[400px] -right-32 top-[-100px] rounded-full bg-[rgba(162,201,255,0.05)] blur-[60px] pointer-events-none"></div>
      
      {/* Gradient */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(160.08%_128.06%_at_0%_0%,#161B22_0%,rgba(22,27,34,0)_50%),radial-gradient(160.08%_128.06%_at_100%_0%,#1C2025_0%,rgba(28,32,37,0)_50%),radial-gradient(80.04%_64.03%_at_50%_50%,#0D1117_0%,rgba(13,17,23,0)_100%)] pointer-events-none z-0"></div>
      
      {/* Content wrapper */}
      <div className="flex-1 flex flex-col justify-center items-center w-full px-6 py-12 relative z-10">
        <MainContainer />
      </div>
      
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default SignUpPage;
