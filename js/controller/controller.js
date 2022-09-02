export class ControllerClass {
	constructor(service, view) {
		this.service = service;
		this.view = view;
	}

	async attView(response) {
		const data = await response;

		const convertDate = ($item, date) =>
			this.service.DataProcessing.convertDate($item, date);
		const validItem = ($item, data) =>
			this.service.DataProcessing.validItem($item, data);
		this.view.attView(data, convertDate, validItem);
	}

	searchUser(user) {
		this.attView(this.service.getUser(user));
	}
}
