# Events

- all browsers provide similar event based programming model
- react provide a normalized event abstraction called `SyntheticEvent`

```javascript
function Events(props) {
    const clickHandler = (synthEvent) => {
        console.log(synthEvent)
    }
    return (<button onClick={clickHandler} >Make an Event</button>); 
}

// function Events can also be written like this
function Events(props) {
    const clickHandler = console.log;
    return (<button onClick={clickHandler} >Make an Event</button>); 
}
```

- when an event occurs, it might be desirable to handle the event and prevent the browser from doing what it would normally do
- the synthetic event object has a `preventDefault` method
```javascript
<input type="checkbox" onClick={(e)=>{e.preventDefault();}} />
```