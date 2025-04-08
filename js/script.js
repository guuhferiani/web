
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme () {

    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");

}