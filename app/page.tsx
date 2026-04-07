import Hero from "./components/Hero"
import Brands from "./components/Brands"
import About from "./components/About"
import Work from "./components/Work"


export default function Home(){
	return(
		<main>
			<Hero />
			<Brands />
			<About />
			<hr className="border-t-2 border-foreground/10 mx-16" />
			<Work />
		</main>
	)
}