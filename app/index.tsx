import { useState } from "react";
import { Text, Button, ScrollView, Modal, Alert, Pressable, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import SearchBar from "./components/SearchBar";

const Index = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => {
    setModalVisible(false);
    Alert.alert("Modal has been closed.");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.coloredBg}>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/Paul.jpg")}
            style={styles.logo}
          />
          <Text style={styles.title}>Explore Samal Island Tours!</Text>
          <SearchBar />
          <View style={styles.buttonContainer}>
            <Button
              title="Orders"
              color="#00bfae"
              onPress={() => router.push("./orders")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Show Modal"
              color="#d500f9"
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <Pressable style={styles.modalOverlay} onPress={handleCloseModal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>🌴 Welcome!</Text>
            <Text style={styles.modalText}>Tap anywhere to close.</Text>
          </View>
        </Pressable>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fce4ec", // light pink
    padding: 24,
  },
  coloredBg: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 30,
    padding: 6,
    backgroundColor: "#00bfae", // teal
    borderWidth: 3,
    borderColor: "#d500f9", // purple
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 36,
    alignItems: "center",
    shadowColor: "#d500f9",
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 10,
    width: "100%",
    maxWidth: 400,
  },
  logo: {
    width: 110,
    height: 110,
    marginBottom: 18,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: "#d500f9",
    backgroundColor: "#e1f5fe",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 18,
    color: "#d500f9",
    textAlign: "center",
    textShadowColor: "#00bfae",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(213,0,249,0.18)", // purple overlay
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#f3e5f5", // light purple
    padding: 32,
    borderRadius: 22,
    alignItems: "center",
    minWidth: 260,
    borderWidth: 3,
    borderColor: "#00bfae",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#00bfae",
  },
  modalText: {
    fontSize: 17,
    color: "#d500f9",
  },
});

export default Index;