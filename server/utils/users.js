[{
  id: '1dd4sds1sdsdsd00',
  name: 'Andrew',
  room: 'The office fans'
}]

class Users {
  constructor() {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    return user;
    /*var userDeleted = this.users.filter((user) => user.id === id);
    if (userDeleted.length === 0) {
      return false;
    } else{
      var usersNotDeleted = this.users.filter((user) => user.id !== id);
      this.users = usersNotDeleted;

      return userDeleted;
    }*/
  }

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0]
    /*var user = this.users.filter((user) => user.id === id);
    if (user.length === 0) {
        return false;
    } else{
        return user;
    }*/
  }

  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
