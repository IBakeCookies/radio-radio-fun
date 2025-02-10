import type { RadioListApp } from '@/business/type/radio/radioListApp';
import Image from 'next/image';

export default function RadioListItem({
    radio,
    className,
}: {
    radio: RadioListApp;
    className?: string;
}) {
    return (
        <div className={`p-4 flex justify-between ${className || ''}`}>
            {/* <Image
                    width="15"
                    height="15"
                    src={`https://${radio.logo}`}
                    alt={radio.name}
                    className="max-h-[4rem]"
                /> */}

            <div>
                <h3>
                    <strong>{radio.name}</strong>
                </h3>

                {(radio.genre.length && (
                    <h3>
                        {radio.genre.map((genre, i) => (
                            <span className="font-medium" key={genre}>
                                {i !== 0 ? ', ' : ''}
                                {genre}
                            </span>
                        ))}
                    </h3>
                )) ||
                    null}
            </div>

            <div className="relative w-12 h-12 ml-4 ">
                <Image src={radio.logo} alt={radio.name} fill={true} className="object-contain" />
            </div>
        </div>
    );
}
