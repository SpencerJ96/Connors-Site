import Image from 'next/image'

export default function Brands(){
	return(
		<section id="brands" className="bg-gradient-to-b from-zinc-900 via-black to-zinc-900 py-20 px-8">
			<h2 className="text-white text-5xl font-display tracking-widest text-center mb-2">Trusted By</h2>
			<div className="w-16 h-0.5 bg-accent mx-auto mt-2 mb-10"></div>

			<div className="max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-12">

			<Image className="opacity-100 grayscale-0 md:opacity-70 md:grayscale md:hover:opacity-100 md:hover:grayscale-0 transition-all duration-300" src="/ruddylogo.png" alt="Ruddy Cafe Logo" width={120} height={60} />
			<Image className="opacity-100 grayscale-0 md:opacity-70 md:grayscale md:hover:opacity-100 md:hover:grayscale-0 transition-all duration-300" src="/Jaspy.png" alt="Work Experience Logo" width={120} height={60} />
			<Image className="opacity-100 grayscale-0 md:opacity-70 md:grayscale md:hover:opacity-100 md:hover:grayscale-0 transition-all duration-300" src="/trentlogo.png" alt="Trent Logo" width={120} height={60} />
			<Image className="opacity-100 grayscale-0 md:opacity-70 md:grayscale md:hover:opacity-100 md:hover:grayscale-0 transition-all duration-300" src="/jasperslogo.png" alt="Jaspers Logo" width={120} height={60} />

			</div>
		</section>
	);
}