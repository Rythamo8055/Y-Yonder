'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Textarea } from './ui/textarea';
import { Globe, Image as ImageIcon, Send } from 'lucide-react';

export function StatusComposer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur-lg border-white/10 shadow-lg cursor-pointer hover:bg-card/80 transition-colors">
          <Avatar>
            <AvatarImage
              src="https://picsum.photos/seed/user-profile/40/40"
              alt="You"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">
            Share a project update...
          </span>
        </div>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="rounded-t-2xl h-auto border-t-2 bg-background/80 backdrop-blur-xl"
      >
        <div className="mx-auto w-full max-w-lg">
          <SheetHeader className="text-left">
            <SheetTitle className="font-headline text-2xl">
              Create Post
            </SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-4">
            <Textarea
              placeholder="What's on your mind?"
              rows={5}
              className="bg-background/80 text-base"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <ImageIcon />
                </Button>
                <Button variant="ghost" size="icon">
                  <Globe />
                </Button>
              </div>
              <Button>
                <Send className="mr-2" /> Post
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
