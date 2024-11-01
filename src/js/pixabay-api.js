export function fetchData(searchData) {
  const searchParams = new URLSearchParams({
    key: '46838066-e4c364792586fe965aa499300',
    q: searchData,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
