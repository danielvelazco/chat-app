var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct mesage object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from,text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Jen';
    var latitude = 1;
    var longitude = 1;
    var url = 'https://www.google.com/maps?q=1,1';

    var message = generateLocationMessage(from, latitude, longitude);
    expect(message.from).toBe('Jen');
    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toBe('https://www.google.com/maps?q=1,1');
    expect(message).toMatchObject({from,url});
  });
});
