import { useState } from "react";
import logo from "../assets/images/logo.svg";
import heroDesktop from "../assets/images/hero-desktop.jpg";
import heroMobile from "../assets/images/hero-mobile.jpg";
import { ChevronRight } from "lucide-react";

function MainSection() {
  return (
    <section className="min-h-screen flex max-sm:flex-col">
      <section className="flex-[0.6] flex flex-col gap-32 py-8  px-16">
        <div>
          <img src={logo} alt="Base Apparel logo" />
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-8xl text-bold max-w-md tracking-widest leading-tight uppercase">
            <span className="text-pink-400 ">We're</span> coming soon
          </h1>
          <p className="text-pink-400 text-2xl">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form action="submit" className="flex items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full relative border-2 border-pink-400 text-pink-400 outline-0 rounded-full px-8 py-3 group"
            />
            <button className="bg-[linear-gradient(135deg,hsl(0,80%,86%),hsl(0,74%,74%))] px-8 py-3.5 cursor-pointer rounded-2xl -translate-x-16">
              <ChevronRight />
            </button>
          </form>
        </div>
      </section>
      <section className="flex flex-[0.4]">
        <picture className="">
          <source
            media="(min-width: 660px)"
            srcset={heroDesktop}
            className="h-full max-w-none object-cover"
          />
          <img
            src={heroMobile}
            aria-hidden="true"
            className="h-full max-w-none object-cover"
          />
        </picture>
      </section>

      {/* We're coming soon

  Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.

  Email Address */}
    </section>
  );
}

export default MainSection;
