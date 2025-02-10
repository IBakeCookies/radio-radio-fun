import Link from 'next/link';
import RadioListItem from '@/presentation/component/RadioListItem';
import { getRadioStations } from '@/business/store/radioStore';

export default async function Page() {
    const radioStations = await getRadioStations();

    return (
        <section>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-8">
                {radioStations.map((radio) => (
                    <li key={radio.id}>
                        <Link
                            href={`/radio-station/${radio.id}`}
                            className="bg-gray-100 rounded-md hover:bg-gray-200 transition-colors block h-full"
                        >
                            <RadioListItem radio={radio} />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
