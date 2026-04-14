import Hero from "./components/Hero"
import Brands from "./components/Brands"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
import FadeIn from "./components/FadeIn"

export default function Home(){
	return(
		<main>
			<FadeIn>
			<Hero />
			</FadeIn>
			
			<FadeIn>
			<Brands />
			</FadeIn>
			
			<FadeIn>
			<About />
			</FadeIn>

			<hr className="border-t-2 border-foreground/10 mx-16" />
			
			<FadeIn>
			<Work />
			</FadeIn>


			<FadeIn>
			<Contact />
			</FadeIn>

		</main>
	)
}