import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";

export default function Index() {
  // Static data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "How to Stay Productive While Working from Home",
      date: "November 1, 2024",
      description: "Working from home can be challenging. Here are some tips to stay productive...",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Top 10 Travel Destinations for 2024",
      date: "October 29, 2024",
      description: "Looking for your next travel destination? Check out these top spots...",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "The Ultimate Guide to Healthy Eating",
      date: "October 15, 2024",
      description: "Healthy eating is key to a balanced lifestyle. Learn the basics here...",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>News Blog</Text>
      {blogPosts.map((post) => (
        <View key={post.id} style={styles.card}>
          <Image source={{ uri: post.image }} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.date}>{post.date}</Text>
            <Text style={styles.description} numberOfLines={3}>{post.description}</Text>
            <TouchableOpacity style={styles.readMoreButton} onPress={() => alert("Read more about: " + post.title)}>
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  pageTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 16,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
    lineHeight: 22,
  },
  readMoreButton: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  readMoreText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "600",
  },
});
