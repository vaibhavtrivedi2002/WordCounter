const inputText = document.getElementById('inputText');
const countButton = document.getElementById('countButton');
const wordCount = document.getElementById('wordCount');

countButton.addEventListener('click', function() {
  const text = inputText.value.trim();
  // Check if the text is empty after trimming
  if (text === "") {
    wordCount.textContent = "No words entered.";
    return; // Exit the function if no text
}
  const wordArray = text.split(/\s+/);
  const wordCountValue = wordArray.length;

  wordCount.textContent = `Word count: ${wordCountValue}`;
});