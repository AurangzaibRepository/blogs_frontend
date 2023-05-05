const AboutService = {
  getData: async () => {
    let data = await fetch('data/aboutus_data.json');
    data = await data.json();

    return data;
  },
};

export default AboutService;
