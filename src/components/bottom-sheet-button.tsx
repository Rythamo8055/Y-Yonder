"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronsUp } from "lucide-react";

export function BottomSheetButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ChevronsUp className="mr-2 h-4 w-4" />
          Open Bottom Sheet
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="rounded-t-2xl h-3/4 border-t-2 bg-background/80"
      >
        <div className="mx-auto w-full max-w-md">
          <SheetHeader className="text-center">
            <SheetTitle className="font-headline text-2xl">
              Bottom Sheet Modal
            </SheetTitle>
            <SheetDescription>
              This is a bottom sheet modal. It's great for focused tasks,
              especially on mobile devices.
            </SheetDescription>
          </SheetHeader>
          <div className="py-8">
            <p className="text-center">
              You can put any content here, like a form or more information. The
              background is blurred to keep the user's attention.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
