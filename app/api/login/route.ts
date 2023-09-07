import { NextApiRequest } from "next";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const res = await request.json();
  
  const headers = new Headers();
 
  headers.append(
    "Set-Cookie",`x-access-token=${res?.at}; Path=/; HttpOnly;  Max-Age=300۰۰0 Domain=.webidemyyy.ir; SameSite=Lax;`
  );
  headers.append(
    "Set-Cookie",`x-refresh-token=${res?.rt}; Path=/;  Max-Age=64000000; SameSite=Lax; 
    Domain=.webidemyyy.ir; `
  );



  return new Response("success login!", {
    status: 200,
    headers: headers,
  });
}
