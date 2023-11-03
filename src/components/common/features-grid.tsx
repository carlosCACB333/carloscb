
import React, { ReactNode } from "react";
import { tv } from "tailwind-variants";
import {
  LinkProps,
  SlotsToClasses,
} from "@nextui-org/react";
import { LinkIcon } from "@nextui-org/shared-icons";
import Link from "next/link";

const styles = tv({
  slots: {
    base: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
    card: "p-4 rounded-lg shadow-lg  backdrop-blur-sm bg-content1/[0.1] border border-content1",
    header: " flex items-center gap-2 pb-0",
    body: "",
    iconWrapper:
      "flex justify-center p-2 rounded-full items-center bg-primary text-primary-900",
    title: "text-base font-semibold",
    description: "font-bold text-3xl text-center",
  },
});

export type FeaturesGridSlots = keyof ReturnType<typeof styles>;

export interface Feature extends LinkProps {
  title: string;
  icon: ReactNode;
  description?: string | ReactNode;
}

interface FeaturesGridProps {
  features: Feature[];
  classNames?: SlotsToClasses<FeaturesGridSlots>;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({
  features,
  classNames,
  ...props
}) => {
  const slots = styles();
  return (
    <div className={slots.base({ class: classNames?.base })} {...props}>
      {features.map((feat: Feature, index: number) => (
        <Link
          key={`${feat.title}_${index}`}
          className={slots.card({ class: classNames?.card })}
          href={feat.href!}
        >
          <div className={slots.header({ class: classNames?.header })}>
            <div
              className={slots.iconWrapper({ class: classNames?.iconWrapper })}
            >
              {feat.icon}
            </div>
            <p className={slots.title({ class: classNames?.title })}>
              {feat.title}
            </p>
            {feat.isExternal && (
              <LinkIcon className="text-white" height={18} width={18} />
            )}
          </div>
          {feat.description ? (
            <div className={slots.body({ class: classNames?.body })}>
              <p
                className={slots.description({
                  class: classNames?.description,
                })}
              >
                {feat.description}
              </p>
            </div>
          ) : null}
        </Link>
      ))}
    </div>
  );
};
