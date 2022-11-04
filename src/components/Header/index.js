import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Ionoicons from "react-native-vector-icons/Ionicons"
import { BlurView } from 'expo-blur'
import colors from '../../config/constants/colors'
import spacing from '../../config/constants/spacing'
const avatar = require("../../assets/hero.jpg")

const Header = () => {
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <TouchableOpacity
                style={{
                    borderRadius: spacing,
                    height: spacing * 4,
                    overflow: "hidden"
                }}
            >
                <BlurView
                    style={{
                        height: "100%",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Ionoicons name="menu" color={colors.dark} size={spacing * 2.5} />
                </BlurView>
            </TouchableOpacity>

            <View>
                <Text
                    style={{
                        fontFamily: "BridgeText-Bold",
                        fontSize: spacing * 2.5,
                        color: colors.dark
                    }}
                >
                    Discover
                </Text>
            </View>
            <View
                style={{
                    width: spacing * 4,
                    height: spacing * 4,
                    borderRadius: spacing * 4,
                    overflow: "hidden"
                }}
            >
                <BlurView
                    style={{ height: "100%", borderRadius: spacing * 4 }}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        source={avatar}
                    />
                </BlurView>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})