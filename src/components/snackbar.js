import React, { createRef, PureComponent } from "react";
import { Text, Animated } from "react-native";
import { styles } from "../styles/components/snackbar-style";

const DEFAULT_COLOR = "#222222";
const ANIMATION_DURATION = 750;
const SNACKBAR_DURATION = 1500;

class Snackbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: "",
      color: DEFAULT_COLOR,
      yValue: new Animated.Value(200),
    };
    this.show = this.show.bind(this);
  }

  show(message, color = DEFAULT_COLOR) {
    this.setState({ message, color, visible: true });

    Animated.timing(this.state.yValue, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(this.state.yValue, {
          toValue: 200,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }).start(() => {
          this.setState({ message: "", color: DEFAULT_COLOR, visible: false });
        });
      }, SNACKBAR_DURATION);
    });
  }
  render() {
    if (this.state.visible) {
      return (
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: this.state.color,
              transform: [{ translateY: this.state.yValue }],
            },
          ]}
        >
          <Text style={styles.message}>{this.state.message}</Text>
        </Animated.View>
      );
    }
    return null;
  }
}

const _snackbarRef = createRef();
const CustomSnackBar = (props) => <Snackbar ref={_snackbarRef} {...props} />;

CustomSnackBar.show = (message, color) => {
  _snackbarRef.current?.show(message, color);
};

export { CustomSnackBar };
