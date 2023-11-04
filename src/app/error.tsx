"use client";

import { ErrorComponent } from "@/components/common/error";

interface Props {
  error: Error;
  reset: () => void;
}
export default function Error({ error, reset }: Props) {
  return <ErrorComponent error={error} reset={reset} />;
}
