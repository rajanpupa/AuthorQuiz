# Testing

```javascript
describe("When setting up testing", () => {
    it("should fail", () => {
        expect(1+1).toBe(3);
    });
});
```
- jest is already setup with create-react-app

```javascript
import React from "react";

function Hello(props){
    return <h1>Hello at {props.now}</h1>;
}
describe("When testing directly", () => {
    beforeAll(()=>{
        result = Hello({now: moment.toISOString()});
    });
    it("returns a value", () => {
        expect(result).not.toBeNull();
    });
    it("is a h1 element", () => {
        expect(result.type).toBe("h1");
    });
    it("has children", () => {
        expect(result.props.children).toBeTruthy();
    });
});
```

- We can also test a component by using `React-Dom`
```javascript
import React from "react";
import ReactDOM from "react-dom";
function Hello(props){
    return <h1>Hello at {props.now}</h1>;
}
describe("When testing with ReactDOM", () => {
    beforeAll(()=>{
        result = Hello({now: moment.toISOString()});
    });
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()} />, div);
    });
    it("is a h1 element", () => {
        expect(result.type).toBe("h1");
    });
    it("has children", () => {
        expect(result.props.children).toBeTruthy();
    });
});
```
- `Enzyme` is an additional library created to help in testing
- install enzyme and configure its adapter, you can test what needs to be rendered in the html element

### References

[Jest](https://facebook.github.io/jest)