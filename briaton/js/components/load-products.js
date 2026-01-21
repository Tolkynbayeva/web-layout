export default async function loadProducts() {
  const res = await fetch('./data/data.json')
  if (!res.ok) throw new Error('Fetch error')
  return res.json()
}