import { useState } from "react";
import logo from "../assets/images/logo.svg";
import heroDesktop from "../assets/images/hero-desktop.jpg";
import heroMobile from "../assets/images/hero-mobile.jpg";
import { ChevronRight } from "lucide-react";
import { AlertCircle } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import { emailSchema } from "../shemas/shemes.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function MainSection() {
  const [loading, setLoading] = useState(false);

  const {
    register, // Connects input to form
    handleSubmit, // Wraps your submit function
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values) {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted:", values);
      reset();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex  max-sm:flex-col ">
      <section className="flex-[0.7] flex flex-col gap-32 py-8 px-16 max-sm:py-4 max-sm:px-3 max-sm:text-center">
        <div>
          <img src={logo} alt="Base Apparel logo" />
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-8xl text-bold max-w-md tracking-widest leading-tight uppercase max-sm:text-6xl">
            <span className="text-pink-400 font-light">We're</span> coming soon
          </h1>
          <p className="text-pink-400 text-2xl">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <div className="flex flex-col gap-2">
            <form
              onSubmit={handleSubmit(onSubmit)} // FIX: Pass onSubmit function here
              className="flex items-center relative"
            >
              <input
                type="text"
                placeholder="Email Address"
                {...register("email")}
                disabled={loading} // Disable input while loading
                className={`w-full border-2 ${
                  errors.email ? "border-red-500" : "border-pink-400"
                } text-pink-400 outline-0 rounded-full px-8 py-3 pr-28  disabled:cursor-not-allowed`}
              />

              {errors.email && (
                <div className="absolute right-40">
                  <AlertCircle className="text-red-500" size={24} />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-second  px-8 py-3.5 cursor-pointer rounded-full -translate-x-16 hover:scale-[1.1] hover:shadow-lg hover:shadow-pink-400 transition-all duration-200  disabled:cursor-not-allowed max-sm:px-4 max-sm:-translate-x-14"
              >
                {loading ? (
                  <LoaderCircle color="white" className="animate-spin" />
                ) : (
                  <ChevronRight color="white" />
                )}
              </button>
            </form>

            {errors.email && (
              <span className="text-red-500 italic text-sm px-8">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
      </section>
      <section className="flex flex-[0.3]">
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
    </section>
  );
}

export default MainSection;
