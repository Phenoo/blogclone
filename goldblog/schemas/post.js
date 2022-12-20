export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [{
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },

        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'mainimage',
            title: 'MainImage',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'material',
            title: 'Material',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
        },
    ]
}