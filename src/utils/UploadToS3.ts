export interface MediaUrlRequest {
    type: string
}

export interface MediaUrlResponse {
    message: string,
    data: Media
}

export interface Media {
    url: string,
    fields: {
        acl: string,
        success_action_status: number,
        bucket: string,
        "X-Amz-Algorithm": string,
        "X-Amz-Credential": string,
        "X-Amz-Date": string,
        Policy: string,
        "X-Amz-Signature": string,
        key: string
    }
}

export const uploadToS3 = async (media: Media, file: File) => {
  const formData = new FormData()

  let finalKey = media.fields.key

  Object.entries(media.fields).forEach(([key, value]) => {
    if (key === "key") {
      const replacedKey = String(value).replace(
        "${filename}",
        file.name
      )
      finalKey = replacedKey
      formData.append("key", replacedKey)
    } else {
      formData.append(key, value as any)
    }
  })

  formData.append("file", file)

  const res = await fetch(media.url, {
    method: "POST",
    body: formData,
  })

  if (!res.ok) {
    throw new Error("Upload failed")
  }

  return `${media.url}/${finalKey}`
}
