import useSWR, { Fetcher } from "swr";

const fetcher: Fetcher = (...args: any[]) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

export const useProducts = () => {
  const { data, error, isLoading } = useSWR(
    "https://6222994f666291106a29f999.mockapi.io/api/v1/products",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
};
