// src/api/workExperience.js
export async function fetchWorkExperience() {
  const response = await fetch('https://api.github.com/users/lratana/repos')
  if (!response.ok) throw new Error('Failed to fetch work experience')
  return await response.json()
}
