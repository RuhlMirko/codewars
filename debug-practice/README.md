# Debug Practice - React Bug Hunt

Welcome! This React app contains **10 intentional bugs**. Your task is to find and fix them all.

---

## Bug Checklist

Mark each bug as found (✓) when you spot it:

### Level 1: Syntax & Runtime Errors

- [ ] **Bug #1**: Counter component crashes or behaves unexpectedly
- [ ] **Bug #2**: App throws an error on load

### Level 2: Logic Errors

- [ ] **Bug #3**: User search/filter doesn't work correctly
- [ ] **Bug #4**: User list sorting doesn't work
- [ ] **Bug #5**: Price calculation is wrong

### Level 3: React-Specific Issues

- [ ] **Bug #6**: Memory leak in Counter component
- [ ] **Bug #7**: useEffect missing dependency causes issues
- [ ] **Bug #8**: Race condition in DataFetcher

### Level 4: Data Handling

- [ ] **Bug #9**: Key prop issue in UserList
- [ ] **Bug #10**: Email validation returns incorrect results

---

## How to Use

1. Run `npm run dev` and open the app in your browser
2. Open Browser DevTools (F12)
3. Check the **Console** tab for errors
4. Check the **Components** tab (React DevTools) for state inspection
5. For each bug you fix, remove it from the code

---

## Hints

<details>
<summary>Hint for Bug #1 (Counter)</summary>

The cleanup function in useEffect is missing something.
</details>

<details>
<summary>Hint for Bug #2 (App)</summary>

Look at the useEffect dependency array and document title update.
</details>

<details>
<summary>Hint for Bug #3 (UserList)</summary>

The filter logic looks correct, but what if the search term changes?
</details>

<details>
<summary>Hint for Bug #4 (UserList)</summary>

Sorting comparison might have an issue with certain letters.
</details>

<details>
<summary>Hint for Bug #5 (Helpers)</summary>

The price formatting returns 2 decimal places, but what about the tax?
</details>

<details>
<summary>Hint for Bug #6 (Counter)</summary>

What should be returned from a cleanup function in useEffect?
</details>

<details>
<summary>Hint for Bug #7 (App)</summary>

The title should update when users change, but does it?
</details>

<details>
<summary>Hint for Bug #8 (DataFetcher)</summary>

The fetchId state changes, but the effect doesn't react to it.
</details>

<details>
<summary>Hint for Bug #9 (UserList)</summary>

The index is being used as a key, but is that the real issue here?
</details>

<details>
<summary>Hint for Bug #10 (Helpers)</summary>

The regex might not handle all edge cases properly.
</details>

---

## Solutions

<details>
<summary>Click here AFTER finding all bugs to see solutions</summary>

### Bug #1: Counter.jsx line 12
**Problem**: `return intervalId` should be `return () => clearInterval(intervalId)`
**Fix**: The cleanup function must call clearInterval, not return the ID.

### Bug #2: App.jsx line 27
**Problem**: `}, [])` should be `}, [users.length])`
**Fix**: Without the dependency, the title only updates on mount.

### Bug #3: App.jsx line 32
**Problem**: The filteredUsers filtering happens during render, but the variable name is confusing.
**Fix**: Actually no bug here - just verify your understanding.

### Bug #4: UserList.jsx line 11
**Problem**: `return b.name.localeCompare(a.name)` should return a.name.localeCompare(b.name)
**Fix**: The descending sort comparison is reversed.

### Bug #5: helpers.js line 15
**Problem**: `formatPrice` doesn't handle undefined/null amounts.
**Fix**: Add null check: `if (typeof amount !== 'number') return '$0.00'`

### Bug #6: Counter.jsx line 12
**Problem**: Missing clearInterval in cleanup.
**Fix**: Same as Bug #1 - return a cleanup function.

### Bug #7: App.jsx line 27
**Problem**: useEffect has empty deps array.
**Fix**: Add `users.length` to dependency array.

### Bug #8: DataFetcher.jsx line 9
**Problem**: useEffect has empty deps array but uses fetchId.
**Fix**: Add `fetchId` to dependency array.

### Bug #9: UserList.jsx line 18
**Problem**: Using `user.id` as key is fine, but the display uses `index` (0-based).
**Fix**: The `#` display should use a 1-based index properly, or key should be index for duplicates.

### Bug #10: helpers.js line 21
**Problem**: Regex doesn't handle emails with dots after @ properly.
**Fix**: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` is actually correct. The "bug" is that it passes emails like `.test@gmail.com` at the start - add `+` after first character class.

---

**Found all 10? Great job!** 🏆
</details>
