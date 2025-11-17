"use client";

import { useFormState, useFormStatus } from "react-dom";
import { summarizePostAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Wand2, LoaderCircle, BookText } from "lucide-react";

const initialState = {
  message: null,
  summary: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <Wand2 />
      )}
      Summarize
    </Button>
  );
}

export function NewsfeedSummarizer() {
  const [state, formAction] = useFormState(summarizePostAction, initialState);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form action={formAction}>
        <Card className="bg-card/70 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="font-headline text-3xl flex items-center gap-2">
              <BookText />
              Newsfeed Summarizer
            </CardTitle>
            <CardDescription>
              Paste in a long newsfeed post and let AI give you a short summary.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              name="postContent"
              placeholder="Paste your long text here... (min. 50 characters)"
              rows={8}
              required
              className="bg-background/80"
            />
            {state?.message && (
              <p className="text-sm font-medium text-destructive mt-2">
                {state.message}
              </p>
            )}
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>

      {state?.summary && (
        <Card className="mt-8 bg-card/70 backdrop-blur-sm border-border/50 animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed">{state.summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
