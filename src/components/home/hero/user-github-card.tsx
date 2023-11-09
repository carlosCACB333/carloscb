import { FC } from "react";
import { Avatar, Link } from "@nextui-org/react";
import { clsx } from "@nextui-org/shared-utils";
import NextImage from "next/image";

interface Props {
  className?: string;
  fullName: string;
  username?: string | null;
  detail: string;
  footer: string;
  avatar: string;
}

export const UserGitHubCard: FC<Props> = ({
  fullName,
  username,
  detail,
  footer,
  avatar,
  className,
}) => {
  return (
    <div
      className={clsx(
        "bg-content1 p-4 rounded-lg shadow-lg max-w-[300px]",
        className
      )}
    >
      <div className="flex justify-between">
        <div className="flex gap-5">
          <Avatar
            className="object-top"
            isBordered
            ImgComponent={NextImage}
            alt={fullName}
            style={{
              objectPosition: "top",
            }}
            imgProps={{
              width: 40,
              height: 40,
            }}
            radius="full"
            size="md"
            src={avatar}
          />
          <div className="flex flex-col items-start justify-center">
            <p className="text-sm font-semibold leading-none ">{fullName}</p>
            <Link
              className="text-sm"
              href={username!}
              target="_blank"
              aria-label={"@+" + username?.split("/").at(-1)}
            >
              @{username?.split("/").at(-1)}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p>
          {detail} &nbsp;
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
        <p className="text-sm">{footer}</p>
      </div>
    </div>
  );
};
