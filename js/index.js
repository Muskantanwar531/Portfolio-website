let menuIcon =document.getElementById('menu-icon');
let navbar = document.querySelector('nav');
menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');
 
window.onscroll = ()=>{
  let top = window.scrollY;
    sections.forEach(sec => {
        let offset =sec.offsetTop -150;
      let height =sec.offsetHeight;
      let id= sec.getAttribute('id');

      if(top>=offset && top < offset +height){
        navLinks.forEach(links =>{
            links.classList.remove('active');
          });
            document.querySelector('header nav a[href*=' +id +']').classList.add('active');
}
});
    let header =document.querySelector('header');
    header.classList.toggle('sticky',top > 100);
         
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({ 
  reset: true,
  distance:'80px',
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact-form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});
const typed =new Typed('.multiple-text',
{
  strings:['Frontend Developer','Application Developer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true,
});
// for contact form 
function sendemail(){
  var persons={
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
console.log("its email function");
const serviceID="service_uxp3ndl";
const templateid="template_o6xozse";
emailjs.send(serviceID,templateid,persons)
.then(
  res=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
   document.getElementById("subject").value="";
   document.getElementById("message").value="";
   console.log(res);
   alert("your message sent successfully.");

  })
  .catch(err=>console.log(err));
}