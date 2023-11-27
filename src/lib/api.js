// lib/api.js or a similar file

async function fetchSchemeData(schemeName) {
    const endpoint = 'http://20.193.132.230:3000/schemes';
  
    try {
      const response = await fetch(endpoint, {
        method: 'GET'
      });
  
      const json = await response.json();
      
      const scheme = json.find(s => s.title_slug === schemeName);
  
      return scheme;
    } catch (error) {
      console.error('Error fetching scheme data:', error);
      return null;
    }
  }
  
  export { fetchSchemeData };
  