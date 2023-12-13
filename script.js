

const darkModeToggle = document.querySelector('.theme-switch input');
const TextIcon = document.querySelector('.toggle-text');
const icon = document.querySelector('.fa-sun');
const savedTheme = localStorage.getItem('theme');


if(savedTheme){
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') {
    darkModeToggle.checked = true;
    TextIcon.innerHTML = 'Dark Mode';
    icon.setAttribute('class', 'fa-solid fa-moon');
  }
}
function themeToggle(){
  if(darkModeToggle.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    TextIcon.innerHTML='Dark Mode';
    icon.setAttribute('class', 'fa-solid fa-moon');
    localStorage.setItem('theme', 'dark');
  }
  else{
    document.documentElement.removeAttribute('data-theme');
    TextIcon.innerHTML='Light Mode';
    icon.setAttribute('class', 'fa-solid fa-sun');
    localStorage.setItem('theme', 'light');
  }

}

darkModeToggle.addEventListener('change', themeToggle);
