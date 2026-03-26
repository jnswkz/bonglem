## 2025-02-23 - [Framer Motion and Suspense Boundary Integration]
**Learning:** [When combining `React.lazy` code splitting with Framer Motion`s `<AnimatePresence>` for page transitions, the `<Suspense>` boundary must correctly wrap the `<motion.div>` or the transition will glitch when fetching chunks. Setting `mode="wait"` on `<AnimatePresence>` also delays the network request for the new chunk until the exit animation finishes.]
**Action:** [Always test page transitions after implementing lazy loading when Framer Motion is present to ensure smooth UX and correct boundary placement.]
