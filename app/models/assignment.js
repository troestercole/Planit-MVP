import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  turnedIn: DS.attr('boolean'),
  completed: DS.attr('boolean'),
  dateDue: DS.attr('date'),
  dateTurnedIn: DS.attr('date'),
  dateCompleted: DS.attr('date'),
  course: DS.belongsTo('course'),
  emails: DS.hasMany('email'),
  isOverdue: computed('dueDate', function() {
    if (this.get('dueDate') < (new Date().setHours(0,0,0,0)) && this.get('status') !== ('Turned In' || 'Turned In - Late')) {
      return true;
    } else {
      return false;
    }
  }),
  status: computed('isOverdue', 'turnedIn', 'completed', function() {
    let status;
    if (this.get('isOverdue') == true) {
      status = 'Overdue';
    } else if (this.get('completed') == true && this.get('turnedIn') == false) {
      status = 'Completed';
    } else if (this.get('turnedIn') == true) {
      status = 'Turned In';
    } else {
      status = 'Incomplete';
    }
  })
});
