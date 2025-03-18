import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={[{flex: 1}]}>
      <View style={[styles.container, styles.bgPrimary, {height: '30%', paddingHorizontal: 10}]}>
        <Image source={require('../../assets/images/tafsir.png')} style={[styles.profile]} />
        <Text style={[styles.title, {marginTop: 10}]}>Tafsir Ndiour</Text>
      </View>
      <View style={[{height: '70%'}, styles.bgSecondary]}>
        <View style={[styles.row, {justifyContent: 'center', paddingVertical: 16}]}>
          <Pressable style={[styles.button, {backgroundColor: 'white'}]}>
            <Text style={[styles.textSecondary, {fontSize: 16}]}>Edit profile</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profile: {
    width: 128,
    height: 128,
    borderColor: '#e3e3e3',
    borderWidth: 1,
    borderRadius: '50%'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
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