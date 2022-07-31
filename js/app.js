import { ControllerClass } from "./controller/controller.js";

const input = document.querySelector('[data-js="searchInput"]');
const container = document.querySelector(".container");

const errorDiv = document.querySelector(".errorDiv");
const instanceControllerClass = new ControllerClass();

instanceControllerClass.getUserController("l-Wendell");

const actions = {
	searchButton() {
		instanceControllerClass.getUserController(input.value);
	},
	closeWarning() {
		errorDiv.style.transform = "translateY(-100%)";
	},
};

container.addEventListener("click", e => {
	const target = e.target;
	const name = target.getAttribute("data-js");

	const func = actions[name];
	func?.(target);
});

errorDiv.addEventListener("click", e => {
	const target = e.target;
	const name = target.getAttribute("data-js");

	const func = actions[name];
	func?.(target);
});
