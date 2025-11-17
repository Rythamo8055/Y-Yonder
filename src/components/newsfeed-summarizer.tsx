'use client';

import { useActionState } from 'react';
import { summarizePostAction } from '@/app/actions';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const initialState = {
  message: null,
  summary: null,
};

export function NewsfeedSummarizer() {
  const [state, formAction] = useActionState(summarizePostAction, initialState);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="bg-card/60 backdrop-blur-lg border-white/10 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center gap-2">
            <Wand2 className="text-primary" />
            AI Post Summarizer
          </CardTitle>
          <CardDescription>
            Paste a long article or post and let AI create a concise summary for you.
          </CardDescription>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-4">
            <Textarea
              name="postContent"
              placeholder="Paste content here to summarize..."
              rows={6}
              className="bg-background/80"
              required
            />
            {state.message && (
              <p className="text-sm font-medium text-destructive">
                {state.message}
              </p>
            )}
            {state.summary && (
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <h4 className="font-semibold">Summary:</h4>
                <p className="text-sm text-muted-foreground">{state.summary}</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="ml-auto">
              <Wand2 className="mr-2" />
              Summarize
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
