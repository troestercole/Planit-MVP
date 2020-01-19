import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | assignments/turnedIn', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:assignments/turned-in');
    assert.ok(route);
  });
});
