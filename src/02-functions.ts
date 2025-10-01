import { Friend, Colleague, IntersectionList } from "./myTypes";
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

function addInterest(friend: Friend, interest: string): string[] {
    if (!friend.interests) {
      // if 'interests' is undefined, initialize as empty.
      friend.interests = [];
    }
    friend.interests.push(interest);
    return friend.interests;
  }

  console.log("addInterest(): ", addInterest(friends[0], "Politics"));

addColleague(colleagues.current, "Jane Doe", "Engineering", "janedoe12@company.com");
console.log("after addColleague():", colleagues.current);

// --- sortColleagues ---
type EmailContact = { name: string; email: string };
function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }

console.log("sortColleagues by extension:", sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log("sortColleagues by name length, returm shortest:", sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log("sortColleagues by name length, return all:", sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

// --- findFriends ---
function findFriends(friends: Friend[], criterion: (f: Friend) => boolean): Friend[] {
  return friends.filter(criterion);
}

console.log("findFriends name starts with Pa:", findFriends(friends, f => f.name.startsWith("Pa")));
console.log("findFriends age < 35:", findFriends(friends, f => f.age < 35));

function makeIntersectionList( name: string, age: number, email: string, extension: number): IntersectionList {
  return { name,age,contact: {email, extension} } as IntersectionList;
}




