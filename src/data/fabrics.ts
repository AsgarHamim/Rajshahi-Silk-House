export type FabricCategory = "Solid" | "Stripes" | "Patterns" | "Combinations";

const stripes = [1, 2, 3, 4, 6, 7, 24, 40, 43, 56];
const patterns = [12, 15, 23, 37, 41, 42, 51, 54, 55];
const combos = [29, 32, 33, 35, 36, 38, 39, 44, 45, 46, 47, 48, 49, 53];

function categoryOf(n: number): FabricCategory {
  if (stripes.includes(n)) return "Stripes";
  if (patterns.includes(n)) return "Patterns";
  if (combos.includes(n)) return "Combinations";
  return "Solid";
}

export type Fabric = { id: string; n: number; category: FabricCategory; thumb: string; full: string; alt: string };

export const fabrics: Fabric[] = Array.from({ length: 56 }, (_, i) => {
  const n = i + 1;
  const id = String(n).padStart(3, "0");
  const category = categoryOf(n);
  return { id, n, category, thumb: `/fabrics/${id}.webp`, full: `/fabrics/full/${id}.webp`, alt: `Folded fabric ${id}, ${category.toLowerCase()} design, overhead view` };
});

export const fabricFilters: ("All" | FabricCategory)[] = ["All", "Solid", "Stripes", "Patterns", "Combinations"];
