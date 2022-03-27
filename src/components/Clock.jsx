class Clock extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      hours:0,
      minutes:0,
      seconds:0,
      ms:0,
    }
  }


  render () {
    return (
      <div>{hours}:{minutes}:{seconds}:{ms}</div>
    )
  }
}