 const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Star"];
 const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians, instruments) {
let arr = [ ] 
for( let i=0; i < musicians.length; i++) {
  const str = musicians [i] + " plays " + instruments [i];
  arr.push (str);
} 
return arr;
}