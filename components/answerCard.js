import React from "react";
import { View, Dimensions, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { Feather } from "@expo/vector-icons";
const AnswerCard = props => {
    return (
        <View style={{ flexDirection: "column", paddingBottom: 7 }}>
            <View style={{ flexDirection: "row" }}>
                <Feather
                    style={{ padding: 12 }}
                    name="check-circle"
                    size={29}
                    color="green"
                />
                <Text style={{ fontSize: 28, padding: 7 }}>{props.answer}</Text>
            </View>
            <Text
                style={{
                    fontSize: 24,
                    padding: 7,
                    fontStyle: "italic",
                    borderBottomWidth: 0.5
                }}
            >
                {props.desc}
            </Text>
            <Text style={{ fontSize: 24, padding: 7 }}>
                Master {props.total - props.progress} words to unlock basic
                level 2
            </Text>
            <Progress.Bar
                showsText={true}
                progress={props.progress / props.total}
                height={20}
                width={Dimensions.get("window").width - 45}
                fill="blue"
            />
        </View>
    );
};
export default AnswerCard;
