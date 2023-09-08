import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {

  const headers = new Headers();
  headers.append(
    "Set-Cookie",
    `x-access-token=${null}; Path=/;   Max-Age=0; `
  );
  headers.append(
    "Set-Cookie",
    `x-refresh-token=${null}; Path=/; Max-Age=0;  `
  );

  return new Response("success logout!", {
    status: 200,
    headers: headers,
  });
}
