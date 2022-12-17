export function removeHttp(url) {
  return url.replace(/^https?:\/\//, '')
}

export async function SendEmail_Contact(data) {
  await fetch('/api/sendContact', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => res.json())
}
