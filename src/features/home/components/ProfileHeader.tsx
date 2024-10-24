import { Button } from "core/components/atoms/button";
import { configs } from "core/lib/constant";
import { Linkedin, Youtube, Twitter, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import React from "react";

export default function ProfileHeader() {
  const t = useTranslations();
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center max-w-screen-lg">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-xl">Software Developer</h2>
        <h1 className="text-4xl font-bold">
          {t("Profile.hello")}
          <br />
          <span className="text-5xl  text-primary">{configs.title}</span>
        </h1>
        <p className="max-w-md">{t("Profile.introduce")}</p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Youtube className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className=" md:w-1/2 mt-8 md:mt-0 flex justify-end  items-center">
        <div className=" w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary border-dashed relative ">
          <Image
            src={configs.logo}
            alt="Luke Coleman"
            layout="fill"
            objectFit="cover"
            className="bg-black"
          />
        </div>
      </div>
    </div>
  );
}
