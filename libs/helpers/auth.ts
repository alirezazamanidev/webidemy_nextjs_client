export const StoreCookieForLogin = async (token: string) => {
  let url=process.env.NEXT_PUBLIC_URL_CLIENT as string
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};
