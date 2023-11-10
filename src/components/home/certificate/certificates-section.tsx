import "swiper/css/pagination";
import { Button } from "@nextui-org/react";
import { ArrowRightIcon } from "@nextui-org/shared-icons";
import NextLink from "next/link";
import { Stage } from "@/generated/graphql";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { getSdk } from "@/utils/sdk";
import { sectionWrapper, subtitle, title } from "@/components";
import { CertificateCarrousel } from "./certificates-carrousel";

export const CertificateSection = async () => {
  const { certifications } = await getSdk().getCertifications({
    stage: Stage.Published,
    first: 6,
    skip: 0,
  });
  return (
    <section
      className={sectionWrapper({
        isBlurred: true,
        class: "border-t border-b border-divider mt-24 lg:mt-56 px-6",
      })}
      id="home-certifications"
    >
      <div className="w-full grid grid-cols-12 gap-6 items-center container m-auto">
        <div className="flex flex-col gap-2 col-span-12 md:col-span-5">
          <div className="text-center lg:text-start">
            <h1 className={title({ size: "lg" })}>Mis &nbsp;</h1>
            <div className="flex flex-col items-center lg:flex-row">
              <h1 className={title({ color: "violet", size: "lg" })}>
                certificaciones&nbsp;
              </h1>
              <AiFillSafetyCertificate
                className="text-secondary animate-heartbeat"
                size={50}
                style={{
                  animationDuration: "2.5s",
                }}
              />
            </div>
          </div>
          <p className={subtitle({ class: "md:w-full text-base lg:text-lg" })}>
            Aquí encontrarás las certificaciones que he obtenido a lo largo de
            mi carrera profesional.
          </p>
          <div className="flex flex-row gap-3 justify-start">
            <Button
              as={NextLink}
              className="text-sm"
              color="secondary"
              endContent={
                <ArrowRightIcon
                  className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
                  strokeWidth={2}
                  aria-label="Ver más certificaciones"
                />
              }
              aria-label="Ver más certificaciones"
              href="/certificate"
              size="lg"
            >
              Ver más
            </Button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <CertificateCarrousel certifications={certifications} />
        </div>
      </div>
    </section>
  );
};
