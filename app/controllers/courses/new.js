import Controller from '@ember/controller';
import { and, empty } from '@ember/object/computed';

export default Controller.extend({
  isDisabled: empty('name') && empty('selectedOption'),

  actions: {
    setSelection(selected) {
      this.set('selectedOption', selected);
    },
    saveCourse () {
      let teacher = this.store.peekRecord('teacher', this.get('selectedOption'));
      let newCourse = this.store.createRecord('course', {
        'name': this.get('name'),
      })
      teacher.get('courses').pushObject(newCourse);
      newCourse.save().then(response => {
        teacher.save();
        this.set('name', '');
        this.transitionToRoute('/courses');
      })
    }
  }
});
