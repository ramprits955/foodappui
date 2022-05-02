import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Image,
  StatusBar as NativeStatusBar,
  FlatList,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import categories from "../assets/data/categories";
import popular from "../assets/data/popular";
import colors from "../assets/colors";
import fonts from "../assets/fonts";
import CategoryItem from "../components/home/CategoryItem";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        <StatusBar style="auto" />
        <SafeAreaView
          style={{
            marginTop:
              Platform.OS === "android" ? NativeStatusBar.currentHeight : null,
          }}
        >
          <View style={styles.headerWrapper}>
            <Image
              source={require("../assets/images/profile.png")}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.darkText} />
          </View>
        </SafeAreaView>
        {/* Title */}

        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSub}>Food</Text>
          <Text style={styles.titlesTitle}>Delevery</Text>
        </View>

        {/* Search */}

        <View style={styles.searchWrapper}>
          <Feather name="search" size={24} color={colors.darkText} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryText}>Categories</Text>
        </View>
        <View style={[styles.categoryListWrapper]}>
          <FlatList
            data={categories}
            renderItem={CategoryItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularText}>Popular</Text>
          {popular.map((item) => (
            <View style={styles.popularListWrapper} key={item.id}>
              <View style={styles.popularLeftSection}>
                <View style={styles.popularListHeader}>
                  <MaterialCommunityIcons
                    name="crown"
                    size={20}
                    color={colors.primary}
                  />
                  <Text style={styles.popularHeaderText}>Top of the week</Text>
                </View>
                <View>
                  <Text style={styles.popularTitle}>{item.title}</Text>
                  <Text style={styles.popularSubTitle}>{item.weight}</Text>
                </View>
                <View style={styles.popularCardButton}>
                  <View style={styles.popularButton}>
                    <Feather
                      name="plus"
                      size={14}
                      color={colors.darkText}
                      style={styles.plusIcon}
                    />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <EvilIcons name="star" size={20} color={colors.secondary} />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularRightSection}>
                <Image source={item.image} style={styles.popularCardImage} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSub: {
    fontFamily: fonts.Montserrat_400Regular,
    fontSize: 16,
    color: colors.darkText,
  },
  titlesTitle: {
    marginTop: 5,
    fontFamily: fonts.Montserrat_700Bold,
    fontSize: 32,
    color: colors.darkText,
  },
  searchWrapper: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  search: {
    marginLeft: 10,
    flex: 1,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: fonts.Montserrat_400Regular,
    fontSize: 17,
    marginBottom: 4.97,
    opacity: 5.5,
  },
  categoryWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  categoryText: {
    fontFamily: fonts.Montserrat_600SemiBold,
    fontSize: 16,
  },
  categoryListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoriesItemWrapper: {
    marginRight: 20,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  categoriesItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    marginHorizontal: 20,
    alignSelf: "center",
  },
  categoriesItemTitle: {
    textAlign: "center",
    marginTop: 10,
    fontFamily: fonts.Montserrat_600SemiBold,
    fontSize: 14,
  },
  categoriesItemIcon: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    height: 20,
    width: 20,
    backgroundColor: colors.background,
    borderRadius: 100,
  },

  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularText: {
    fontFamily: fonts.Montserrat_700Bold,
    fontSize: 16,
  },

  popularListWrapper: {
    flexDirection: "row",
    marginTop: 24,
    borderWidth: 0.5,
    borderColor: colors.lightText,
    borderRadius: 20,
    overflow: "hidden",
  },
  popularLeftSection: { marginLeft: 20 },
  popularRightSection: {},
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
    marginTop: 18,
  },
  popularListHeader: {
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 20,
  },
  popularHeaderText: {
    marginLeft: 10,
    fontFamily: fonts.Montserrat_600SemiBold,
    fontSize: 14,
  },
  popularTitle: {
    fontFamily: fonts.Montserrat_600SemiBold,
    fontSize: 14,
  },

  popularSubTitle: {
    fontFamily: fonts.Montserrat_500Medium,
    fontSize: 12,
    marginTop: 5,
    opacity: 0.5,
  },
  ratingText: {
    fontFamily: fonts.Montserrat_600SemiBold,
    fontSize: 14,
    marginLeft: 5,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  popularCardButton: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: -20,
  },
  popularButton: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 18,
  },
});
