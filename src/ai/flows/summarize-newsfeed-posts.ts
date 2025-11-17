'use server';

/**
 * @fileOverview A newsfeed post summarization AI agent.
 *
 * - summarizeNewsfeedPost - A function that handles the summarization process.
 * - SummarizeNewsfeedPostInput - The input type for the summarizeNewsfeedPost function.
 * - SummarizeNewsfeedPostOutput - The return type for the summarizeNewsfeedPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeNewsfeedPostInputSchema = z.object({
  postContent: z
    .string()
    .describe('The content of the newsfeed post to be summarized.'),
});
export type SummarizeNewsfeedPostInput = z.infer<typeof SummarizeNewsfeedPostInputSchema>;

const SummarizeNewsfeedPostOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the newsfeed post.'),
});
export type SummarizeNewsfeedPostOutput = z.infer<typeof SummarizeNewsfeedPostOutputSchema>;

export async function summarizeNewsfeedPost(
  input: SummarizeNewsfeedPostInput
): Promise<SummarizeNewsfeedPostOutput> {
  return summarizeNewsfeedPostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeNewsfeedPostPrompt',
  input: {schema: SummarizeNewsfeedPostInputSchema},
  output: {schema: SummarizeNewsfeedPostOutputSchema},
  prompt: `You are an AI assistant designed to summarize newsfeed posts.  Create a concise summary of the following newsfeed post:

{{{postContent}}}`,
});

const summarizeNewsfeedPostFlow = ai.defineFlow(
  {
    name: 'summarizeNewsfeedPostFlow',
    inputSchema: SummarizeNewsfeedPostInputSchema,
    outputSchema: SummarizeNewsfeedPostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
