export default {
  type: 'object',
  name: 'ctaArray',
  fields: [
    {
      type: 'array',
      name: 'cta',
      of: [{ type: 'cta' }]
    }
  ]
}
