console.log($(window).width());

// Переключатель галереи картинок на верхней страничке//
let offerPictures =["offer1","offer2","offer3"];
let offerNumber = 1;
let offer = document.querySelector(".offer");
let navigation = document.querySelector(".navigation");
let countChosen = document.querySelector(".count-chosen");
countChosen.innerHTML = "0" + offerNumber;
offer.classList.add("offer1");
navigation.onclick = function(event){
	console.log(event.target);
	offer.classList = "offer";
	if (event.target.innerHTML == "PREV"){
		if(offerNumber==1){
			offerNumber=offerPictures.length;
		}
		else{
			offerNumber--;	
		}
	}
	if (event.target.innerHTML == "NEXT"){
		if(offerNumber==offerPictures.length){
			offerNumber=1;
		}
		else{
			offerNumber++;	
		}
	}
	offer.classList.add('offer' + offerNumber);
	countChosen.innerHTML = "0" + offerNumber;
}

//Якорные ссылки из хедера//
let $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
});


//Политика конфиденциальности//
let policyConfidential = document.querySelector(".policy-confidential");
$(".policy").click(function(){
	policyConfidential.classList = "policy-confidential";
	policyConfidential.classList.add("visible-flex");
	console.log("check");
})
$(".policy-close").click(function(){
	policyConfidential.classList = "policy-confidential";
	policyConfidential.classList.add("unvisible");
})

// Форма отправки заявки для просчета ремонта//
let thanks = document.querySelector(".thanks");
$(".request-form-button").click(function(){
	thanks.classList = "thanks";
	thanks.classList.add("visible-flex");
})
$(".call-form-button").click(function(){
	thanks.classList = "thanks";
	thanks.classList.add("visible-flex");
})
$(".thanks-close").click(function(){
	thanks.classList = "thanks";
	thanks.classList.add("unvisible");
})

// Высчиываю какой блок больше в репэир и задаю всем такую высоту//
/*window.addEventListener('load',function(){
	let repairlists = document.querySelectorAll(".repair-type-list");
	for(i=0;i<repairlists.length-1;i++){
	let biggest = repairlists[i].offsetHeight;
	if(repairlists[i+1].offsetHeight>repairlists[i].offsetHeight){
		biggest = repairlists[i+1].offsetHeight;
		repairlists[i].style.height = biggest + "px";
		}
	repairlists[i+1].style.height = biggest + "px";
	
	}
})*/
// на ипэир баттон ставлю вызов модалки оставить заявку//
let leave = document.querySelector(".leave");
$(".repair-type-button").click(function(){
	leave.classList = "leave";
	leave.classList.add("visible-flex");
});
leave.onclick = function(event){
	console.log(event.target);
	if(event.target.className=="leave visible-flex"){
		leave.classList = "leave";
		leave.classList.add("unvisible");
	}
}

// использую слик слайдер для галереи квартир//
$('.project-row').slick({
      infinite: true,
      arrows: true,
      prevArrow: '<div class="project-prev">PREV</div>',
      nextArrow: '<div class="project-next">NEXT</div>',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }

    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
    	}
    }, {
      breakpoint: 576,
      settings: {
      	slidesToShow: 1,

      }

    }]

 });

// открываю галерею при нажатии на картинку//
let pearl1 = document.querySelector(".pearl1");
$("#pearl1").click(function(){
	/*apartment.classList = "apartment";
	apartment.classList.add("visibility-visible");*/
	pearl1.style.visibility = "visible";
	pearl1.style.position = "fixed"
})
$(".apartment-close").click(function(){
	/*apartment.classList = "apartments";
	apartment.classList.add("visibility-hidden");*/
	pearl1.style.visibility = "hidden";
	pearl1.style.position = "absolute";
})

let pearl2 = document.querySelector(".pearl2");
$("#pearl2").click(function(){
	/*apartment.classList = "apartment";
	apartment.classList.add("visibility-visible");*/
	pearl2.style.visibility = "visible";
	pearl2.style.position = "fixed"
})
$(".apartment-close").click(function(){
	/*apartment.classList = "apartments";
	apartment.classList.add("visibility-hidden");*/
	pearl2.style.visibility = "hidden";
	pearl2.style.position = "absolute";
})

let mandarin2 = document.querySelector(".mandarin2");
$("[id=mandarin2]").click(function(){
	/*apartment.classList = "apartment";
	apartment.classList.add("visibility-visible");*/
	mandarin2.style.visibility = "visible";
	mandarin2.style.position = "fixed"
})
$(".apartment-close").click(function(){
	/*apartment.classList = "apartments";
	apartment.classList.add("visibility-hidden");*/
	mandarin2.style.visibility = "hidden";
	mandarin2.style.position = "absolute";
})

let mandarin1 = document.querySelector(".mandarin1");
$("#mandarin1").click(function(){
	/*apartment.classList = "apartment";
	apartment.classList.add("visibility-visible");*/
	mandarin1.style.visibility = "visible";
	mandarin1.style.position = "fixed"
})
$(".apartment-close").click(function(){
	/*apartment.classList = "apartments";
	apartment.classList.add("visibility-hidden");*/
	mandarin1.style.visibility = "hidden";
	mandarin1.style.position = "absolute";
})

// слик слайдер для всплывающей галереи apartments//
$('.apartment-gallery').slick({
      infinite: true,
      arrows: true,
      prevArrow: '<div class="apartment-prev">PREV</div>',
      nextArrow: '<div class="apartment-next">NEXT</div>',
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [{

     
      breakpoint: 576,
      settings: {
      	arrows: false,
      	dots: true,
      }

    }]
      
})
    

// меню в хедере//
let navHeader = document.querySelector(".nav-header");
$('.header-nav').click(function(){
	navHeader.classList = "nav-header";
	navHeader.classList.add("visible-flex");
})
$('.nav-header-close').click(function(){
	navHeader.classList = "nav-header";
	navHeader.classList.add("unvisible");
})
$('[id=nav-header-elem]').click(function(){
	navHeader.classList = "nav-header";
	navHeader.classList.add("unvisible");
})

// отслеживаем изменение размеров окна//
window.addEventListener('resize', function(event){
  if($(window).width()<768){
  	
  }
});




