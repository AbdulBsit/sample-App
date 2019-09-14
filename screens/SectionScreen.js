import React from "react";
import {
    StyleSheet,
    TouchableOpacity,
    Alert,
    Button,
    Text,
    View,
    ScrollView
} from "react-native";
import SectionCard from "../components/sectionCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { thisExpression } from "@babel/types";

export default class SectionScreen extends React.Component {
    state = {
        sections: [
            {
                title: "Basic",
                completed: 6,
                total: 10
            },
            {
                title: "Intermediate",
                completed: 2,
                total: 10
            },
            {
                title: "Advanced",
                completed: 1,
                total: 10
            }
        ]
    };
    static navigationOptions = ({ navigation }) => ({
        title: "GRE Words Quiz",
        headerTitleStyle: {
            color: "black",
            fontSize: 35
        },

        headerStyle: {
            backgroundColor: "purple"
        },
        headerLeft: (
            <TouchableOpacity onPress={() => console.log("hiii")}>
                <MaterialCommunityIcons
                    style={{ paddingLeft: 10 }}
                    name="home-outline"
                    size={35}
                    color="black"
                />
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "purple" }}>
                {this.state.sections.map(section => {
                    return (
                        <SectionCard
                            key={section.title}
                            title={section.title}
                            total={section.length}
                            completed={section.completed}
                            onPress={() =>
                                this.props.navigation.navigate("level", {
                                    stitle: section.title
                                })
                            }
                        />
                    );
                })}
            </ScrollView>
        );
    }
}
