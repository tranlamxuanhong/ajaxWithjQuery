//File for use in Ajax lesson
$(document).ready(function(){
  $.ajax({
    type:'GET',
    url: 'http://contactlist.us-east-1.elasticbeanstalk.com/contacts',
    success: function(contactArray){
      var contactDiv = $("#allContacts");
      $.each(contactArray,function(index, contact){
        var contactInfo = "<p>";
        contactInfo += "FirstName: " + contact.firstName + "<br>";
        contactInfo += "Phone: " + contact.phone;
        contactInfo += "</p>";
        contactDiv.append(contactInfo);
      });
    },
    error: function(){
      alert('failed')
    }

  });

});
