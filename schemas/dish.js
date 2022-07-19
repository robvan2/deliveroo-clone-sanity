export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.min(0)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule) => Rule.required()
        },
        
        {
			name: 'short_description',
			title: 'Short Description',
			type: 'string',
			validation: (Rule) => Rule.max(200)
		},
        // {
		// 	name: 'restaurant',
		// 	title: 'Restaurant',
		// 	type: 'reference',
		// 	to: [{ type: "restaurant" }],
		// 	validation: (Rule) => Rule.required()
		// },
    ],
}
