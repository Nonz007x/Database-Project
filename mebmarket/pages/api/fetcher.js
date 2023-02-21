export async function fetcher(url) {
    const response = await fetch(url);
    const res = await response.json();

    if (response.status !== 200) {
      throw new Error(res.message);
    }
    const result = res
    return result;
}
