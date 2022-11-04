import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../config/constants/colors'
import categories from '../../config/constants/categories'
import spacing from '../../config/constants/spacing'

const Categories = ({ value, setValue }) => {
    return (
        <View style={{ padding: spacing, marginVertical: spacing }}>
            <FlatList
                data={categories}
                horizontal={true}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setValue(item)}
                            style={{
                                marginRight: spacing * 1.5, alignItems: "center"
                            }}>
                            <Text style={[
                                { color: colors.dark, fontWeight: "600" },
                                value === item && { color: colors.primary }
                            ]}>{item}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})