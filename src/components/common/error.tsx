import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
interface Props {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  btnText?: string;
}
export const ErrorComponent = ({
  error,
  reset,
  title = "Oops, algo salió mal",
  btnText = "Intentar de nuevo",
}: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full gap-4 text-center min-h-[80vh]">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button
        aria-label="Intentar de nuevo"
        color="primary"
        onClick={() => reset()}
      >
        {btnText}
      </Button>
    </div>
  );
};
