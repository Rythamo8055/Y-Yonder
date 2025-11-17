"use server";

import { z } from "zod";
import { summarizeNewsfeedPost } from "@/ai/flows/summarize-newsfeed-posts";

const schema = z.object({
  postContent: z.string().min(50, "Post must be at least 50 characters long."),
});

type State = {
  message?: string | null;
  summary?: string | null;
};

export async function summarizePostAction(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = schema.safeParse({
    postContent: formData.get("postContent"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.postContent?.[0],
    };
  }

  try {
    const result = await summarizeNewsfeedPost({
      postContent: validatedFields.data.postContent,
    });
    return { summary: result.summary, message: null };
  } catch (error) {
    console.error(error);
    return { message: "Failed to summarize post. Please try again." };
  }
}
