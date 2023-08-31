import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const res = await request.json();
  console.log(res.token);
  
  
  const headers = new Headers();
 
  headers.append(
    "Set-Cookie",`webidemy_token=${res?.token}; Path=/; HttpOnly;  Max-Age=60480; SameSite=Lax;`
  );



  return new Response("success login!", {
    status: 200,
    headers: headers,
  });
}
