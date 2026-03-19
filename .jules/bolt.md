
## 2024-05-18 - Repeated string operations in filter loops
**Learning:** In React components with search bars, performing operations like `.toLowerCase()` inside a `.filter` loop causes the same string manipulation (on the query string) to be repeated for every single item. Combined with a lack of debouncing, typing quickly blocking the main thread significantly.
**Action:** Always extract constant operations out of loops. E.g., apply `.toLowerCase()` to the search query once *before* the `.filter` iteration. Always wrap filter operations dependent on user input with a debounce pattern and `useMemo` to skip unnecessary operations.
