"use client";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import logo from "../../public/Images/Logo.svg";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { FlipWords } from "@/components/ui/flip-words";
import FeaturesSectionDemo from "@/components/blocks/features-section-demo-2";
import { Aboutus } from "@/components/AboutUs";
export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: <Image src={logo} width={20} height={20} alt="Aceternity Logo" />,
      href: "#",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  const services = [
    "Web Development",
    "Mobile Apps",
    "Software Solutions",
    "Cloud Services",
    "UI/UX Design",
    "AI & Machine Learning",
    "Data Analytics",
    "Cybersecurity",
    "Blockchain Solutions",
    "Tech Consulting",
  ];
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      <div
        className="z-20 flex justify-between items-center rounded-full px-6 backdrop-blur-lg bg-white/10 
  supports-backdrop-blur:bg-white/10 dark:bg-neutral-900 fixed top-10 left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg shadow-lg border border-white/20"
        style={{ height: "80px" }}
      >
        <div className="flex gap-1 items-center">
          <Image src={logo} width={75} height={75} alt="OptiCode Logo" />
          <h1>OptiCode</h1>
        </div>

        <div className="w-full flex justify-center items-center">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
        </div>

        <div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      <div>
        <div className="home-page">
          <ImagesSlider className="h-[40rem]" images={images}>
            <div className="z-50">
              <div className="flex z-10 flex-col items-center justify-center h-[40rem] ">
                <h1 className="text-center text-3xl md:text-7xl font-bold text-white">
                  Your Partner in <br />
                  <FlipWords words={services} /> <br />
                  Excellence
                </h1>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
                  <button className="w-40 h-10 rounded-xl bg-blue-500  border dark:border-white border-transparent text-white text-sm">
                    Join now
                  </button>
          
                </div>
              </div>
            </div>
          </ImagesSlider>
        </div>
      </div>
      <Aboutus/>
      <FeaturesSectionDemo/>
    </>
  );
}

