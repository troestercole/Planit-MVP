import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  teacher: DS.belongsTo('teacher'),
  assignments: DS.hasMany('assignment')
});
