!(function () {
    const headingsContainer = document.querySelector('.article--heading-anchors');
    console.log(headingsContainer);

    if(headingsContainer){
        const headings = Array.from(headingsContainer.querySelectorAll('h2,h3,h4,h5'));
        headings.forEach((heading) => {
            heading.addEventListener('click', () => {
                const newHash = heading.getAttribute('id');
                window.location.hash = newHash;
                copyTextToClipboard(window.location);
            });
        }); 
    }

    function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
      
        //
        // Bunch of styles to hide input incase of a flash render
        //
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
      
        document.body.appendChild(textArea);
      
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          console.log('Copying text command was ' + msg);
        } catch (err) {
          console.log('Oops, unable to copy');
        }
      
        document.body.removeChild(textArea);
      }

})();