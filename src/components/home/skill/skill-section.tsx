
import { title, subtitle, sectionWrapper } from "@/components";
import { Locale, Stage } from "@/generated/graphql";
import { SiIbmwatson } from "react-icons/si";
import { getSdk } from "@/utils/sdk";
import { SkillContent } from ".";



export const SkillSection = async () => {
  const { categories } = await getSdk().getAllCatergories(
    {
      locales: [Locale.Es],
      stage: Stage.Published,
    },
    {}
  );

  return (
    <section className={sectionWrapper({ class: "z-20 mt-16 lg:mt-44" })}>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-center md:text-start">
            <h1 className={title({ size: "lg" })}>Mis &nbsp;</h1>
            <h1 className={title({ color: "green", size: "lg" })}>
              Habilidades
            </h1>
            <div className="flex flex-col md:flex-row items-center">
              <h1 className={title({ size: "lg" })}>tecnológicas&nbsp;</h1>
              <SiIbmwatson
                className="text-success animate-heartbeat"
                size={50}
                style={{
                  animationDuration: "2.5s",
                }}
              />
            </div>
          </div>
          <p className={subtitle()}>
            Mis habilidades tecnológicas para el desarrollo de software
            <span className="text-green-500 dark:text-green-400">
              {" "}
              Full-Stack{" "}
            </span>
            escalables, robustas y seguras.
          </p>
        </div>
        <SkillContent categories={categories} />
      </div>
    </section>
  );
};
