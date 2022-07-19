export default {
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
			name: 'image',
			title: 'Featured Image',
			type: 'image',
		},
    {
			name: 'short_description',
			title: 'Short Description',
			type: 'string',
			validation: (Rule) => Rule.max(200)
		},
  ],
}
