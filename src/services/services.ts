export const fetchMessage = async (url: string, message: string) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ message }),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    cache: "no-cache",
  });

  return response;
};
