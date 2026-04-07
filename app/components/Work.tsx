"use client"
import { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute  } from 'react-icons/fa'

function VideoCard ( { src, title, description } : { src:string, title: string, description: string }) {

	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleClick = () => {
		setIsPlaying(true)
		videoRef.current?.play()
	}

	const handleMute = () => {
		setIsMuted(!isMuted)
		if (videoRef.current) {
			videoRef.current.muted = !isMuted
		}
	}

	return(
		<div className="relative">
			
		<div className="aspect-video w-full">
			<video ref={videoRef} onEnded={() => setIsPlaying(false)} className="w-full h-full object-cover">
			<source src={src} type="video/mp4" />
			</video>
		</div>
			<div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-center items-center text-white transition-opacity duration-300
							${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={handleClick}>
				<h3 className="text-xl font-bold">{title}</h3>
				<p className="text-sm text-white/70 mt-1">{description}</p>
			</div>
			<button className={`absolute bottom-4 right-4 text-white text-xl transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleMute}>
				{ isMuted ? <FaVolumeMute /> : <FaVolumeUp /> }
			</button>
		</div>
	);	
}




export default function Work(){
	return(
<section id="work" className="bg-gradient-to-b from-black to-stone-900 py-20 px-8">
		<h2 className="text-center text-white text-6xl font-display tracking-widest text-center mb-2">My Work</h2>
		<div className="w-16 h-0.5 bg-accent mx-auto mt-2 mb-10"></div>

	<div className="grid grid-cols-2 gap-8">
		<div className="col-span-2">
		<VideoCard src="/Dog.mp4" title="Dog Project" description="Dogs doing dog stuff"/>
		</div>
		<VideoCard src="/Car2.mp4" title="Car Project" description="Cars in car place" />
		<VideoCard src="/Sea.mp4" title="Sea Project" description="Fishies in fish place" />
	</div>

</section>
	);
}