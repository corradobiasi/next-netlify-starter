const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchGlobal() {
    const entry = await client.getEntry('1QPiGI8RnI0df2QPh001Qp')
    console.log(entry.fields)
  if (entry) return entry.fields
//   console.log(`Error getting Global site data for ${contentType.name}.`)
}

export default { fetchGlobal }
