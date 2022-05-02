import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../assets/colors";
import fonts from "../../assets/fonts";

const CategoryItem = ({ item }) => {
  return (
    <View
      style={[
        styles.categoriesItemWrapper,
        {
          backgroundColor: item.isSelected ? colors.primary : colors.background,
          marginLeft: item.id === 1 ? 20 : 0,
        },
      ]}
    >
      <Image source={item.image} style={styles.categoriesItemImage} />
      <Text style={styles.categoriesItemTitle}>{item.title}</Text>
      <View
        style={[
          styles.categoriesItemIcon,
          {
            backgroundColor: item.id === 1 ? colors.white : colors.secondary,
          },
        ]}
      >
        <Feather
          name="chevron-right"
          size={12}
          style={[
            styles.iconButton,
            {
              color: item.id === 1 ? colors.black : colors.white,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
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
  iconButton: {
    alignSelf: "center",
    borderRadius: 25,
  },
});
