import "mmenu-light/dist/mmenu-light";
import "mmenu-light/dist/mmenu-light.css";

const mmenuInit = () => {
	const menu = new MmenuLight(document.querySelector("#mmenu"));

	const navigator = menu.navigation({
		title: "Я&ТЫ",
		// theme: "dark",
	});
	const drawer = menu.offcanvas({
		position: "right",
	});

	document
		.querySelector("a[href='#menu']")
		.addEventListener("click", (evnt) => {
			evnt.preventDefault();
			drawer.open();
		});
};

export default mmenuInit;
