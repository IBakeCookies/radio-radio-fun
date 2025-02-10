import { getRadioStation, getRadioStations } from '@/business/store/radioStore';
import RadioDetail from '@/presentation/component/RadioDetail';
import Page from '@/presentation/component/Page';

export async function generateStaticParams() {
    const radioStations = await getRadioStations();

    if (!radioStations) {
        return [];
    }

    return radioStations.map((post) => ({
        id: post.id,
    }));
}

export default async function RadioStationPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const radioStation = await getRadioStation(id);

    return <Page>{radioStation && <RadioDetail radio={radioStation} />}</Page>;
}
