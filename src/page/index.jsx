function handleClick() {
  console.log('Don\'t click me!');
}

function handleMouseEnter() {
  console.log('Hey, you\'re in my zone!');
}

function handleMouseLeave() {
  console.log('...where\'d you go?');
}

const styles = {
  maxWidth: '80%',
  minWidth: '300px',
  minHeight: '150px',
  backgroundColor: 'white',
  textAlign: 'center',
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}


const list = [{
  name: 'Bread',
  quantity: '1 loaf',
}, {
  name: 'Rum',
  quantity: '3 bottles',
}, {
  name: 'Coca-cola',
  quantity: '3 bottles',
}, {
  name: 'Toilet paper',
  quantity: 'As much as humanly possible',
}];

const titleText = 'Hello from JSX!';

// function User (props) {
//   return (
//     <div className="user-container">
//       <h2>{props.name}</h2>
//       <h3>{props.title}</h3>
//       {props.children}
//     </div>
//   )
// }

// User class component
class User extends React.Component {
  constructor() {
    super();

    // starting values for component's state
    this.state = {
      rating: 0,
    };
  }

  /*
   * event handlers: change the state
   */
  handleLike = () => {
    this.setState({ rating: this.state.rating + 1 });
  };

  handleDislike = () => {
    this.setState({ rating: this.state.rating - 1 });
  };

  // render the JSX structure
  render() {
    return (
      <div className="friend-container">
        <img
          className="user-image"
          src={`https://code.s3.yandex.net/web-code/react/${this.props.id}.png`}
          width="75"
        />
        <p>{this.props.name}</p>
        <div className="rating">
          <button className="like-button" onClick={this.handleLike} disabled={this.state.rating > 0}>👍</button>
          <div style={{width: '2em', textAlign: 'center'}}>{this.state.rating}</div>
          <button className="like-button" onClick={this.handleDislike} disabled={this.state.rating < 0}>👎</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  (<>
    <div style={styles}>
      <h1 className="title">{titleText}</h1>
    </div>
    <p>One day? Or day one?</p>
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Play with me!
    </button>
    <ul>
      {list.map((item, i) => (
        <li key={i}>
          <b>{item.name}</b>
          <i>{item.quantity}</i>
        </li>
      ))}
    </ul>
    {/* <User name='Omri' title='Full stack web developer'>
      <p>Javascript, HTML, CSS</p>
      <p>And REACT!!!</p>
    </User> */}

    <h2>My Imaginary Friends:</h2>
    <div className="friends-wrapper">
      <User id="1" name="Gregory" />
      <User id="2" name="James" />
      <User id="3" name="Allison" />
    </div>

  </>),
  document.querySelector('#root'),
);

