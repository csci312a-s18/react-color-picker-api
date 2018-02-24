/*
  Since the LabeledSlider is now stateless, we can convert it to a
  "functional component", which we implement with a simple function
  instead of using a class.

  It is important that this function is "pure" (i.e., no reliance on external
  state and no side effects). Note we switched from this.props to props
*/

function LabeledSlider(props) {
  const labelProps = {
    style: {
      display: 'inline-block',
      width: '50px',
      'text-align': 'left',
    },
  };

  const inputProps = {
    type: 'range',
    min: 0,
    max: 255,
    value: props.value,
    onChange: (event) => { props.valueChange(event.target.value); },
  };

  return React.createElement(
    'div', null,
    React.createElement('div', labelProps, `${props.label}:`),
    React.createElement('input', inputProps),
    React.createElement('span', null, props.value),
  );
}


class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = { red: 0, green: 0, blue: 0 };
  }

  render() {
    const displayProps = {
      style: {
        width: '100px',
        height: '100px',
        border: '1px solid black',
        background: `rgb(${this.state.red},${this.state.green},${this.state.blue})`,
      },
    };

    return React.createElement(
      'div', null,
      React.createElement('div', displayProps),
      React.createElement(LabeledSlider, {
        label: 'Red',
        value: this.state.red,
        valueChange: (value => this.setState({ red: value })),
      }),
      React.createElement(LabeledSlider, {
        label: 'Green',
        value: this.state.green,
        valueChange: (value => this.setState({ green: value })),
      }),
      React.createElement(LabeledSlider, {
        label: 'Blue',
        value: this.state.blue,
        valueChange: (value => this.setState({ blue: value })),
      }),
    );
  }
}

ReactDOM.render(
  React.createElement(ColorPicker),
  document.getElementById('root'),
);
