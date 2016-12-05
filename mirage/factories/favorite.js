import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
userId: 1,
favoriteId: 6,
artists: faker.name.firstName,
link: faker.internet.url
});
