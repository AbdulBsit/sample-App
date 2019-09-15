import React from "react";
import * as Progress from "react-native-progress";
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const LevelCard = props => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.card}>
            <View style={styles.cardTop}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                    {props.title}
                </Text>
                <Text style={{ fontSize: 17, color: "grey", paddingBottom: 9 }}>
                    {props.completed} of {props.total} words mastered
                </Text>
                <Progress.Bar
                    showsText={true}
                    progress={props.completed / props.total}
                    height={20}
                    width={Dimensions.get("window").width - 45}
                    fill="blue"
                />
            </View>
            <View style={styles.cardFooter}>
                <Text style={{ fontSize: 20, color: "black", padding: 5 }}>
                    {" "}
                    Start this Level{" "}
                </Text>
                <AntDesign
                    style={{ paddingTop: 8 }}
                    name="arrowright"
                    size={25}
                    color="black"
                />
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        backgroundColor: "white",
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        margin: 10
    },
    cardTop: {
        padding: 9
    },
    cardFooter: {
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "lightgrey"
    }
});

export default LevelCard;
