const CoursesService = {
  getData: async () => {
    let data = await fetch('data/courses_data.json');
    data = await data.json();

    return data.courses;
  },
};

export default CoursesService;
