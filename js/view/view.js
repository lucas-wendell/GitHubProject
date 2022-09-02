export class UpdatedView {
	attView(data, convertDateCallback, validItemCallback) {
		const {
			created_at,
			public_repos,
			followers,
			following,
			avatar_url,
			login,
			name,
			bio,
			location,
			twitter_username,
			blog,
			company,
		} = data;
		const $imgProfile = document.querySelector('[data-js="imgProfile"]');
		const $nameUser = document.querySelector('[data-js="nameUser"]');
		const $user = document.querySelector('[data-js="user"]');

		const $dateCreation = document.querySelector('[data-js="dateCreation"]');
		const $bio = document.querySelector('[data-js="bio"]');

		const $locality = document.querySelector('[data-js="locality"]');
		const $twitter = document.querySelector('[data-js="twitter"]');

		const $blog = document.querySelector('[data-js="blog"]');
		const $company = document.querySelector('[data-js="company"]');

		const $reposQuantity = document.querySelector('[data-js="reposQuantity"]');
		const $followersQuantity = document.querySelector(
			'[data-js="followersQuantity"]'
		);
		const $followingQuantity = document.querySelector(
			'[data-js="followingQuantity"]'
		);

		convertDateCallback($dateCreation, created_at);
		$reposQuantity.textContent = public_repos;

		$followersQuantity.textContent = followers;
		$followingQuantity.textContent = following;

		$imgProfile.setAttribute("src", avatar_url);
		$user.textContent = `@${login}`;

		$nameUser.textContent = name;
		$bio.textContent = bio;

		validItemCallback($locality, location);
		validItemCallback($twitter, twitter_username);

		validItemCallback($blog, blog);
		validItemCallback($company, company);
	}
}
