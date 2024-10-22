import GlobalStyle from "../styles";
import useSWR from "swr";

export default function App({ Component, pageProps }) {
  // Lifted Up from HomePage to fix availability of fetched data globally
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  async function fetcher(url) {
    const response = await fetch(url);
    return await response.json();
  }

  if (error) return <h1>🛑 failed</h1>;
  if (isLoading) return <h1>⏳ is loading</h1>;

  // Logic for initial check of data fetch - all clear 👍🏻
  // const fetchData = data;
  // console.log(fetchData);

  // for passing data through prop {pieces}
  // Attempt 1: Try just accessing it in the prop like pieces={data} ==> works ✅

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} pieces={data} />
    </>
  );
}
