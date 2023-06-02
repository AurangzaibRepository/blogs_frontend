const BlogsService = {
  getData: async () => {
    let data = await fetch('data/blogs_data.json');
    data = await data.json();

    return data;
  },
};

export default BlogsService;
