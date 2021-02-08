import { getGreeting } from '../support/app.po';

describe('try', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    throw 'aaaa';
  });
});
