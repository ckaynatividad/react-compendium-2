export async function getMagicItems() {
  const resp = await fetch("https://www.dnd5eapi.co/api/magic-items");
  const data = await resp.json();
  return data;
}

export async function getClasses() {
  const resp = await fetch("https://www.dnd5eapi.co/api/classes");
  const data = await resp.json();
  return data;
}