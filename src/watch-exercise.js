
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    }
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString(),
    })
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        Time: <span>{time}</span>
      </div>
    )
  }
}