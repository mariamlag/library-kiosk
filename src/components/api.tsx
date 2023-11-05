export async function fetchCategories() {
    // Simulate fetching data from your local JSON file
    const response = await fetch('../../data.json'); // Adjust the path based on your project structure
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }