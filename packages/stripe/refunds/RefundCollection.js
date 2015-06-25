/**
 * Created by maxjohansen on 6/20/15.
 */
Refunds = new orion.collection('refunds', {
    singularName: 'refund', // The name of one of these items
    pluralName: 'refunds', // The name of more than one of these items

    /*
     Tabular settings for this collection, this must be filled out
     correctly for the admin panel to work
     */
    tabular: {
        columns: [
            { data: "title", title: "Title" },
            /*
             If you want to show a custom orion attribute in
             the index table you must call this function
             orion.attributeColumn(attributeType, key, label)
             */
            orion.attributeColumn('image', 'image', 'Image'),
            orion.attributeColumn('summernote', 'body', 'Content'),
            orion.attributeColumn('createdBy', 'createdBy', 'Created By'),
            orion.attributeColumn('createdAt', 'createdAt', 'Created At'),
            orion.attributeColumn('updatedAt', 'updatedAt', 'Updated At')
        ]
    }
});

/*
 Now we will attach the schema for the refunds collection.
 The schema defines the structure and rules of data
 that allowed for each document in this collection.
 */
Refunds.attachSchema(new SimpleSchema({
    chargeId:{
        type:String,
        unique:true
    },

    userId:{
        type:String
    },

    /*
     This attribute sets the user id to that of the user that created
     this refund automatically.  */
    createdBy: orion.attribute('createdBy'),

    createdAt: orion.attribute('createdAt')


}));

/*
 This is our pagination object. It lets us do an infinite
 scroll through our list. You probably don't want to change
 this unless you know what you are doing.
 */
//Refunds.findList = new Meteor.Pagination(Refunds, {
//    infinite: true,
//    itemTemplate: 'refundInFindList',
//    sort: {
//        createdAt: -1
//    },
//    availableSettings: {
//        sort: true
//    },
//    fastRender: true
//});