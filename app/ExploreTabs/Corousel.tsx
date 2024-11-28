import { View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Corousel() {
    return (
        <Carousel<{ url: string }>
            width={400}
            height={200}
            autoPlay={true}
            
            data={[
                { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-F4pdgj8EL8ZmPPSkrvj5bPPXJov5DxAplA&s' },
                { url: 'https://img.heartlight.org/overlazy/creations/2172.jpg' },
                { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkDHky6h-iu-WBbrWeVWJQE8t-rtwFVvHvObnUJ_bYHe97iwN6-YSgNF4pPw-2nU5IeA&usqp=CAU' },
                { url: 'https://dailyverses.net/images/en/niv/xl/james-1-6-2.jpg' },
                { url: 'https://dailyverses.net/images/en/kjv/amos-5-24-2.jpg' },
            ]}
            renderItem={({ item }) => {
                return <Image source={{ uri: item.url }} style={{ width: 400, height: 200 }} /> ;
            }}
        />

    )
}