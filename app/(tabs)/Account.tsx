import Style from "@/components/Style";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Account() {
    return (
        <View style={Style.container}>
            <Text style={Style.text}
            >Account</Text>
            <Link href="/Accountinfo">Account Info </Link>
        </View>
    )
}