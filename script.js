// =============================================
// Course Content Simplification Agent — Script
// =============================================

// --- DOM Element References ---
const simplifyBtn = document.getElementById('simplify-btn');
const levelSelect = document.getElementById('level-select');
const contentInput = document.getElementById('content-input');
const outputSection = document.getElementById('output-section');
const outputContent = document.getElementById('output-content');

// --- Event Listener ---
simplifyBtn.addEventListener('click', handleSimplify);

/**
 * Handles the Simplify button click.
 * Validates inputs, then sends a request to the backend.
 */
async function handleSimplify() {
  const level = levelSelect.value.trim();
  const content = contentInput.value.trim();

  // Basic validation
  if (!level) {
    alert('Please select a proficiency level before continuing.');
    return;
  }

  if (!content) {
    alert('Please paste some course content before continuing.');
    return;
  }

  // Show loading state
  simplifyBtn.disabled = true;
  simplifyBtn.textContent = 'Simplifying...';
  outputSection.style.display = 'none';
  outputContent.textContent = '';

  try {
    // TODO: Replace this URL with the actual backend endpoint when ready.
    const response = await fetch('http://localhost:5000/simplify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level, content }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();

    // Display the simplified output
    outputContent.textContent = data.simplified || 'No output received from the server.';
    outputSection.style.display = 'block';

  } catch (error) {
    // TODO: Replace with a proper UI error message when backend is integrated.
    outputContent.textContent = `Error: ${error.message}`;
    outputSection.style.display = 'block';
  } finally {
    // Restore button state
    simplifyBtn.disabled = false;
    simplifyBtn.textContent = 'Simplify Content';
  }
}
