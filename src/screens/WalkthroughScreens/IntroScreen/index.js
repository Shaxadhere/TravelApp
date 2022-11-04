import { Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import spacing from '../../../config/constants/spacing'
import colors from '../../../config/constants/colors'
import Ionicons from "react-native-vector-icons/Ionicons"

const heroImage = require("../../../assets/hero.jpg")
const { height, width } = Dimensions.get("window")

const IntroScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <SafeAreaView>
                <ScrollView>
                    <ImageBackground
                        source={heroImage}
                        style={{ height: height / 2 + spacing * 4 }}
                        imageStyle={{
                            borderBottomLeftRadius: spacing * 3,
                            borderBottomRightRadius: spacing * 3
                        }}
                    />

                    <View style={{ padding: spacing * 2 }}>
                        <Text
                            style={{
                                fontSize: spacing * 3.5,
                                fontFamily: "BridgeText-Bold",
                                color: colors.dark,
                                maxWidth: spacing * 25
                            }}
                            numberOfLines={2}
                        >
                            Winter Vacation Trips
                        </Text>

                        <Text
                            style={{
                                fontSize: spacing * 1.3,
                                color: colors.secondary,
                                fontWeight: "500",
                                marginTop: spacing * 2
                            }}
                        >
                            Enjoy your winter vacations with warmth and amazing sightseeing on the mountains. Enjoy the best experience with us.
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Home")}
                            style={{
                                flexDirection: "row",
                                backgroundColor: colors.primary,
                                borderRadius: spacing * 2,
                                padding: spacing * 1.4,
                                paddingLeft: spacing * 2,
                                marginTop: spacing * 2,
                                maxWidth: width / 2 - spacing * 3,
                            }}>
                            <Text style={{
                                color: colors.white,
                                fontSize: spacing * 1.5,
                                fontFamily: "BridgeText-Medium",
                            }}>
                                Let's Go
                            </Text>
                            <Ionicons
                                style={{ marginLeft: spacing }}
                                name='arrow-forward'
                                size={spacing * 2}
                                color={colors.white}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({})