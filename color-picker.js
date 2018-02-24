/*
  In this version of LabeledSlider, we have pushed the state up to the ColorPicker.
*/
class LabeledSlider extends React.Component {
  // If we don't use the props in the constructor, we don't need to include it
  // as an argument but do so for consistency and clarity
  constructor(props) {
    super(props);
  }

  render() {
    const labelProps = {
      style: {
        display: 'inline-block',
        width: '50px',
        'text-align': 'left',
      },
    };

    // Once you have called super this.props === props, but here use this.props
    // for consistency and clarity
    return React.createElement(
      'div', null,
      React.createElement('div', labelProps, `${this.props.label}:`),
      React.createElement('input', {
        type: 'range',
        min: 0,
        max: 255,
        value: this.props.value,
        onChange: (event) => {
          this.props.valueChange(event.target.value);
        },
      }),
      React.createElement('span', null, this.props.value),
    );
  }
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
