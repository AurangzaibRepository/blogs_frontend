const LegalService = {
  getData: async () => {
    let data = await fetch('data/legal_data.json');
    data = await data.json();

    return data;
  },
};

export default LegalService;
