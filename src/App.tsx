import "./App.css";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="h-screen w-100 md:flex">
      <div className="detailBlock md:p-8 md:px-48">
        <div className="navbar p-8">
          <img
            src="./images/logo.svg"
            alt="logo"
            className="w-[100px] md:w-[150px]"
          />
        </div>
        <div className="picture md:hidden mb-4">
          <img src="./images/hero-mobile.jpg" alt="hero-mobile" />
        </div>
        <div className="detail p-8 md:mt-20">
          <div className="text-center md:text-left text-[2.5em] md:text-[3.4em] uppercase leading-[3rem] md:leading-[4rem] tracking-[0.3em] mb-4">
            <h1 className="font-light text-[var(--Desaturated-Red)]">We're</h1>
            <h2 className="text-[var(--Dark-Grayish-Red)] md:font-bold">
              coming soon
            </h2>
          </div>
          <p className="text-center md:text-left md:leading-6 text-sm text-[var(--Desaturated-Red)] mb-4">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form
            action="#"
            method="post"
            className="my-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative h-[48px]">
              <input
                type="text"
                id="email"
                placeholder=" "
                autoComplete="off"
                className={`block w-full h-full border rounded-full pl-6 pr-16 appearance-none bg-transparent peer
              ${
                errors.email
                  ? "border-[var(--Soft-Red)] focus:outline-none focus:border-[var(--Soft-Red)] focus:ring-1 focus:ring-[var(--Soft-Red)]"
                  : "border-[var(--Desaturated-Red)] focus:outline-none focus:border-[var(--Desaturated-Red)] focus:ring-1 focus:ring-[var(--Desaturated-Red)]"
              }`}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              <label
                htmlFor="email"
                className="
              absolute text-sm text-[var(--Desaturated-Red)] font-light duration-300 transform 
              top-0 left-4 scale-75 -translate-y-1/2 z-10 px-2 origin-[0] bg-white
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100
              peer-focus:top-0 peer-focus:scale-75
              "
              >
                Email Address
              </label>
              <button
                type="submit"
                className={`bgArrow absolute top-0 right-0 w-[60px] md:w-[90px] h-full rounded-full 
                flex justify-center items-center cursor-pointer`}
              >
                <img src="./images/icon-arrow.svg" alt="icon-arrow" />
              </button>
              {errors.email && (
                <div className="iconError absolute top-3 right-[22%] md:right-[27%] lg:right-[20%]">
                  <img src="./images/icon-error.svg" alt="icon-error" />
                </div>
              )}
              {errors.email && (
                <div className="text-sm text-[var(--Soft-Red)] my-2 pl-6">
                  Please provide a valid email
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block h-full">
        <img
          src="./images/hero-desktop.jpg"
          alt="hero-desktop"
          className="max-w-none max-h-screen"
        />
      </div>
    </div>
  );
}

export default App;
