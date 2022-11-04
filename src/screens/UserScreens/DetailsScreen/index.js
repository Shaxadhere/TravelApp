import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import posts from '../../../config/constants/posts'
import spacing from '../../../config/constants/spacing'
import colors from '../../../config/constants/colors'
import Ionicons from "react-native-vector-icons/Ionicons"
import { BlurView } from 'expo-blur'

const { height } = Dimensions.get("window")

const DetailsScreen = ({ route, navigation }) => {

    const { post } = route.params;
    // const post = posts[2]

    return (
        <View>
            <SafeAreaView>
                <View style={{ height: height / 2 - spacing * 2 }}>
                    <ImageBackground
                        source={post.image}
                        style={{ height: height / 2 - spacing * 2 }}
                        imageStyle={{
                            height: "100%",
                            width: "100%",
                        }}>
                        <View style={{ padding: spacing }}>
                            <BlurView tint='dark' style={{
                                width: spacing * 4,
                                height: spacing * 4,
                                alignItems: "center",
                                justifyContent: 'center',
                                borderRadius: spacing
                            }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                    <Ionicons name="arrow-back" color={colors.white} size={spacing * 2} />
                                </TouchableOpacity>
                            </BlurView>
                        </View>
                    </ImageBackground>

                    <View style={{
                        padding: spacing * 2,
                        marginTop: -40,
                        backgroundColor: colors.white,
                        borderTopStartRadius: spacing * 2,
                        borderTopEndRadius: spacing * 2,
                        height: height - spacing * 2
                    }}>
                        <Text style={{
                            fontFamily: "BridgeText-Bold",
                            fontSize: spacing * 2,
                            color: colors.dark,
                            fontWeight: "600"
                        }}
                        >
                            {post.title}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}
                        >
                            <Ionicons name="location-outline" size={spacing * 1.3} style={{ marginRight: spacing * 0.5 }} />
                            <Text
                                style={{
                                    color: colors.dark,
                                    fontSize: spacing,
                                    fontWeight: "700"
                                }}
                            >
                                Honshu, Japan
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: spacing }}>
                            {new Array(5).fill(0).map((item, index) =>
                                <Ionicons key={index} name="star" color={colors.gold} size={spacing * 1.4} style={{ marginRight: spacing * 0.2 }} />
                            )}
                            <Text
                                style={{
                                    color: colors.dark,
                                    fontSize: spacing * 1.2,
                                    fontWeight: "600"
                                }}
                            >{post.rating}</Text>
                        </View>

                        <View style={{ marginTop: spacing }}>
                            <Text style={{
                                fontFamily: "BridgeText-Bold",
                                fontSize: spacing * 1.7,
                                color: colors.dark,
                                fontWeight: "600"
                            }}
                            >
                                Description
                            </Text>
                            <Text style={{ fontSize: spacing * 1.3, color: colors.dark, marginTop: spacing }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: spacing * 3,
                                padding: spacing,
                                justifyContent: "space-between"
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <Text style={{ color: colors.primary, fontSize: spacing * 2.5, fontWeight: "600" }}>$400</Text>
                                <Text style={{ color: colors.primary, fontSize: spacing * 1.2, fontWeight: "600" }}>/Package</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={{
                                        padding: spacing * 1.2,
                                        backgroundColor: colors.primary,
                                        borderRadius: spacing * 2,
                                        minWidth: spacing * 12,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={{ color: colors.white, fontFamily: "BridgeText-Medium", }}>
                                        Book Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        </View >
    )
}

export default DetailsScreen

const styles = StyleSheet.create({})