import { ServiceClass } from "./model/model.js";
import { UpdatedView } from "./view/view.js";
import { ControllerClass } from "./controller/controller.js";

const input = document.querySelector('[data-js="searchInput"]');
const container = document.querySelector(".container");
const errorDiv = document.querySelector(".errorDiv");

const instanceServiceClass = new ServiceClass();
const instanceViewClass = new UpdatedView();
const instanceControllerClass = new ControllerClass(
	instanceServiceClass,
	instanceViewClass
);

instanceControllerClass.searchUser("l-Wendell");

const actions = {
	searchButton() {
		instanceControllerClass.searchUser(input.value);
	},
	closeWarning() {
		errorDiv.style.transform = "translateY(-100%)";
	},
};

const connectActions = target => {
	const nameOfTarget = target.getAttribute("data-js");

	const func = actions[nameOfTarget];
	func?.();
};

container.addEventListener("click", e => connectActions(e.target));
errorDiv.addEventListener("click", e => connectActions(e.target));
