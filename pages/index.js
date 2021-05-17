import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  ViewGridIcon,
  SearchIcon
} from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col justify-between h-screen">
      <Head>
        <title>Daniel Zaharia | Google 2.0</title>
        <meta
          name="description"
          content="Google 2.0 was created by Daniel Zaharia to put it in his portfolio projects!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between p-5 text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" />
        </div>
      </header>

      {/* Body */}
      <form className="px-5 flex flex-col items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          width={300}
          height={100}
        />
        <div
          className="flex items-center w-full hover:shadow-md transition 
        focus-within:shadow-md max-w-md rounded-full border border-gray-200 p-3
        sm:max-w-xl lg:max-w-2xl mt-5"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
          />
          <MicrophoneIcon className="h-5 ml-3 text-gray-800" />
        </div>
        <div className="mt-8 w-1/2 flex flex-col space-y-2 justify-center sm:space-y-0 sm:flex-row">
          <button onClick={search} className="btn sm:mr-2">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
