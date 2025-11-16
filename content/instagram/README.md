# Instagram Posts

This directory contains Instagram posts that will be displayed on the home page.

## How to Add Posts

1. **Add your Instagram post image** to the `public/instagram-posts/` folder
   - Save the image with a descriptive name (e.g., `post1.jpg`, `project-launch.jpg`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

2. **Update `posts.md`** with your Instagram post information:
   ```markdown
   - URL: https://www.instagram.com/p/YOUR_POST_ID/
     Image: /instagram-posts/your-image.jpg
   ```

## Format

Each post should include:
- **URL**: The full Instagram post URL
- **Image**: The path to the image file in `public/instagram-posts/` (starts with `/instagram-posts/`)
- **Alt** (optional): Alternative text for the image

Example:
```markdown
## Posts

- URL: https://www.instagram.com/p/CwxoFs1PF9k
  Image: /instagram-posts/post1.jpg
  Alt: Our latest creative project launch

- URL: https://www.instagram.com/p/ABC123/
  Image: /instagram-posts/post2.jpg
```

## Notes

- Only the first 4 posts will be displayed on the home page
- Image paths are relative to the `public` folder (so `/instagram-posts/image.jpg` refers to `public/instagram-posts/image.jpg`)
- The image will be displayed in the card, and clicking it will open the Instagram post in a new tab
- Make sure image filenames match exactly what you specify in the markdown file

## Tips

- Use square images (1:1 aspect ratio) for best results
- Recommended size: 800x800 pixels or larger
- Keep file sizes reasonable (under 500KB per image) for fast loading
