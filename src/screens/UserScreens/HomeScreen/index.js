import { Dimensions, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import spacing from '../../../config/constants/spacing'
import Ionoicons from "react-native-vector-icons/Ionicons"
import colors from '../../../config/constants/colors'
import { BlurView } from 'expo-blur'
import Header from '../../../components/Header'
import categories from '../../../config/constants/categories'
import Categories from '../../../components/Categories'
import heroImage from "../../../assets/hero.jpg"
import posts from '../../../config/constants/posts'
import Posts from '../../../components/Posts'
import Carousel from 'react-native-snap-carousel';
const { width, height } = Dimensions.get("window")

const HomeScreen = ({navigation}) => {
    const [category, setCategory] = useState(null)
    const carouselRef = useRef()
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <SafeAreaView>
                <ScrollView
                    style={{ padding: spacing }}
                >
                    <Header />
                    <Categories value={category} setValue={(value) => setCategory(value)} />

                    <Carousel
                        ref={carouselRef}
                        data={posts}
                        sliderWidth={width - spacing * 2}
                        itemWidth={width - spacing * 2}
                        renderItem={({ item }) => {
                            return (
                                <View
                                    style={{
                                        width: "100%",
                                        height: height / 2 - spacing * 10,
                                        borderRadius: spacing * 2,
                                        overflow: "hidden",
                                        padding: spacing
                                    }}
                                >
                                    <ImageBackground
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            resizeMode: "cover",
                                            borderRadius: spacing * 2,
                                        }}
                                        imageStyle={{
                                            resizeMode: "cover",
                                            borderRadius: spacing * 2,
                                        }}
                                        source={item.image}
                                    >
                                        <BlurView
                                            tint='dark'
                                            intensity={50}
                                            style={{
                                                bottom: 0,
                                                position: "absolute",
                                                width: "100%",
                                                height: height / 2 - spacing * 28,
                                                borderRadius: spacing * 2,
                                                borderTopStartRadius: 0,
                                                borderTopEndRadius: 0,
                                                padding: spacing
                                            }}>
                                            <View style={{
                                                width: spacing * 3,
                                                height: spacing * 3,
                                                backgroundColor: colors.white,
                                                borderRadius: spacing * 20,
                                                padding: spacing * 0.5,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "absolute",
                                                right: 0,
                                                marginHorizontal: spacing * 2,
                                                marginTop:spacing-25
                                            }}>
                                                <Ionoicons
                                                    name="heart"
                                                    color={"red"}
                                                    size={spacing * 1.5}
                                                />
                                            </View>
                                            <Text
                                                style={{
                                                    color: colors.white,
                                                    fontFamily: "BridgeText-Medium",
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                            <View style={{ alignItems: "center", flexDirection: "row" }}>
                                                {new Array(5).fill(0).map((item, index) =>
                                                    <Ionoicons
                                                        style={{
                                                            marginRight: spacing * 0.2
                                                        }}
                                                        key={index}
                                                        name="star"
                                                        color={colors.gold}
                                                        size={spacing * 1.2}
                                                    />
                                                )}
                                                <Text
                                                    style={{
                                                        color: colors.white,
                                                        fontSize: spacing * 1.2,
                                                        fontWeight: "600"
                                                    }}
                                                >
                                                    {item.rating}
                                                </Text>
                                            </View>
                                        </BlurView>
                                    </ImageBackground>
                                </View>
                            )
                        }}
                    />


                    <Posts navigation={navigation} />


                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({})