// sort by date
export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort(
    (a: any, b: any) =>
      new Date(b.data.date && b.data.date).valueOf() -
      new Date(a.data.date && a.data.date).valueOf(),
  );
  return sortedArray;
};

// sort product by weight
// export const sortByWeight = (array: any[]) => {
//   const withWeight = array.filter(
//     (item: { data: { weight: any } }) => item.data.weight,
//   );
//   const withoutWeight = array.filter(
//     (item: { data: { weight: any } }) => !item.data.weight,
//   );
//   const sortedWeightedArray = withWeight.sort(
//     (a: { data: { weight: number } }, b: { data: { weight: number } }) =>
//       a.data.weight - b.data.weight,
//   );
//   const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
//   return sortedArray;
// };


// Sort blogs by weight (1 is highest priority/weight, weight is optional)
export const sortBlogByWeight = (array: any[]) => {
  const withWeight = array.filter(
    (item: { data: { weight?: number } }) => typeof item.data.weight === "number"
  );
  const withoutWeight = array.filter(
    (item: { data: { weight?: number } }) => typeof item.data.weight !== "number"
  );
  // Sort: 1 is highest, so ascending
  withWeight.sort(
    (a: { data: { weight: number } }, b: { data: { weight: number } }) =>
      a.data.weight - b.data.weight
  );
  // Combine: weighted first, then unweighted
  return [...withWeight, ...withoutWeight];
};

// Sort by weight (1 is highest), then by date (newest first if weight is missing or same)
export const sortWithWeight = (array: any[]) => {
  return array.slice().sort((a: any, b: any) => {
    const aHasWeight = typeof a.data.weight === "number";
    const bHasWeight = typeof b.data.weight === "number";

    // Both have weight
    if (aHasWeight && bHasWeight) {
      if (a.data.weight !== b.data.weight) {
        return a.data.weight - b.data.weight; // 1 is highest
      }
      // If weights are equal, sort by date (newest first)
      return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
    }

    // Only a has weight
    if (aHasWeight) return -1;
    // Only b has weight
    if (bHasWeight) return 1;

    // Neither has weight, sort by date (newest first)
    return new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf();
  });
};