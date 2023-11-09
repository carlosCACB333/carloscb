"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
interface Props extends ButtonProps {}

export const SubmitButton = ({ children, isIconOnly, ...props }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      isLoading={pending}
      isDisabled={pending}
      isIconOnly={isIconOnly}
      {...props}
    >
      {isIconOnly && pending ? null : children}
    </Button>
  );
};
