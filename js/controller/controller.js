import { ServiceClass } from "../model/model.js";
import { UpdatedView } from "../view/view.js";

export class ControllerClass {
	constructor() {
		this.service = new ServiceClass();
		this.view = new UpdatedView(this);
	}
	attViewController(data) {
		this.view.attView(data);
	}
	async getUserController(user) {
		const processedData = await this.service.getUser(user);
		this.attViewController(processedData);
	}
	controllerConvertDate(item, date) {
		this.service.DataProcessing.convertDate(item, date);
	}
	controllerValidItem(item, data) {
		this.service.DataProcessing.validItem(item, data);
	}
}
