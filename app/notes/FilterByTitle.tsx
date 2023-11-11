"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";

const orderby: { label: string; value?: string }[] = [
  { label: "Asc", value: "asc" },
  { label: "Desc", value: "desc" },
  { label: "Clear Sort" },
];

const FilterByTitle = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      defaultValue={searchParams.get("orderByTitle") || undefined}
      onValueChange={(order) => {
        const query = order ? `?orderByTitle=${order}` : "";
        router.push("/notes" + query);
      }}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {orderby.map((order) => (
          <SelectItem
            className="text-xs font-semibold"
            key={order.label}
            value={order.value!!}
          >
            {order.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default FilterByTitle;
