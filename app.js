const input = document.querySelector('[data-js="searchInput"]');
const container = document.querySelector(".container");
const errorDiv = document.querySelector(".errorDiv");

/* Transforma grandes strings em strings menores, 
   para mostrar de forma adequada ao usuário
*/
const sliceString = (string, item) => {
	const text =
		String(string).length >= 24 ? `${string.substr(0, 24)}...` : string;

	if (text.length >= 24) {
		item.classList.add("fill");
	} else {
		item.classList.remove("fill");
	}
	return text;
};

// Trata a data recebida e insere a data tratada no DOM
const convertDate = (item, date) => {
	const actual = date.substr(0, 10);
	const dateToString = new Date(actual);
	const newDate = dateToString.toLocaleDateString("pt-br", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});

	item.textContent = `Entrou em ${newDate}`;
};

/* Transforma links sem https, 
   para que seja possivel atribuilo no atributo href 
   de tags "a" de forma correta
*/
const tratarItem = (item, data) => {
	const str = data.substr(0, 8);

	if (str === "https://") {
		item.setAttribute("href", data);
		item.textContent = sliceString(data, item);
	} else {
		item.setAttribute("href", `https://${data}`);
		item.textContent = sliceString(data, item);
	}

	item.textContent = sliceString(data, item);
};

/* Verifica se o dado do usuario pesquisado existe, 
   em caso negativo insere "Não encontrado no DOM"
*/
const validItem = (item, data) => {
	if (data === null || data === "") {
		const text = "Não Encontrado";
		item.textContent = text;

		if (item.getAttribute("data-js") === "blog") {
			tratarItem(item, text);
		}
	} else {
		if (item.getAttribute("data-js") === "blog") {
			tratarItem(item, data);
		}

		item.textContent = sliceString(data, item);
	}
};

// Atualiza a tela contendo as informações do usuário pesquisado
const attView = data => {
	const imgProfile = document.querySelector('[data-js="imgProfile"]');
	const nameUser = document.querySelector('[data-js="nameUser"]');
	const user = document.querySelector('[data-js="user"]');

	const dateCreation = document.querySelector('[data-js="dateCreation"]');
	const bio = document.querySelector('[data-js="bio"]');

	const locality = document.querySelector('[data-js="locality"]');
	const twitter = document.querySelector('[data-js="twitter"]');

	const blog = document.querySelector('[data-js="blog"]');
	const company = document.querySelector('[data-js="company"]');

	const reposQuantity = document.querySelector('[data-js="reposQuantity"]');
	const followersQuantity = document.querySelector(
		'[data-js="followersQuantity"]'
	);
	const followingQuantity = document.querySelector(
		'[data-js="followingQuantity"]'
	);

	convertDate(dateCreation, data.created_at);
	reposQuantity.textContent = data.public_repos;

	followersQuantity.textContent = data.followers;
	followingQuantity.textContent = data.following;

	imgProfile.setAttribute("src", data.avatar_url);
	user.textContent = `@${data.login}`;

	nameUser.textContent = data.name;
	bio.textContent = data.bio;

	validItem(locality, data.location);
	validItem(twitter, data.twitter_username);

	validItem(blog, data.blog);
	validItem(company, data.company);
};

// Busca usuário utilizando a API do GitHub
const getUser = async user => {
	try {
		const users = await fetch(`https://api.github.com/users/${user}`);
		const data = await users.json();
		attView(data);
	} catch (e) {
		errorDiv.style.transform = "translateY(0%)";
	}
};

getUser("l-Wendell");

// Objeto contendo todas as ações de iteração do usuário com a interface
const actions = {
	searchButton() {
		getUser(input.value);
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
