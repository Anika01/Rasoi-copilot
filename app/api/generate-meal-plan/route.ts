import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: Request) {
  try {
    console.log("STEP 1 - Route hit");

    const { prompt } = await req.json();

    console.log("STEP 2 - Prompt parsed");
    console.log(prompt);

    console.log("STEP 3 - Calling Claude");

    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    console.log("STEP 4 - Claude responded");

    return Response.json({
      success: true,
      result: message.content,
    });
  } catch (error) {
    console.error("CLAUDE ERROR:", error);

    return Response.json({
      success: false,
      error: "Failed to generate meal plan",
    });
  }
}