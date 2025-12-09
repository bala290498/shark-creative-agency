import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const positionsDirectory = path.join(process.cwd(), 'content', 'positions')

export interface Position {
  slug: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  content: string
}

export function getAllPositions(): Position[] {
  try {
    const fileNames = fs.readdirSync(positionsDirectory)
    const allPositionsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '')
          const fullPath = path.join(positionsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)

          return {
            slug,
            title: data.title || '',
            department: data.department || '',
            location: data.location || '',
            type: data.type || '',
            description: data.description || '',
            requirements: data.requirements || [],
            content: content || '',
          }
        } catch (fileError) {
          console.error(`Error reading position file ${fileName}:`, fileError)
          return null
        }
      })
      .filter((position): position is Position => position !== null)
      .sort((a, b) => a.title.localeCompare(b.title)) // Sort alphabetically by title

    return allPositionsData
  } catch (error) {
    console.error('Error reading positions:', error)
    return []
  }
}

export function getPositionBySlug(slug: string): Position | null {
  try {
    if (slug === 'README') {
      return null
    }
    
    const fullPath = path.join(positionsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      console.error(`Position file not found: ${fullPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      department: data.department || '',
      location: data.location || '',
      type: data.type || '',
      description: data.description || '',
      requirements: data.requirements || [],
      content: content || '',
    }
  } catch (error) {
    console.error(`Error reading position ${slug}:`, error)
    return null
  }
}

