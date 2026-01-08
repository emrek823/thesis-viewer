---
url: https://docsend2pdf.com/api-docs
title: "Docsend2pdf – Download Docsend deck to PDF"
clipped: 2026-01-06 15:21
source: browser-history
---

# Docsend2pdf – Download Docsend deck to PDF

> Source: [https://docsend2pdf.com/api-docs](https://docsend2pdf.com/api-docs)

# Docsend to PDF API Documentation

This API allows you to convert Docsend documents to downloadable PDFs programmatically.

## API Endpoint

`POST https://docsend2pdf.com/api/convert`

## Request Headers

```
Content-Type: application/json
```

## Request Body

```
{
  "url": "https://docsend.com/view/abcdefg",       // Required
  "email": "user@example.com",                     // Optional, for password-protected documents
  "passcode": "document-password",                 // Optional, for password-protected documents
  "searchable": false                              // Deprecated - always false
}
```

## Response

On success, the API returns the PDF document directly with:

* `Content-Type: application/pdf`
* `Content-Disposition: attachment; filename=*.pdf`

The API also includes rate limiting headers:

* `X-RateLimit-Limit`: Maximum requests allowed in the time window
* `X-RateLimit-Remaining`: Remaining requests in the current time window
* `X-RateLimit-Reset`: Timestamp when the rate limit window resets

## Error Responses

Errors are returned as JSON with appropriate HTTP status codes:

```
{
  "error": "Error message"
}
```

Common error status codes:

* `400` - Bad Request (missing or invalid parameters)
* `429` - Too Many Requests (rate limit exceeded)
* `500` - Internal Server Error

## Rate Limits

To ensure fair usage and service stability, the following rate limits apply:

* Maximum 5 requests per second per IP address

If you exceed this limit, requests will be rejected with a 429 status code and include a `Retry-After` header indicating when you can retry.

## Example Usage

### cURL

```
# Basic usage - download directly to a file
curl -L -X POST https://docsend2pdf.com/api/convert \
  -H "Content-Type: application/json" \
  -d '{"url": "https://docsend.com/view/abcdefg"}' \
  --output document.pdf

# With additional options for password-protected documents
curl -L -X POST https://docsend2pdf.com/api/convert \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://docsend.com/view/abcdefg",
    "email": "user@example.com",
    "passcode": "document-password",
    "searchable": false
  }' \
  --output document.pdf
```

### JavaScript/Node.js

```
// Using fetch (browser or Node.js 18+)
async function convertDocsend(url) {
  const response = await fetch('https://docsend2pdf.com/api/convert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: url,
      searchable: false
    })
  });

  if (!response.ok) {
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      console.error(`Rate limit exceeded. Retry after ${retryAfter} seconds`);
      return null;
    }

    const errorData = await response.json();
    console.error('API Error:', errorData.error);
    return null;
  }

  // Return the PDF as a blob
  return await response.blob();
}

// Example usage
const pdfBlob = await convertDocsend('https://docsend.com/view/abcdefg');
if (pdfBlob) {
  // Do something with the PDF blob
  // e.g., save to file, display in browser, etc.
}
```

### Python

```
import requests

def convert_docsend(url, email=None, passcode=None, searchable=False):  # searchable is deprecated
    """
    Convert a Docsend document to PDF

    Args:
        url (str): The DocSend URL
        email (str, optional): Email for password-protected documents
        passcode (str, optional): Password for password-protected documents
        searchable (bool, optional): Whether to make the PDF searchable

    Returns:
        bytes: The PDF file content or None if conversion failed
    """
    api_url = 'https://docsend2pdf.com/api/convert'

    payload = {
        'url': url,
        'searchable': searchable
    }

    if email:
        payload['email'] = email

    if passcode:
        payload['passcode'] = passcode

    response = requests.post(api_url, json=payload)

    if response.ok:
        return response.content
    elif response.status_code == 429:
        retry_after = response.headers.get('Retry-After')
        print(f"Rate limit exceeded. Retry after {retry_after} seconds")
        return None
    else:
        try:
            error_data = response.json()
            print(f"API Error: {error_data.get('error', 'Unknown error')}")
        except:
            print(f"API Error: {response.status_code} - {response.text}")
        return None

# Example usage
pdf_data = convert_docsend('https://docsend.com/view/abcdefg', searchable=True)
if pdf_data:
    # Save the PDF to a file
    with open('document.pdf', 'wb') as f:
        f.write(pdf_data)
```

[Back to Home](/)