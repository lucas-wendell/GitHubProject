import { DataProcessing } from "./ dataProcessing.js";
export class ServiceClass {
	constructor() {
		this.errorDiv = document.querySelector(".errorDiv");
		this.paragraphErrorDiv = this.errorDiv.querySelector("p");
		this.DataProcessing = new DataProcessing();
	}

	async getUser(user) {
		try {
			const users = await fetch(`https://api.github.com/users/${user}`);
			const data = await users.json();

			return data;
		} catch (error) {
			this.paragraphErrorDiv.textContent = error.message;
			this.errorDiv.style.transform = "translateY(0%)";
		}
	}
}
