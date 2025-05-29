import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement } from 'react'

interface MyProps {
    name: string,
    email: string,
    age: number
}



export default function FunctionalComp({ name, email, age }: MyProps) { // using destructing FunctionalComp(props: MyProps)
    return (
        <View>
            <Text>======FunctionalComp======</Text>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <Text>{age}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})