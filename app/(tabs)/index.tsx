import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Media, useTrending } from "@/hooks/useTrending";
import MediaCard from "@/components/MediaCard";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeTab = createMaterialTopTabNavigator();

export default function Index() {
  return (
    <HomeTab.Navigator>
        <HomeTab.Screen name="Trending" component={TrendingScreen} options={{ title: 'Trending' }} />
        <HomeTab.Screen name="Popular" component={PopularScreen} options={{ title: "What's Popular" }} />
    </HomeTab.Navigator>
  );
}

function TrendingScreen() {
  const [trending, setTrending] = useState<Media[]>([]);
  useEffect(() => {
    useTrending()
      .then(medias => setTrending(medias))
      .catch(error => console.error)
    ;

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={trending}
        renderItem={({item}) => <MediaCard media={item} />}
        keyExtractor={item => 'movie-'+item.id}
      />
    </SafeAreaView>
  );
}

/*
<View style={{flex: 1}}>
  <ParallaxScrollView 
    headerBackgroundColor={{dark: '#1b1b1d', light: '#fff'}}
    headerImage={<Image source={{uri: movies[0]?.image_uri ?? ''}} style={[styles.headerImage]} />}
  >
    <View style={[styles.container]}>
      
    </View>
  </ParallaxScrollView>
</View>
*/

function PopularScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>What's popular</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    columnGap: 8
  },
  container: {
    flex: 1
  },
  headerImage: {
    flex: 1,
  },
  bold: {
    fontWeight: 'bold'
  },
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 16,
  },
  bgPrimary: {
    backgroundColor: '#20232a'
  },
  bgSecondary: {
    backgroundColor: "#1b1b1d"
  },
  textPrimary: {
    color: '#20232a'
  },
  textSecondary: {
    color: "#1b1b1d"
  },
  button: {
    borderRadius: 10,
    width: 'auto',
    paddingHorizontal: 16
  }
});