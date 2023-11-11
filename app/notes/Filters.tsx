import { Label } from "@/components/ui/label";
import FilterByPriority from "./FilterByPriority";
import FilterByTitle from "./FilterByTitle";

const Filters = () => {
  return (
    <section className="flex items-center gap-4">
      <div className="mb-8 flex max-w-xs flex-col gap-2 ">
        <Label>Filter By Priority</Label>
        <FilterByPriority />
      </div>
      <div className="mb-8 flex max-w-xs flex-col gap-2 ">
        <Label>Sort By Title</Label>
        <FilterByTitle />
      </div>
    </section>
  );
};
export default Filters;
