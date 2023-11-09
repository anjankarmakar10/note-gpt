"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Priority } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const priorities: { label: string; value?: Priority }[] = [
  { label: "All" },
  { label: "Low", value: "LOW" },
  { label: "Medium", value: "MEDIUM" },
  { label: "High", value: "HIGH" },
];

const className = (priority: string) => {
  return `${
    priority === "LOW"
      ? "text-blue-500"
      : priority === "HIGH"
      ? "text-rose-500"
      : priority === "MEDIUM"
      ? "text-orange-500"
      : "text-green-500"
  } font-semibold`;
};

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Select
      defaultValue={searchParams.get("priority") || undefined}
      onValueChange={(priority) => {
        const query = priority ? `?priority=${priority}` : "";
        router.push("/notes" + query);
      }}
    >
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {priorities.map((priority) => (
          <SelectItem
            className={className(priority.value!!)}
            key={priority.label}
            value={priority.value!!}
          >
            {priority.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default Filter;
