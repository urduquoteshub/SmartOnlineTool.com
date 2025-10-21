/* assets/common.js */

// Footer links helper (keeps header/footer consistent)
document.addEventListener('DOMContentLoaded', () => {
  // small nav behavior for single page header if needed in future
});

/* Text tool helpers used on the tool pages */
function countWords(text){
  if(!text) return 0;
  // split on whitespace, filter empty
  const arr = text.trim().split(/\s+/).filter(Boolean);
  return arr.length;
}
function countChars(text){
  return text.length;
}
function removeExtraSpaces(text){
  return text.replace(/\s+/g, ' ').trim();
}

/* Age calculator helper */
function calculateAge(dob){
  // dob in yyyy-mm-dd
  const b = new Date(dob);
  if(isNaN(b)) return null;
  const now = new Date();
  let years = now.getFullYear() - b.getFullYear();
  let months = now.getMonth() - b.getMonth();
  let days = now.getDate() - b.getDate();
  if(days < 0){ months--; days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if(months < 0){ years--; months += 12; }
  return { years, months, days };
}
