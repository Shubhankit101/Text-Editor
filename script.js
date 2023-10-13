// Get references to the editor and save button
const main = document.querySelector('.main');
const content = document.querySelector('.content');
const editor = document.getElementById('editor');
const saveButton = document.getElementById('save-button');
const resetButton = document.getElementById('clear-button');
const themeButton = document.getElementById('theme-change');

let lightTheme = true;

themeButton.addEventListener('click', function(){
    if(lightTheme){
        main.classList.add('dark');
        content.classList.remove('lightContent');
        content.classList.add('darkContent');
        lightTheme = false;
    }
    else{
        main.classList.remove('dark');
        content.classList.add('lightContent');
        content.classList.remove('darkContent');
        lightTheme = true;
    }
});


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
