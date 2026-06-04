import React from "react";
import { Spinner } from "@/components/ui/spinner";

export const AuthLoadingView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Spinner className="size-10 text-primary" />
    </div>
  );
};
