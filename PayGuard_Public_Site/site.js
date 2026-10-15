'use strict';
const feedbackButton = document.getElementById('copyFeedback');
feedbackButton.addEventListener('click', async () => {
  const input = document.getElementById('feedbackText');
  const status = document.getElementById('feedbackStatus');
  const value = input.value.trim();
  if (!value) { status.textContent = 'Please write a little feedback first.'; input.focus(); return; }
  try {
    await navigator.clipboard.writeText(`PayGuard demo feedback:\n\n${value}`);
    status.textContent = 'Copied! Paste this into a message to the person who shared the demo.';
  } catch {
    input.focus(); input.select();
    status.textContent = 'Select and copy the highlighted text (Ctrl+C), then send it to the person who shared the demo.';
  }
});
