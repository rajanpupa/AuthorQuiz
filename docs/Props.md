# Props

- preferred to use props over state 
- Generally any dataType passed to proper will still produce result
```javascript
function Sum(props){
    return (
        <h1>{props.a} + {props.b} = {props.a + props.b}</h1>    
    );   
}
ReactDOM.render(<Sum a={4} b={2} />,
    document.getElementById('root')
);
// this also works
ReactDOM.render(<Sum a={"key"} b={2} />,
    document.getElementById('root')
);
```
### Prop Validation
- react components can validate the props they are passed by using a `propTypes` object
- runtime validation
- can be used to provide helpful error messages
- react provides many types of validation (eg. datatype, instanceOf, or custom)
- must install the package `npm install prop-types` and import

```javascript
import PropTypes from 'prop-types'

function Sum(props){
    return (
        <h1>{props.a} + {props.b} = {props.a + props.b}</h1>    
    );   
}
Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired, 
}
ReactDOM.render(<Sum a={4} b={2} />,
    document.getElementById('root')
);
```

### Typescript and flow
- Typescript from microsoft and flow from facebook are related effort for static type checking in javascript
- Typescript and flow are good add to a react project
```javascript
interface SumProps {
    a: number;
    b: number;
}
function Sum(props: SumProps) {
    return <h1>{props.a} + {props.b} = {props.a + props.b}</h1>;
}
ReactDOM.render(<Sum a={4} b = {} />, document.getElementById('root'));
```
### way to pass data out of a component

React element = React component + props

```javascript
function Clicker({handleClick}) {
    return <div>
            <button onClick={(e)=>{handleClick('A')}}>A</button>
            <button onClick={(e)=>{handleClick('B')}}>B</button>
            <button onClick={(e)=>{handleClick('C')}}>C</button>
        </div>
}
ReactDOM.render(
    <Clicker handleClick={ (letter) => {console.log(`${letter} Clicked`); }} />,
    document.getElementById('root')
)
```

