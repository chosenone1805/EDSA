const form = document.querySelector('#myform');
const results = document.querySelector('#results');
 
form.addEventListener('submit', function(event) {
  event.preventDefault();
 
  const surname = document.querySelector('#Surname').value;
  const lastname = document.querySelector('#Lastname').value;
  const email = document.querySelector('#Email').value;
  const program = document.querySelector('#Program').value;
  const session = document.querySelector('#Session').value;
 
  const inputArray = [
    { label: 'Surname', value: surname },
    { label: 'Lastname', value: lastname },
    { label: 'Email', value: email },
    { label: 'Program', value: program },
    { label: 'Session', value: session },
  ];
 
  let outputHTML = '';
  for (let i = 0; i < inputArray.length; i++) {
    const { label, value } = inputArray[i];
    const charCount = value.length;
    const wordCount = value.split(' ').filter(word => word !== '').length;
    const reverseString = value.split('').reverse().join('');
    const uppercaseString = value.toUpperCase();
    const lowercaseString = value.toLowerCase();
    outputHTML += `
      <p><strong>${label}:</strong> ${value}</p>
      <ul>
        <li>Number of characters: ${charCount}</li>
        <li>Number of words: ${wordCount}</li>
        <li>Reversed string: ${reverseString}</li>
        <li>Uppercase string: ${uppercaseString}</li>
        <li>Lowercase string: ${lowercaseString}</li>
      </ul>
    `;
  }
 
  results.innerHTML = outputHTML;
});
