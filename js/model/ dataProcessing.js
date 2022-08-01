export class DataProcessing {
	tratarItem($item, data) {
		const str = data?.substr(0, 8);

		if (str === "https://") {
			$item.setAttribute("href", data);
			$item.textContent = this.sliceString(data, $item);
		} else {
			$item.setAttribute("href", `https://${data}`);
			$item.textContent = this.sliceString(data, $item);
		}

		$item.textContent = this.sliceString(data, $item);
	}

	sliceString(string, $item) {
		const text =
			string === undefined
				? "Não Encontrado"
				: String(string).length >= 24
				? `${string.substr(0, 24)}...`
				: string;
		if (text.length >= 24) {
			$item.classList.add("fill");
		} else {
			$item.classList.remove("fill");
		}
		return text;
	}

	convertDate($item, date) {
		if (typeof date === "undefined") {
			return ($item.textContent = "Data não encontrada");
		}

		const actual = date.substr(0, 10);
		const dateToString = new Date(actual);
		const newDate = dateToString.toLocaleDateString("pt-br", {
			year: "numeric",
			month: "short",
			day: "2-digit",
		});

		$item.textContent = `Entrou em ${newDate}`;
	}

	validItem($item, data) {
		if (data === null || data === "") {
			const text = "Não Encontrado";
			$item.textContent = text;
			if ($item.getAttribute("data-js") === "blog") {
				this.tratarItem($item, text);
			}
		} else {
			if ($item.getAttribute("data-js") === "blog") {
				this.tratarItem($item, data);
			}
			$item.textContent = this.sliceString(data, $item);
		}
	}
}
