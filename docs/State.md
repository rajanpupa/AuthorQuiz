# state

- in addition to props, react components have additional way of holding data `State`
- Props are values passed in by components parents
- State is local, mutable data that can be created and modified within the component
- State increases complexity
- Avaoid using state when possible

- used the setState() function to set the state from the component
- The setState() method merges the new state with the old state. All other previous states remains.

```javascript
class ClickCounter extends React.Component {
    constructor(props) {
        super();
        this.state = {clicks: 0};
    }
    render(){
        return <div onClick={ () => { this.setState( {clicks: this.state.clicks + 1} ); } }>
             This div has been Clicked {this.state.clicks} times.
            </div>;
    }
}

```