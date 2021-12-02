console.log("Hello World");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const form = document.getElementById("bookmark__form");

  function saveBookmark(e) {
    e.preventDefault();
    const siteName = document.getElementById("siteName").value;
    const siteUrl = document.getElementById("siteUrl").value;

    const bookmark = {
      name: siteName,
      url: siteUrl,
    };

    console.log(bookmark);

    if (localStorage.getItem("bookmarks") === null) {
      const bookmarks = [];
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } else {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      bookmarks.push(bookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  }

  form.addEventListener("submit", saveBookmark);
});
