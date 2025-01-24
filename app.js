document.getElementById('shortenBtn').addEventListener('click', shortenURL);
document.getElementById('copyBtn').addEventListener('click', copyToClipboard);

// Function to shorten the URL
function shortenURL() {
  const urlInput = document.getElementById('urlInput').value;
  const shortenedOutput = document.getElementById('shortenedOutput');
  const shortenedUrlField = document.getElementById('shortenedUrl');
  const historyList = document.getElementById('historyList');

  // Validate input URL
  if (!isValidURL(urlInput)) {
    alert('Please enter a valid URL.');
    return;
  }

  // Mock shortening process (replace with actual shortening logic, e.g., API call)
  const shortenedURL = 'https://short.ly/' + Math.random().toString(36).substring(7);

  // Display shortened URL
  shortenedUrlField.value = shortenedURL;
  shortenedOutput.classList.remove('hidden');

  // Add to history
  const historyItem = document.createElement('li');
  historyItem.textContent = shortenedURL;
  historyList.appendChild(historyItem);
}

// Function to validate the URL
function isValidURL(url) {
  const regex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*$/;
  return regex.test(url);
}

// Function to copy the shortened URL to clipboard
function copyToClipboard() {
  const shortenedUrlField = document.getElementById('shortenedUrl');
  shortenedUrlField.select();
  document.execCommand('copy');
  alert('URL copied to clipboard!');
}
