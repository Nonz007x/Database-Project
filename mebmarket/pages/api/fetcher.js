export async function fetcher() {
    const response = await fetch('http://localhost:3000/api/get');
    const res = await response.json();
    
    if (response.status !== 200) {
      throw new Error(res.message);
    }
    const result = res
    return result;
}
