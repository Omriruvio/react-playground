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
  </>),
  document.querySelector('#root'),
);

