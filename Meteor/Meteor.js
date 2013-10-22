var TestCollection1 = new Meteor.Collection("testCollection1");

if (Meteor.isServer) {
    Meteor.publish("testCollection1", function () {
        return TestCollection1.find({});
    });



    Meteor.methods({
        startSubscribeAndGetRecordsTest: function() {
            TestCollection1.remove({});
            TestCollection1.insert({field1: "string 1", field2: {field3: 3, field4: new Date(1988, 3, 2)}});
            TestCollection1.insert({field1: "string 2", field2: {field3: 30, field4: new Date(1989, 3, 2)}});
        },

        updateRecord: function () {
            return TestCollection1.update({field1: "string 1"}, {$set: {"field2.field3": 100}});
        },

        noSideEffects: function() {
            return "done";
        }
    });
}