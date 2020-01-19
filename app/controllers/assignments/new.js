import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isDisabled: empty('title') && empty('dueDate'),

  actions: {
    setSelection(selected) {
      this.set('selectedOption', selected);
    },
    saveAssignment() {
      // Account for Timezone
      let offset = new Date().getTimezoneOffset();
      let date = new Date(this.get('dateDue'));
      let dateDue = new Date(date.setHours(24 + offset / 60));
      //
      let course = this.store.peekRecord('course', this.get('selectedOption'));
      let newAssignment = this.store.createRecord('assignment', {
        'title': this.get('title'),
        'dateDue': dateDue,
        'description': this.get('description'),
      });
      course.get('assignments').pushObject(newAssignment);
      newAssignment.save().then(response => {
        course.save();
        this.set('title', '');
        this.set('dueDate', '');
        this.set('description', '');
        this.transitionToRoute('/assignments/');
      })
    }
  }
});
