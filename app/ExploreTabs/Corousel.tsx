import { View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export default function Corousel() {
    return (
        <Carousel<{ url: string }>
            width={400}
            height={720}
            autoPlay={true}
            
            data={[
                { url: 'https://pbs.twimg.com/media/GYkf3lyasAMj0ED.jpg:large' },
                { url: 'https://i.ytimg.com/vi/LhLu3Akkl_s/maxresdefault.jpg' },
                { url: 'https://i.ytimg.com/vi/8VZ2_kBu1Zg/maxresdefault.jpg' },
                { url: 'https://www.lavanguardia.com/andro4all/hero/2024/09/panels-mkhbd-1.jpg?width=768&aspect_ratio=16:9&format=nowebp' },
                { url: 'https://uploads.dailydot.com/2024/09/marques-brownlee-iphone-designs.jpg?q=65&auto=format&w=1600&ar=2:1&fit=crop' },
            ]}
            renderItem={({ item }) => {
                return <Image  
                source={{ uri: item.url }} 
                style={{ width: 400, height: 200, resizeMode: 'cover' }} 
            
                /> ;
            }}
        />

    )
}