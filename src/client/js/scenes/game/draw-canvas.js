import React from 'react';

class drawCanvas extends React.Component {
  state = {
    drawing: false
  }

  constructor(props) {
    super(props);
    this.startDrawing = ::this.startDrawing;
    this.endDrawing = ::this.endDrawing;
    this.draw = ::this.draw;
  }

  componentDidMount() {
    this.context = this.canvas.getContext('2d');
  }

  startDrawing(e) {
    this.setState({ drawing: true });
    this.context.beginPath();
    this.context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  }

  endDrawing() {
    this.setState({ drawing: false });
    this.context.closePath();
  }

  draw(e) {
    const drawing = this.state.drawing;
    if (drawing) {
      this.context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      this.context.stroke();
    }
  }

  render() {
    return (
      <canvas ref={canvas => this.canvas = canvas}
        height="300px"
        width="300px"
        onMouseDown={this.startDrawing}
        onMouseUp={this.endDrawing}
        onMouseMove={this.draw}
      />
    );
  }
}

export default drawCanvas;
