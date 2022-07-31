import { ServiceClass } from "../model/model.js";
import { UpdatedView } from "../view/view.js";

export class ControllerClass {
	constructor() {
		this.service = new ServiceClass();
		this.view = new UpdatedView(this);
	}
	getUserController(user) {
		this.service.getUser(user, this.view);
	}
	controllerConvertDate(item, date) {
		this.service.convertDate(item, date);
	}
	controllerValidItem(item, data) {
		this.service.validItem(item, data);
	}
}
