import { SkillSection } from "@/components/home/skill-section";
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/hero/about-section";
import {
  AiFillSafetyCertificate,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { ProjectSection } from "@/components/home/project-section";
import { CertificateSection } from "@/components/home/certificates-section";
import { ContactSection } from "@/components/home/contact-section";
import { Locale, Stage } from "@/generated/graphql";
import { getSdk } from "@/utils/sdk";
import { Footer } from "@/components/common/footer";
import { ChatBoot } from "@/components/home/hero/ChatBoot";
import { REVALIDATE } from "@/utils";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const {
    categories,
    certifications,
    certificationsConnection,
    postsConnection,
    projectsConnection,
    projects,
  } = await getSdk().getHomeData(
    {
      locales: [Locale.Es],
      stage: Stage.Published,
    },
    {}
  );


  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">
      <main>
        <Hero
          features={[
            {
              icon: <AiFillSafetyCertificate size={32} />,
              title: "Certificaciones",
              description: certificationsConnection?.aggregate?.count + "+",
              href: "#home-certifications",
            },
            {
              icon: <AiOutlineFundProjectionScreen size={32} />,
              title: "Proyectos",
              description: projectsConnection?.aggregate?.count + "+",
              href: "#home-projects",
            },
            {
              icon: <BsFillPostcardFill size={32} />,
              title: "Publicaciones",
              description: postsConnection?.aggregate?.count + "+",
              href: "/blog",
            },
          ]}
        />
        <Suspense fallback={<Loading />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <SkillSection categories={categories as any} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ProjectSection projects={projects as any} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <CertificateSection certifications={certifications as any} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <ChatBoot />
      </Suspense>
    </div>
  );
}

export const revalidate = REVALIDATE
