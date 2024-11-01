document.getElementById('downloadButton').addEventListener('click', function() {
  const extensionUrl = './extension.zip'; 
  const anchor = document.createElement('a');
  anchor.href = extensionUrl;
  anchor.download = 'AD_Shield_Extension.zip';  
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
});
 
// Nav-links Scroll
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
// window.onscroll = () => {
//   sections.forEaxh(sec =>{
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id= sec. getAttribute('id');
//     if(top>=offset && top< offset + height){
//       navLinks.forEach(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
//       });
//     };
//   });
// };


// Type-writer effect
window.addEventListener('scroll', function () {
  var element = document.querySelector('.type-effect')
  var position = element.getBoundingClientRect()

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible')
  } 
  // else {
  //   element.classList.remove('visible')
  // }
});

// Footer fade-up
window.addEventListener('scroll', function () {
  var element = document.querySelector('.footer')
  var position = element.getBoundingClientRect()

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('fadein')
  } 
  // else {
  //   element.classList.remove('visible')
  // }
});

// Footer-headers
window.addEventListener('scroll', function () {
  const footer = document.querySelector('.footer');
  const headers = document.querySelectorAll('.footer-head');
  const position = footer.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    footer.classList.add('fade-in'); // Trigger footer animation

    // Delay header animations to start after the footer animation
    setTimeout(() => {
      headers.forEach(header => {
        header.classList.add('animate');
      });
    }, 1000); // Delay to match the footer animation duration (1s)
  }
   else {
    footer.classList.remove('fade-in');
    headers.forEach(header => {
      header.classList.remove('animate');
    });
  }
});


// Bottom 
window.addEventListener('scroll', function () {
  var element = document.querySelector('.bottom')
  var position = element.getBoundingClientRect()

  // checking whether fully visible
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('bottommate')
  } 
  else {
    element.classList.remove('bottommate')
  }
});



