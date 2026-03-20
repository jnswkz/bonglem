
## 2024-03-20 - Redundant string operations in render loop
**Learning:** Found an O(N) array filtering operation where `.toLowerCase()` was being called on the search query parameter 3 times per item inside the `.filter()` callback during component renders. This creates an O(3N) overhead.
**Action:** Extract loop-invariant operations like `.toLowerCase()` outside of iteration blocks and wrap expensive computations in `useMemo` hooks. Also, move static utility functions outside the component scope to avoid recreating them on every render.
