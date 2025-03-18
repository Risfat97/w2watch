import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: 'Oops! Not Found'}} />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Link href={'/'}>Go back to Home Screen</Link>
            </View>
        </>
    );
}