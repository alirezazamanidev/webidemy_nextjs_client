import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const res = await request.json();

  const headers = new Headers();
  console.log(res?.at, res?.rt);

  headers.append(
    "Set-Cookie",
    `x-access-token=${res?.at}; Path=/; HttpOnly;  Max-Age=64000000 Domain=.webidemyyy.ir  SameSite=Lax;`
  );
  headers.append(
    "Set-Cookie",
    `x-refresh-token=${res?.rt}; Path=/; Domain=.webidemyyy.ir  Max-Age=64000000; SameSite=Lax; `
  );

  return new Response("success login!", {
    status: 200,
    headers: headers,
  });
}
