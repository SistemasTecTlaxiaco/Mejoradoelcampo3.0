import { expect } from 'chai';

// Clase que maneja la lógica de agregar, eliminar, actualizar y buscar usuarios
class UserList {
  constructor() {
    this.users = [];
  }

  // Método para agregar un usuario a la lista
  addUser(user) {
    this.users.push(user);
  }

  // Método para eliminar un usuario de la lista
  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  // Método para actualizar un usuario en la lista
  updateUser(id, newUser) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = newUser;
    }
  }

  // Método para buscar un usuario en la lista por id
  findUser(id) {
    return this.users.find(user => user.id === id);
  }
}

// Pruebas para la clase UserList
describe('UserList', function() {
  let userList;

  beforeEach(function() {
    // Inicializar una nueva lista de usuarios antes de cada prueba
    userList = new UserList();
  });

  it('should add a user to the list', function() {
    const user = { id: 1, name: 'John' };
    userList.addUser(user);
    console.log('Estado de la lista de usuarios después de agregar:', userList.users);
    // Verificar que el usuario se ha agregado correctamente
    expect(userList.users).to.deep.equal([user]);
  });

  it('should remove a user from the list', function() {
    const user1 = { id: 1, name: 'John' };
    const user2 = { id: 2, name: 'Alice' };
    userList.addUser(user1);
    userList.addUser(user2);
    console.log('Estado de la lista de usuarios antes de eliminar:', userList.users);
    userList.removeUser(user1);
    console.log('Estado de la lista de usuarios después de eliminar:', userList.users);
    // Verificar que el usuario se ha eliminado correctamente
    expect(userList.users).to.deep.equal([user2]);
  });

  it('should update a user in the list', function() {
    const user = { id: 1, name: 'John' };
    const updatedUser = { id: 1, name: 'Johnny' };
    userList.addUser(user);
    userList.updateUser(1, updatedUser);
    console.log('Estado de la lista de usuarios después de actualizar:', userList.users);
    // Verificar que el usuario se ha actualizado correctamente
    expect(userList.users).to.deep.equal([updatedUser]);
  });

  it('should find a user in the list by id', function() {
    const user1 = { id: 1, name: 'John' };
    const user2 = { id: 2, name: 'Alice' };
    userList.addUser(user1);
    userList.addUser(user2);
    const foundUser = userList.findUser(2);
    console.log('Usuario encontrado:', foundUser);
    // Verificar que el usuario se ha encontrado correctamente
    expect(foundUser).to.deep.equal(user2);
  });
});



