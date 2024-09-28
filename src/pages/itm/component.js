const catNames = ["Whiskers", "Fluffy", "Mittens", "Luna", "Oliver", "Leo", "Milo", "Kitty", "Simba", "Nala"];

export default class {
  onCreate() {
    this.state = {
      cats: []
    };
  }

  addCat() {
    const newCat = {
      id: Math.floor(Math.random() * 1000),
      name: catNames[Math.floor(Math.random() * catNames.length)],
      imageUrl: `https://cataas.com/cat?${Date.now()}`
    };

    this.setState('cats', [...this.state.cats, newCat]);
  }
}