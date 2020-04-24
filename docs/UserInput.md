# Form Elements

- just like HTML

### Common Form controls
- text input `<input type="text" value="react" />`
- text area `<textarea value="react" />`
- Select
```javascript
<select value="sunday">
    <option value="saturday"> Saturday </option>
    <option value="sunday"> sunday </option>
</select>
```

### User input in React
- Form elements by themselves are  `read only`
- need to use React's component state to be able to change the value

```javascript
class Identity extends React.Component{
    render(){
        return  (
            <form>
                <input type="text" value="" placeholder="First name"/>
                <input type="text" value="" placeholder="Last name"/>
            </form>
        )
    }
}
```

## Allow user Input

- Add state to the component
- Bind the value of inputs to the component state

```javascript
class Identity extends React.Component{
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(event){
        this.state({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return  (
            <form>
                <input type="text" value={this.state.firstName} placeholder="First name" onChange={this.onFieldChange} />
                <input type="text" value={this.state.lastName} placeholder="Last name" onChange={this.onFieldChange}   />
            </form>
        )
    }
}
```

### Form Libraries

- many form libraries are available
- `JSONSchemaForm`

```javascript
const {default: Form} = JSONSchemaForm;

const schema = {
    "title": "Identity",
    "type": "object",
    "required": [
        "firstName",
        "lastName"
    ],
    "properties": {
        "firstName": {
            "type": "string",
            "title": "First Name",
            "minLength": 1,
            "maxLength": 6
        },
        "lastName": {
            "type": "string",
            "title": "Last Name"
        },
        "age": {
            "type": "number",
            "title": "Age"
        }
    }
}
ReactDOM.render((
    <Form schema={schema} noHtml5Validate onSubmit={console.log} showErrorList={false} />
), document.getElementById('root'));
```
- when the form is submitted, a json object is submitted and printed in console 