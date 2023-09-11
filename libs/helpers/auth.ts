'use client'
export const StoreCookieForLogin = async (at: string,rt:string) => {
  
  await fetch(`https://webidemyyy.ir/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ at,rt }),
  });
};
export const RemoveCookieForLogout = async () => {

  
  await fetch(`https://webidemyyy.ir/api/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
