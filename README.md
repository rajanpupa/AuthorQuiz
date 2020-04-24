# authorquiz

### Steps

- Install `create-react-app` npm module globally
- `npm start`
- Rename `App.js` to `AuthorQuiz`
- Remove Html of AuthorQuiz and start

### Function components
- All react components must act as pure functions w.r.t their properties
```javascript
function Hello(props){
    return <h1> Hello at {props.now} </h1>
}
ReactDOM.render(
    <Hello now={new Date().toISOString()} />,document.getElementById('root')
);
```


### Add Bootstrap
- Download bootstrap min css from the CDN site (put in src folder)
- 


### References
[Plural sight](https://app.pluralsight.com/course-player?clipId=0f90f68e-e643-4294-b9d2-23500ccc1763)

[create-react-app](https://github.com/facebook/create-react-app)

[Bootstrap](https://getbootstrap.com)

[CodePen](https://codepen.io )
