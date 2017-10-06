import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.createGuest = this.createGuest.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateLastName = this.updateLastName.bind(this)
    this.state={
      guestList: [],
      name: "",
      lastName: ""
    }
  }

  createGuest(event){
    event.preventDefault();
    this.setState({
      guestList: this.state.guestList.concat({name: this.state.name, lastName: this.state.lastName}),
      name: "",
      lastName: ""
    })
  }

  updateName(event){
    this.setState({
      name: event.target.value
    })
  }

  updateLastName(event){
    this.setState({
      lastName: event.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.createGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" onChange={this.updateName} value={this.state.name} name="first-name" />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" onChange={this.updateLastName} value={this.state.lastName} name="last-name" />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guestList.map((guest, index) =>
                  <tr>
                    <td key={index}>{guest.name}</td>
                    <td key={index}>{guest.lastName}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
