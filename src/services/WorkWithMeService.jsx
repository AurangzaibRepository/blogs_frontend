const WorkWithMeService = {
  getData: async () => {
    let data = await fetch('data/workwithme_data.json');
    data = data.json();

    return data;
  },
};

export default WorkWithMeService;
