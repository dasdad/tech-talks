Messages = new Meteor.Collection("messages");

if (Meteor.isClient) {
  Template.messages.messages = function () {
    return Messages.find();
  };

  Template.new_message.events({
    'click #say' : function () {
      Messages.insert({
        message: $('#new_message').val(),
        author:  $('#author').val(),
      });
      $('#new_message').val('');
    }
  });
}
