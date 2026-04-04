export default function Hero(){
	return(
		<section id="home" className="relative h-screen">
			<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
				<source src="/HeroVid.mp4" type="video/mp4"></source>
			</video>
			<div className="absolute inset-0 bg-black/30"></div>
			<div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-12 max-w-2xl mx-auto">
					<h1 className="text-6xl font-bold text-white">Connor Alexander</h1>
					<h2 className="mt-2 text-xl font-light text-white/80">Videographer & Content Creator</h2>
					<p className="mt-1 text-sm text-white/80">BA Content Creation</p>
					<p className="mt-1 text-sm text-white/60">📍 Based in Nottingham</p>
					<div className="flex gap-4 mt-4">
						<button className="bg-accent hover:bg-accent-light transition-colors duration-200 text-white px-6 py-3 rounded-full cursor-pointer">View My Work</button>
						<button className="border hover:bg-white/10 transition-colors duration-200 border-white text-white px-6 py-3 rounded-full cursor-pointer">Contact Me</button>
					</div>
			</div>
		</section>


	);
}