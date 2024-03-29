
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const res = await request.json();

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `x-access-token=${res?.at}; Path=/; HttpOnly; Domain=${process.env.DOMAIN_URL}; Max-Age=300 SameSite=Lax;`
  );
  headers.append(
    "Set-Cookie",
    `x-refresh-token=${res?.rt}; Path=/; HttpOnly; Domain=${process.env.DOMAIN_URL};  Max-Age=64000000; SameSite=Lax; `
  );

  return new Response("success login!", {
    status: 200,
    headers: headers,
  });
}
