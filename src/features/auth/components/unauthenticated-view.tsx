"use client";

import { ShieldAlert as ShieldAlertIcon } from "lucide-react";
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
} from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const UnauthenticatedView = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <Item className="max-w-2xl gap-4 bg-background/80 p-6 shadow-lg shadow-black/5">
        <ItemMedia variant="icon" className="bg-muted text-primary">
          <ShieldAlertIcon className="size-6" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Sign in to continue</ItemTitle>
          <ItemDescription>
            You need to authenticate before accessing this application. Sign in
            or sign up to get started.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <SignInButton>
            <Button variant="outline" size="sm">
              Sign in
            </Button>
          </SignInButton>
        </ItemActions>
      </Item>
    </div>
  );
};

export default UnauthenticatedView;
