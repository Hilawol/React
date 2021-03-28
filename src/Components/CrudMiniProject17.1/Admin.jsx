import React, { Component } from 'react'
import AnimalRecord from './AnimalRecord';
import axios from './api'

export default class Admin extends Component {

  state = {
    animals: [],
    edit: { name: "", age: "", image: "" },
    flag: 0,
    errMessage: "",
  };

  getAnimalsApi = async () => {
    return (await axios.get()).data;
  }

  updateAnimals = async () => {
    let animals = await this.getAnimalsApi();
    this.setState({ animals: animals });
  }

  componentDidMount = async () => {
    try {
      const animals = await this.getAnimalsApi();
      this.setState({ animals: animals });
    }
    catch (err) {
      console.log("could not load data");
    }
  }

  removeRecord = (id) => {
    const animals = this.state.animals;
    const updatedAnimals = animals.filter(a => a.id !== id);
    this.setState({ animals: updatedAnimals });
  }

  onDelete = async (id) => {
    try {
      await axios.delete(id);
      this.removeRecord(id);
    } catch (err) {
      console.log(err);
    }
  }

  onEdit = async (edit, id) => {
    try {
      await axios.put(`${id}`, edit);
      await this.updateAnimals();
    } catch (err) {
      console.log(err);
    }
  }

  validInput = (edit) => {
    if (edit.name.length <= 0) {
      this.setState({ errMessage: "Name can't be empty" });
      return false;
    }
    if (isNaN(edit.age) || edit.age <= 0) {
      this.setState({ errMessage: "Invalid age" });
      return false;
    }
    return true;
  }
  onCreate = async () => {
    if (this.validInput(this.state.edit))
      try {
        await axios.post('', this.state.edit);
        await this.updateAnimals();
        this.setState({ edit: { name: "", age: "", image: "" }, })
      }
      catch (err) {
        console.log(err);
      }
    else (setTimeout(() => this.setState({ errMessage: "" }), 5000))
  }

  handleInput = (e) => {
    this.setState({ errMessage: "" });
    const s = this.state.edit;
    s[e.currentTarget.name] = e.currentTarget.value
    this.setState({ edit: { ...s } })
    console.log(`change:${e.currentTarget.name}to: ${e.currentTarget.value}`);
  }

  render() {
    console.log("admin render:", this.state.animals);
    console.log("eroor", this.state.errMessage);
    return (
      <div>
        <div className="editDiv">
          <p className="editRow">
            <span>Add record:</span>
            <input type="text" placeholder="name" name="name" onChange={this.handleInput} value={this.state.edit.name} />
            <input type="text" placeholder="age" name="age" onChange={this.handleInput} value={this.state.edit.age} />
            <input type="text" placeholder="image url" name="image" onChange={this.handleInput} value={this.state.edit.image} />
            <button onClick={this.onCreate}>Add</button>
          </p>
          <span className="errMessage">{this.state.errMessage}</span>
        </div>

        <div id="records">
          <p className="header">
            <span className="id">ID</span>
            <span className="name">Name</span>
            <span className="age">Age</span>
            <span className="image">Image</span>
            <span className="action">Action</span>
          </p>

          {this.state.animals.map(animal => <AnimalRecord key={animal.id} animal={animal} onEdit={this.onEdit} onDelete={this.onDelete} />)}
        </div>
      </div>
    )
  }
}
