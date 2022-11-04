import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import spacing from '../../config/constants/spacing'
import colors from '../../config/constants/colors'
import posts from '../../config/constants/posts'
import { BlurView } from 'expo-blur'
import Ionoicons from "react-native-vector-icons/Ionicons"

const { width, height } = Dimensions.get("window")

const Posts = ({ navigation }) => {
    return (
        <>
            <View style={{ flexDirection: "row", justifyContent: "space-between", padding: spacing }}>
                <Text
                    style={{
                        fontFamily: "BridgeText-Bold",
                        fontSize: spacing * 1.7,
                        color: colors.dark,
                        fontWeight: "600"
                    }}
                >
                    Recommended
                </Text>
                <TouchableOpacity>
                    <Text
                        style={{
                            fontFamily: "BridgeText-Bold",
                            fontSize: spacing * 1.4,
                            color: colors.dark,
                            fontWeight: "600"
                        }}
                    >
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                padding: spacing
            }}>
                {posts.map((item, index) =>
                    <ImageBackground
                        key={index}
                        source={item.image}
                        style={{
                            width: width / 2 - spacing * 3,
                            height: spacing * 16,
                            borderRadius: spacing * 2,
                            marginVertical: spacing
                        }}
                        imageStyle={{
                            resizeMode: "cover",
                            overflow: 'hidden',
                            borderRadius: spacing * 2
                        }}
                    >
                        <TouchableOpacity onPress={() => navigation.navigate("Details", { post: item })}>
                            <BlurView
                                tint='dark'
                                intensity={50}
                                style={{
                                    borderTopStartRadius: 0,
                                    borderTopEndRadius: 0,
                                    borderRadius: spacing * 2,
                                    marginTop: spacing * 10,
                                    padding: spacing,
                                    height: spacing * 6
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "BridgeText-Medium",
                                        color: colors.white,
                                        fontSize: spacing * 1.2
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <View style={{ marginTop: spacing * 0.5, flexDirection: "row", alignItems: "center" }}>
                                    {new Array(5).fill(0).map((item, index) =>
                                        <Ionoicons
                                            style={{
                                                marginRight: spacing * 0.2
                                            }}
                                            key={index}
                                            name='star'
                                            size={spacing}
                                            color={colors.gold}
                                        />
                                    )}
                                    <Text
                                        style={{
                                            color: colors.white,
                                            fontWeight: "600",
                                            fontSize: spacing * 1.2
                                        }}
                                    >
                                        {item.rating}
                                    </Text>
                                </View>
                            </BlurView>
                        </TouchableOpacity>
                    </ImageBackground>
                )}
            </View>
        </>
    )
}

export default Posts

const styles = StyleSheet.create({})