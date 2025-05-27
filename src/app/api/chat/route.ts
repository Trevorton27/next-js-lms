import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'Missing OpenAI API key.' }, { status: 500 });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data.error || 'OpenAI API error' }, { status: response.status });
    }

    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI request failed:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
