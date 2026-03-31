function analyzeText() {
  var text = document.getElementById("inputText").value;
  var errorMsg = document.getElementById("errorMsg");
  var result = document.getElementById("result");

  // Handle empty input
  if (text.trim() === "") {
    errorMsg.style.display = "block";
    result.style.display = "none";
    return;
  }

  errorMsg.style.display = "none";

  // Count characters
  var charCount = text.length;

  // Count words (handle multiple spaces)
  var wordCount = text.trim().split(/\s+/).length;

  // Reverse the text
  var reversedText = text.split("").reverse().join("");

  // Display results
  document.getElementById("charCount").textContent = charCount;
  document.getElementById("wordCount").textContent = wordCount;
  document.getElementById("reversedText").textContent = reversedText;

  result.style.display = "block";
}
