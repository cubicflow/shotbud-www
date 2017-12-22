// !function(){

//     const showTocBtn = document.querySelector('#show-mobile-toc');
//     const toc = document.querySelector('.mobile-toc');
//     const tocList = toc.querySelector('.mobile-toc__list');
//     const headings = Array.from(document.querySelectorAll('h2'));

//     const listHTML = headings.map(makeListItemTemplate).join('');
//     tocList.innerHTML = listHTML;

//     const listItems = Array.from(document.querySelectorAll('.mobile-toc__list a'));

//     showTocBtn.addEventListener('click', () => {
//         toc.classList.toggle('active');
//         showTocBtn.classList.toggle('active');
//     })

//     listItems.forEach((item, i) => {
//         item.addEventListener('click', () => {
//             closeToc();

//             if(i > listItems.length - 1)
//                 return;

//             window.setTimeout(() => {
//                 window.scrollBy(0, -60);
//             }, 1)
//         })
//     });


//     function makeListItemTemplate(headingNode){
//         return `<li><a href="#${headingNode.getAttribute('id')}">${headingNode.textContent}</a></li>`;
//     }

//     function closeToc(){
//         toc.classList.remove('active');
//         showTocBtn.classList.remove('active');
//     }
// }();