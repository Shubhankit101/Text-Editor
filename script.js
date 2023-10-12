// Get references to the editor and save button
const editor = document.getElementById('editor');
const saveButton = document.getElementById('save-button');

// Add an event listener to the save button
saveButton.addEventListener('click', () => {
    const content = editor.innerHTML;
    // Save the content to local storage or send it to a server
    // Example using local storage:
    localStorage.setItem('editorContent', content);
});

// Load content from local storage when the page loads
const savedContent = localStorage.getItem('editorContent');
if (savedContent) {
    editor.innerHTML = savedContent;
}
