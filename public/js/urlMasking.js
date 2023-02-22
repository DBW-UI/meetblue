// Wait for the page to load
window.addEventListener('load', function() {

    window.history.pushState({page: "new-page"}, "New Page Title", "video");
  
    window.onpopstate = function(event) {
      // window.open('deepbluework.com','_blank');
    };
  
  });