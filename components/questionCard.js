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
import AnswerCard from "./answerCard";

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status,
            showAnswer: false
        };
    }

    checkAnswer = option => {
        // console.log(option,this.props.answer)
        if (option === this.props.answer) {
            if (this.state.status === "LearningG") {
                this.changeStatus("Learned");
            } else if (this.state.status === "LearningR") {
                this.changeStatus("Learned");
            } else if (this.state.status === "Reviewing") {
                this.props.scoreInc();
                this.changeStatus("Mastered");
            } else {
                this.props.scoreInc();
                this.changeStatus("Mastered");
            }
        } else if (option === "I'm not sure") {
            this.changeStatus("Not sure");
        } else {
            this.changeStatus("Incorrect");
        }

        this.setState({ showAnswer: true });
    };
    changeStatus = status => {
        this.setState({ status: status }, () =>
            this.props.changeStatus(status)
        );
    };

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.status);
        this.setState({ status: nextProps.status });
    }
    render() {
        return (
            <View style={styles.card}>
                <View
                    style={{
                        borderTopEndRadius:10,
                        borderTopStartRadius:10,
                        alignItems: "center",
                        padding: 5,
                        backgroundColor: `${
                            this.state.status === "Mastered"
                                ? "#8ee891"
                                : this.state.status === "Incorrect"
                                ? "#e34d5a"
                                : this.state.status === "Reviewing"
                                ? "#e7f56c"
                                : this.state.status === "LearningR"
                                ? "#e34d5a"
                                : this.state.status === "LearningG"
                                ? "#eaebe4"
                                : this.state.status === "Learned"
                                ? "#e7f56c"
                                : this.state.status === "Not sure"
                                ? "#eaebe4"
                                : "#eaebe4"
                        }`
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: `${
                                this.state.status === "Mastered"
                                    ? "green"
                                    : this.state.status === "Incorrect"
                                    ? "#9e0902"
                                    : this.state.status === "Reviewing"
                                    ? "#ffa600"
                                    : this.state.status === "LearningR"
                                    ? "#9e0902"
                                    : this.state.status === "LearningG"
                                    ? "#75756b"
                                    : this.state.status === "Learned"
                                    ? "#ffa600"
                                    : this.state.status === "Not sure"
                                    ? "#75756b"
                                    : "#75756b"
                            }`
                        }}
                    >
                        {this.state.status === "new"
                            ? "New Word"
                            : this.state.status === "Incorrect"
                            ? this.state.status
                            : this.state.status === "Mastered"
                            ? this.state.status
                            : this.state.status === "Reviewing"
                            ? this.state.status
                            : this.state.status === "LearningR" ||
                              this.state.status === "LearningG"
                            ? "Learning"
                            : this.state.status === "Learned"
                            ? this.state.status
                            : this.state.status === "Not sure"
                            ? this.state.status
                            : "New Word"}
                    </Text>
                    <Text
                        style={{
                            fontSize: 17,
                            color: `${
                                this.state.status === "Mastered"
                                    ? "green"
                                    : this.state.status === "Incorrect"
                                    ? "#9e0902"
                                    : this.state.status === "Reviewing"
                                    ? "#ffa600"
                                    : this.state.status === "LearningR"
                                    ? "#9e0902"
                                    : this.state.status === "LearningG"
                                    ? "#75756b"
                                    : this.state.status === "Learned"
                                    ? "#ffa600"
                                    : this.state.status === "Not sure"
                                    ? "#75756b"
                                    : "#75756b"
                            }`
                        }}
                    >
                        {this.state.status === "new"
                            ? "Choose the best definition"
                            : this.state.status === "Incorrect"
                            ? "You'll see this word again"
                            : this.state.status === "Mastered"
                            ? "You won't see this word for a while"
                            : this.state.status === "Reviewing"
                            ? "Get this word correct one more time"
                            : this.state.status === "LearningR"
                            ? "You got this word wrong last time"
                            : this.state.status === "LearningG"
                            ? "You didn't know this definition last time"
                            : this.state.status === "Learned"
                            ? "you'll see this word one more time"
                            : this.state.status === "Not sure"
                            ? "Try to remeber the definition below"
                            : "Choose the best definition"}
                    </Text>
                </View>
                <View style={styles.main}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: "bold",
                            padding: 7,
                            borderBottomWidth: 0.5
                        }}
                    >
                        {this.props.question}
                    </Text>
                    {this.state.showAnswer ? (
                        <AnswerCard
                            total={this.props.totalQ}
                            answer={this.props.answer}
                            progress={this.props.score}
                            desc={this.props.desc}
                        />
                    ) : (
                        <View>
                            {this.props.options.map(option => {
                                return (
                                    <TouchableOpacity
                                        key={option}
                                        onPress={() => {
                                            this.checkAnswer(option);
                                        }}
                                    >
                                        <Text style={styles.option}>
                                            {option}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                            <TouchableOpacity
                                onPress={() => {
                                    this.checkAnswer("I'm not sure");
                                }}
                            >
                                <Text style={styles.option}>I'm not sure</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                {this.state.showAnswer ? (
                    <TouchableOpacity
                        onPress={async () => {
                            if (this.state.status === "Incorrect") {
                                await this.changeStatus("LearningR");
                            } else if (this.state.status === "Not sure") {
                                await this.changeStatus("LearningG");
                            } else if (this.state.status === "Learned") {
                                await this.changeStatus("Reviewing");
                            } else if (this.state.status === "Mastered") {
                                await this.changeStatus("new");
                            }

                            this.props.onPress();

                            this.setState({ showAnswer: false });
                        }}
                        style={styles.footer}
                    >
                        <Text
                            style={{ fontSize: 20, color: "grey", padding: 5 }}
                        >
                            Next Word
                        </Text>
                        <AntDesign
                            style={{ paddingTop: 8 }}
                            name="arrowright"
                            size={25}
                            color="grey"
                        />
                    </TouchableOpacity>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "column",
        backgroundColor: "white",
        borderColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        margin: 10
    },
    main: {
        padding: 9
    },

    footer: {
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        justifyContent: "center",
        backgroundColor: "lightgrey",
        padding: 5,
        flexDirection: "row"
    },
    option: {
        padding: 7,
        borderBottomWidth: 0.5,
        fontSize: 28
    }
});

export default QuestionCard;
