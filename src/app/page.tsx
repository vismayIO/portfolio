import { Hero } from "@/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vismay | Web Designer & Front-End Developer",
  description:
    "Portfolio of Vismay — a web designer and front-end developer crafting responsive websites where technologies meet creativity.",
};

export default function Home() {
  return <Hero />;
}
