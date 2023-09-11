
export const StoreCookieForLogin = async (at: string,rt:string) => {

  await fetch(`${process.env.NEXT_PUBLIC_URL_CLIENT}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ at,rt }),
  });
};
export const RemoveCookieForLogout = async () => {

  
  await fetch(`${process.env.NEXT_PUBLIC_URL_CLIENT}/api/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
