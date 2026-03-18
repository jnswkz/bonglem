## 2024-03-18 - Memoizing Filter Search Queries
**Learning:** Found a case in `ProductsPage.tsx` where `.toLowerCase()` on the search query was being executed redundantly inside a `.filter` array iteration.
**Action:** When filtering a list by a user string, process the filter string (like `toLowerCase()`) *before* the loop starts, and wrap the array operation in `useMemo` to prevent calculating it on every single React render unless dependencies change.
