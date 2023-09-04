export const StoreCookieForLogin = async (token: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_URL_CLIENT}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};
