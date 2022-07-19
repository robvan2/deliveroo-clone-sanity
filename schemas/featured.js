export default {
    name: 'featured',
    title: 'Featured Row',
    type: 'document',
    fields : [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation : (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            title: 'Short Description',
            type: 'string',
            validation : (Rule) => Rule.max(64)
        },
        {
            name: 'restaurants',
            title: 'Restaurants',
            type: 'array',
            of: [{type:'reference',  to:[{type: "restaurant"}] }]
        },
    ]
}
  