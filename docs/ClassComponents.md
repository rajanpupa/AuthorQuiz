### Class Components

- perfered way to defining react components is by using the function syntax
- But components can also be created by using the Class syntax
- Class should extend `React.Component` class and implement the method `render()`
- Class syntax has some additional features
- Class components allow you to override lifecycle methods

Mounting  
- constructor
- componentWillMount
- render
- componentDidMount

Updating
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

```javascript
class Sum extends React.Component{
    render(){
        return <h1>
                    {props.a} + {props.b} = {props.a + props.b} 
                </h1>
    }
}
ReactDOM.render(<Sum a={4} b={2} />, document.getElementById('root'));
```