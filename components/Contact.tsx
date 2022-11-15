import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {PageInfo} from '../typing';
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
interface Props{
  pageInfo:PageInfo[]
}
export default function Contact({pageInfo}:Props) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.open(`mailto:${pageInfo[0].email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`);
  }
  return (
    <>
    {pageInfo.map((info)=>(
      <div className="h-screen relative flex flex-col text-center  md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center" key={info._id}>
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 sm:text-2xl text-xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="sm:text-4xl text-xl font-semibold text-center md:mt-32 mt-10">
          I have got just what you need.
          <span className="text-orange-400 underline">Lets Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#f7ab0a] animate-pulse"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
            </svg>
            <p className="md:text-2xl sm:text-xl">{info.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#f7ab0a] animate-pulse"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
            </svg>
            <p className="md:text-2xl sm:text-xl">{info.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#f7ab0a] animate-pulse"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
            </svg>
            <p className="md:text-2xl sm:text-xl">
              {info.address}
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
          >
          {" "}
          {/*w-fit more info-> https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content */}
          <div className="flex md:space-x-2 flex-col md:flex-row items-center justify-center space-y-2  md:space-y-0">
            <input
              {...register("name")}
              type="text"
              name="name"
              id="Name"
              className="contactInput"
              placeholder="Name"
              />
            <input
              {...register("email")}
              type="email"
              name="email"
              id="Email"
              className="contactInput"
              placeholder="Email"
              />
          </div>
          <input
            {...register("subject")}
            type="text"
            name="subject"
            id="Subject"
            className="contactInput"
            placeholder="Subject"
            />
          <textarea
            {...register("message")}
            className="contactInput"
            name="message"
            placeholder="message..."
            />
          <button type="submit" className="bg-[#f7ab0a] py-2 px-4 sm:py-5 sm:px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  ))}
            </>
  );
}
