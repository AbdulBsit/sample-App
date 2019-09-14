import React from "react";
import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer
} from "react-navigation";
// import {createStackNavigator} from 'react-navigation-stack'
import { StyleSheet, Button, Text, View } from "react-native";
import SectionCard from "./components/sectionCard";
import LevelCard from "./components/levelCard";
import QuestionCard from "./components/questionCard";
import SectionScreen from "./screens/SectionScreen";
import LevelScreen from "./screens/LevelScreen";
import QuestionScreen from "./screens/QuestionScreen";
import Constants from "expo-constants";

const AppNavigator = createStackNavigator(
    {
        section: SectionScreen,
        level: LevelScreen,
        question: QuestionScreen
    },
    {
        initialRouteName: "section"
    },
    {
        navigationOptions: {
            HeaderTitle: "GRE Words Quiz",
            headerTitleStyle: { color: "black" }
        }
    }
);

const MainNavigator = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MainNavigator />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        justifyContent: "center",
        flex: 1,
        backgroundColor: "purple"
    }
});
