import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const internshipsDirectory = path.join(process.cwd(), 'content', 'internships')

export interface Internship {
  slug: string
  title: string
  department: string
  location: string
  duration: string
  description: string
  requirements: string[]
  skills: string[]
  content: string
}

export function getAllInternships(): Internship[] {
  try {
    const fileNames = fs.readdirSync(internshipsDirectory)
    const allInternshipsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '')
          const fullPath = path.join(internshipsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)

          return {
            slug,
            title: data.title || '',
            department: data.department || '',
            location: data.location || '',
            duration: data.duration || '',
            description: data.description || '',
            requirements: data.requirements || [],
            skills: data.skills || [],
            content: content || '',
          }
        } catch (fileError) {
          console.error(`Error reading internship file ${fileName}:`, fileError)
          return null
        }
      })
      .filter((internship): internship is Internship => internship !== null)
      .sort((a, b) => a.title.localeCompare(b.title)) // Sort alphabetically by title

    return allInternshipsData
  } catch (error) {
    console.error('Error reading internships:', error)
    return []
  }
}

export function getInternshipBySlug(slug: string): Internship | null {
  try {
    if (slug === 'README') {
      return null
    }
    
    const fullPath = path.join(internshipsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      console.error(`Internship file not found: ${fullPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      department: data.department || '',
      location: data.location || '',
      duration: data.duration || '',
      description: data.description || '',
      requirements: data.requirements || [],
      skills: data.skills || [],
      content: content || '',
    }
  } catch (error) {
    console.error(`Error reading internship ${slug}:`, error)
    return null
  }
}

