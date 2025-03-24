const firstClick = document.querySelector(".first_question");
const twoClick = document.querySelector(".two_question");
const threeClick = document.querySelector(".three_question");

const firstCheck = document.querySelector(".time_one");
const secondCheck = document.querySelector(".time_two");
const threeCheck = document.querySelector(".time_three");

const pageOne = document.querySelector(".page_one");
const pageTwo = document.getElementById("page_two");
const pageThree = document.getElementById("Check");
const pageBox = document.getElementById("game");

const commentsOne = document.getElementById("comments_display");
const commentsTwo = document.getElementById("comments_display_one");
const footer = document.getElementById("fppter_display");

const oneBox = document.querySelector(".one_box");
const twoBox = document.querySelector(".two_box");
const threeBox = document.querySelector(".three_box");
const fourBox = document.querySelector(".four_box");
const fiveBox = document.querySelector(".five_box");
const sixBox = document.querySelector(".six_box");
const sevenBox = document.querySelector(".seven_box");
const eightBox = document.querySelector(".eight_box");
const nineBox = document.querySelector(".nine_box");
const tenBox = document.querySelector(".ten_box");
const elevenBox = document.querySelector(".eleven_box");
const twelvBox = document.querySelector(".tvelw_box");

const oneModal = document.querySelector(".click_me_pidor");
const modalWrapp = document.querySelector(".wrapp_modal_box");

const endGiftAnimation = document.querySelector(".img_gift_wind");
const blyyyy = document.querySelector(".pop");

const visiblQuestionOne = () => {
	firstClick.classList.add("b-und");
	setTimeout(() => (firstClick.style.display = "none"), 100);
	setTimeout(() => twoClick.classList.add("b-show"), 100);
};
const visiblQuestionTwo = () => {
	twoClick.classList.add("b-und-two");
	setTimeout(() => (twoClick.style.display = "none"), 100);
	setTimeout(() => threeClick.classList.add("b-show-two"), 100);
};
const visiblPageTwo = () => {
	threeClick.classList.add("b-und-three");

	setTimeout(() => {
		// pageOne.style.display = 'none';
		pageTwo.style.display = "none";

		//commentsOne.style.display = "none";
		commentsTwo.style.display = "none";
		//footer.style.display = "none";
		$('.loader-wrp').fadeIn();
		setTimeout(function () {
			$('.loader-wrp').fadeOut();
			pageThree.style.display = "block";
		}, 2000);


	}, 100);

	setTimeout(() => {
		firstCheck.classList.add("b-show-two");
		firstCheck.style.display = "block";
	}, 2000);

	setTimeout(() => {
		secondCheck.classList.add("b-show-two");
		secondCheck.style.display = "block";
	}, 3200);
	setTimeout(() => {
		threeCheck.classList.add("b-show-two");
		threeCheck.style.display = "block";
	}, 5200);

	setTimeout(() => {
		pageThree.style.display = "none";
		pageBox.style.display = "block";
		modalWrapp.style.display = "block";
	}, 6000);
};

let fddfd = false;
oneModal.addEventListener("click", function () {
	modalWrapp.remove();



});


