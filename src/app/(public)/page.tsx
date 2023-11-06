
import { Hero } from "@/components/home/hero";
import { AboutSection } from "@/components/home/hero/about-section";
import {
  AiFillSafetyCertificate,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BsFillPostcardFill } from "react-icons/bs";
import { ProjectSection } from "@/components/home/project-section";
import { ContactSection } from "@/components/home/contact-section";
import { Stage } from "@/generated/graphql";
import { getSdk } from "@/utils/sdk";
import { Footer } from "@/components/common/footer";
import { ChatBoot } from "@/components/home/hero/ChatBoot";
import { AUTHOR_EMAIL, REVALIDATE } from "@/utils";
import { SkillSection } from "@/components/home/skill";
import { CertificateSection } from "@/components/home/certificate";
import { notFound } from "next/navigation";

export default async function Home() {
  const {
    certificationsConnection,
    postsConnection,
    projectsConnection,
    author
  } = await getSdk().getHomeData({
    stage: Stage.Published,
    email: AUTHOR_EMAIL
  });

  if (!author) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow">
      <main>
        <Hero
          author={author}
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
        <AboutSection author={author} />

        <SkillSection />

        <ProjectSection />

        <CertificateSection />

        <ContactSection author={author} />
      </main>
      <Footer />
      <ChatBoot />
    </div>
  );
}

export const revalidate = REVALIDATE