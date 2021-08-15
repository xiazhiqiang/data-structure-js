import HashTable from "@/hashTable";

const hashTable = new HashTable();

hashTable.push("abcd", 123);
hashTable.push("efgh", 456);

const k = hashTable.hashFun("abcd");

console.log("k", k, hashTable.table[k].value === 123);
