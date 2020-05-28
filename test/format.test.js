import format from '../src/format';

test('Number with prefix, inside US', () => {
    expect(
        format('1234')
    ).toStrictEqual('**** **** **** 1234');
});
