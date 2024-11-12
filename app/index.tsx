import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Index() {
  const [dataPost, setDataPost] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.5:8000/api/posts');
      const data = await response.json();
      setDataPost(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {dataPost ? (
          dataPost.map((post, key) => (
            <View key={key} style={styles.card}>
              <Text style={styles.title}>{post.title}</Text>
              <Text style={styles.slug}>{post.slug}</Text>
              <Text style={styles.description}>{post.description}</Text>
              <Text style={styles.body}>{post.body}</Text>
              <Text style={styles.image}>{post.image}</Text>
              <Text style={styles.status}>{post.status}</Text>
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <ActivityIndicator size="large" color="#007bff" />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 16,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#eaeaea",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  slug: {
    fontSize: 14,
    color: "#777",
    marginBottom: 8,
    fontStyle: "italic",
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    lineHeight: 24,
  },
  body: {
    fontSize: 15,
    color: "#444",
    marginBottom: 8,
    lineHeight: 22,
  },
  image: {
    fontSize: 12,
    color: "#999",
    marginBottom: 8,
  },
  status: {
    fontSize: 14,
    color: "#28a745",
    fontWeight: "bold",
    marginBottom: 12,
  },
  readMoreButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginTop: 10,
  },
  readMoreText: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "600",
  },
});
