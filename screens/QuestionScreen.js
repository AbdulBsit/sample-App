import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet, Button, Text, View } from "react-native";
import QuestionCard from "../components/questionCard";

export default class QuestionScreen extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            score: 0,

            questions: [
                {
                    question: "Intelligence",
                    optionA: "excellence",
                    optionB: "i m correct",
                    optionC: "iosn=-native",
                    optionD: "react-native",
                    correct: "i m correct",
                    desc:
                        "React-native is cross platofrm library used to develop android-ios app, happy coding",
                    status: "new"
                },
                {
                    question: "henriu",
                    optionA: "i m correct",
                    optionB: "retire",
                    optionC: "iosn=-native",
                    optionD: "react-native",
                    correct: "i m correct",
                    desc:
                        "React-native is cross platofrm library used to develop android-ios app, happy coding",
                    status: "new"
                },
                {
                    question: "Interce",
                    optionA: "doing work simplest",
                    optionB: "retire",
                    optionC: "i m correct",
                    optionD: "react-native",
                    correct: "i m correct",
                    desc:
                        "React-native is cross platofrm library used to develop android-ios app, happy coding",
                    status: "new"
                }
            ],
            questionIndex: 0
        };
    }
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.getParam("title")}`,
        headerTitleStyle: {
            color: "black",
            fontSize: 30
        },

        headerStyle: {
            backgroundColor: "purple"
        }
    });

    changeStatus = status => {
        const copy = this.state.questions[this.state.questionIndex];
        const obj = Object.assign(copy, { status: status });

        this.setState({
            questions: this.state.questions.map(question => {
                if (
                    question.question === obj.question &&
                    question.optionA === obj.optionA &&
                    question.optionB === obj.optionB &&
                    question.optionC === obj.optionC &&
                    question.optionD === obj.optionD &&
                    question.correct === obj.correct &&
                    question.desc === obj.desc
                ) {
                    return obj;
                } else {
                    return question;
                }
            })
        });
    };

    nextQuestion = () => {
        if (this.state.questionIndex !== this.state.questions.length - 1) {
            this.setState({ questionIndex: this.state.questionIndex + 1 });
        } else this.setState({ questionIndex: 0 });
    };

    render() {
        console.log(this.state.questions);
        return (
            <View
                style={{
                    justifyContent: "center",
                    flex: 1,
                    backgroundColor: "purple"
                }}
            >
                <QuestionCard
                    totalQ={this.state.questions.length}
                    score={this.state.score}
                    scoreInc={() =>
                        this.setState({ score: this.state.score + 1 })
                    }
                    status={
                        this.state.questions[this.state.questionIndex].status
                    }
                    changeStatus={this.changeStatus}
                    onPress={this.nextQuestion}
                    question={
                        this.state.questions[this.state.questionIndex].question
                    }
                    options={[
                        this.state.questions[this.state.questionIndex].optionA,
                        this.state.questions[this.state.questionIndex].optionB,
                        this.state.questions[this.state.questionIndex].optionC,
                        this.state.questions[this.state.questionIndex].optionD
                    ]}
                    answer={
                        this.state.questions[this.state.questionIndex].correct
                    }
                    desc={this.state.questions[this.state.questionIndex].desc}
                />
            </View>
        );
    }
}
