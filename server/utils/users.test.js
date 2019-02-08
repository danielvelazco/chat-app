const expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: 2,
      name: 'Jen',
      room: 'React Course'
    }, {
      id: 3,
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The office fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = 1;
    var user = users.removeUser(userId);
    expect(user).toEqual({
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    });
    expect(users.users.length).toBe(2);
    /*var userDeleted = users.removeUser(1);
     expect(userDeleted).toEqual([{
       id: 1,
       name: 'Mike',
       room: 'Node Course'
     }]);*/
  });

  it('should not remove user', () => {
    var userId = 99;
    var user = users.removeUser(userId);
    expect(typeof user).toBe('undefined');
    expect(users.users.length).toBe(3);
    /*var userDeleted = users.removeUser(100);
    expect(userDeleted).toEqual(false);*/
  });

  it('should find user', () => {
    var userId = 2;
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);

    /*var user = users.getUser(1)
    expect(user).toEqual([{
      id: 1,
      name: 'Mike',
      room: 'Node Course'
    }]);*/
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(typeof user).toBe('undefined');

    /*var user = users.getUser(10)
    expect(user).toEqual(false);*/
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
