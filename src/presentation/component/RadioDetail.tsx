import type { RadioApp } from '@/business/type/radio/radioApp';
import Image from 'next/image';

export default function RadioDetail({ radio }: { radio: RadioApp }) {
    return (
        <div>
            <div className="flex items-center">
                <div className="relative w-[4rem] h-[4rem]">
                    <Image
                        src={radio.logo}
                        alt={radio.name}
                        fill={true}
                        className="object-contain"
                    />
                </div>

                <h1 className="text-3xl ml-4">{radio.name}</h1>
            </div>

            <p className="mt-6">{radio.description}</p>

            {(radio.genre.length && (
                <div className="flex items-start mt-4">
                    <b className="block ">Genre:</b>

                    <ul className="ml-4">
                        {radio.genre.map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
            )) ||
                null}

            <b className="block mt-4">Streaming:</b>

            <ul>
                {/* would love to add streaming, but I dont have time anymore */}
                {radio.streamingUrls.map((url) => (
                    <li key={url} className="flex items-center mt-4">
                        {url}
                    </li>
                ))}
            </ul>
        </div>
    );
}
