// Get references to the editor and save button
const editor = document.getElementById('editor');
const saveButton = document.getElementById('save-button');
const resetButton = document.getElementById('clear-button');

// Add an event listener to the save button
saveButton.addEventListener('click', () => {
    const content = editor.innerHTML;
    // Save the content to local storage or send it to a server
    // Example using local storage:
    localStorage.setItem('editorContent', content);
});

resetButton.addEventListener('click', function(){
localStorage.clear();
editor.innerHTML = '';
});
// Load content from local storage when the page loads
const savedContent = localStorage.getItem('editorContent');
if (savedContent) {
    editor.innerHTML = savedContent;
}
