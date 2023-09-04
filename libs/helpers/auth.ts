
export const StoreCookieForLogin = async (
  token: string,
) => {
 
  
  await fetch(`https://webidemyyy.ir/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};
