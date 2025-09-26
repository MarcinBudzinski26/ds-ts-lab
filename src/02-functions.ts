import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";

// --- older ---
function older(f: Friend) {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}
console.log("older():", older(friends[0]));

// --- allOlder ---
function allOlder(arr: Friend[]) {
  return arr.map(f => {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
  });
}
console.log("allOlder():", allOlder(friends));

// --- highestExtension ---
function highestExtension(cs: Colleague[]) {
  const result = cs.slice().sort(
    (a, b) => a.contact.extension - b.contact.extension
  );
  return result[result.length - 1];
}
console.log("highestExtension():", highestExtension(colleagues.current));

// --- addColleague ---
function addColleague(cs: Colleague[], name: string, department: string, email: string) {
  const highest = highestExtension(cs).contact.extension;
  cs.push({
    name,
    department,
    contact: { email, extension: highest + 1 },
  });
}
addColleague(colleagues.current, "New Hire", "Engineering", "newhire@company.com");
console.log("after addColleague():", colleagues.current);

// --- sortColleagues ---
type EmailContact = { name: string; email: string };
function sortColleagues(
  cs: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
  const sorted = cs.slice().sort(sorter); // type inferred
  return sorted.map(c => ({ name: c.name, email: c.contact.email }));
}
console.log("sortColleagues by extension:", sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log("sortColleagues by name length:", sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// --- findFriends ---
function findFriends(friends: Friend[], criterion: (f: Friend) => boolean): Friend[] {
  return friends.filter(criterion);
}
console.log("findFriends name starts with Pa:", findFriends(friends, f => f.name.startsWith("Pa")));
console.log("findFriends age < 35:", findFriends(friends, f => f.age < 35));
