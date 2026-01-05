import { useRef } from "react";
import { ButtonProperty1Active } from "../ButtonProperty1Active/ButtonProperty1Active";
import { TruckProperty1Chevy } from "../TruckProperty1Chevy/TruckProperty1Chevy";
import { ButtonProperty1White } from "../ButtonProperty1White/ButtonProperty1White";
import { OffersCardProperty1Default } from "../OffersCardProperty1Default/OffersCardProperty1Default";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { EntryForm } from "../components/EntryForm/EntryForm";

export interface IGiveawayDesktopProps {
  className?: string;
}

export const GiveawayDesktop = ({
  className,
  ...props
}: IGiveawayDesktopProps): JSX.Element => {
  const dealsContainerRef = useRef<HTMLDivElement>(null);

  const scrollDeals = (direction: 'left' | 'right') => {
    if (dealsContainerRef.current) {
      const scrollAmount = 412;
      const newScrollLeft = direction === 'left'
        ? dealsContainerRef.current.scrollLeft - scrollAmount
        : dealsContainerRef.current.scrollLeft + scrollAmount;
      dealsContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className={
        "bg-[#ffffff] flex flex-col gap-0 items-center justify-start relative " +
        className
      }
    >
      <div className="px-4 lg:px-12 flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
        <Navbar />
        <div className="flex flex-col items-center justify-start self-stretch shrink-0 relative">
          <div className="shrink-0 w-[300px] h-[159.14px] relative overflow-hidden flex items-center justify-center z-50">
            <img
              className="w-full h-auto"
              src="sticker.png"
            />
          </div>
          <div
            className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative"
            style={{ margin: "-60px 0 0 0" }}
          >
            <div
              className="rounded-3xl px-4 lg:px-0 lg:pr-8 flex flex-col lg:flex-row items-center lg:items-start justify-between self-stretch shrink-0 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(52.79deg, rgba(255, 220, 110, 1.00) 0%,rgba(254, 120, 0, 1.00) 100%)",
              }}
            >
              <div className="flex flex-col items-start justify-between self-stretch shrink-0 w-full lg:w-[482px] relative">
                <div className="pt-6 lg:pt-10 px-4 lg:pl-12 lg:pr-0 flex flex-col gap-6 lg:gap-8 items-start justify-start w-[100%] shrink-0 max-w-paragraph-max-width relative">
                  <div
                    className="text-left font-['Montserrat-Black',_sans-serif] text-[28px] lg:text-[40px] leading-[1.1] font-black uppercase relative self-stretch"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    <span className="text-neutral-white">Your Shot at</span>
                    <br />
                    <span className="text-blue-700">$40,000 Cash </span>
                    <span className="text-neutral-white">or a</span>
                    <br />
                    <span className="text-blue-700">Brand-New Truck</span>
                    <br />
                    <span className="text-neutral-white">Starts Right Here</span>
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                    <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                      Enter now and you&#039;re instantly in the running for the
                      grand prize, PLUS you&#039;ll unlock an exclusive travel
                      offer just for entering.{" "}
                    </div>
                    <div className="bg-[rgba(0,0,0,0.20)] rounded-[50px] pt-0.5 pr-3 pb-0.5 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                      <div className="text-neutral-white text-left font-['Montserrat-SemiBold',_sans-serif] text-sm leading-normal font-semibold uppercase relative flex items-center justify-start">
                        No catch. No purchase necessary.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex bg-neutral-white rounded-tr-2xl pt-4 lg:pt-6 px-6 lg:px-12 pb-2.5 flex-row gap-2.5 items-center justify-center shrink-0 relative">
                  <div className="text-blue-700 text-left font-['Montserrat-Bold',_sans-serif] text-xl font-bold relative">
                    Sign Up for Your Chance to Win!{" "}
                  </div>
                  <img
                    className="shrink-0 w-5 h-5 absolute right-[-40px] bottom-0 overflow-visible"
                    style={{ transform: "translate(-20px, 0px)" }}
                    src="vector-210.svg"
                  />
                  <img
                    className="shrink-0 w-5 h-5 absolute left-5 top-[-20px] overflow-visible"
                    style={{ transform: "translate(-20px, 0px)" }}
                    src="vector-220.svg"
                  />
                </div>
              </div>
              <TruckProperty1Chevy className="!shrink-0 w-full lg:!w-[623px] max-w-[400px] lg:max-w-none mt-4 lg:mt-0"></TruckProperty1Chevy>
              <div className="hidden lg:block shrink-0 w-[87.44px] h-[96.12px] static">
                <div className="w-[86.49px] h-[86.34px] absolute left-[1225px] top-[34px] overflow-hidden">
                  <img
                    className="w-[82.56%] h-[68.61%] absolute right-[8.72%] left-[8.72%] bottom-[16.33%] top-[15.06%] overflow-visible"
                    src="group0.svg"
                  />
                  <img
                    className="w-[99.87%] h-[99.87%] absolute right-[0.19%] left-[-0.06%] bottom-[0.19%] top-[-0.06%] overflow-visible"
                    src="vector0.svg"
                  />
                  <div
                    className="text-neutral-white text-center font-['Montserrat-Bold',_sans-serif] text-[17.3651180267334px] leading-none font-bold uppercase absolute right-[31.33%] left-[31.67%] w-[37%] bottom-[51.64%] top-[28.67%] h-[19.69%]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    30+{" "}
                  </div>
                  <div
                    className="text-neutral-white text-center font-['Montserrat-Bold',_sans-serif] text-[6.34727144241333px] leading-none font-bold uppercase absolute right-[19.49%] left-[20.39%] w-[60.12%] bottom-[42.51%] top-[50.54%] h-[6.95%]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Years of Real{" "}
                  </div>
                  <div
                    className="text-neutral-white text-center font-['Montserrat-Bold',_sans-serif] text-[8.09277057647705px] leading-none font-bold uppercase absolute right-[25.97%] left-[26.63%] w-[47.4%] bottom-[30.46%] top-[60.28%] h-[9.27%]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Winners{" "}
                  </div>
                  <img
                    className="h-[auto] absolute left-[36.04px] top-[6.4px] overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="check0.svg"
                  />
                </div>
                <div className="w-[87.44px] h-[29.12px] absolute left-[1225px] top-[101px] overflow-hidden">
                  <img
                    className="w-[100.01%] h-[100.03%] absolute right-[0%] left-[-0.01%] bottom-[-0.03%] top-[0%] overflow-visible"
                    src="group1.svg"
                  />
                  <img
                    className="w-[66.43%] h-[30.13%] absolute right-[16.57%] left-[16.99%] bottom-[53.13%] top-[16.75%] overflow-visible"
                    src="group2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="lg:hidden bg-neutral-white pt-4 px-6 pb-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch relative">
              <div className="text-blue-700 text-left font-['Montserrat-Bold',_sans-serif] text-xl font-bold relative">
                Sign Up for Your Chance to Win!{" "}
              </div>
            </div>
            <EntryForm />
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-[88px] px-4 lg:px-12 pb-12 lg:pb-[88px] flex flex-col gap-10 lg:gap-20 items-center justify-center self-stretch shrink-0 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between self-stretch shrink-0 relative gap-6 lg:gap-0">
          <div
            className="rounded-[32px] border-[1.5px] border-solid p-6 flex flex-col items-start justify-between w-full lg:flex-1 h-[300px] lg:h-[451.93px] relative overflow-hidden order-1 lg:order-none"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(230, 231, 233, 0.50) 0%,rgba(255, 255, 255, 0.80) 49.78649318218231%,rgba(255, 255, 255, 0.30) 100%)",
              borderImageSlice: "1",
              boxShadow:
                "var(--big-card-right-shadow-box-shadow,  20px 20px 30px 0px rgba(10, 44, 85, 0.20))",
              background: "linear-gradient(to left, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%,rgba(255, 255, 255, 0.00) 49.76579546928406%), url(case-study-card0.png) center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col gap-3 items-center justify-start self-stretch shrink-0 relative">
              <div className="bg-neutral-white rounded-[50px] pt-0.5 pr-3 pb-0.5 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                <div className="text-orange-500 text-left font-['Montserrat-SemiBold',_sans-serif] text-sm leading-normal font-semibold uppercase relative flex items-center justify-start">
                  Option 1{" "}
                </div>
              </div>
              <div
                className="text-neutral-white text-center font-['Montserrat-Black',_sans-serif] text-4xl leading-none font-black uppercase relative self-stretch"
                style={{ letterSpacing: "0.01em" }}
              >
                Brand-New
                <br />
                Pickup Truck{" "}
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.20)] rounded-lg pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
              <div className="text-neutral-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-[120%] font-semibold relative flex-1 flex items-center justify-start">
                The perfect towing machine for your adventures, reliable,
                powerful, and ready to hit the road.{" "}
              </div>
            </div>
          </div>
          <div className="rounded-xl py-8 lg:py-20 px-4 lg:px-8 flex flex-col gap-6 lg:gap-8 items-center justify-start shrink-0 relative order-0 lg:order-none">
            <img
              className="rounded-xl flex flex-row gap-2.5 items-center justify-start shrink-0 w-20 h-20 relative"
              style={{ objectFit: "cover", aspectRatio: "1" }}
              src="frame-80.png"
            />
            <div className="flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative">
              <div
                className="text-blue-700 text-center font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative"
                style={{ letterSpacing: "-0.02em" }}
              >
                THE GRAND PRIZE:{" "}
              </div>
              <div
                className="text-orange-400 text-center font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative"
                style={{ letterSpacing: "-0.02em" }}
              >
                PICK YOUR PRIZE{" "}
              </div>
            </div>
            <div className="text-neutral-950 text-center font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-center">
              One winner. Two incredible options. You decide:{" "}
            </div>
          </div>
          <div
            className="rounded-[32px] border-[1.5px] border-solid p-6 flex flex-col items-start justify-between w-full lg:flex-1 h-[300px] lg:h-[451.93px] relative overflow-hidden order-2 lg:order-none"
            style={{
              borderImage:
                "linear-gradient(180deg, rgba(230, 231, 233, 0.50) 0%,rgba(255, 255, 255, 0.80) 49.78649318218231%,rgba(255, 255, 255, 0.30) 100%)",
              borderImageSlice: "1",
              boxShadow:
                "var(--big-card-left-shadow-box-shadow,  -20px 20px 30px 0px rgba(10, 44, 85, 0.20))",
              background: "linear-gradient(180deg, rgba(7, 29, 54, 1.00) 0%,rgba(255, 255, 255, 0.00) 46.79989814758301%,rgba(7, 29, 54, 1.00) 100%), url(case-study-card1.png) center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col gap-3 items-center justify-start self-stretch shrink-0 relative">
              <div className="bg-neutral-white rounded-[50px] pt-0.5 pr-3 pb-0.5 pl-3 flex flex-row gap-2.5 items-center justify-center shrink-0 relative">
                <div className="text-orange-500 text-left font-['Montserrat-SemiBold',_sans-serif] text-sm leading-normal font-semibold uppercase relative flex items-center justify-start">
                  Option 2{" "}
                </div>
              </div>
              <div
                className="text-neutral-white text-center font-['Montserrat-Black',_sans-serif] text-4xl leading-none font-black uppercase relative self-stretch"
                style={{ letterSpacing: "0.01em" }}
              >
                $40,000 Cash{" "}
              </div>
            </div>
            <div className="bg-[rgba(255,255,255,0.20)] rounded-lg pt-1 pr-4 pb-1 pl-4 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
              <div className="text-neutral-white text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-[120%] font-semibold relative flex-1 flex items-center justify-start">
                Upgrade your rig, book that dream trip, pay off bills, or stash
                it away.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 h-[200px] lg:h-[427px] relative"
        style={{ objectFit: "cover" }}
        src="frame-19840779200.png"
      />
      <div
        className="shrink-0 relative overflow-hidden self-stretch flex items-center h-12 lg:h-20"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 171, 0, 1.00) 0%,rgba(255, 97, 0, 1.00) 100%)",
        }}
      >
        <style>
          {`
            @keyframes scroll-banner {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .scroll-banner-container {
              display: flex;
              animation: scroll-banner 20s linear infinite;
            }
            .scroll-banner-text-outline {
              -webkit-text-stroke: 1px #ffffff;
            }
            @media (min-width: 1024px) {
              .scroll-banner-text-outline {
                -webkit-text-stroke: 2px #ffffff;
              }
            }
          `}
        </style>
        <div className="scroll-banner-container">
          <div className="pr-4 pl-4 lg:pr-8 lg:pl-8 flex flex-row gap-3 lg:gap-5 items-center justify-center shrink-0">
            <div
              className="scroll-banner-text-outline text-center font-['Montserrat-Bold',_sans-serif] text-xl lg:text-[40px] leading-none font-bold uppercase relative shrink-0 flex items-center justify-center whitespace-nowrap"
              style={{
                letterSpacing: "0.05em",
                color: "transparent",
                paintOrder: "stroke fill",
              }}
            >
              Enter Now to Win
            </div>
            <img
              className="shrink-0 w-3 h-5 lg:w-[17.01px] lg:h-[31px] relative overflow-visible"
              src="group-280.svg"
            />
            <div
              className="text-neutral-white text-center font-['Montserrat-ExtraBold',_sans-serif] text-xl lg:text-[40px] leading-none font-extrabold uppercase relative shrink-0 flex items-center justify-center whitespace-nowrap"
              style={{ letterSpacing: "0.05em" }}
            >
              No Purchase Necessary
            </div>
            <img
              className="shrink-0 w-3 h-5 lg:w-[17.01px] lg:h-[31px] relative overflow-visible"
              src="group-290.svg"
            />
          </div>
          <div className="pr-4 pl-4 lg:pr-8 lg:pl-8 flex flex-row gap-3 lg:gap-5 items-center justify-center shrink-0">
            <div
              className="scroll-banner-text-outline text-center font-['Montserrat-Bold',_sans-serif] text-xl lg:text-[40px] leading-none font-bold uppercase relative shrink-0 flex items-center justify-center whitespace-nowrap"
              style={{
                letterSpacing: "0.05em",
                color: "transparent",
                paintOrder: "stroke fill",
              }}
            >
              Enter Now to Win
            </div>
            <img
              className="shrink-0 w-3 h-5 lg:w-[17.01px] lg:h-[31px] relative overflow-visible"
              src="group-300.svg"
            />
            <div
              className="text-neutral-white text-center font-['Montserrat-ExtraBold',_sans-serif] text-xl lg:text-[40px] leading-none font-extrabold uppercase relative shrink-0 flex items-center justify-center whitespace-nowrap"
              style={{ letterSpacing: "0.05em" }}
            >
              No Purchase Necessary
            </div>
            <img
              className="shrink-0 w-3 h-5 lg:w-[17.01px] lg:h-[31px] relative overflow-visible"
              src="group-280.svg"
            />
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-12 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div className="bg-grey-10 rounded-[20px] p-6 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center self-stretch shrink-0 relative">
          <div className="rounded-xl flex flex-col gap-6 lg:gap-8 items-start justify-start shrink-0 w-full lg:w-[500px] lg:max-w-[500px] relative">
            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-orange-400 text-left font-['Montserrat-Bold',_sans-serif] text-3xl lg:text-[40px] leading-none font-bold uppercase relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                BONUS GIFTS{" "}
              </div>
              <div
                className="text-blue-700 text-left font-['Montserrat-Black',_sans-serif] text-3xl lg:text-[40px] leading-none font-black uppercase relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                GALORE{" "}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
              <div className="text-blue-700 text-left font-['Poppins-SemiBold',_sans-serif] text-lg lg:text-xl leading-normal font-semibold uppercase relative self-stretch flex items-center justify-start">
                Here's the deal: everyone who enters has a chance of winning.{" "}
              </div>
              <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                When you call to activate your travel offer, you'll also be
                entered to win one of these bonus gifts:{" "}
              </div>
            </div>
            <ButtonProperty1Active
              text="See official rules for odds"
              property1="active"
              className="!shrink-0"
            ></ButtonProperty1Active>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 items-start justify-start w-full lg:flex-1 relative">
            <div
              className="bg-neutral-white rounded-2xl flex flex-row gap-0 items-center justify-end shrink-0 w-full lg:w-[300px] lg:min-w-[300px] relative overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="rounded-tr-2xl rounded-br-2xl p-6 flex flex-row gap-2 items-center justify-center shrink-0 w-20 relative"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 171, 0, 1.00) 0%,rgba(255, 97, 0, 1.00) 100%), linear-gradient(to left, #ffab00, #ffab00)",
                }}
              >
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="money-bag0.svg"
                />
              </div>
              <div className="p-5 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
                <div className="text-neutral-black text-left font-['Montserrat-Bold',_sans-serif] text-lg leading-[95%] font-bold uppercase relative flex-1 flex items-center justify-start">
                  $1,000 Cash{" "}
                </div>
              </div>
            </div>
            <div
              className="bg-neutral-white rounded-2xl flex flex-row gap-0 items-center justify-end shrink-0 w-full lg:w-[300px] lg:min-w-[300px] relative overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="rounded-tr-2xl rounded-br-2xl p-6 flex flex-row gap-2 items-center justify-center shrink-0 w-20 relative"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 171, 0, 1.00) 0%,rgba(255, 97, 0, 1.00) 100%), linear-gradient(to left, #ffab00, #ffab00)",
                }}
              >
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="payments0.svg"
                />
              </div>
              <div className="p-5 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
                <div className="text-neutral-black text-left font-['Montserrat-Bold',_sans-serif] text-lg leading-[95%] font-bold uppercase relative flex-1 flex items-center justify-start">
                  $500 Cash{" "}
                </div>
              </div>
            </div>
            <div
              className="bg-neutral-white rounded-2xl flex flex-row gap-0 items-center justify-end shrink-0 w-full lg:w-[300px] lg:min-w-[300px] relative overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="rounded-tr-2xl rounded-br-2xl p-6 flex flex-row gap-2 items-center justify-center shrink-0 w-20 relative"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 171, 0, 1.00) 0%,rgba(255, 97, 0, 1.00) 100%), linear-gradient(to left, #ffab00, #ffab00)",
                }}
              >
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="connected-tv0.svg"
                />
              </div>
              <div className="p-5 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
                <div className="text-neutral-black text-left font-['Montserrat-Bold',_sans-serif] text-lg leading-[95%] font-bold uppercase relative flex-1 flex items-center justify-start">
                  98" Samsung 4K Smart TV{" "}
                </div>
              </div>
            </div>
            <div
              className="bg-neutral-white rounded-2xl flex flex-row gap-0 items-center justify-end shrink-0 w-full lg:w-[300px] lg:min-w-[300px] relative overflow-hidden transform transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <div
                className="rounded-tr-2xl rounded-br-2xl p-6 flex flex-row gap-2 items-center justify-center shrink-0 w-20 relative"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255, 171, 0, 1.00) 0%,rgba(255, 97, 0, 1.00) 100%), linear-gradient(to left, #ffab00, #ffab00)",
                }}
              >
                <img
                  className="shrink-0 w-8 h-8 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="concierge0.svg"
                />
              </div>
              <div className="p-5 flex flex-row gap-2.5 items-center justify-center flex-1 relative">
                <div className="text-neutral-black text-left font-['Montserrat-Bold',_sans-serif] text-lg leading-[95%] font-bold uppercase relative flex-1 flex items-center justify-start">
                  2-Night Hotel Stay Certificate{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-center justify-center shrink-0 w-full lg:w-[1440px] lg:max-w-[1440px] relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-start flex-1 max-w-[1200px] relative">
          <div className="shrink-0 w-[280px] h-[320px] lg:w-[579px] lg:h-[557.93px] relative">
            <img
              className="rounded-[12.08px] border-solid border-[#ffffff] border-2 w-[180px] h-[200px] lg:w-[386px] lg:h-[407px] absolute left-[100px] lg:left-[193px] top-0"
              style={{
                boxShadow:
                  "var(--big-card-left-shadow-box-shadow,  -20px 20px 30px 0px rgba(10, 44, 85, 0.20))",
                objectFit: "cover",
              }}
              src="rectangle-30.png"
            />
            <img
              className="rounded-[12.08px] border-solid border-[#ffffff] border-2 w-[180px] h-[200px] lg:w-[386px] lg:h-[407px] absolute left-0 top-[120px] lg:top-[150.93px]"
              style={{
                boxShadow:
                  "var(--big-card-right-shadow-box-shadow,  20px 20px 30px 0px rgba(10, 44, 85, 0.20))",
                objectFit: "cover",
              }}
              src="rectangle-40.png"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start flex-1 relative">
            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-blue-700 text-left font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative"
                style={{ letterSpacing: "-0.02em" }}
              >
                30 YEARS OF SWEEPSTAKES{" "}
              </div>
              <div
                className="text-orange-400 text-left font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                &amp; COUNTING{" "}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
              <div className="text-blue-700 text-left font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative self-stretch flex items-center justify-start">
                We&#039;ve Been Doing This Since 1995{" "}
              </div>
              <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                CampNow partners with top-tier RV resorts to bring you real
                sweepstakes with real prizes. This isn't some sketchy internet
                giveaway, we've been around for 30 years and have awarded
                millions in prizes.{" "}
              </div>
            </div>
            <div className="rounded-xl flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
                <img
                  className="rounded-xl flex flex-row gap-2.5 items-center justify-start shrink-0 w-8 h-8 relative"
                  style={{ objectFit: "cover", aspectRatio: "1" }}
                  src="frame-81.png"
                />
                <div className="text-blue-700 text-left font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative flex items-center justify-start">
                  100% Legit. Zero Pressure.{" "}
                </div>
              </div>
              <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                No purchase necessary to enter or win. We run this sweepstakes
                to introduce you to our incredible resort network (Outdoor
                Adventures Inc., Venture Out Resorts, and Ocean Canyon Resorts).{" "}
              </div>
            </div>
            <div className="rounded-xl flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-row gap-3 items-center justify-start self-stretch shrink-0 relative">
                <img
                  className="rounded-xl flex flex-row gap-2.5 items-center justify-start shrink-0 w-8 h-8 relative"
                  style={{ objectFit: "cover", aspectRatio: "1" }}
                  src="frame-82.png"
                />
                <div className="text-blue-700 text-left font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative flex items-center justify-start">
                  Transparent &amp; Straightforward.{" "}
                </div>
              </div>
              <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                We're here to connect adventure-seekers with unforgettable
                experiences and maybe change one lucky person's life with $40K
                or a brand-new truck.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 px-4 lg:px-12 pb-6 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div
          className="rounded-3xl p-6 lg:p-12 flex flex-col gap-8 lg:gap-12 items-center justify-center self-stretch shrink-0 relative"
          style={{
            background:
              "linear-gradient(52.79deg, rgba(254, 120, 0, 1.00) 0%,rgba(255, 220, 110, 1.00) 100%)",
          }}
        >
          <div className="rounded-xl flex flex-col gap-8 items-start justify-start shrink-0 relative">
            <div
              className="text-center font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative self-stretch"
              style={{ letterSpacing: "-0.02em" }}
            >
              <span>
                <span className="real-winners-real-stories-span">
                  REAL WINNERS.
                </span>
                <span className="real-winners-real-stories-span2">
                  REAL STORIES.
                </span>
              </span>{" "}
            </div>
            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
              <div className="text-blue-700 text-center font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative self-stretch flex items-center justify-center">
                Still skeptical? Don't be. Here's proof.{" "}
              </div>
              <div className="text-neutral-950 text-center font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-center">
                We've been giving away major prizes for decades. Just ask:{" "}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-row gap-16 items-start justify-center self-stretch shrink-0 h-[383px] relative">
            <div className="self-stretch flex-1 static">
              <div className="bg-neutral-white rounded-[10px] p-4 flex flex-col gap-3 items-start justify-center w-[238.81px] h-[43.59px] absolute left-[134.53px] top-[339.41px] z-10">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-6 h-6 relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="rewarded-ads0.svg"
                  />
                  <div
                    className="text-secondary-800 text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold relative flex-1"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Tina and Karl Pollack{" "}
                  </div>
                </div>
              </div>
              <img
                className="w-[348.65px] h-[373.66px] absolute left-0 top-0 rounded-2xl"
                style={{ objectFit: "cover" }}
                src="rectangle-60.png"
              />
              <img
                className="rounded-none w-[348.65px] h-[373.66px] absolute left-0 top-0 overflow-visible z-[1]"
                src="mask0.svg"
              />
            </div>
            <div className="self-stretch flex-1 static">
              <div className="bg-[#dffeec] rounded-xl p-4 flex flex-col gap-3 items-start justify-center w-[238.81px] h-[43.59px] absolute left-[571.86px] top-[339.41px]">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-6 h-6 relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="solar-medal-ribbon-star-bold-duotone0.svg"
                  />
                  <div
                    className="text-secondary-800 text-left font-['Roboto-Bold',_sans-serif] text-lg leading-none font-bold relative flex-1"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Tina and Karl Pollack{" "}
                  </div>
                </div>
              </div>
              <div className="bg-neutral-white rounded-[10px] p-4 flex flex-col gap-3 items-start justify-center w-[238.81px] h-[43.59px] absolute left-[571.86px] top-[339.41px] z-10">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-6 h-6 relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="rewarded-ads1.svg"
                  />
                  <div
                    className="text-secondary-800 text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold relative flex-1"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    The Balkema Family{" "}
                  </div>
                </div>
              </div>
              <img
                className="w-[348.66px] h-[373.66px] absolute left-[437.34px] top-0 rounded-2xl"
                style={{ objectFit: "cover" }}
                src="rectangle-61.png"
              />
              <img
                className="rounded-none w-[348.66px] h-[373.66px] absolute left-[437.34px] top-0 overflow-visible z-[1]"
                src="mask1.svg"
              />
            </div>
            <div className="self-stretch flex-1 static">
              <div className="bg-neutral-white rounded-[10px] p-4 flex flex-col gap-3 items-start justify-center w-[238.81px] h-[43.59px] absolute left-[1009.19px] top-[339.41px] z-10">
                <div className="flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative">
                  <img
                    className="shrink-0 w-6 h-6 relative overflow-visible"
                    style={{ aspectRatio: "1" }}
                    src="rewarded-ads2.svg"
                  />
                  <div
                    className="text-secondary-800 text-left font-['Montserrat-SemiBold',_sans-serif] text-base leading-none font-semibold relative flex-1"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Randy (2016 Winner){" "}
                  </div>
                </div>
              </div>
              <img
                className="w-[348.66px] h-[373.66px] absolute left-[874.67px] top-0 rounded-2xl"
                style={{ objectFit: "cover" }}
                src="rectangle-62.png"
              />
              <img
                className="rounded-none w-[348.66px] h-[373.66px] absolute left-[874.67px] top-0 overflow-visible z-[1]"
                src="mask2.svg"
              />
            </div>
          </div>
          <div
            className="text-neutral-white text-center font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative"
            style={{ letterSpacing: "-0.02em" }}
          >
            You could be next.{" "}
          </div>
          <ButtonProperty1White
            text="Enter Now to Win"
            property1="white"
            className="!shrink-0"
          ></ButtonProperty1White>
        </div>
      </div>
      <div className="pt-6 px-4 lg:px-12 pb-8 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative">
        <div className="bg-grey-10 rounded-[20px] py-8 lg:py-16 px-4 lg:pl-12 lg:pr-0 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-end justify-center self-stretch shrink-0 relative">
          <div className="rounded-xl flex flex-col gap-6 lg:gap-8 items-start justify-start shrink-0 w-full lg:w-[500px] lg:max-w-[500px] relative">
            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-orange-400 text-left font-['Montserrat-Bold',_sans-serif] text-3xl lg:text-[40px] leading-none font-bold uppercase relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                POPULAR{" "}
              </div>
              <div
                className="text-blue-700 text-left font-['Montserrat-Black',_sans-serif] text-3xl lg:text-[40px] leading-none font-black uppercase relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                RV RESORT DEALS{" "}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
              <div className="text-blue-700 text-left font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative self-stretch flex items-center justify-start">
                Ready for Your Next Great Getaway?{" "}
              </div>
              <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                Whether you entered our sweepstakes or you're simply dreaming up
                your next escape, we've partnered with some of the country's top
                resorts to bring you exclusive offers designed for real
                adventurers. Picture yourself unwinding by the river under
                Alabama's sunny skies or setting up camp near the sparkling
                Great Lakes—these aren't your typical vacation packages. From
                coast to coast, each destination offers its own slice of outdoor
                fun, all at prices made to get you exploring sooner.{" "}
              </div>
            </div>
            <ButtonProperty1Active
              text="I want this deal"
              property1="active"
              className="!pt-2.5 !pr-12 !pb-2.5 !pl-12 !shrink-0"
            ></ButtonProperty1Active>
          </div>
          <div className="flex flex-col gap-6 items-start justify-center flex-1 relative w-full min-w-0">
            <div
              ref={dealsContainerRef}
              className="flex flex-row gap-4 lg:gap-6 items-start justify-start w-full shrink-0 relative overflow-x-auto scroll-smooth pb-4 -mb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <OffersCardProperty1Default className="!shrink-0 !w-[280px] lg:!w-[388.95px]"></OffersCardProperty1Default>
              <OffersCardProperty1Default
                location="Mount Pleasant, Michigan"
                resort="Mount Pleasant Resort"
                className="!shrink-0 !w-[280px] lg:!w-[388.95px]"
              ></OffersCardProperty1Default>
              <OffersCardProperty1Default
                location="Kalamazoo, Michigan"
                resort="Kalamazoo Resort"
                className="!shrink-0 !w-[280px] lg:!w-[388.95px]"
              ></OffersCardProperty1Default>
              <OffersCardProperty1Default
                location="Glen Rose, Texas"
                resort="Tres Rios RV Resort"
                className="!shrink-0 !w-[280px] lg:!w-[388.95px]"
              ></OffersCardProperty1Default>
              <OffersCardProperty1Default
                location="Wapakoneta, Ohio"
                resort="Arrowhead Lakes"
                className="!shrink-0 !w-[280px] lg:!w-[388.95px]"
              ></OffersCardProperty1Default>
            </div>
            <div className="flex flex-row gap-8 items-start justify-start shrink-0 relative">
              <div
                onClick={() => scrollDeals('left')}
                className="bg-[rgba(255,255,255,0.20)] rounded-[40px] border-solid border-blue-600 border pt-[5px] pr-0.5 pb-[5px] pl-0.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-10 h-10 relative cursor-pointer transition-all duration-300 ease-out hover:bg-blue-600 hover:border-blue-600 active:scale-95"
                style={{
                  transformOrigin: "0 0",
                  transform: "rotate(0deg) scale(-1, 1)",
                  backdropFilter: "blur(15px)",
                  aspectRatio: "1",
                }}
              >
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="east1.svg"
                />
              </div>
              <div
                onClick={() => scrollDeals('right')}
                className="bg-[rgba(255,255,255,0.20)] rounded-[40px] border-solid border-blue-600 border pt-[5px] pr-0.5 pb-[5px] pl-0.5 flex flex-col gap-2.5 items-center justify-center shrink-0 w-10 h-10 relative cursor-pointer transition-all duration-300 ease-out hover:bg-blue-600 hover:border-blue-600 active:scale-95"
                style={{ backdropFilter: "blur(15px)", aspectRatio: "1" }}
              >
                <img
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  style={{ aspectRatio: "1" }}
                  src="east3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-center justify-center shrink-0 w-full lg:w-[1440px] lg:max-w-[1440px] relative">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-start flex-1 max-w-[1200px] relative">
          <div className="shrink-0 w-[280px] h-[320px] lg:w-[579px] lg:h-[557.93px] relative">
            <img
              className="rounded-[12.08px] border-solid border-[#ffffff] border-2 w-[180px] h-[200px] lg:w-[386px] lg:h-[407px] absolute left-[100px] lg:left-[193px] top-0"
              style={{
                boxShadow:
                  "var(--big-card-left-shadow-box-shadow,  -20px 20px 30px 0px rgba(10, 44, 85, 0.20))",
                objectFit: "cover",
              }}
              src="rectangle-31.png"
            />
            <img
              className="rounded-[12.08px] border-solid border-[#ffffff] border-2 w-[180px] h-[200px] lg:w-[386px] lg:h-[407px] absolute left-0 top-[120px] lg:top-[150.93px]"
              style={{
                boxShadow:
                  "var(--big-card-right-shadow-box-shadow,  20px 20px 30px 0px rgba(10, 44, 85, 0.20))",
                objectFit: "cover",
              }}
              src="rectangle-41.png"
            />
          </div>
          <div className="flex flex-col gap-6 lg:gap-8 items-start justify-start flex-1 relative">
            <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
              <div
                className="text-blue-700 text-left font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative"
                style={{ letterSpacing: "-0.02em" }}
              >
                Discover the Joy{" "}
              </div>
              <div
                className="text-orange-400 text-left font-['Montserrat-Black',_sans-serif] text-3xl leading-none font-black uppercase relative self-stretch"
                style={{ letterSpacing: "-0.02em" }}
              >
                of the Open Road{" "}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
              <div className="text-blue-700 text-left font-['Poppins-SemiBold',_sans-serif] text-xl leading-normal font-semibold uppercase relative self-stretch flex items-center justify-start">
                Your Gateway to Unforgettable RV Adventures{" "}
              </div>
              <div className="text-neutral-950 text-left font-['Poppins-Regular',_sans-serif] text-base leading-normal font-normal relative self-stretch flex items-center justify-start">
                At Camp Now Resorts, we believe every journey deserves an
                incredible destination. That's why we've partnered with some of
                the most beautiful resorts across the country—each handpicked
                for its comfort, convenience, and natural charm. Whether you're
                parking lakeside for a peaceful retreat or gearing up for an
                adventure-packed stay under the stars, Camp Now connects you to
                places that make every mile worth the drive.{" "}
              </div>
            </div>
            <ButtonProperty1Active
              text="Learn More"
              property1="active"
              className="!pt-2.5 !pr-12 !pb-2.5 !pl-12 !shrink-0"
            ></ButtonProperty1Active>
          </div>
        </div>
      </div>
      <Footer className="!shrink-0 w-full lg:!w-[1440px] lg:!max-w-[1440px]" />
    </div>
  );
};
