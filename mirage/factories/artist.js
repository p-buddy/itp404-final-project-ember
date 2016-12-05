import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  artist: faker.name.firstName,
  information: faker.name.jobDescriptor,
  link: faker.internet.url,
  typeCode: 3,
  isPicture: false
});
