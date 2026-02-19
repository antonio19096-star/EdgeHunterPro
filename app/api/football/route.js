export const runtime = 'edge';

export async function GET() {
  const apiKey = process.env.API_FOOTBALL_KEY;

  const response = await fetch(
    'https://v3.football.api-sports.io/fixtures?live=all',
    {
      headers: {
        'x-apisports-key': apiKey
      }
    }
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}