


import { title, subtitle, sectionWrapper } from "@/components";
import { MDXContent } from "@/components/md/MDXContent";
import { AiFillHeart } from "react-icons/ai";
import { IMG } from "@/components/common/IMG";
import { sizes } from "@/assets";
import { AuthorFragment } from "@/generated/graphql";

interface Props {
  author: AuthorFragment
}

export const AboutSection = ({ author }: Props) => {

  const fullName = `${author.firstName} ${author.lastName}`;
  const age = new Date().getFullYear() - new Date(author.birth).getFullYear();
  const photo = author.photos.at(-1)!;

  return (
    <section
      className={sectionWrapper({ class: "mt-24 lg:mt-56" })}
      id="home-about-me"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="row-span-2  md:row-start-1 bg-gradient-to-br from-blue-200 to-blue-900 rounded-lg min-h-[400px]">
          <IMG src={photo.url} alt={author.firstName} sizes={sizes.sm} />
        </div>
        <div className="row-start-1 md:row-start-2 ">
          <div className="text-center md:text-start">
            <h1 className={title({ size: "lg" })}>Conoce &nbsp;</h1>
            <div className="flex flex-col items-center md:flex-row">
              <h1 className={title({ color: "blue", size: "lg" })}>
                más de mí&nbsp;
              </h1>
              <AiFillHeart
                className="text-primary animate-heartbeat"
                size={50}
                style={{
                  animationDuration: "2.5s",
                }}
              />
            </div>
          </div>
          <div className={subtitle({ fullWidth: true })}>
            <MDXContent>{author.bio || ''}</MDXContent>
          </div>
          <table
            aria-label="Tabla de información personal"
            className="table-auto w-full text-left mt-4"
            cellPadding={2}
          >
            <tbody >
              <tr >
                <td>Nombre</td>
                <td>{fullName}</td>
              </tr>
              <tr>
                <td>Correo</td>
                <td>{author.email}</td>
              </tr>
              <tr>
                <td>Edad</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>Profesión</td>
                <td>{author.profession?.toString()}</td>
              </tr>
              <tr>
                <td>Universidad</td>
                <td>{author.university}</td>
              </tr>
              <tr>
                <td>Ciclo</td>
                <td>{author.cycle?.toString()}</td>
              </tr>
              <tr>
                <td>Dirección</td>
                <td>{author.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
