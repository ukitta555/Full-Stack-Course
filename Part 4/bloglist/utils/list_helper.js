const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.map(blog => blog.likes)
    .reduce((sum, likesForBlog) => sum + likesForBlog, 0)
}

module.exports = {
  dummy,
  totalLikes
}