function findShort(s) {
    const strArr = s.split(" ");
    const minLen = Math.min(...strArr.map(word => word.length));
    return minLen;
}


console.log(findShort("turns out random test cases are easier than writing out basic ones")); // 3
console.log(findShort("Let's travel abroad shall we")); // 2
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3
