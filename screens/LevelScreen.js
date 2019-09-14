import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Button, Text, View, ScrollView } from "react-native";
import LevelCard from "../components/levelCard";

export default class LevelScreen extends React.Component {
    state = {
        levels: [
            {
                title: "Level 1",
                totalQ: 10,
                completedQ: 2
            },
            {
                title: "Level 2",
                totalQ: 10,
                completedQ: 4
            },
            {
                title: "Level 3",
                totalQ: 10,
                completedQ: 0
            }
        ]
    };

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam("stitle")} Words`,
        headerTitleStyle: {
            color: "black",
            fontSize: 30
        },

        headerStyle: {
            backgroundColor: "purple"
        }
    });
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: "purple" }}>
                {this.state.levels.map(level => {
                    return (
                        <LevelCard
                            key={level.title}
                            title={
                                this.props.navigation.getParam("stitle") +
                                " " +
                                level.title
                            }
                            total={level.totalQ}
                            completed={level.completedQ}
                            onPress={() =>
                                this.props.navigation.navigate("question", {
                                    title:
                                        this.props.navigation.getParam(
                                            "stitle"
                                        ) +
                                        " " +
                                        level.title
                                })
                            }
                        />
                    );
                })}
            </ScrollView>
        );
    }
}
