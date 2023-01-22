const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '80px',
 	duration: 2000,
 	reset: true
 })

 sr.reveal('.home-text',{delay:350, origin:'left'})
 sr.reveal('.home-img',{delay:350, origin:'right'})

 sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

const scriptURL = 'https://script.google.com/macros/s/AKfycbweeYr0OQ9zBIKlusrASLhgtHNHTmw2yL1YDQakDK_5C4sEgsgCVOaDGQgF6HEyviLE/exec'
  const form = document.forms['submit-to-google-sheet']
	const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
				msg.innerHTML = "Message sent successfully!"
				setTimeout(function(){
					msg.innerHTML = ""
				},5000)
				form.reset()
			})
      .catch(error => console.error('Error!', error.message))
  });


	// let btnEl = document.querySelector(".load-more");

	// let currentItem = 4;


	// btnEl.addEventListener("click", ()=>{
	// 	let boxes = [...document.querySelectorAll(".col img")];
	// 	for (var i = currentItem; i < currentItem + 4; i++){
	// 		boxes[i].style.display = "inline-block";
	// 	}
	// 	currentItem += 4;

	// 	if(currentItem >= boxes.length){
	// 		btnEl.style.display = "none";
	// 	}
	// })

	const portfolioContent = document.querySelector(".portfolio-content");
	const btns = document.querySelectorAll(".button");
	const articles = document.querySelectorAll(".content");


	portfolioContent.addEventListener("click", (event)=>{
		
		const id = event.target.dataset.id

		if(id) {
			btns.forEach((btn)=>{
				btn.classList.remove("live");
			});
			
			event.target.classList.add("live");
			articles.forEach((article)=>{
				article.classList.remove("live");
			});

			const element = document.getElementById(id);
			element.classList.add("live");

		}
	});
