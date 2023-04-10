import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (timestamp: string) => {
  return format(new Date(timestamp), "dd 'de' MMMM, yyyy", {
    locale: es,
  });
};
