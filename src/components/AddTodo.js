import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
  state = { text: '' }

  onAddTodo() {
    // alert(this.state.text);
    this.props.onAddTodo(this.state.text);
    this.setState({ text: ''});
    return;
  }

  render() {
    const { wrapper, input, button } = styles;
    return (
      <View style={wrapper}>
        <TextInput style={input}
          autoFocus={true}
          blurOnSubmit={false}
          placeholder="new todo"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          onSubmitEditing={this.onAddTodo.bind(this)}
        />
        <Button style={button}
          onPress={this.onAddTodo.bind(this)}
          title="Add Todo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    margin: 5
  },
  input: {
    flex: 4,
    paddingLeft: 5
  },
  button: {
    flex: 1
  }
});

// const mapDispatchToProps = dispatch => ({
//   onAddTodo: (text) => dispatch(addTodo(text))
// });

// export default connect(null, mapDispatchToProps)(AddTodo);

export default connect(null, { onAddTodo: addTodo })(AddTodo);
