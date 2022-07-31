export class UpdatedView {
	constructor(controller) {
		this.controller = controller;
	}
	attView(data) {
		const imgProfile = document.querySelector('[data-js="imgProfile"]');
		const nameUser = document.querySelector('[data-js="nameUser"]');
		const user = document.querySelector('[data-js="user"]');

		const dateCreation = document.querySelector('[data-js="dateCreation"]');
		const bio = document.querySelector('[data-js="bio"]');

		const locality = document.querySelector('[data-js="locality"]');
		const twitter = document.querySelector('[data-js="twitter"]');

		const blog = document.querySelector('[data-js="blog"]');
		const company = document.querySelector('[data-js="company"]');

		const reposQuantity = document.querySelector(
			'[data-js="reposQuantity"]'
		);
		const followersQuantity = document.querySelector(
			'[data-js="followersQuantity"]'
		);
		const followingQuantity = document.querySelector(
			'[data-js="followingQuantity"]'
		);

		this.controller.controllerConvertDate(dateCreation, data.created_at);
		reposQuantity.textContent = data.public_repos;

		followersQuantity.textContent = data.followers;
		followingQuantity.textContent = data.following;

		imgProfile.setAttribute("src", data.avatar_url);
		user.textContent = `@${data.login}`;

		nameUser.textContent = data.name;
		bio.textContent = data.bio;

		this.controller.controllerValidItem(locality, data.location);
		this.controller.controllerValidItem(twitter, data.twitter_username);

		this.controller.controllerValidItem(blog, data.blog);
		this.controller.controllerValidItem(company, data.company);
	}
}
