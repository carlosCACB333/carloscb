"use client";
import { GradientBox } from "@/components/common/gradient-box";
import { Icon } from "@/components/common/icon";
import { CategoryFragment } from "@/generated/graphql";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Tooltip } from "@nextui-org/tooltip";
import { useState } from "react";

interface Props {
  categories: CategoryFragment[];
}
export const SkillContent = ({ categories }: Props) => {
  const [selected, setSelected] = useState(categories[0]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 h-min">
        {categories.map((item) => (
          <Button
            size="lg"
            key={item.id}
            onClick={() => setSelected(item)}
            startContent={
              <Icon
                name={item.icon as any}
                style={{
                  height: 30,
                  width: 30,
                }}
              />
            }
            className="justify-start"
            color={selected.id === item.id ? "success" : "default"}
            aria-label={item.name}
          >
            {item.name}
          </Button>
        ))}
      </div>

      <GradientBox
        className="items-start flex-wrap gap-4  min-h-[200px] lg:min-h-[390px] p-8 "
        color="green"
        to="right"
      >
        {selected.skills?.map((skill) => (
          <Tooltip
            key={skill.id}
            content={
              <div className="px-1 py-2 max-w-xs">
                <div className="text-small font-bold">{skill.name}</div>
                <div className="text-tiny">{skill.detail}</div>
              </div>
            }
          >
            <Card className="cursor-pointer">
              <CardBody>
                <Icon
                  name={skill.icon as any}
                  className="text-foreground fill-foreground"
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </CardBody>
            </Card>
          </Tooltip>
        ))}
      </GradientBox>
    </div>
  );
};
