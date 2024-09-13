import { Metadata } from "next";

export const metadata: Metadata = {
  title: "home",
  description: "Home",
  keywords:
    "fariborz, rafatrad, fariborz rafatrad, front end developer, personal website, فریبرز , رفعت راد , راد , برنامه نویس",
};

export default function Home() {
  return (
    <div>
      <h1>I am Fariborz Rafatrad. I am a front-end developer.</h1>
      <p>سلام من فریبرز رفعت راد هستم برنامه نویس فرانت اند.</p>
    </div>
  );
}
