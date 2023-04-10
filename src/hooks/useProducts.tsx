import { getMonth } from "date-fns";
import { filter, reduce } from "lodash";
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

  // I've decided to filter only December dates to match Figma requirements
  const filteredData = filter(data, (item) => {
    return getMonth(new Date(item.createdAt)) === 11;
  });

  const cleanedData = filteredData?.map((item) => {
    return {
      createdAt: item.createdAt,
      product: item.product,
      points: item.points,
      image: item.image,
      isRedemption: item.is_redemption,
      id: item.id,
    };
  });

  const accumulatedPoints = reduce(
    cleanedData,
    (prev, current) => {
      if (current.isRedemption) {
        return prev - current.points;
      }
      return prev + current.points;
    },
    0
  );

  return {
    data: cleanedData,
    accumulatedPoints,
    error,
    isLoading,
  };
};
