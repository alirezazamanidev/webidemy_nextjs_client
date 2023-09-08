export const StoreCookieForLogin = async (at: string,rt:string) => {
  await fetch(`https://webidemyyy.ir/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ at,rt }),
  });
};
