## 2025-05-20 - Debounce, hoist string conversion, and memoize string filtering operations
**Learning:** Performing multiple string `.toLowerCase()` operations synchronously on every keystroke during array filtering blocks the main thread, especially when list sizes grow.
**Action:** Always combine debouncing with hoisted expensive variables (`useMemo` over the query `.toLowerCase()`) to ensure string normalization happens only once per search, not *N* times per keystroke where N is the length of the list multiplied by number of searchable string properties.
