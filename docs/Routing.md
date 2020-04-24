# Client side Routing

- Html5 includes an api called `pushState` that allows javascript to update the browser url without triggering a request to the server
- an application running in browser can cause the current url to change
- detect that change
- then handle it
- if the user manually modifies  the url , that too can be detected and handled

- React Router is the most popular client side router in React
- conditional rendering based on routes
- supports route parameters

```javascript
<Route exact path="/" component={Welcome} />
<Route exact path="/about" component={About} />
<Route  path="/viewdetail/:id" component={ViewDetail} />

function ViewDetail({match}) { 
    return <div>{match.params.id}</div>
}
```

Here is a more complete example
```javascript
ReactDOM.render(<BrowserRouter>
    <Selection id="navigation">
        <Route path="/" component={Menu} />
    </Selection>
    <Selection id="detail">
        <Route exact path="/" component={Welcome} />
        <Route  path="/list" component={List} />
        <Route  path="/viewdetail/:id" component={ViewDetail} />
    </Selection>
</BrowserRouter>, document.getElementById('root'));
```