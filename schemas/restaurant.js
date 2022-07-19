export default {
	name: 'restaurant',
	title: 'Restaurant',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Restaurant Name',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'short_description',
			title: 'Short Description',
			type: 'string',
			validation: (Rule) => Rule.max(200)
		},
		{
			name: 'image',
			title: 'Featured Image',
			type: 'image',
		},
		{
			name: 'lat',
			title: 'Latitude of the restaurant',
			type: 'number',
		},
		{
			name: 'long',
			title: 'Longitude of the restaurant',
			type: 'number',
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			name: 'rating',
			title: 'Enter a rating from {1-5 Stars}',
			type: 'number',
			validation: (Rule) => Rule.required()
				.min(1)
				.max(5)
				.error('Please enter a value between 1 and 5')
		},
		{
			name: 'type',
			title: 'Type',
			type: 'reference',
			to: [{ type: "category" }],
			validation: (Rule) => Rule.required()
		},
		{
			name: 'dishes',
			title: 'Dishes',
			type: 'array',
			of: [{ type: "reference", to:[{type:"dish"}] }],
		},
	],
}
