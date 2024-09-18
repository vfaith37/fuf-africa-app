import React from "react";
import HorizontalScroll from "./horizontalScrollable";
import { useNavigate } from "react-router-dom";


const scrollData = [
	{
		id: 1,
		title: 'Autism Outreach',
        theme: '“Empowering Autistic Voices”',
        text: 'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.',
		image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
	},
	{
		id: 2,
        title: 'Autism Outreach',
        theme: '“Empowering Autistic Voices”',
        text: 'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.',
		image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
	},
	{
		id: 3,
        title: 'Autism Outreach',
        theme: '“Empowering Autistic Voices”',
        text: 'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.',
		image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
	},
	{
		id: 4,
        title: 'Autism Outreach',
        theme: '“Empowering Autistic Voices”',
        text: 'Themed “Empowering Autistic Voices,” this event was held on March 2nd, 2024, at a school for children with special needs in Sagamu, to acknowledge the challenges and celebrate the uniqueness of not only children with autism but other children with disabilities.',
		image: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?t=st=1726655940~exp=1726659540~hmac=9c66cce123abc322d58625aa14d7891391ecd9b197c6ff7e68219ee5bc18bd74&w=1380',
	},
	];

const PWHD: React.FC = () => {
    const navigate = useNavigate();

    const handleLearnMore = (id: number) => {
      navigate(`/readmore/${id}`, { state: { item: scrollData.find(data => data.id === id) } });
    };
	return (
		<section className="py-10 md:py-16">
            <div className="text-black px-5 md:px-10 xl:px-56">
			<div className="flex items-center gap-4">
				<div className="border border-black h-[1px] w-12" />
				<p className="text-sm md:text-base font-bold">PROJECTS WE HAVE DONE</p>
			</div>
			<div className="pt-6 md:pt-8 px-2">
				<h1 className="font-bold text-2xl md:text-3xl mb-4 md:mb-5">
				We are creating a place where children with special needs can thrive
				</h1>
			</div>
            </div>
				<HorizontalScroll>
			{scrollData.map((item) => (
				<div key={item.id} className="flex-none w-96 px-8 py-12 rounded-md bg-cover text-white"
                style={{ backgroundImage: `url(${item.image})` }}>
					<div className=" flex flex-col">
						<h2 className="font-semibold">{item.title}</h2>
                        <p className="">{item.text}</p>
                    <button className="px-9 py-4 bg-white text-black self-end rounded-md"
                    onClick={() => handleLearnMore(item.id)}>Learn more</button>
					</div>
				</div>
			))}
			</HorizontalScroll>
		</section>
	);
};

export default PWHD;
