import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
      .map((fileName) => {
        try {
          const slug = fileName.replace(/\.md$/, '')
          const fullPath = path.join(postsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)

          return {
            slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            author: data.author || '',
            date: data.date || '',
            readTime: data.readTime || '',
            category: data.category || '',
            image: data.image || '',
            content: content || '',
          }
        } catch (fileError) {
          console.error(`Error reading blog post file ${fileName}:`, fileError)
          return null
        }
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => {
        if (a.date < b.date) {
          return 1
        } else {
          return -1
        }
      })

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Prevent reading README.md as a blog post
    if (slug === 'README') {
      return null
    }
    
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.error(`Blog post file not found: ${fullPath}`)
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      author: data.author || '',
      date: data.date || '',
      readTime: data.readTime || '',
      category: data.category || '',
      image: data.image || '',
      content: content || '',
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  if (category === 'All') {
    return allPosts
  }
  return allPosts.filter((post) => post.category === category)
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return ['All', ...Array.from(categories).sort()]
}


