
export const StoreCookieForLogin = async (
  token: string,
) => {
 
  
  await fetch(`http://localhost:3000/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};
