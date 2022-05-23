import { <%= appName.replace(/([a-z])([A-Z])/g, '$1-$2').split(/[\W_]/).filter(str => str).map(str => (str[0].toUpperCase()) + str.substring(1).toLowerCase()).join('') %> } from '../src';

describe('<%= appName.replace(/([a-z])([A-Z])/g, '$1-$2').split(/[\W_]/).filter(str => str).map(str => (str[0].toUpperCase()) + str.substring(1).toLowerCase()).join('') %> testing', () => {
    it('needs tests', () => {
        // TODO
    });
});
