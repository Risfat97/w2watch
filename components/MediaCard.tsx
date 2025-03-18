import { MediaType } from "@/constants/Media";
import { Media } from "@/hooks/useTrending";
import { View, StyleSheet, Image, Text } from "react-native";

export default function MediaCard({media}: Readonly<{
    media: Media
}>) {
    return (
        <View style={[styles.row]}>
            <View style={[styles.col]}>
                <Image source={{uri: `https://image.tmdb.org/t/p/w500/${media.poster_path}`}} style={[styles.image]} />
            </View>
            <View style={[styles.col]}>
                <View style={{flex: 1, padding: 5, paddingVertical: 8}}>
                    <Text style={[styles.title, {marginBottom: 16}]}>{media.media_type === MediaType.movie ? media.title : media.name}</Text>
                    <Text style={[styles.subtitle, {marginBottom: 16}]}>{media.media_type}</Text>
                    <Text style={[styles.paragraph]}>{media.overview}</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8
    },
    col: {
        width: '50%',
    },
    image: {
        flex: 1,
        height: 300
    },
    title: {
        fontSize: 16,
        fontWeight: 600,
        color: '#20232a'
    },
    subtitle: {
        fontSize: 14,
        fontWeight: 500,
        color: '#20232a'
    },
    paragraph: {
        fontSize: 13,
        color: '#20232a',
    }
});