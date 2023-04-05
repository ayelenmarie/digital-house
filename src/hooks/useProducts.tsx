import useSWR from "swr";

import { ProductQuery } from "../types";

const fetcher = (...args: any[]) =>
  // @ts-ignore
  fetch(...args).then((res) => res.json());

export const useProducts = () => {
  const { data, error, isLoading } = useSWR<ProductQuery>(
    "https://6222994f666291106a29f999.mockapi.io/api/v1/products",
    fetcher
  );

  const cleanedData = data?.map((item) => {
    return {
      createdAt: item.createdAt,
      product: item.product,
      points: item.points,
      image: item.image,
      isRedemption: item.is_redemption,
      id: item.id,
    };
  });

  return {
    data: cleanedData,
    error,
    isLoading,
  };
};
