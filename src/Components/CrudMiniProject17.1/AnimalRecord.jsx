import React, { Component } from 'react'

export default class AnimalRecord extends Component {
  state = {
    editMode: false, edit: { name: "", age: "", image: "" },
    id: "", name: "", age: "", image: ""
  }

  componentDidMount = () => {
    const { id, name, age, image } = this.props.animal;
    this.setState({ id, name, age, image })
  }

  componentDidUpdate = () => {
    const { name, age, image } = this.props.animal;
    if ((name !== this.state.name) || (age !== this.state.age) || (image !== this.state.image)) {
      this.setState({ name, age, image });
    }
  }

  onDelete = () => {
    this.props.onDelete(this.props.animal.id);
  }

  onEdit = () => {
    this.setState({ editMode: true, });
    this.setState({
      edit: {
        name: this.state.name,
        age: this.state.age,
        image: this.state.image
      }
    })
  }

  onSave = async () => { //TODO:add input validatoin!
    try {
      await this.props.onEdit(this.state.edit, this.state.id);
      this.setState({ editMode: false, edit: { name: "", age: "", image: "" } })
    }
    catch (err) {
      console.log(err);
    }
  }

  onCancel = () => {
    this.setState({ editMode: false, edit: { name: "", age: "", image: "" } })
  }

  handleInput = (e) => {
    const s = this.state.edit;
    s[e.currentTarget.name] = e.currentTarget.value
    this.setState({ edit: { ...s } })
  }

  render() {
    return this.state.editMode ?

      <div className="animalRecord">
        <span className="id">{this.state.id}</span>
        <input type="text" value={this.state.edit.name} name="name" onChange={this.handleInput} />
        <input type="text" value={this.state.edit.age} name="age" onChange={this.handleInput} />
        <input type="text" value={this.state.edit.image} name="image" onChange={this.handleInput} />
        <div>
          <button onClick={this.onSave}>Save</button>
          <button onClick={this.onCancel}>Cancel</button>
        </div>
      </div> :


      <div className="animalRecord ">
        <span className="id">{this.state.id}</span>
        <span className="name">{this.state.name}</span>
        <span className="age">{this.state.age}</span>
        <div className="img" style={{ backgroundImage: `url(${this.state.image}) ` }}></div>
        <div>
          <button onClick={this.onEdit}>Edit</button>
          <button onClick={this.onDelete}>Delete</button>
        </div>
      </div>

  }
}
