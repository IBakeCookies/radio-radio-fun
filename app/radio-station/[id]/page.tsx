// 'use client';
// import { useState, useEffect } from 'react';
import type { RadioApp } from '@/business/type/radio/radioApp';
import { getRadioStation } from '@/business/store/radioStore';
import RadioDetail from '@/presentation/component/RadioDetail';
import Page from '@/presentation/component/Page';

// getRadioStations
// export async function generateStaticParams() {
//     const radioStations = await getRadioStations();

//     if (!radioStations) {
//         return [];
//     }

//     return radioStations.map((post) => ({
//         id: post.id.toString(),
//     }));
// }

export default async function RadioStationPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const radioStation = await getRadioStation(id);

    // const params = useParams();

    // const [radioStation, setRadioStation] = useState<RadioApp | null>(null);

    // useEffect(() => {
    //     (async () => {
    //         const radio = await getRadioStation(params.id);

    //         if (!radio) {
    //             return;
    //         }

    //         setRadioStation(radio);
    //     })();
    // }, []);

    return (
        <Page>
            {/* <button onClick={() => window.history.back()}>Back</button> */}
            {radioStation && <RadioDetail radio={radioStation} />}
        </Page>
    );
}
