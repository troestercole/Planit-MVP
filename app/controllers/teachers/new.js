import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
export default Controller.extend({
  isDisabled: empty('name'),

  actions: {
    saveTeacher() {
      let newTeacher = this.store.createRecord('teacher', {
        'name': this.get('name'),
      })
      newTeacher.save().then(response => {
        this.set('name', '');
        this.transitionToRoute('/assignments');
      });
    }
  }
});
